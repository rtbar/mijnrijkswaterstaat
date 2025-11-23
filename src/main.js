import { getBotResponse, validateInput } from './chatbotLogic.js';
import './styles.css'; // Vite handles CSS imports
import { addMessage, clearInput, getInputValue, setupEventListeners } from './ui.js';

// Initialization
const INITIAL_MESSAGE = "Welcome! I'm your automated assistant. How can I help you?";

function init() {
    // Show welcome message
    addMessage(INITIAL_MESSAGE, 'bot');

    // Connect UI events
    setupEventListeners(handleUserSubmission);
}

/**
 * Orchestrates the flow: Validate -> UI User Bubble -> Logic -> UI Bot Bubble
 */
function handleUserSubmission() {
    const rawInput = getInputValue();

    // 1. Validate
    const validation = validateInput(rawInput);

    if (!validation.isValid) {
        if (validation.errorMessage) {
            addMessage(validation.errorMessage, 'bot'); // Gentle warning
            clearInput();
        }
        return; // Stop if invalid
    }

    // 2. Show User Message
    addMessage(rawInput, 'user');
    clearInput();

    // 3. Get Bot Response (with a slight artificial delay for realism)
    setTimeout(() => {
        const botResponse = getBotResponse(rawInput);
        addMessage(botResponse, 'bot');
    }, 600);
}

// Start the app
init();
