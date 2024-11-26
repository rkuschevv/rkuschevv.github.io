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

function toggleChat() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    const displayStyle = chatbotWindow.style.display;
    if (displayStyle === 'none' || displayStyle === '') {
        chatbotWindow.style.display = 'block'; // Показываем окно
    } else {
        chatbotWindow.style.display = 'none'; // Скрываем окно
    }
}

// Функция отправки сообщения в чат-бота
function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    if (userMessage) {
        // Отправка сообщения на сервер
        fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        })
        .then(response => response.json())
        .then(data => {
            const chatbotContent = document.querySelector('.chatbot-content');
            const botMessage = document.createElement('p');
            botMessage.textContent = data.response;
            chatbotContent.appendChild(botMessage);

            // Очистка поля ввода
            document.getElementById('userMessage').value = '';
        });
    }
}

