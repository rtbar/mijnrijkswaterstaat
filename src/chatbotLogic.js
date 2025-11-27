/**
 * Configuration for chatbot responses.
 * Rules are checked in order.
 */
const RULES = [
    {
        pattern: /^(hi|hello|hey|greetings)/i,
        response: "Ho ho hoi, Maarten!",
    }
];

const ERROR_MESSAGES = [
    "My wires twisted at what you wrote; it sank my logic like a boat.\nHave another attempt to keep me afloat.",
    "I checked your message line by line, but nothing matched this code of mine.\nRetry it once and we’ll be just fine.",
    "Error triggered, rhyme engaged; your text and syntax misarranged\nPlease try once more with details changed."
];

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

    // Return random error message
    const randomIndex = Math.floor(Math.random() * ERROR_MESSAGES.length);
    return ERROR_MESSAGES[randomIndex];
}
