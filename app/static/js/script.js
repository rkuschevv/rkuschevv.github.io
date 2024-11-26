// Открытие и закрытие чата
document.getElementById("chat-icon").addEventListener("click", function() {
    document.getElementById("chat").style.display = "flex";
});

document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chat").style.display = "none";
});

// Скрипт для переключения слайдов (не изменяется)
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-container img');

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
