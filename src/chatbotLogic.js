/**
 * Configuration for chatbot responses.
 * Rules are checked in order.
 */
const RULES = [
    {
        pattern: /^(hi|hello|hey|greetings)/i,
        response: "Hello there! How can I help you today?",
    },
    {
        pattern: /how are you/i,
        response: "I am just a computer program, but I'm functioning perfectly! Thanks for asking.",
    },
    {
        pattern: /help|support/i,
        response: "I can help with: General inquiries, Tech support, or Account questions. Just type what you need!",
    },
    {
        pattern: /price|cost/i,
        response: "Our basic plan is free. Premium starts at $10/month.",
    },
    {
        pattern: /time/i,
        response: () => `The current local time is ${new Date().toLocaleTimeString()}.`,
    },
    {
        pattern: /bye|goodbye|exit/i,
        response: "Goodbye! Have a great day.",
    },
];

const DEFAULT_RESPONSE = "I'm not sure I understand. Could you rephrase that or ask for 'help'?";

/**
 * Validates user input.
 * @param {string} input 
 * @returns {object} { isValid: boolean, errorMessage: string|null }
 */
export function validateInput(input) {
    if (!input || input.trim().length === 0) {
        return { isValid: false, errorMessage: null }; // Ignore empty input
    }
    if (input.trim().length < 2) {
        return { isValid: false, errorMessage: "Please type a longer message." };
    }
    return { isValid: true, errorMessage: null };
}

/**
 * Generates a response based on the user's message.
 * @param {string} message 
 * @returns {string}
 */
export function getBotResponse(message) {
    const normalized = message.trim().toLowerCase();

    for (const rule of RULES) {
        if (normalized.match(rule.pattern)) {
            // Response can be a string or a function for dynamic data (like time)
            return typeof rule.response === 'function'
                ? rule.response()
                : rule.response;
        }
    }

    return DEFAULT_RESPONSE;
}
