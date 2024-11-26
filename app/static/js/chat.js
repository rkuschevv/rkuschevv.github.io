const chatForm = document.querySelector("#chat-form");
const messageText = document.querySelector("#message-text");
const messagesContainer = document.querySelector("#messages");

chatForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = messageText.value.trim();
    if (message) {
        sendMessage(message);
        messageText.value = "";
    }
});

function sendMessage(message) {
    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            act: "send",
            var1: message
        }),
    })
    .then(response => response.json())
    .then(data => {
        displayMessages(data);
    })
    .catch(error => console.error("Error sending message:", error));
}

function displayMessages(data) {
    if (data.messages) {
        messagesContainer.innerHTML = "";
        data.messages.forEach(msg => {
            const msgElem = document.createElement("div");
            msgElem.textContent = msg.text;
            messagesContainer.appendChild(msgElem);
        });
    }
}
