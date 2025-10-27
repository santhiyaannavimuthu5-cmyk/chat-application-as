function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let chatBox = document.getElementById("chatBox");

    if (messageInput.value.trim() !== "") {
        let message = document.createElement("div");
        message.classList.add("message");
        message.textContent = messageInput.value;
        chatBox.appendChild(message);

        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
