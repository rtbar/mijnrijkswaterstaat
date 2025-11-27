import { getBotResponse, validateInput } from './chatbotLogic.js';
import './styles.css'; // Vite handles CSS imports
import { addMessage, clearInput, getInputValue, hideTypingIndicator, setupEventListeners, showTypingIndicator } from './ui.js';

// Initialization
const INITIAL_MESSAGE = "Ho ho hoi, Maarten!";

const POEM_PARTS = [
    "Welcome, Genius, sharp of mind, for reaching this odd place,\nA portal half by accident, half guided into grace.\nThe factory of Sinterklaas, once humming, bright, and clear,\nHas stumbled in its workings and now calls for you to steer.",
    "The system tried to mend itself, but every patch misfired,\nSo SintBots now lie scattered, guarding clues of what transpired.\nEach SintBot holds a logfile, where the code slipped off the track,\nBut I can’t read a single one till you bring their numbers back.",
    "Your journey starts with only this: go find the first small bot;\nIts serial code lies hidden well, though you can find the spot.\nReturn that code here when you’re sure, exact from start to end,\nAnd I’ll reveal what broke the flow so we can start to mend.",
    "So search with care, observe each clue, let nothing slip your sight;\nI wait here for the number, Maarten — bring it, and we’ll set things right."
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startChatSequence() {
    // Show welcome message
    addMessage(INITIAL_MESSAGE, 'bot');

    // Play intro poem sequence
    for (const part of POEM_PARTS) {
        await sleep(1000);
        showTypingIndicator();
        await sleep(2000);
        hideTypingIndicator();
        addMessage(part, 'bot');
    }
}

function init() {
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
    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        const botResponse = getBotResponse(rawInput);
        addMessage(botResponse, 'bot');
    }, 2000);
}

// Login Logic
const loginOverlay = document.getElementById('login-overlay');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

// Info Logic
const infoOverlay = document.getElementById('info-overlay');
const continueBtn = document.getElementById('continue-btn');

// Warning Logic
const warningOverlay = document.getElementById('warning-overlay');
const goBackBtn = document.getElementById('go-back-btn');
const advancedBtn = document.getElementById('advanced-btn');
const advancedContent = document.getElementById('advanced-content');
const proceedLink = document.getElementById('proceed-link');

// Account Logic
const accountOverlay = document.getElementById('account-overlay');
const emailItem = document.getElementById('email-item');
const emailPreview = document.getElementById('email-preview');
const maliciousLink = document.getElementById('malicious-link');

// Account Tabs
const tabs = {
    inbox: document.getElementById('tab-inbox'),
    sent: document.getElementById('tab-sent'),
    drafts: document.getElementById('tab-drafts'),
    trash: document.getElementById('tab-trash')
};

const views = {
    inbox: document.getElementById('view-inbox'),
    sent: document.getElementById('view-sent'),
    drafts: document.getElementById('view-drafts'),
    trash: document.getElementById('view-trash')
};

function switchTab(tabName) {
    // Update Tabs
    Object.values(tabs).forEach(tab => tab.classList.remove('active'));
    tabs[tabName].classList.add('active');

    // Update Views
    Object.values(views).forEach(view => view.style.display = 'none');
    views[tabName].style.display = 'block';
}

Object.keys(tabs).forEach(key => {
    tabs[key].addEventListener('click', () => switchTab(key));
});

// Session Management
function saveState(state) {
    sessionStorage.setItem('appState', state);
    sessionStorage.setItem('isLoggedIn', 'true');
}

function restoreState() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const appState = sessionStorage.getItem('appState');

    if (isLoggedIn === 'true' && appState) {
        // Hide all overlays first
        loginOverlay.style.display = 'none';
        infoOverlay.style.display = 'none';
        accountOverlay.style.display = 'none';
        warningOverlay.style.display = 'none';

        // Show the correct one
        switch (appState) {
            case 'info':
                infoOverlay.style.display = 'flex';
                break;
            case 'account':
                accountOverlay.style.display = 'flex';
                break;
            case 'warning':
                warningOverlay.style.display = 'flex';
                break;
            case 'chat':
                document.title = "SinterClaude v1.0";
                startChatSequence();
                break;
            default:
                // Fallback to account if something is weird but logged in
                accountOverlay.style.display = 'flex';
        }
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'Maarten' && pass === 'password') {
        // Success - Login
        saveState('info');
        loginOverlay.style.display = 'none';
        infoOverlay.style.display = 'flex'; // Show info page
    } else {
        // Error
        loginError.style.display = 'block';
    }
});

continueBtn.addEventListener('click', () => {
    saveState('account');
    infoOverlay.style.display = 'none';
    accountOverlay.style.display = 'flex'; // Show account page
});

emailItem.addEventListener('click', () => {
    emailItem.classList.remove('unread');
    emailPreview.style.display = 'block';
});

maliciousLink.addEventListener('click', (e) => {
    e.preventDefault();
    saveState('warning');
    accountOverlay.style.display = 'none';
    warningOverlay.style.display = 'flex'; // Show warning page
});

goBackBtn.addEventListener('click', () => {
    saveState('account');
    warningOverlay.style.display = 'none';
    accountOverlay.style.display = 'flex'; // Go back to account page
});

advancedBtn.addEventListener('click', () => {
    const isHidden = advancedContent.style.display === 'none';
    advancedContent.style.display = isHidden ? 'block' : 'none';
});

proceedLink.addEventListener('click', (e) => {
    e.preventDefault();
    saveState('chat');
    warningOverlay.style.display = 'none';
    document.title = "SinterClaude v1.0"; // Reveal true title
    startChatSequence();
});

// Start the app
init();
restoreState();
