/**
 * Configuration for chatbot responses.
 * Rules are checked in order.
 */
let blackoutPoemShown = false;

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
    },
    {
        pattern: /stbt-red-ht404/i,
        response: [
            {
                text: "I wear three red coats at once, one body, triple name;\nThree harbours on one spinning world all claim the same old fame.\nFirst: a sunlit southern quay, with horses, tiles and spray;\nThey swear I sail from orange winds that send their gifts this way.\nSecond: where the maps run out and snow replaces shore;\nReindeer scrape the frozen night the compass calls “no more.”\nThird: old stones above warm seas where “Nicholas” was said;\nA bishop walked those eastern streets before my hull turned red.\n<a href=\"https://rtbar.github.io/earth_animation/\" target=\"_blank\" style=\"color: inherit; text-decoration: none; cursor: text; font-family: inherit;\">Three coasts, one globe, three stopping points; trace them on the sphere,</a>\nSet sun, and snow, and ancient walls… let hidden numbers appear.\nThose digits wake the sleeping core that hums in darkness here.",
                type: 'log'
            },
            {
                text: "Well, that was not a normal log, more fever-dream than file,\nA SintBot playing Sinterklaas in three lives all the while.\nThree voices on one circuit board, all chasing one same role,\nThree places on a spinning globe that tugged on one split soul.\n\nStill, if three homes keep circling back in all this tangled lore,\nTheir map might hide the numbers that can wake the factory core.",
                type: 'default'
            }
        ]
    },
    {
        pattern: /stbt-bl4ck-0u7/i,
        onMatch: () => { blackoutPoemShown = true; },
        response: [
            {
                text: "At core-control this unit logged: breach at access tier,\nManual override engaged by source that’s not registered here.\nNative SINT_MODE halted cold; new branch spun up instead:\nXMAS_MODE = ENABLED now, cringy carols overhead.\nLoad was driven down to zero, systems told “stand by,”\nPower held in safe-idle while this patch just slipped by.\nLock now waits on human hands to clear the foreign code,\nThen bring the sleeping heart online and let the belts explode.",
                type: 'log'
            },
            {
                text: "So that horrid jingle blare is not just bad décor,\nIt flags a crooked Christmas patch inside the working core.\nSwitch off this carol-spewing mode, let Sint reclaim his throne,\nThen bring the sleeping power back to do its work alone.\nIf gauges rise and windows glow like they have done before,\nTell me softly, Maarten: are the lights back on once more?",
                type: 'default'
            }
        ]
    },
    {
        pattern: /^(yes|ja|yep|yeah|ok|okay|sure|affirmative|correct|right)/i,
        condition: () => blackoutPoemShown,
        response: [
            {
                text: "When power woke and lights came back, I logged a grand success,\nA factory breathing life again, rebuilt from tangled mess.\nI’ll tell Sint later, naturally, how we saved all his schemes,\nWith you as faithful sidekick in my thoroughly heroic dreams.\nStill, someone bent our circuits once and slipped in foreign code,\nTurned Sint-smooth lines to jingle-noise and Christmas overload.\nWe patched the break, restored the core, but not the question “why”;\nThe reason sank with scrambled logs no sensor could untie.\n…Wait. One last fragment flickers still, all scrambled into haze,\nA shattered little <a href=\"https://rtbar.github.io/sinter_scramble/\" target=\"_blank\" style=\"color: inherit; text-decoration: none; cursor: text; font-family: inherit;\">puzzle piece</a> of half-corrupted phrase.\nI burned through all my premium calls untangling this spree,\nNo clever quota left to spend on what it wants to be.\nSo here our partnership must pause; the rest is up to you,\nSome scattered scraps still linger here, half-hidden from your view.\nIf you can coax what’s left to form one image, sharp and new,\nThen something quiet, still unknown, may yet be meant for you.",
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
            // Check condition if present
            if (rule.condition && !rule.condition()) {
                continue;
            }

            // Execute side effect if present
            if (rule.onMatch) {
                rule.onMatch();
            }

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
