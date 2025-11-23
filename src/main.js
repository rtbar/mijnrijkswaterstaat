import { getBotResponse, validateInput } from './chatbotLogic.js';
import './styles.css'; // Vite handles CSS imports
import { addMessage, clearInput, getInputValue, setupEventListeners } from './ui.js';

// Initialization
const INITIAL_MESSAGE = "Ho ho hoi!";

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

// Login Logic
const loginOverlay = document.getElementById('login-overlay');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'Maarten' && pass === 'password') {
        // Success
        loginOverlay.style.display = 'none';
        document.title = "SinterClaude v1.0"; // Reveal true title
    } else {
        // Error
        loginError.style.display = 'block';
    }
});

// Start the app
init();
