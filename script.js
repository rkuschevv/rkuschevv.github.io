document.addEventListener("DOMContentLoaded", () => {
    const burgerToggle = document.getElementById("burger-toggle");
    const burgerMenu = document.querySelector(".burger-menu");

    // Добавляем обработчик события на кнопку бургер-меню
    burgerToggle.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
    });

    // Логика слайдера
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider-container img");
    const totalSlides = slides.length;

    const updateSlidePosition = () => {
        const sliderContainer = document.querySelector(".slider-container");
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    window.nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    };

    window.prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    };

    // Скрипт для параллакса
    function parallaxEffect() {
        const parallaxElements = document.querySelectorAll('.parallax'); // Находим все элементы с классом 'parallax'

        parallaxElements.forEach((element) => {
            const scrollPosition = window.scrollY; // Текущая позиция прокрутки страницы
            const speed = parseFloat(element.getAttribute('data-speed')) || 0.5; // Скорость параллакса из data-атрибута
            element.style.backgroundPosition = `center ${-scrollPosition * speed}px`; // Изменяем позицию фона
        });
    }

    // Добавляем обработчик события на прокрутку
    window.addEventListener('scroll', parallaxEffect);
    parallaxEffect(); // Инициализация для начальной позиции

    // Логика для чат-бота
    const chatToggle = document.getElementById("chat-toggle");
    const chatPopup = document.getElementById("chat-popup");

    chatToggle.addEventListener("click", () => {
        chatPopup.style.display = chatPopup.style.display === "none" || chatPopup.style.display === "" ? "block" : "none";
    });
});
