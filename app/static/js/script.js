// Управление открытием/закрытием окна чата
document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatPopup = document.getElementById('chat-popup');

    chatToggle.addEventListener('click', () => {
        const isOpen = chatPopup.style.display === 'block';
        chatPopup.style.display = isOpen ? 'none' : 'block';
        chatToggle.textContent = isOpen ? 'Чат' : 'Закрыть';
    });
});


// Скрипт для переключения слайдов
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
// Функция параллакса
function parallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax'); // Находим все элементы с классом 'parallax'

    parallaxElements.forEach((element) => {
        const scrollPosition = window.scrollY; // Текущая позиция прокрутки страницы
        const speed = parseFloat(element.getAttribute('data-speed')) || 0.5; // Скорость параллакса из data-атрибута

        // Изменяем позицию фона
        element.style.backgroundPosition = `center ${-scrollPosition * speed}px`;
    });
}

// Добавляем обработчик события на прокрутку
window.addEventListener('scroll', parallaxEffect);

// Инициализация для начальной позиции
parallaxEffect();

window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

