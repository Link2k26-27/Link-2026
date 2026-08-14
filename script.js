function toggleMenu() { 
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    const btn = document.getElementById('hamburgerBtn'); 
    const isOpen = drawer.classList.toggle('open'); 
    overlay.classList.toggle('active'); 
    btn.classList.toggle('active'); 
}

const carousels = Array.from(document.querySelectorAll('.carousel'));

carousels.forEach((carousel) => {
    const carouselSlides = Array.from(carousel.querySelectorAll('.carousel-slide'));

    if (carouselSlides.length > 1) {
        let currentSlide = 0;
        const interval = Number(carousel.dataset.interval) || 4000;

        function showSlide(index) {
            currentSlide = (index + carouselSlides.length) % carouselSlides.length;

            carouselSlides.forEach((slide, slideIndex) => {
                slide.classList.toggle('active', slideIndex === currentSlide);
            });
        }

        showSlide(0);
        setInterval(() => showSlide(currentSlide + 1), interval);
    }
});
