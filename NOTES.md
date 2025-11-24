# Project Notes: Drift Game

## Overview
This is a React application built with Vite and Tailwind CSS. It appears to be a "Drift Game" project.

## How to Run
1.  **Install Dependencies** (if not already done):
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    This will start the local server, usually at `http://localhost:5173`.

## Build for Production
To build the project for production:
```bash
npm run build
```

## Project Structure
- `src/`: Source code
- `public/`: Static assets
- `vite.config.js`: Vite configuration
- `tailwind.config.js`: Tailwind CSS configuration

## Notes
- Downgraded `vite` to `^6.0.0` to support Node 20.11.0.
- Installed `@tailwindcss/postcss` and updated `postcss.config.js` for Tailwind v4 compatibility.
