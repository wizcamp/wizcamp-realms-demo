/**
 * MAIN.JSX - React App Bootstrap
 * 
 * This file connects our React components to the HTML page.
 * Think of it as the "power button" that starts everything!
 * 
 * BOOTSTRAP FLOW:
 * 1. Find the <div id="root"> in index.html
 * 2. Create a React "root" attached to that div
 * 3. Render our component tree inside it
 * 4. GameProvider wraps everything to share game state
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GameProvider } from "./context/GameContext";
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/main.css";

// STEP 3: Find the HTML container and mount our React app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameProvider>  {/* Provides game state to all components */}
      <App />         {/* Our main app component */}
    </GameProvider>
  </React.StrictMode>
);