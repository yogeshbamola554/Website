// Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    const carousel = document.getElementById('carousel');
    currentSlideIndex = index;
    carousel.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Auto-play carousel
setInterval(nextSlide, 4000);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.director-message, .notice-board').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle (if needed for smaller screens)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Pause scrolling animation on hover
const noticeBoard = document.querySelector('.scroll-content');
noticeBoard.addEventListener('mouseenter', () => {
    noticeBoard.style.animationPlayState = 'paused';
});
noticeBoard.addEventListener('mouseleave', () => {
    noticeBoard.style.animationPlayState = 'running';
});