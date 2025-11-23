// Selectors
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

/**
 * Creates and appends a message bubble to the chat history.
 * @param {string} text - The message content.
 * @param {string} sender - 'user' or 'bot'.
 */
export function addMessage(text, sender) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('message-wrapper', sender === 'user' ? 'user-message' : 'bot-message');

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = text;

    wrapper.appendChild(bubble);
    chatHistory.appendChild(wrapper);

    scrollToBottom();
}

/**
 * Scrolls the chat history to the newest message.
 */
function scrollToBottom() {
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

/**
 * Clears the input field and focuses it.
 */
export function clearInput() {
    userInput.value = '';
    userInput.focus();
}

/**
 * Gets current input value.
 */
export function getInputValue() {
    return userInput.value;
}

/**
 * Sets up event listeners for sending messages.
 * @param {Function} onSend - Callback function when message is sent.
 */
export function setupEventListeners(onSend) {
    // Handle Send Button Click
    sendBtn.addEventListener('click', onSend);

    // Handle Enter Key
    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            onSend();
        }
    });
}
