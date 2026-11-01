  const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('#nextBtn');
        const prevButton = document.querySelector('#prevBtn');
        const indicators = document.querySelectorAll('.carousel-indicator');

        let currentIndex = 0;

        // Atualiza a posição do carrossel e o estado das bolinhas
        function updateCarousel(index) {
            track.style.transform = `translateX(-${index * 100}%)`;
            
            // Atualiza classes dos indicadores
            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        // Evento do botão Avançar
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length; // Volta para o início se passar do fim
            updateCarousel(currentIndex);
        });

        // Evento do botão Voltar
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Vai para o fim se passar do início
            updateCarousel(currentIndex);
        });

        // Evento de clique nas bolinhas
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel(currentIndex);
            });
        });

        // Opcional: Avanço automático a cada 5 segundos
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel(currentIndex);
        }, 5000);
    