// Automatically change slides every 5 seconds
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Optional: Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Language toggle functionality
    const languageToggle = document.querySelector('.language-toggle');
    let isEnglish = true;

    languageToggle.addEventListener('click', () => {
        isEnglish = !isEnglish;
        languageToggle.textContent = isEnglish ? 'EN / FR' : 'FR / EN';
        const aboutText = document.querySelector('.about p');
        aboutText.textContent = isEnglish
            ? 'Discover the unique experience of quad riding in Agafay. Our mission is to provide safe and memorable adventures for everyone.'
            : 'Découvrez l\'expérience unique de la conduite en quad dans le désert d\'Agafay. Notre mission est de fournir des aventures sûres et mémorables pour tous.';
    });

    // "Get Directions" button functionality
    const directionsButton = document.querySelector('.location button');
    directionsButton.addEventListener('click', () => {
        window.open('https://maps.google.com?q=Agafay+Quad+Riding', '_blank');
    });