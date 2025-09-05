# Session 01 — Setting Up Your Trivia Game

Welcome to your first session! 🎉  

You're about to launch your dev setup and start building like a pro. This guide breaks things down into bite-sized tasks so you can move fast, learn by doing, and see results right away. Let’s go!

## Table of Contents
- [Launch Your Codespace](#launch-your-codespace)
- [Start the Development Server](#start-the-development-server)
- [Replace the Placeholder Component](#replace-the-placeholder-component)
- [Update the Page Title](#update-the-page-title)
- [Session notes & troubleshooting](#session-notes--troubleshooting)


<a id="launch-your-codespace"></a>
## Launch Your Codespace

Let’s get your cloud coding environment up and running so you can start building without messing with local installs. This is your dev playground in the cloud — no setup headaches required.

### 🛠️ Steps:
1. Head over to [github.com](https://github.com) and log in using the account you set up during pre-camp.

2. Pick one of these two ways to launch your Codespace:
   - **Quick link method**: [Just click this link](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=wizcamp/wizcamp-realms-demo)
   - **Manual method**: 
     - Go to [github.com/wizcamp/wizcamp-realms-demo](https://github.com/wizcamp/wizcamp-realms-demo)
     - Click **Use this template → Open in codespace** in the top right
3. Wait a bit while your Codespace builds. You'll see a VS Code-like editor pop up in your browser.
4. Once it loads, make sure you can see the project files in the file explorer on the left.

### 💡 Why This Matters
Codespaces give everyone the same setup — no more “it works on my machine” drama. You’re coding in the cloud, like a pro. Best part, if you mess something up, just delete and start fresh.

### 🏆 Bonus Challenge
Visit [github.com/codespaces](https://github.com/codespaces) to explore where you can manage your Codespaces and see how easy it is to create new ones for other projects.

<a id="start-the-development-server"></a>
##  Start the Development Server

Preamble: Run the local/dev server so you can see the app live and iterate quickly.

Steps:
1. Open the integrated terminal in the Codespace.
2. Install dependencies: run `npm install` or `yarn install` in the project root.
3. Start the dev server: run `npm run dev` or `yarn dev`.
4. Open the provided localhost URL (e.g., http://localhost:3000) in the preview or a new browser tab.
5. Make a small change to a UI file and verify the browser refreshes (hot reload).

### 💡 Why This Matters
A running dev server lets you view changes instantly, accelerating debugging and learning.

### 🏆 Bonus Challenge
Change an on-screen piece of text, save, and confirm hot-reload; log the exact file you changed.

<a id="replace-the-placeholder-component"></a>
##  Replace the Placeholder Component

Preamble: Replace the starter placeholder component with a simple functional component to practice editing and wiring UI code.

Steps:
1. Locate the placeholder component file (e.g., `src/components/Placeholder.jsx` or `src/components/Placeholder.tsx`).
2. Open the file in the editor and read the existing comments.
3. Replace the placeholder markup with a basic component that renders a heading and a button.
4. Save the file and verify the change appears in the running app.
5. If the component is exported, ensure imports elsewhere still resolve; update import paths if necessary.

### 💡 Why This Matters
Editing components and verifying live changes teaches the edit-compile-view cycle fundamental to frontend development.

### 🏆 Bonus Challenge
Add a small piece of state (e.g., a counter) to the new component and wire a button to update it.

<a id="update-the-page-title"></a>
##  Update the Page Title

Preamble: Set a meaningful page title so users and search engines see a descriptive name for your app.

Steps:
1. Identify where the HTML head/title is defined (e.g., `public/index.html`, `src/pages/_document.js`, or framework-specific head component).
2. Update the <title> to include your project name (e.g., "WizCamp Realms Demo — Session 01").
3. Save and refresh the app in the browser or let hot-reload apply changes.
4. Confirm the browser tab displays the new title.

### 💡 Why This Matters
A clear page title improves accessibility, usability, and discoverability.

### 🏆 Bonus Challenge
Add a dynamic title that shows the current page or component state (framework-dependent).

<a id="session-notes--troubleshooting"></a>
## Session notes & troubleshooting

- If Codespaces fails to build, check the build logs in the Codespaces UI and retry or increase machine size.
- If `npm install` fails, verify Node.js version and network access; switch to the recommended Node version for the repo.
- Keep a quick list of file paths you change during the session for review during retros.