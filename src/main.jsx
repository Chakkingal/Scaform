import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/**
 * Scaform Engineering - React Entry Point
 * * This file is responsible for:
 * 1. Finding the 'root' element in index.html
 * 2. Initializing the React 18 Concurrent Renderer
 * 3. Mounting the main App component
 * * Note: If you encounter a "Could not resolve ./App.jsx" error, 
 * please verify that a file named App.jsx exists in the same 'src' folder.
 */

const mountApp = () => {
    const container = document.getElementById('root');

    if (!container) {
        console.error(
            "Critical Error: Target container 'root' not found. " +
            "Check if index.html contains <div id='root'></div>"
        );
        return;
    }

    const root = ReactDOM.createRoot(container);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

// Start the application
mountApp();