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

        // Function to show popup
    function showPopup(src) {
        const popup = document.getElementById('popup');
        const popupImg = document.getElementById('popup-img');
        popupImg.src = src;
        popup.style.display = 'flex';  // Ensure the popup is displayed

         // Initialize zoom level
        popupImg.style.transform = 'scale(1)';
        popupImg.dataset.zoomLevel = 1;  // Custom attribute to track the zoom level
    }

    // Function to close popup
    function closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';  // Hide the popup when closing
    }

    // Add event listener for gallery images
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            showPopup(img.src);
        });
    });

        // Zoom-In functionality
    document.getElementById('zoom-in').addEventListener('click', () => {
        const popupImg = document.getElementById('popup-img');
        let zoomLevel = parseFloat(popupImg.dataset.zoomLevel);
        zoomLevel = Math.min(zoomLevel + 0.2, 3);  // Maximum zoom level of 3x
        popupImg.style.transform = `scale(${zoomLevel})`;
        popupImg.dataset.zoomLevel = zoomLevel;
    });

    // Zoom-Out functionality
    document.getElementById('zoom-out').addEventListener('click', () => {
        const popupImg = document.getElementById('popup-img');
        let zoomLevel = parseFloat(popupImg.dataset.zoomLevel);
        zoomLevel = Math.max(zoomLevel - 0.2, 1);  // Minimum zoom level of 1x
        popupImg.style.transform = `scale(${zoomLevel})`;
        popupImg.dataset.zoomLevel = zoomLevel;
    });

    //gallery page image popup
    const galleryPageImages = document.querySelectorAll('.gallery-grid img');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const imageSources = Array.from(galleryPageImages).map(img => img.src);
    let currentIndex = 0;
    let currentZoom = 1;

    galleryPageImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            popupImg.src = img.src;
            popup.style.display = 'block';
        });
    });

    function closePopup() {
        popup.style.display = 'none';
        popupImg.style.transform = 'scale(1)';
        currentZoom = 1;
    }

    zoomInBtn.addEventListener('click', () => {
        currentZoom += 0.1;
        popupImg.style.transform = `scale(${currentZoom})`;
    });

    zoomOutBtn.addEventListener('click', () => {
        currentZoom = Math.max(1, currentZoom - 0.1);
        popupImg.style.transform = `scale(${currentZoom})`;
    });

    function prevImage() {
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
        popupImg.src = imageSources[currentIndex];
        resetZoom();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % imageSources.length;
        popupImg.src = imageSources[currentIndex];
        resetZoom();
    }

    function resetZoom() {
        currentZoom = 1;
        popupImg.style.transform = 'scale(1)';
    }

    // "Get Directions" button functionality
    const directionsButton = document.querySelector('.location button');
    directionsButton.addEventListener('click', () => {
        window.open('https://maps.google.com?q=Agafay+Quad+Riding', '_blank');
    });