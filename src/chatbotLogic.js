/**
 * Configuration for chatbot responses.
 * Rules are checked in order.
 */
const RULES = [
    {
        pattern: /^(hi|hello|hey|greetings)/i,
        response: "Ho ho hoi, Maarten!",
    },
    {
        pattern: /stbt-c4pt-ainai/i,
        response: [
            {
                text: "Maarten, scherp gevonden! The code you traced with care.\nWhat joy this bot is living, not rusting in despair.\nIts heartbeat dim but present, its storage faint but true,\nAnd in its logs were found these rules, now read aloud to you:",
                type: 'default'
            },
            {
                text: "No breaking, bending, forcing parts; keep every piece intact,\nNo hands into the water, nor direct boat contact.\nOnly dry land, SintBots, the vessel’s upper side,\nAre clues to lead you on; no hidden force applied.",
                type: 'log'
            },
            {
                text: "So… that was standard bot-talk, nothing secret, nothing sly,\nJust rules that every helper learns before they even try.\nBut since your boat’s still dry and stuck, the release bot missed its cue,\nSo go inspect its hidden shell; the job’s been passed to you.\n\nThese bots are kept behind locked doors, it’s protocol, you see,\nAnd that means somewhere on dry land there lies a hidden key.\nYou’re sharp enough to find it, Maarten, truly, that I trust.\nSo track it down, unlock the door, and free the bot you must.",
                type: 'default'
            }
        ]
    },
    {
        pattern: /stb-port-stuck/i,
        response: [
            {
                text: "Pressure log: control-room load has climbed beyond design,\nGift boxes wedged on levers tight, all meters out of line.\nSafety locked the harbor gate, the platform fixed in place,\nPresent pressure at this node has tripped the fail-safe case.\nSide note: one small pump consignment tagged “For Maarten” on the crate,\nFiled under “staff with steady hands who keep lines running straight.”",
                type: 'log'
            },
            {
                text: "Seems someone turned this room of valves into a gift depot for two;\nIf anyone can ease the load, I’d wager that it’s you.\nWhen weight and pressure shift a bit and something yields outside,\nA certain waiting hull may find it’s time to test the tide.",
                type: 'default'
            }
        ]
    },
    {
        pattern: /stbt-hbr-cl0g3r/i,
        response: [
            {
                text: "New access ping: the door gave way, fresh footsteps crossed the floor,\nThe logs recorded every step, like they have done before..\nThe harbor gate stands high and still, holds back the wider blue,\nWhile quiet gears beneath the boards still choose who passes through.\nOne unit flagged as “out at sea” has slipped beyond the wall,\nA SintBot bobbing in the waves, no beacon in its call.\nIts serial stamped “for home use only,” not for foreign view,\nYet oceans tend to mock the forms that customs clerks once drew.\nI’ve noted: those who reach this room and read this modest trace\nMay help the waiting hull move on and grant it open space.\nWhen metal shifts and water parts, the way ahead is clear,\nAnd someone with a steady hand can fish our straying friend back here.",
                type: 'log'
            },
            {
                text: "As for that roaming SintBot core, let’s keep it in our bay;\nNot gift-wrapped off to Moscow or to Shenzhen labs one day.",
                type: 'default'
            }
        ]
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
