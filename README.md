# Modern Simple Chatbot

A lightweight, deterministic chatbot running entirely in the browser using Vanilla JavaScript and Vite.

## Features
- **No Backend**: All logic is handled locally in the browser.
- **Pattern Matching**: Responds based on predefined keywords (e.g., "hello", "help", "price").
- **Modern UI**: Clean interface with distinct message bubbles and automatic scrolling.

## Prerequisites
- **Node.js** (v14 or higher recommended)
- **npm** (usually comes with Node.js)

## Installation

1. Download or extract the project files.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

## Running the App

Start the local development server:

```bash
npm run dev
```

- The terminal will show a local URL (e.g., `http://localhost:5173/`).
- Open that URL in your browser to use the chatbot.

## Code Structure

- `index.html`: The main HTML shell.
- `src/main.js`: Entry point; handles app initialization and bridges Logic with UI.
- `src/chatbotLogic.js`: Contains the rules engine and response data.
- `src/ui.js`: Handles DOM updates (adding messages, scrolling).
- `src/styles.css`: Visual styling.
