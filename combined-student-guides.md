# Session 0 — Getting Ready for Camp

## 🏕️ Pre-Camp Orientation

Welcome to your pre-camp adventure! 🎒

[Course Name] allows you to experience the world from the perspective of a Junior Developer building a browser-based open-world trivia adventure game. Through hands-on coding challenges using tools like **React**, **Node.js**, **GitHub Codespaces**, and **Copilot**, you'll learn what it's like to think and work like a developer—solving problems, bringing your ideas to life, and contributing to a cutting-edge web project.

Before you dive into building your trivia game, let's get your tools and accounts set up so you're ready to code!

## Table of Contents

- [Introducing Yourself](#introducing-yourself)
- [Planning Your Schedule](#planning-your-schedule)
- [Setting Up Your GitHub Account](#setting-up-your-github-account)
- [Connecting with Your Instructor](#connecting-with-your-instructor)

<a id="introducing-yourself"></a>

## 👋 Introducing Yourself

1. **Navigate** to the introductions section in the Wizcamp Portal
2. **Create** your introduction post by clicking "New Introduction"
3. **Share** information about yourself including
   - Your name and coding experience
   - What excites you about learning to code
   - One fun fact about yourself
4. **Read** and respond to other student introductions
5. **Connect** with your fellow campers

<a id="planning-your-schedule"></a>

## 📅 Planning Your Schedule

1. **Navigate** to the class calendar within the Wizcamp Portal
2. **RSVP** for each session you plan on attending

<a id="setting-up-your-github-account"></a>

## 🐙 Setting Up Your GitHub Account

**GitHub** is where developers store and share code worldwide. You'll use **GitHub** throughout [Course Name] to access your coding environment and AI-powered coding assistant.

1. **Create** a **GitHub** account at github.com → [**GitHub Signup Guide**](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github#signing-up-for-a-new-personal-account)
2. **Use** an existing account if you already have one (make sure you have access to your account)

<a id="connecting-with-your-instructor"></a>

## 📨 Connecting with Your Instructor

1. **DM** Mr. Colestock in the **Wizcamp Portal**
2. **Include**:
   - Full name and email associated with your **GitHub** account
   - Your **GitHub** username

This info is used to add you to the **Wizcamp GitHub Organization**, which gives you access to **Codespaces** and **GitHub Copilot Pro**.

## 🎉 You're Ready for Camp!

You've completed all the pre-camp requirements:

- Introduced yourself to your cohort
- Planned your session schedule  
- Set up your **GitHub** account
- Connected with your instructor

See you in Session 1 where you'll meet your fellow campers and start building your trivia game!# Session 1 — Setting Up Your Trivia Game

Welcome to **React** Development! 🎉

You're about to launch your dev setup and start building your trivia game. This guide breaks everything down into bite-sized tasks so you can move fast, learn by doing, and see results right away. Ready to dive in? Let's go!

## Table of Contents

- [Launching Your Codespace](#launching-your-codespace)
- [Project Navigation](#project-navigation)
- [Starting the Development Server](#starting-the-development-server)
- [Replacing the Placeholder Component](#replacing-the-placeholder-component)
- [Updating the Page Title](#updating-the-page-title)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="launching-your-codespace"></a>

## 🔧 Launching Your Codespace

Let's get your cloud coding environment up and running so you can start building without messing with local installs. This is your dev playground in the cloud — no setup headaches, no installs, just code.

1. **Head** over to [github.com](https://github.com) and log in using the account you set up during pre-camp.
2. **Go** to [github.com/wizcamp/wizcamp-realms-demo](https://github.com/wizcamp/wizcamp-realms-demo) and click Use this template → Open in codespace
3. **Wait** while your Codespace builds until you see a VS Code editor pop up in your browser
4. **Verify** you can see the project files in the file explorer on the left once it loads
5. **Customize** your theme by clicking the gear icon in the bottom left, going to Themes -> Color Theme, and picking your favorite (Dark+ is popular for coding)



Codespaces give everyone the same setup — no more "it works on my machine" drama. If you mess something up, just delete and start fresh. It's like having a reset button for your entire dev environment. You will use this Codespace for all sessions.

### 🏆 Bonus Challenge

Visit [github.com/codespaces](https://github.com/codespaces) to explore more about managing your Codespaces.

<a id="project-navigation"></a>

## 🗂️ Project Navigation

_Quick orientation to help you find files during today's tasks:_

```text
wizcamp-realms/
├── src/                    # Your React code lives here
│   ├── components/         # React components (SplashScreen, etc.)
│   └── App.jsx             # Main app component (you'll edit this!)
├── public/                 # Static files (images, etc.)
├── index.html              # HTML entry point (you'll edit this too!)
└── package.json            # Project configuration (npm scripts, dependencies)
```

**For today's tasks, you'll only work with:**

- `src/App.jsx` — to swap components
- `index.html` — to update the page title

_Don't worry about the other folders yet — we'll explore them in future sessions._

<a id="starting-the-development-server"></a>

## 🚀 Starting the Development Server

Preview the app in your browser by running the dev server to confirm everything is wired up correctly.

1. **Launch** the dev server from the terminal with `npm run dev`
2. **Click** "Open in Browser" or visit the provided localhost URL (e.g., http://localhost:5173/)
3. The starter app should load, showing a placeholder component.



Your dev server is like having a live preview of your creation. Every change you make shows up instantly — you're watching your code come to life in real-time.

### 🏆 Bonus Challenge

Try stopping and restarting the dev server:

- **Stop** the server by pressing `Ctrl + C` in the terminal
- **Check** localhost again to verify the app is gone
- **Restart** it with `npm run dev` and refresh the browser to see the app again

<a id="replacing-the-placeholder-component"></a>

## 🧩 Replacing the Placeholder Component

With the development server still running, replace the placeholder component with the game's splash screen component to experience live updates in action.

1. **Open** `src/App.jsx`
2. **Add** the import `import SplashScreen from "./components/SplashScreen";`
3. **Replace** `<StartHere />` with `<SplashScreen />`
4. **Watch** the screen update instantly without needing to save!



**Components** are the building blocks of **React** web apps — kind of like digital LEGO pieces. You build apps by snapping them together.

You probably noticed the `.jsx` file extension. That's because these **components** are written in a special syntax called **JSX**. It looks a lot like HTML, but is actually JavaScript under the hood. JSX lets you describe what the UI should look — using a syntax that's readable like HTML but powered by JavaScript.

The live update "magic" you experienced is actually powered by a build tool we are using called **Vite**, which uses a process known as **Hot Module Replacement (HMR)** to apply "smart updates" to your app instantly as you code.

<a id="updating-the-page-title"></a>

## 🏷️ Updating the Page Title

Even though React apps are built with components, they still use a standard HTML file as the entry point. Let's update the page title to reflect our project name.

1. **Open** `index.html`
2. **Update** the `<title>` tag to `Wizcamp Realms - Legends of Trivia`
3. **Confirm** the browser tab displays the new title



A descriptive page title is important for usability, accessibility, and SEO. It helps users identify your app when they have multiple tabs open and improves discoverability in search engines.

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the tools and concepts you just experienced:_

| Term                            | Definition                                                                                                             | Why it matters                                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ☁️ Codespace                    | A cloud dev environment from GitHub — a ready-made VS Code workspace that runs in your browser.                        | You'll launch this first; it gives everyone the same setup so you can jump straight to coding.              |
| 🖥️ VS Code                      | Your coding headquarters — think Photoshop but for building apps instead of editing photos.                            | This is where the magic happens. File explorer, code editor, terminal — all in one place.                   |
| 🔧 Node.js                      | JavaScript that runs on your computer (not just in browsers) — like having a JavaScript engine everywhere.             | Powers your dev tools and lets you run `npm` commands. It's JavaScript unleashed.                           |
| 📦 npm                          | Node's package manager — installs libraries and runs scripts (`npm run dev`).                                          | Use it to install dependencies and start the dev server.                                                    |
| ⚡ Vite                         | The Ferrari of dev servers — crazy fast and makes your app load instantly during development.                          | When you run `npm run dev`, Vite serves your app at lightning speed. You'll see why it's so popular.        |
| 🔁 Hot Module Replacement (HMR) | Updates only the changed code in the browser without a full reload, often keeping app state.                           | Lets you see edits instantly (CSS/JS) while you work — you'll notice changes apply without losing progress. |
| ⚛️ React                        | A library for building UIs out of components; it updates the UI when data changes.                                     | The project is a React app — you'll edit components to change what users see.                               |
| ✨ JSX                          | JavaScript syntax that looks like HTML — used to describe UI in React components (`.jsx`).                             | You'll edit `.jsx` files (e.g., `src/App.jsx`) to swap components and change UI.                            |
| 🧩 component                    | A reusable piece of UI that can include markup, styles, and logic (example: `<SplashScreen />`).                       | You'll replace a placeholder component with `SplashScreen` to practice editing and imports.                 |
| 🌐 Document Object Model (DOM) | The browser's object model of the page — JS code (including React) reads and updates the DOM to change what users see. | React updates the DOM when you change components or state (e.g., button clicks, title updates). |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Setting Up Your Trivia Game

You just launched your Codespace, ran your dev server, swapped a component, and updated your page title — nice work!

Now let's make sure you understand what you did and why it matters. Here are the most impactful questions to ask your AI assistant about today's session:

- **Why is cloud development better for beginners?**
- **What is a development server and why do we need it?**
- **What does the localhost URL mean?**
- **What's the difference between npm run dev and npm start?**
- **How and why do I import a component in React? Where am I importing all that from?**
- **What does import SplashScreen from './components/SplashScreen' mean?**
- **In a React app, what does the index.html file do?**
<!-- filepath: /home/bobleeswagger/wizcamp-realms-demo/session-guides/SESSION-01-architecture.md -->

# 🏗️ Session 01 — Dev Environment Architecture

A visual diagram showing relationships between GitHub Codespaces, OS, runtimes, dev tools, and the browser preview.

## Mermaid diagram (preferred)

```mermaid
flowchart TB
  %% Actors
  Dev["Developer\n(Browser or VS Code Desktop)"]
  Browser(("Browser Preview"))

  %% Codespace container (contains OS + DevTools + editor config)
  subgraph Codespace["GitHub Codespace 🧭"]
    direction TB
    DevContainer[".devcontainer\n(config)"]
    subgraph OS["Ubuntu (container OS) 🐧"]
      direction TB
      Node["Node.js\n(runtime) ⚙️"]
      NPM["npm / package manager 📦"]
    end
    subgraph DevTools["Dev tools & App"]
      direction TB
      Vite["Vite\n(dev server) ⚡"]
      HMR["HMR\n(Hot Module Replacement) 🔁"]
      React["React App\n(src/*.jsx / components) ⚛️"]
      Files["Project files\n(src/, public/) 🗂️"]
    end
    VSCode["VS Code\n(remote editor) 🖥️"]
  end

  %% Relationships
  Dev -->|opens remote session| VSCode
  VSCode -->|remote connection| Codespace
  Dev -->|open preview| Browser

  DevContainer --> OS
  OS --> Node
  Node --> NPM
  NPM --> Vite
  NPM --> React
  Files --> React
  React -->|built / served by| Vite
  Vite --> HMR
  HMR --> Browser
  Vite -->|serves on localhost| Browser

  %% Classes (styling)
  class Dev,Browser actorClass
  class Node,NPM osClass
  class Vite,HMR,React devtoolsClass
  class VSCode codespaceToolClass
  class DevContainer,Files diagNotes

  %% Visual style definitions
  classDef actorClass fill:#ffffff,stroke:#94a3b8,stroke-width:1px,color:#0f172a;
  classDef osClass fill:#ecfdf5,stroke:#34d399,stroke-width:1px,color:#065f46;
  classDef devtoolsClass fill:#fff7ed,stroke:#fb923c,stroke-width:1px,color:#92400e;
  classDef codespaceToolClass fill:#eef2ff,stroke:#7c3aed,stroke-width:1px,color:#3730a3;
  classDef diagNotes fill:#f8fafc,stroke:#e2e8f0,stroke-width:1px,color:#0f172a;

  %% Optional styling for clarity (some renderers support 'style' for nodes)
  style Codespace fill:#f0f9ff,stroke:#60a5fa,stroke-width:2px
```

### Legend / Notes

- Codespace = remote container running Ubuntu with your project's config (.devcontainer).
- Node + npm = runtime + package manager used to install/run Vite and the React app.
- Vite = dev server with HMR; serves the app on localhost to the Browser preview.
- VS Code (remote) = editor connected to the Codespace for live editing.

## ASCII fallback (for plaintext renderers)

```
Developer (Browser / VS Code)
        |
  -------------------
  |                 |
VS Code (remote)  Browser (preview)
  |                 ^
  |                 |
  |   ┌───────── GitHub Codespace ─────────┐
  |   |  .devcontainer  (config)           |
  |   |      |                              |
  |   |   Ubuntu (container OS)             |
  |   |      |                              |
  |   |   Node.js (runtime)                 |
  |   |      |                              |
  |   |    npm (package manager)            |
  |   |     /      \                        |
  |   |    /        \                       |
  |   | Vite (dev server)  React (source)   |
  |   |    |   \        /   ^               |
  |   |    |    \      /    |               |
  |   |    |     HMR updates/patches        |
  |   |    |            |                   |
  |   |    |            v                   |
  |   |    |        Browser <--- serves on localhost
  |   └─────────────────────────────────────┘
```
# Session 2 — Building Game Components

Building Reusable UI Elements 🧩

You're about to build your first custom React component and unlock the power of reusable UI building blocks — the secret to fast, scalable development in React. This guide walks you through creating a GameButton component, understanding props, and using React developer tools. Ready to build your first component? Let's go!

## Table of Contents

- [Understanding React's Approach](#understanding-reacts-approach)
- [Creating Your First Component](#creating-your-first-component)
- [Understanding Props](#understanding-props)
- [Adding Click Functionality](#adding-click-functionality)
- [Styling with Variants](#styling-with-variants)
- [Reusing Your Component](#reusing-your-component)
- [Installing React DevTools](#installing-react-devtools)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 1.

<a id="understanding-reacts-approach"></a>

## 💡 Understanding React's Approach

Why did swapping `<StartHere />` for `<SplashScreen />` feel so effortless? It's all about React's approach to building UIs.

With vanilla JavaScript, you write lots of repetitive code to update the page. React works differently: you build self-contained components, and React handles all the messy details of getting them on screen and keeping them updated.

<img src="images/session-02/js-vs-react-flowchart.png" alt="React vs Vanilla JavaScript Comparison" style="max-width: 600px; width: 100%;">
*Figure: Vanilla JavaScript vs React — Why Components Make Development Easier*

That's why swapping components felt so smooth. You weren't just editing code—you were shaping the UI with reusable building blocks.

Now let's build your first custom component and see that power in action.

<a id="creating-your-first-component"></a>

## 🧩 Creating Your First Component

Let's build a `GameButton` component for starting your trivia game. Components are like digital LEGO blocks — custom, reusable UI elements.

When you create a component, export it with `export default` so it can be shared across your project. Then bring it into other files with `import`.

1. **Create** the file by right-clicking `src/components` → New File → name it `GameButton.jsx`
2. **Type** the component structure
   ```javascript
   export default function GameButton() {
     return <button>Start Adventure</button>;
   }
   ```

3. **Import** into SplashScreen by adding `import GameButton from "./GameButton";` at the top

4. **Add** your button within `div.splash-buttons`
   ```javascript
   <GameButton />
   ```
5. **Test** by running `npm run dev` and you should see your custom button!



**Components** are the heart of React — reusable UI elements that combine markup, styling, and logic. Think of them as your own custom HTML tags. The `.jsx` file extension means you're writing **JSX**, a special syntax that looks like HTML but is actually JavaScript. JSX lets you describe what the UI should look like using readable, expressive code.

### 🏆 Bonus Challenge

Try changing the button text in GameButton.jsx and watch it update instantly thanks to Hot Module Replacement!

<a id="understanding-props"></a>

## 📦 Understanding Props

Props are how you pass data from parent components to child components. They're like function parameters but for React components.

1. **Add** `text` prop to `GameButton`

   ```javascript
   export default function GameButton({ text }) {
     return <button>{text}</button>;
   }
   ```

2. **Update** SplashScreen to pass the `text` prop to `GameButton`

   ```javascript
   <GameButton text="Start Adventure" />
   ```

3. **Watch** the magic as your button now shows custom text!



**Props** let parent components pass data to child components — just like function parameters. This makes your components flexible and reusable. The `{ text }` syntax is called **destructuring** — it pulls out just the values you need from the props object, keeping your code clean and readable.

<a id="adding-click-functionality"></a>

## 🖱️ Adding Click Functionality

Let's make your buttons actually do something when clicked. In React, you can pass functions as props just like any other data.

1. **Add** `onClick` prop to `GameButton`

   ```javascript
   export default function GameButton({ text, onClick }) {
     return <button onClick={onClick}>{text}</button>;
   }
   ```

2. **Update** `SplashScreen` to add click handler to `GameButton`

   ```javascript
   <GameButton
     text="Start Adventure"
     onClick={() => alert('Start Game!')}
   />
   ```

3. **Test** by clicking your button and see the alert!



**Functions as props** are like giving your components different personalities. Your `GameButton` can do different things depending on where you use it — same button, different actions. It's a key pattern in React for building interactive apps.

<a id="styling-with-variants"></a>

## 🎨 Styling with Variants

Let's add visual variety to your buttons using CSS classes, default parameters, and a clean variable approach.

1. **Add** `variant` prop, **create** `buttonClass` variable, and **include** in JSX

   ```javascript
   export default function GameButton({ text, onClick, variant = "primary" }) {
     const buttonClass = `game-button ${variant}`;

     return (
       <button className={buttonClass} onClick={onClick}>
         {text}
       </button>
     );
   }
   ```

2. **Update** `SplashScreen` to add `variant` prop to `GameButton`

   ```javascript
   <GameButton
     text="Start Adventure"
     onClick={() => alert('Start Game!')}
     variant="primary"
   />
   ```

3. **Admire** your styled button as it now has the primary styling!



**`className`** is React's version of the HTML `class` attribute. We use a **template literal** to build a dynamic class name like `game-button primary`. This matches the styles already defined in your project. The `variant` prop lets you switch between styles like `primary` and `secondary`, and **default parameters** like `variant = "primary"` ensure your component still works even if no variant is passed.

<a id="reusing-your-component"></a>

## 🔄 Reusing Your Component

Now that you've built a complete, fully-featured GameButton component, let's experience the power of reusability by adding a second button for the game's credits.

1. **Add** a Credits button below your existing GameButton
   ```javascript
   <GameButton
     text="Credits"
     onClick={() => alert('Show Credits')}
     variant="secondary"
   />
   ```
2. **Admire** your work as you now have two different buttons using the same component!



**Component reusability** is React's superpower. You wrote the `GameButton` code once, but now you can use it anywhere in your app with different props. Thanks to your stylesheet, each variant (`primary`, `secondary`) automatically applies the right look — no extra styling needed.

### 🏆 Bonus Challenge

Try adding a third GameButton with `variant="primary"` and `text="Instructions"` to see how easy it is to scale your UI!

<a id="installing-react-devtools"></a>

## 🔍 Installing React DevTools

React DevTools is like X-ray vision for your React app — see component structure, props, and state in real-time.

### Browser Installation

| Browser     | Installation Link                                                                                                        | Notes               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| **Chrome**  | [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)     | Most popular choice |
| **Firefox** | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)                                        | Great alternative   |
| **Edge**    | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) | Windows default     |
| **Safari**  | Manual installation required                                                                                             | Advanced users only |

### Using DevTools

1. **Open** DevTools by pressing F12 or right-clicking → Inspect
2. **Find** Components tab by looking for "Components" next to Console, Network, etc.
3. **Explore** your app by clicking on components in the tree to see their props
4. **Inspect** GameButton by finding your GameButton component and see the text, onClick, and variant props!



**React DevTools** gives you X-ray vision into your app. You can inspect components, props, and state in real time — essential for debugging and understanding how your app works under the hood.

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the React concepts you just learned:_

| Term   | Definition | Why it matters |
|--------|------------|----------------|
| 🧩 component | A reusable piece of UI that can include markup, styles, and logic (example: `<SplashScreen />`). | You'll build your entire app by composing components together — they're React's building blocks. |
| 📦 props | Data passed from parent to child components. | Props let you customize components and pass data around your app — essential for reusable components. |
| ✨ JSX | JavaScript syntax that looks like HTML — used to describe UI in React components (`.jsx`). | You'll write JSX in your `GameButton` component to describe what the button should look like. |
| 🎨 className | React's version of the HTML `class` attribute for applying CSS styles. | Use `className` instead of `class` because `class` is a reserved word in JavaScript. |
| 📤 destructuring | Extracting values from objects/arrays into variables, like `{ text, onClick }` from props. | Makes your code cleaner by avoiding repetitive `props.text`, `props.onClick` syntax. |
| 🔤 template literals | String interpolation using backticks and `${}` for dynamic strings. | Perfect for creating dynamic CSS classes like `` `game-button ${variant}` ``. |
| ⚙️ default parameters | Fallback values for function parameters, like `variant = "primary"`. | Ensures your components work even when some props aren't provided. |
| 🔍 React DevTools | Browser extension for inspecting React component trees, props, and state. | Essential debugging tool — like X-ray vision for your React app. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Building Game Components

You just created your first reusable React component with props, styling, and click handlers — excellent work!

Now let's deepen your understanding of components, props, and the React development workflow. Here are the most impactful questions to ask your AI assistant about today's session:

- **What makes React components reusable and why is that important?**
- **How do props work in React and why are they read-only?**
- **How do template literals work and why are they perfect for dynamic CSS classes?**
- **What is interpolation in JSX and can you show me examples?**
- **How does JSX let me write HTML-like code inside JavaScript?**
- **Can I pass functions as props? How does that work and why is it powerful?**
- **What can I do with React DevTools that I can't do with regular browser DevTools?**


# Session 3 — Managing Game Flow

Shared State with Context 🧠

You're about to unlock one of React's most powerful features — shared state that controls your entire app! This guide walks you through implementing screen navigation, understanding the difference between local and shared state, and using React's Context API to manage game flow. Ready to make your buttons actually navigate? Let's go!

## Table of Contents

- [Understanding State vs Props](#understanding-state-vs-props)
- [Adding Local State for Credits](#adding-local-state-for-credits)
- [Exploring Game Constants](#exploring-game-constants)
- [Adding Screen Navigation](#adding-screen-navigation)
- [Using React DevTools for Exploring State](#using-react-devtools-for-exploring-state)
- [Implementing Start Game Function](#implementing-start-game-function)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 2.

<a id="understanding-state-vs-props"></a>

## 🧠 Understanding State vs Props

Before we dive into code, let's understand the key difference between **state** and **props** — two fundamental concepts that control how data flows in React apps.

### Props vs State: The Key Differences

| **Props** | **State** |
|-----------|-----------|
| Data flows **down** from parent to child | Data lives **inside** a component |
| **Read-only** — child can't change them | **Changeable** — component can update it |
| Like function parameters | Like component memory |
| External data | Internal data |



**Props** are like ingredients you receive to make a recipe — you can't change them, but you use them to create something. **State** is like your kitchen's current condition — you can rearrange, add, or remove things as needed. Understanding this difference is crucial because it determines how data flows through your app and which component is responsible for managing what information.

<a id="adding-local-state-for-credits"></a>

## 🏆 Adding Local State for Credits

Let's implement **local state** for the credits modal to see how components can manage their own data.

1. **Add** imports at the top of SplashScreen.jsx

   ```javascript
   import { useState } from "react";
   import CreditsModal from "./CreditsModal";
   ```

2. **Add** local state inside the SplashScreen function (before the return)

   ```javascript
   const [showCredits, setShowCredits] = useState(false);
   ```

3. **Update** the Credits button

   ```javascript
   <GameButton
     text="Credits"
     onClick={() => setShowCredits(true)}
     variant="secondary"
   />
   ```

4. **Add** the modal before the closing `</div>` tag

   ```javascript
   {/* Show modal only when showCredits is true */}
   {showCredits && <CreditsModal onClose={() => setShowCredits(false)} />}
   ```

5. **Test** by clicking the Credits button to see the modal appear



**Local state** with `useState` belongs to a single component and gives it its own memory. The credits modal only affects `SplashScreen`, so it uses local state to track whether the modal should be visible. This pattern keeps component data isolated and manageable.

### 🏆 Bonus Challenge

Use React DevTools to inspect the SplashScreen component and watch the `showCredits` state change as you interact with the Credits button.

<a id="exploring-game-constants"></a>

## 📋 Exploring Game Constants

Let's understand how our game screens are organized using **constants** — static values that prevent typos and make code more maintainable.

1. **Explore** the screens constant by opening `src/constants/screens.js` and examining the SCREENS object
2. **Notice** the structure where each screen has a key (like `SPLASH`) and a descriptive value
3. **Understand** the purpose of using `SCREENS.SPLASH` instead of strings like `"splash"` everywhere

### What is Prop Drilling?

**Prop drilling** is when you have to pass data through multiple component levels, even when the middle components don't need that data. It's like having to ask your friend to ask their friend to ask their friend for something — inefficient and annoying.

**Example of prop drilling:**
```text
App (has screen state)
 ↓ passes screen as prop
SplashScreen (doesn't need screen, just passes it along)
 ↓ passes screen as prop  
GameButton (finally uses screen)
```

**With Context (no prop drilling):**
```text
GameProvider (provides screen state)
 ↓ any component can access directly
GameButton (uses useGame hook to get screen)
```



**Constants** prevent typos and make your code more maintainable. Instead of typing `"splash"` in multiple places (and risking typos like `"spalsh"`), you use `SCREENS.SPLASH` once and get autocomplete everywhere. If you need to change the value later, you only change it in one place.

<a id="adding-screen-navigation"></a>

## 🗺️ Adding Screen Navigation

Now let's implement the core navigation system that will control which screen users see. This is where **shared state** really shines!

1. **Open** `src/App.jsx` and add the necessary imports at the top

   ```javascript
   import { useGame } from './hooks/useGame';
   import { SCREENS } from "./constants/screens";
   import GameMap from "./components/GameMap";
   ```

2. **Access** the shared state by adding this line inside the App function (before the return)

   ```javascript
   const { screen } = useGame();
   ```

3. **Add** conditional rendering by replacing the current JSX with

   ```javascript
   return (
     <div className="app-container">
       {screen === SCREENS.SPLASH && <SplashScreen />}
       {screen === SCREENS.PLAYING && <GameMap />}
     </div>
   );
   ```

4. **Test** by running `npm run dev` to make sure everything still works



**Conditional rendering** using `&&` is a React pattern that shows components only when certain conditions are true. When `screen` equals `SCREENS.SPLASH`, the `SplashScreen` component renders. When it equals `SCREENS.PLAYING`, `GameMap` renders instead. This single piece of **shared state** controls what your entire app displays!

<a id="using-react-devtools-for-exploring-state"></a>

## 🔍 Using React DevTools for Exploring State

Let's use React DevTools to see how **shared state** works behind the scenes and experiment with changing it manually.

1. **Open** DevTools by pressing F12 or right-clicking → Inspect
2. **Find** Components tab by looking for "Components" next to Console, Network, etc.
3. **Locate** GameProvider by clicking on GameProvider in the component tree
4. **Examine** the hooks by looking for the screen state value (if you don't see hook names clearly, click the gear icon and enable "Parse hook names")
5. **Experiment** with state by changing the screen value from "splash" to "playing" and watch the UI update!
6. **Change** it back by setting it back to "splash" to see the SplashScreen return



React DevTools gives you X-ray vision into your app's **state**. You can see exactly what data each component has and even modify it in real-time. This is invaluable for debugging and understanding how **shared state** affects your entire app. Notice how changing one value in `GameProvider` instantly changes what component renders!

### 🏆 Bonus Challenge

Try changing the screen state to different values and see what happens. What occurs when you set it to a value that doesn't match any of your conditions?

<a id="implementing-start-game-function"></a>

## 🎮 Implementing Start Game Function

Now let's make your "Start Adventure" button actually start the game by updating the **shared state**!

1. **Open** `src/components/SplashScreen.jsx` and add imports at the top

   ```javascript
   import { SCREENS } from "../constants/screens";
   import { useGame } from "../hooks/useGame";
   ```

2. **Access** the state setter by adding this inside the SplashScreen function (before the return)

   ```javascript
   const { setScreen } = useGame();
   ```

3. **Create** the start game function (before the return)

   ```javascript
   const startGame = () => {
     setScreen(SCREENS.PLAYING);
   };
   ```

4. **Update** the first GameButton to use the real function

   ```javascript
   <GameButton
     text="Start Adventure"
     onClick={startGame}
     variant="primary"
   />
   ```

5. **Test** by clicking the "Start Adventure" button and watch the screen change to GameMap!



**State setters** like `setScreen` are functions that update **state** and trigger re-renders. When you call `setScreen(SCREENS.PLAYING)`, React updates the shared state and re-renders all components that depend on it. This is how one button click can change your entire app's display!

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the state management concepts you just learned:_

| Term   | Definition | Why it matters |
|--------|------------|----------------|
| 🧠 state | Data that can change over time and causes components to re-render when it changes. | State lets components "remember" information and respond to user interactions dynamically. |
| 🪝 hook | Functions starting with "use" that let you use React features like state and context. | Hooks like `useState` are your tools for managing data and behavior in components. |
| 🌐 Context | React's solution to prop drilling — lets components access shared data without passing props through multiple levels. | Context prevents "prop drilling" and provides shared state accessible from any component. |
| 🔗 prop drilling | Passing data through multiple component levels, even when intermediate components don't need that data. | Context eliminates prop drilling by letting any component access shared data directly. |
| 📦 props | Data passed from parent to child components. | Props flow data down the component tree, while state manages data within components. |
| 🔄 useState | A React hook that adds local state to functional components. | `useState` gives individual components their own memory for data that only they need to track. |
| 📋 constants | Static values that don't change, used to prevent typos and make code more maintainable. | Constants like `SCREENS.SPLASH` prevent typos and make refactoring easier. |
| 🔀 conditional rendering | Showing different components based on state or props using JavaScript expressions. | Conditional rendering with `&&` lets you control what users see based on app state. |
| 🏪 Provider | A Context component that makes shared state available to all child components. | The Provider pattern wraps your app and gives all components access to shared data. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Managing Game Flow

You just implemented both local and shared state, created screen navigation, and experienced the power of React's Context API — excellent work!

Now let's deepen your understanding of state management, hooks, and the React data flow. Here are the most impactful questions to ask your AI assistant about today's session:

- **What makes hooks special and why do they all start with "use"?**
- **Explain `const [showCredits, setShowCredits] = useState(false);` in regular English.**
- **Explain state setter functions like `setScreen`, but in a non-tech example.**
- **What is "prop drilling" and how does the Context API prevent it? Give me non-tech examples.**
- **How does the GameProvider make state available to all components?**

# Session 4 — Configuring Game Zones

Data-Driven Design 📊

You're about to design the heart of your trivia game — the zone configuration that defines your entire game experience! This guide walks you through creating cohesive zone themes, understanding JavaScript data structures, and building the metadata that powers your adventure. Ready to architect your game world? Let's go!

## Table of Contents

- [Adding the HUD and Coordinate Display](#adding-the-hud-and-coordinate-display)
- [Understanding Metadata and Configuration](#understanding-metadata-and-configuration)
- [Exploring JavaScript Data Structures](#exploring-javascript-data-structures)
- [Designing Your Zone Themes](#designing-your-zone-themes)
- [Configuring Zone Metadata](#configuring-zone-metadata)
- [Positioning Zone Labels](#positioning-zone-labels)
- [Testing with React DevTools](#testing-with-react-devtools)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 3.

<a id="adding-the-hud-and-coordinate-display"></a>

## 🖥️ Adding the HUD and Coordinate Display

Let's add the game's **HUD** (Heads Up Display) and a coordinate helper to assist with zone positioning.

1. **Open** `src/App.jsx` and add the new imports at the top

   ```javascript
   import HUD from "./components/HUD";
   import CoordinateDisplay from "./components/CoordinateDisplay";
   ```

2. **Update** the PLAYING screen to render multiple components using a **React Fragment**

   ```javascript
   {screen === SCREENS.PLAYING && (
     {/* Fragment groups components without extra DOM wrapper */}
     <>
       <GameMap />
       <HUD />
       <CoordinateDisplay />
     </>
   )}
   ```

3. **Test** by running `npm run dev` and navigating to the game screen to see the new HUD and coordinate display



**React Fragments** (`<>...</>`) are like invisible containers — they let you snap together multiple components without clutter. React components must return a single root element, so fragments solve this requirement cleanly. The `HUD` shows game progress, while `CoordinateDisplay` helps you position zone labels precisely.

### 🏆 Bonus Challenge

Try removing the fragment tags (`<>` and `</>`) and see what error React gives you when trying to return multiple elements!

<a id="understanding-metadata-and-configuration"></a>

## 📋 Understanding Metadata and Configuration

Now let's understand what makes your game tick — **metadata** and **configuration files** that define your entire game experience.

**Metadata** is data about data. Think of it like a restaurant menu: it tells you everything about the dish — name, price, ingredients, spice level — but it's not the actual food. Your zone metadata works the same way: it describes each zone's properties without being the actual trivia questions.



**Configuration files** like `zones.js` are the backbone of **data-driven architecture** — an approach where you separate data from code. Think of your `zones.js` file as the DNA of your game experience: it contains all the genetic information that defines how your zones look, behave, and connect to trivia content. This makes your app flexible, maintainable, and easy to modify without touching component code.

<a id="exploring-javascript-data-structures"></a>

## 🏗️ Exploring JavaScript Data Structures

Let's explore the fundamental **data structures** that power your zone configuration — **arrays** and **objects**.

1. **Open** `src/data/zones.js` and examine the `ZONES` array structure
2. **Notice** the data types
   - **Strings** for text: `"Forest of Knowledge"`
   - **Numbers** for IDs and counts: `18`, `4`
   - **Objects** for complex data: `mapLabel: { x: 225, y: 140 }`
3. **Understand** the nesting as an **array** of **objects**, where each object has **properties** that can be different data types



**Arrays** are like playlists — they keep things in order. **Objects** are like contact cards — they store all the details about one thing. Together, they're the perfect combo for organizing your game world and representing complex real-world data in code.

<a id="designing-your-zone-themes"></a>

## 🎨 Designing Your Zone Themes

Now for the creative part — designing three distinctive zone themes that create a cohesive game experience!

1. **Explore** available categories by visiting [https://opentdb.com/api_category.php](https://opentdb.com/api_category.php) to see all trivia categories
2. **Brainstorm** zone concepts that match the visual environments
   - **Forest theme**: Nature, animals, science categories
   - **Desert theme**: History, geography, mythology categories  
   - **Ice castle theme**: Entertainment, sports, art categories
3. **Plan** your zones where each zone needs
   - **id**: Zone number (0, 1, 2)
   - **name**: Creative zone title
   - **subtitle**: Zone tagline/description  
   - **categoryId**: Question type from the API categories
   - **difficulty**: "easy", "medium", or "hard"
   - **questionCount**: How many questions (max 50)
   - **mapLabel**: Position and styling (we'll configure this later on)



**Cohesive theming** creates an immersive game experience. By matching visual environments with appropriate trivia categories, you create logical connections that help players navigate and remember your game. This attention to **user experience** separates good games from great ones.

<a id="configuring-zone-metadata"></a>

## ⚙️ Configuring Zone Metadata

Time to implement your zone designs by updating the `ZONES` array with your custom metadata.

1. **Open** `src/data/zones.js` 
2. **Update** the first zone object with your Zone 0 design

   ```javascript
   {
     id: 0,
     name: "Your Zone Name",
     subtitle: "Your Zone Subtitle",
     categoryId: 18,
     difficulty: "easy",
     questionCount: 4,
     mapLabel: {
       x: 225,
       y: 140,
       fontSize: "35",
       fontFamily: "Pirata One, serif",
       color: "#333",
       fontWeight: "normal",
       alignment: "left",
     },
   },
   ```

3. **Add** Zone 1 and Zone 2 objects by copying the structure and updating all properties (keep the mapLabel coordinates for now — we'll position them precisely in the next section)

   Note: Changes to `zones.js` will trigger a full page reload (not HMR-friendly)



**Object properties** use colon syntax (`name: "value"`) and are separated by commas. Each zone object contains different **data types**: strings for text, numbers for IDs, and nested objects for complex styling. This structure makes your game data organized and easy to modify.

<a id="positioning-zone-labels"></a>

## 📍 Positioning Zone Labels

Use the `CoordinateDisplay` component to find optimal positions for your zone labels on the game map.

1. **Navigate** to the game screen and observe the coordinate display
2. **Move** your mouse around the map and note the x, y coordinates — this tool gives you real-time feedback, no guessing, just precision
3. **Find** good positions for each zone label that don't overlap with visual elements
4. **Update** the mapLabel coordinates in your zone objects

   ```javascript
   mapLabel: {
     x: 225,
     y: 140,
     // ... other styling properties
   }
   ```

5. **Test** each zone by navigating to the game screen and confirming label placement



**Coordinate positioning** requires precise **number** values to place UI elements exactly where you want them. The `CoordinateDisplay` component gives you real-time feedback, making it easy to find perfect positions without guessing.

### 🏆 Bonus Challenge

Try different `fontSize` and `color` values to customize your zone labels' appearance!

<a id="testing-with-react-devtools"></a>

## 🔍 Testing with React DevTools

Let's use React DevTools to explore your zone configuration and test game progression.

1. **Open** DevTools by pressing F12 or right-clicking → Inspect
2. **Find** Components tab by looking for "Components" next to Console, Network, etc.
3. **Locate** GameProvider by clicking on GameProvider in the component tree
4. **Examine** the hooks by looking for the zoneProgress state (if you don't see hook names clearly, click the gear icon and enable "Parse hook names")
5. **Find** zoneProgress array by locating it under hooks
6. **Experiment** with progression by changing the first zone's `completed` property to `true`
7. **Observe** state changes by noticing how `activeZone` and `currentZone` update automatically
8. **Check** the HUD to see how the Context.Provider props reflect the updated game state



React DevTools lets you manipulate **state** directly to test different game scenarios without playing through the entire game. This is invaluable for debugging and understanding how your **shared state** affects the entire app.

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the data structure and configuration concepts you just learned:_

| Term   | Definition | Why it matters |
|--------|------------|----------------|
| 📋 metadata | Data that describes other data — information about information. | Your zone configuration describes how to get and display trivia questions without being the questions themselves. |
| 🏗️ array | An ordered list of items using bracket syntax `[]` with zero-based indexing. | Perfect for storing your three game zones in a specific order that matches the game progression. |
| 📦 object | A collection of key-value pairs using curly brace syntax `{}` with colon-separated properties. | Ideal for zone properties like `name`, `difficulty`, and styling — each zone is an object with multiple attributes. |
| 🔤 string | Text data enclosed in quotes, used for names, descriptions, and categories. | Zone names, subtitles, and difficulty levels are all strings that display to users. |
| 🔢 number | Numeric data without quotes, used for IDs, counts, and coordinates. | Category IDs, question counts, and map coordinates are numbers used for calculations and positioning. |
| 🏷️ property | A key-value pair within an object, accessed using dot notation like `zone.name`. | Each zone object has properties like `name`, `categoryId`, and `mapLabel` that define its characteristics. |
| ⚛️ React Fragment | JSX syntax `<>...</>` that groups elements without adding extra DOM nodes. | Lets you return multiple components from the PLAYING screen without wrapper divs cluttering your HTML. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Configuring Game Zones

You just designed cohesive zone themes, configured complex JavaScript data structures, and experienced data-driven architecture — excellent work!

Now let's deepen your understanding of data structures, configuration patterns, and the relationship between data and UI. Here are the most impactful questions to ask your AI assistant about today's session:

- **What makes arrays and objects different, and when should I use each?**
- **How does nesting data structures help represent complex real-world information?**
- **Why is separating data from code considered a best practice in software development?**
- **What are the benefits of using configuration files like zones.js?**
- **How do React Fragments solve the single root element requirement?**
- **What is metadata and why is it important in application design?**

# Session 5 — Generating Dynamic Questions

Connecting to Real APIs 🌐

You're about to connect your trivia game to the real internet! This guide walks you through fetching live trivia questions from external APIs, transforming API data into game-ready format, and experiencing the power of asynchronous programming. Ready to make your zones come alive with real questions? Let's go!

## Table of Contents

- [Understanding APIs and External Data](#understanding-apis-and-external-data)
- [Exploring the OpenTrivia Database](#exploring-the-opentrivia-database)
- [Understanding Asynchronous Programming](#understanding-asynchronous-programming)
- [Building the Fetch Foundation](#building-the-fetch-foundation)
- [Transforming API Data](#transforming-api-data)
- [Testing Your API Integration](#testing-your-api-integration)
- [Understanding the Complete Data Flow](#understanding-the-complete-data-flow)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 4.

<a id="understanding-apis-and-external-data"></a>

## 🌐 Understanding APIs and External Data

Before we start coding, let's understand what **APIs** are and why they're everywhere in modern web development.

**API** stands for **Application Programming Interface** — it's like a menu at a restaurant. The menu tells you what dishes are available, what ingredients they contain, and how much they cost, but it's not the actual food. Similarly, an API tells you what data is available, how to request it, and what format you'll receive, but it's not the data itself.



**APIs** are the backbone of modern web applications. Your trivia game will use the **OpenTrivia Database API** to fetch real questions from the internet, making your game dynamic and engaging with fresh content.

### 🏆 Bonus Challenge

Think of three apps you use daily — can you identify what external data they might be fetching through APIs?

<a id="exploring-the-opentrivia-database"></a>

## 🔍 Exploring the OpenTrivia Database

Let's explore the **API** that will power your trivia questions and see what real **API** data looks like.

1. **Visit** the API endpoint by opening [https://opentdb.com/api.php?amount=3&category=18&type=multiple&difficulty=easy&encode=url3986](https://opentdb.com/api.php?amount=3&category=18&type=multiple&difficulty=easy&encode=url3986) in your browser

2. **Examine** the raw JSON response where you'll see something like this

   ```json
   {
     "response_code": 0,
     "results": [
       {
         "type": "multiple",
         "difficulty": "easy", 
         "category": "Science%3A%20Computers",
         "question": "What%20does%20GHz%20stand%20for%3F",
         "correct_answer": "Gigahertz",
         "incorrect_answers": [
           "Gigahotz",
           "Gigahetz", 
           "Gigahatz"
         ]
       }
     ]
   }
   ```

3. **Notice** the encoding with those `%20` and `%3A` symbols which represent **URL encoding** — a way to safely transmit text over the internet

4. **Understand** the structure where each question has a `question`, `correct_answer`, and `incorrect_answers` array



**JSON** (JavaScript Object Notation) is the universal language of **APIs**. It's how different applications share structured data over the internet. Your job as a developer is to transform this raw data into the format your game needs.

**📚 API Documentation:** For complete details about OpenTrivia Database parameters, response codes, and features, visit: [https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)

### API Data Transformation Journey

```text
Raw API Data → Your Transform Function → Game-Ready Data
```

**Before (API Response):**
```json
{
  "question": "What%20does%20GHz%20stand%20for%3F",
  "correct_answer": "Gigahertz",
  "incorrect_answers": ["Gigahotz", "Gigahetz", "Gigahatz"]
}
```

**After (Your Game Format):**
```json
{
  "question": "What does GHz stand for?",
  "answers": ["Gigahotz", "Gigahertz", "Gigahetz", "Gigahatz"],
  "correct": 1
}
```

<a id="understanding-asynchronous-programming"></a>

## ⏰ Understanding Asynchronous Programming

Now let's understand **asynchronous programming** — the key to working with **APIs** and external data.

**Synchronous** code runs line by line, waiting for each operation to complete before moving to the next. **Asynchronous** code can start a task (like fetching data from the internet) and continue with other work while waiting for the result.

### Real-World Analogy

Synchronous is like ordering at a fast-food counter where you wait for your entire order before the next person can order. Asynchronous is like a coffee shop where you order, get a number, and sit down while they prepare your drink — other customers can order while you wait.



Fetch requests to **APIs** are asynchronous because network requests take time. Your app needs to stay responsive while waiting for data from the internet. **Async/await** syntax makes asynchronous code easier to read and debug.

<a id="building-the-fetch-foundation"></a>

## ⚠️ Hot Module Reloading (HMR) Note

When you make changes to `trivia.js`, you may see these behaviors:

- Game returns to splash screen (normal)
- "useGame must be used within a GameProvider" error (also normal)

**How to fix and continue:**

1. **Refresh** the browser page manually (Ctrl+R or Cmd+R)
2. **Navigate** back to the game (**click** "Start Game")
3. **Click** a zone to test your updated code

**Pro tip:** Make several changes to your code, then refresh once to test them all together!

## 🔧 Building the Fetch Foundation

Time to connect your game to the real internet! Let's implement the core **fetch** logic.

1. **Open** `src/services/trivia.js`
2. **Replace** the alert with basic fetch logic

   ```javascript
   try {
     console.log("Fetching from:", url);
     const response = await fetch(url);
     const data = await response.json();
     console.log("Raw API data:", data);
   } catch (error) {
     console.log("Failed to fetch questions:", error);
     return [];
   }
   ```

3. **Test** to verify the API integration

   - **Open** DevTools by pressing F12 or right-clicking → Inspect
   - **Navigate** back to the game by clicking "Start Game"
   - **Click** a zone to test your updated code
   - **Check** the Console tab to see your fetch in action
   - **Check** the Network tab to see the actual HTTP request

4. **Add** data validation immediately after getting the data

   ```javascript
   if (!data.results || data.results.length === 0) {
     console.log("No questions received from API");
     return [];
   }
   ```



**Error handling** and **data validation** are crucial when working with external **APIs**. Networks can fail, APIs can be down, or responses might be empty. Developers always plan for these scenarios to create robust applications.

<a id="transforming-api-data"></a>

## 🔄 Transforming API Data

Now let's transform the **API** data into game-ready format. This is where the real magic happens!

1. **Add** transformation testing after the validation check

   ```javascript
   const firstQuestion = data.results[0];
   console.log("Before transform:", firstQuestion);
   
   const transformed = transformQuestion(firstQuestion);
   console.log("After transform:", transformed);
   ```

   **Test** by starting Game → clicking zone → seeing `undefined` in console → "We need to implement transformQuestion"

2. **Extract** object properties in the `transformQuestion` function

   ```javascript
   function transformQuestion(apiQuestion) {
     const question = apiQuestion.question;
     const incorrectAnswers = apiQuestion.incorrect_answers;
     const correctAnswer = apiQuestion.correct_answer;
     
     console.log("Extracted properties:", { question, incorrectAnswers, correctAnswer });
   }
   ```

   **Test** by starting Game → clicking zone → seeing extracted properties in console

3. **Add** helper functions for decoding

   ```javascript
   function transformQuestion(apiQuestion) {
     const question = decodeText(apiQuestion.question);
     const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
     const correctAnswer = decodeText(apiQuestion.correct_answer);
     
     console.log("Decoded data:", { question, incorrectAnswers, correctAnswer });
   }
   ```

   **Test** by starting Game → clicking zone → seeing decoded, formatted data

   You should now see formatted game data like:
   ```javascript
   {
     "question": "What does GHz stand for?",
     "incorrectAnswers": ["Gigahotz", "Gigahetz", "Gigahatz"],
     "correctAnswer": "Gigahertz"
   }
   ```

4. **Add** shuffling and index finding

   ```javascript
   function transformQuestion(apiQuestion) {
     const question = decodeText(apiQuestion.question);
     const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
     const correctAnswer = decodeText(apiQuestion.correct_answer);
     const shuffledAnswers = shuffleAnswers(correctAnswer, incorrectAnswers);
     const correctIndex = shuffledAnswers.indexOf(correctAnswer);
     
     console.log("Shuffled answers:", shuffledAnswers);
     console.log("Correct answer is at index:", correctIndex);
   }
   ```

   **Test** by starting Game → clicking zone → seeing shuffled answers

5. **Return** the final game object

   ```javascript
   function transformQuestion(apiQuestion) {
     const question = decodeText(apiQuestion.question);
     const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
     const correctAnswer = decodeText(apiQuestion.correct_answer);
     const shuffledAnswers = shuffleAnswers(correctAnswer, incorrectAnswers);
     const correctIndex = shuffledAnswers.indexOf(correctAnswer);
   
     return {
       question: question,
       answers: shuffledAnswers,
       correct: correctIndex
     };
   }
   ```

   **Test** by starting Game → clicking zone → seeing complete transformed object!

   You should now see complete game data like:
   ```javascript
   {
     "question": "What does CPU stand for?",
     "answers": [
       "Central Process Unit",
       "Computer Personal Unit", 
       "Central Processing Unit",
       "Central Processor Unit"
     ],
     "correct": 2
   }
   ```

6. **Complete** the fetchQuestions integration by replacing the test logging

   ```javascript
   // Transform API response into game-ready format
   const questions = data.results.map(apiQuestion => transformQuestion(apiQuestion));
   console.log("All transformed questions:", questions);
   return questions;
   ```

   **Test** by clicking zone → see array of properly formatted questions!



**Data transformation** is a core skill in web development. APIs rarely return data in exactly the format your application needs. The `map()` method is perfect for transforming arrays of data, and helper functions keep your code clean and reusable.

<a id="testing-your-api-integration"></a>

## 🧪 Testing Your API Integration

Let's test your complete **API** integration and clean up the debugging code.

1. **Remove** console logs from your functions to clean up the code

   ```javascript
   export async function fetchQuestions(zoneId, count = null) {
     const zone = getZoneById(zoneId);
     if (!zone) return [];
   
     const questionCount = count || zone.questionCount;
     const url = buildApiUrl(zone, questionCount);
   
     try {
       const response = await fetch(url);
       const data = await response.json();
   
       if (!data.results || data.results.length === 0) {
         return [];
       }
   
       const questions = data.results.map(apiQuestion => transformQuestion(apiQuestion));
       return questions;
   
     } catch (error) {
       console.log("Failed to fetch questions:", error);
       return [];
     }
   }
   ```

2. **Test** to verify the complete data flow

   - Game resets to splash screen
   - **Navigate** to the game by clicking "Start Game"
   - **Click** different zones to test various categories and difficulties
   - **Verify** the data flow using React DevTools
     - **Open** DevTools → Components tab
     - **Find** GameProvider and examine `currentQuestions` state
     - **Click** zones and watch the state populate with your transformed questions



**Testing** is crucial in web development. You've just built a complete API integration that fetches real data from the internet, transforms it, and feeds it into your game's state management system. This is the foundation that will power your quiz functionality in future sessions.

<a id="understanding-the-complete-data-flow"></a>

## 🔄 Understanding the Complete Data Flow

Let's trace the complete journey from zone click to loaded questions:

```mermaid
graph TD
    A[User clicks zone] --> B[GameMap handleZoneClick]
    B --> C[GameContext loadQuestionsForZone]
    C --> D[trivia.js fetchQuestions]
    D --> E[buildApiUrl helper]
    E --> F[fetch from OpenTrivia DB]
    F --> G[response.json parsing]
    G --> H[data.results.map transformation]
    H --> I[transformQuestion for each item]
    I --> J[decodeText + shuffleAnswers helpers]
    J --> K[Formatted game objects returned]
    K --> L[GameContext updates currentQuestions state]
    L --> M[React re-renders with new data]
```

### Data Transformation Flow

```text
┌─────────────────────────────────────────────────────────────────┐
│                    API Response (Raw)                           │
├─────────────────────────────────────────────────────────────────┤
│ {                                                               │
│   "question": "What%20does%20GHz%20stand%20for%3F",             │
│   "correct_answer": "Gigahertz",                                │
│   "incorrect_answers": ["Gigahotz", "Gigahetz", "Gigahatz"]     │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                 transformQuestion Function                      │
├─────────────────────────────────────────────────────────────────┤
│ 1. decodeText() → Decode URL encoding                           │
│ 2. map() → Transform incorrect answers array                    │
│ 3. shuffleAnswers() → Randomize answer order                    │
│ 4. indexOf() → Find correct answer position                     │
│ 5. Return formatted object                                      │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Game Format (Transformed)                     │
├─────────────────────────────────────────────────────────────────┤
│ {                                                               │
│   "question": "What does GHz stand for?",                       │
│   "answers": ["Gigahotz", "Gigahertz", "Gigahetz", "Gigahatz"], │
│   "correct": 1                                                  │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘
```



Understanding the complete data flow helps you debug issues and build more complex features. You've created a robust pipeline that handles API requests, data transformation, and state management — the same patterns used in modern web applications.

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the API and asynchronous programming concepts you just learned:_

| Term   | Definition | Why it matters |
|--------|------------|----------------|
| 🌐 Application Programming Interface (API) | A set of rules and protocols that allows different software applications to communicate with each other. | Your trivia game uses the OpenTrivia Database API to fetch real questions, transforming static zones into dynamic content. |
| 📋 JSON | JavaScript Object Notation — a text format for exchanging structured data between applications. | OpenTrivia Database returns question data in JSON format, which your `transformQuestion` function converts to game format. |
| 📨 HTTP request | A message sent from your application to a server asking for specific data or resources. | Each zone click triggers an HTTP request to OpenTrivia Database with your zone's specific parameters. |
| 📡 Fetch API | A modern JavaScript interface for making HTTP requests to servers and APIs. | Your `fetchQuestions` function uses `fetch` to request trivia data based on each zone's category and difficulty settings. |
| 🔗 Uniform Resource Identifier (URI) | A string that uniquely identifies a resource on the internet, which can be the same as or part of a URL. | Your `buildApiUrl` function creates URIs that uniquely identify the OpenTrivia API endpoint with specific parameters for each zone. |
| 🔐 URL encoding | A method of converting characters into a format safe for transmission over the internet. | Question text comes URL-encoded from the API — your `decodeText` function converts it to readable game text. |
| ⏰ asynchronous programming | Code execution that doesn't block while waiting for operations to complete, allowing other code to run. | Your game stays responsive while fetching questions — users can still interact with the UI during network requests. |
| 🔄 async/await | JavaScript syntax that makes asynchronous code look and behave like synchronous code. | Your `fetchQuestions` function uses `async/await` to handle API requests in a readable, step-by-step manner. |
| 🤝 promise | A JavaScript object representing the eventual completion or failure of an asynchronous operation. | Every `fetch` call returns a promise — your game will eventually get questions or handle the error gracefully. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Generating Dynamic Questions

You just built a complete API integration with data fetching, transformation, and error handling — excellent work!

Now let's deepen your understanding of APIs, asynchronous programming, and data transformation patterns. Here are the most impactful questions to ask your AI assistant about today's session:

- **What makes APIs so important in modern web development?**
- **Why do APIs often return data in formats that need transformation?**
- **What are the benefits of separating data fetching from data transformation?**
- **How does the Fetch API handle network errors and what should developers do about them?**
- **How do helper functions like `decodeText` and `shuffleAnswers` improve code quality?**
- **How does the return keyword work in JavaScript functions, and can you explain it with a non-tech example?**
- **What is functional programming?**

# Session 6 — Adding Question Caching

Browser Storage & Caching 💾

You're about to supercharge your trivia game with browser storage and caching! This guide walks you through implementing localStorage to store API responses, understanding performance optimization techniques, and building a robust caching system that makes your game lightning-fast. Ready to experience the magic of instant loading? Let's go!

## Table of Contents

- [Why Caching Matters](#why-caching-matters)
- [Exploring Browser Storage](#exploring-browser-storage)
- [Building Cache Helper Functions](#building-cache-helper-functions)
- [Updating fetchQuestions with Caching](#updating-fetchquestions-with-caching)
- [Testing Your Cache](#testing-your-cache)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 5.

<a id="why-caching-matters"></a>

## ⚡ Why Caching Matters

Before we dive into code, let's understand why **caching** is crucial for modern web applications.

**The Problem:** Every time you click a zone, your game makes a network request to the OpenTrivia Database. This means:

- **Slow loading** - Network requests take time
- **Wasted bandwidth** - Downloading the same questions repeatedly
- **Rate limiting** - APIs limit how often you can request data (OpenTrivia allows one request per 5 seconds)
- **Poor user experience** - Users wait for content they've already seen

**The Solution:** Store API responses locally in the browser so subsequent requests are instant.

**Caching** is a fundamental performance optimization technique used in some form by every major website and app. When you visit YouTube, Netflix, or Instagram, they cache images, videos, and data locally so your experience is fast and smooth.

<a id="exploring-browser-storage"></a>

## 🗄️ Exploring Browser Storage

Let's understand **localStorage** — your browser's built-in storage system for saving data locally.

**localStorage** is like a digital filing cabinet in your browser where you can store **key-value pairs** of information. Unlike temporary data that vanishes when pages refresh, localStorage data survives browser restarts and persists until explicitly removed.

### Common localStorage Use Cases:
- **User preferences** - Theme, language, font size
- **Game progress** - Completed levels, high scores, settings
- **Form data** - Draft messages, shopping cart contents
- **API responses** - Cached data for faster loading

### localStorage Lifecycle (CRUD Operations):

```text
┌─────────────────────────────────────────────────────────────────┐
│                    localStorage Lifecycle                       │
├─────────────────────────────────────────────────────────────────┤
│ CREATE/UPDATE: localStorage.setItem('key', 'value')             │
│ READ:          const value = localStorage.getItem('key')        │
│ DELETE:        localStorage.removeItem('key')                   │
│ CHECK:         if (localStorage.getItem('key')) { ... }         │
└─────────────────────────────────────────────────────────────────┘
```



localStorage provides persistent storage that survives browser refreshes and even computer restarts. It's **synchronous** (blocking), and ideally with small to medium amounts of data. For your trivia game, it's perfect for caching question sets that are relatively small but expensive to fetch over the network.



<a id="building-cache-helper-functions"></a>

## 🔧 Building Cache Helper Functions

Time to build the foundation of your caching system! Helper functions abstract the complexity of localStorage operations into clean, reusable pieces. Each function has a specific role:

| Function | Purpose | Key Operation |
|----------|---------|---------------|
| `getCacheKey` | Creates unique identifiers | Generates consistent cache keys |
| `getCachedQuestions` | Retrieves stored data | **Deserialization** with `JSON.parse()` |
| `setCachedQuestions` | Stores new data | **Serialization** with `JSON.stringify()` |

1. **Open `src/services/trivia.js`**
2. **Add all three cache helper functions** after the existing helper functions

   ```javascript
   function getCacheKey(zoneId) {
     return `trivia_questions_zone_${zoneId}`;
   }

   function getCachedQuestions(zoneId) {
     const cacheKey = getCacheKey(zoneId);
     const cached = localStorage.getItem(cacheKey);
     return cached ? JSON.parse(cached) : null;
   }

   function setCachedQuestions(zoneId, questions) {
     const cacheKey = getCacheKey(zoneId);
     localStorage.setItem(cacheKey, JSON.stringify(questions));
   }
   ```

### Example Usage:
```javascript
// This is what your functions do:
setCachedQuestions(0, questions);  // Store questions for zone 0
const cached = getCachedQuestions(0);  // Get questions for zone 0 (or null if none)
```

Notice the **ternary operator** `cached ? JSON.parse(cached) : null` in `getCachedQuestions` — this concise syntax means "If cached data exists, parse it; otherwise return null."



These helper functions represent a fundamental software engineering principle: **abstraction**. By wrapping localStorage complexity in simple functions, you're building the same kind of modular, maintainable code architecture used in modern applications. This pattern makes your caching system easy to test, debug, and extend.

<a id="updating-fetchquestions-with-caching"></a>

## 🔄 Updating fetchQuestions with Caching

Now let's integrate your cache functions into the main `fetchQuestions` function to implement the complete caching flow.

1. **Add cache checking** at the beginning of `fetchQuestions` (before the zone lookup):

   ```javascript
   export async function fetchQuestions(zoneId, count = null) {
     // Cache check pattern: try cache first, fetch on miss
     const cachedQuestions = getCachedQuestions(zoneId);
     if (cachedQuestions) {
       console.log(`Cache hit for zone ${zoneId}`);
       return cachedQuestions;
     }

     console.log(`Cache miss for zone ${zoneId} - fetching from API`);

     const zone = getZoneById(zoneId);
     // ... rest of existing code
   ```

2. **Add cache storage** after successful data transformation (before the return statement):

   ```javascript
   const questions = data.results.map(apiQuestion => transformQuestion(apiQuestion));
   
   setCachedQuestions(zoneId, questions);
   
   return questions;
   ```



This implements the classic **cache-aside pattern** used in modern applications: check cache first, fetch from source on miss, store result in cache. The console logging helps you understand when cache hits and misses occur, which is valuable for debugging and performance monitoring.

<a id="testing-your-cache"></a>

## 🧪 Testing Your Cache

Let's see your caching system in action! You'll observe cache **misses**, **hits**, and **persistence** using DevTools and localStorage. Understanding this flow is crucial:

```text
User clicks zone → Check cache → Cache hit? → Return cached data
                                     │
                                     ▼ (Cache miss)
                              Fetch from API → Store in cache → Return data
```

### 🔍 Setup: Open DevTools and Locate Local Storage

- **Press** F12 or right-click → Inspect
- **Navigate** to
  - **Chrome/Edge**: Application tab
  - **Firefox**: Storage tab
- In the sidebar, **expand** Local Storage and select your site's domain (e.g., `http://localhost:5173`)
- **Keep** DevTools open as you'll watch cache entries appear in real-time

---

### 🧊 First-Time Load: Observe a Cache Miss

- **Click** the active zone for the first time
- In the console, **look** for `Cache miss for zone X - fetching from API`
- In localStorage, **confirm**
  - A new entry appears: `trivia_questions_zone_0`
  - It contains serialized JSON data
- **Click** the entry to inspect the cached questions

---

### 🔁 Repeat Load: Confirm a Cache Hit

- **Click** the same zone again
- In the console, **look** for `Cache hit for zone X`
- In localStorage, **verify**
  - The entry remains unchanged
  - No new data was fetched

---

### 🔄 Page Reload: Test Cache Persistence

- **Refresh** the browser
- **Click** the same zone again
- **Confirm**
  - Console still shows `Cache hit`
  - Cached entry is still present in localStorage

---

### 🧹 Manual Clear: Test Cache Reset

- In localStorage, **right-click** the cache entry → Delete
- **Click** the zone again
- **Confirm**
  - Console shows `Cache miss`
  - Entry repopulates with fresh data



You're basically becoming a detective! By watching console logs, peeking into browser storage, and tracking network requests, you're learning to **follow the digital breadcrumbs** your code leaves behind. This is exactly how real developers figure out why apps crash, why websites load slowly, or why that "it worked yesterday" bug suddenly appeared. These debugging superpowers will make you unstoppable when building your own projects.

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the caching and browser storage concepts you just learned:_

| Term   | Definition | Why it matters |
|--------|------------|----------------|
| ⚡ caching | Storing frequently accessed data in fast storage to avoid expensive operations like network requests. | Makes your game feel instant and responsive by eliminating repeated API calls for the same questions. |
| 🚦 rate limiting | API restrictions on request frequency to prevent server overload and ensure fair usage. | OpenTrivia Database limits requests to once every 5 seconds — caching helps avoid these limits. |
| 💾 localStorage | Browser storage that persists data as key-value pairs across sessions and page refreshes. | Your trivia questions stay cached even after closing and reopening the browser, providing instant loading. |
| 🔑 key-value pairs | Data storage format where each piece of information has a unique identifier (key) and associated data (value). | localStorage uses this format: your cache keys identify zones, values contain question data. |
| 📦 serialization | Converting JavaScript objects into text format for storage using JSON.stringify(). | localStorage only stores strings, so your question objects must be serialized before storage. |
| 🔄 deserialization | Converting stored text back into JavaScript objects using JSON.parse(). | Transforms cached text back into usable question objects for your game. |
| 🎯 cache hit | When requested data is found in cache and can be returned immediately without external requests. | Your zones load instantly on subsequent clicks, providing smooth user experience. |
| 🔍 cache miss | When requested data is not in cache and must be fetched from the original source. | Triggers API request to OpenTrivia Database and stores result for future cache hits. |
| ❓ ternary operator | Concise conditional syntax using ? and : for simple if/else logic in expressions. | Used in your cache retrieval: `cached ? JSON.parse(cached) : null` — clean and readable. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Adding Question Caching

You just built your first caching system with localStorage and helper functions — great work!

Here are some key questions to ask your AI assistant to deepen your understanding of what you just built:

- **Why is caching so important for web apps and user experience?**
- **What happens when I use JSON.stringify and JSON.parse with my question data?**
- **Why do we need helper functions like getCacheKey and getCachedQuestions?**
- **What would happen if I didn't have caching in my trivia game?**
- **How can I use the browser DevTools to debug localStorage issues?**

# Session 7 — Creating the Quiz Experience

Building Complex Interactive Components 🎛️

You're about to build the heart of your trivia game — interactive quiz components that bring your cached questions to life! This guide walks you through component composition, array mapping patterns, and creating dynamic user feedback systems. Ready to transform your static zones into engaging quiz experiences? Let's go!

## Table of Contents

- [Understanding Component Composition](#understanding-component-composition)
- [Connecting the Quiz Modal](#connecting-the-quiz-modal)
- [Building Answer Buttons](#building-answer-buttons)
- [Making Buttons Interactive](#making-buttons-interactive)
- [Adding Feedback Messages](#creating-feedback-messages)
- [Testing Your Quiz System](#testing-your-quiz-system)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 6.

<a id="understanding-component-composition"></a>

## 🧩 Understanding Component Composition

Before we start coding, let's understand how complex components are built from smaller pieces — the foundation of scalable React architecture.

**Component composition** is like building with LEGO blocks — you create complex structures by snapping together smaller, focused pieces. Your `QuizModal` is actually composed of five smaller components working together:

```text
QuizModal (the container)
├── ProgressHeader (shows question progress)
├── QuestionHeader (displays the question)
├── AnswerChoices (interactive answer buttons)
├── AnswerFeedback (shows results)
└── ContinueButton (navigation control)
```



**Component composition** is how React apps stay organized and maintainable. Instead of one massive component doing everything, you break functionality into focused pieces. Each component has a single responsibility, making your code easier to understand, test, and modify.

<a id="connecting-the-quiz-modal"></a>

## 🎮 Connecting the Quiz Modal

Let's connect your quiz modal to the game flow so clicking zones actually shows quiz questions.

1. **Open** `src/App.jsx` and add the QuizModal import at the top

   ```javascript
   import QuizModal from "./components/QuizModal";
   ```

2. **Access** the quiz visibility state by adding `isQuizVisible` to the `useGame` destructuring

   ```javascript
   const { screen, isQuizVisible } = useGame();
   ```

3. **Add conditional rendering** for the QuizModal inside the PLAYING screen section

   ```javascript
   {screen === SCREENS.PLAYING && (
     <>
       <GameMap />
       <HUD />
       {/* Show quiz modal when isQuizVisible is true */}
       {isQuizVisible && <QuizModal />}
       <CoordinateDisplay />
     </>
   )}
   ```

   **Conditional rendering** with `&&` is a React pattern that shows components only when certain conditions are true. When `isQuizVisible` is true, the `QuizModal` renders; when false, nothing renders.

4. **Open** `src/components/GameMap.jsx` and add `setIsQuizVisible` to the `useGame` destructuring

   ```javascript
   const { activeZone, loadQuestionsForZone, setIsQuizVisible, zoneProgress } = useGame();
   ```

5. **Update** the handleZoneClick function to show the quiz modal after loading questions

   ```javascript
   await loadQuestionsForZone(zoneId);
   setIsQuizVisible(true);
   ```

   **Test**: **Click** a zone → QuizModal should appear with your cached questions!



This pattern controls what users see based on app state. Your quiz modal will appear and disappear based on user actions, creating a smooth interactive experience.

<a id="building-answer-buttons"></a>

## 🔘 Building Answer Buttons

Now let's build the interactive answer buttons that transform your question data into clickable choices.

1. **Open** `src/components/QuizModal.jsx` and **find** the QuestionHeader function

2. **Add** the AnswerChoices component after the QuestionHeader function

   ```javascript
   function AnswerChoices({ answers }) {
     return <div className="answers-grid"></div>;
   }
   ```

3. **Add** the component to the JSX (right after `<QuestionHeader question={question} />`)

   ```javascript
   <AnswerChoices answers={question.answers} />
   ```

   **Test** by clicking zone → React DevTools → finding AnswerChoices → confirming answers prop is populated

4. **Transform the answers array into buttons** using React's mapping pattern

   ```javascript
   function AnswerChoices({ answers }) {
     return (
       <div className="answers-grid">
         {answers.map((answer, index) => (
           <button key={index} className="answer-button">
             {answer}
           </button>
         ))}
       </div>
     );
   }
   ```

   **Array mapping** transforms each item in an array into something else. Here, each answer string becomes a button element. React needs a unique **key prop** for each mapped element to track changes efficiently.

   **Test** by clicking zone → You should see answer buttons appear in the modal



By starting with a simple structure and then adding the mapping logic, you followed a development pattern: build incrementally and test each step. **Array mapping** is everywhere in React — any time you have a list of data that becomes a list of components, you use `map()`. The **key prop** helps React optimize updates by tracking which items changed, moved, or were added/removed, making your dynamic button lists performant and reliable.

<a id="making-buttons-interactive"></a>

## 🎨 Making Buttons Interactive

Let's add click functionality and dynamic styling that shows correct/incorrect answers with visual feedback.

1. **Add click handling** by updating AnswerChoices and JSX

   ```javascript
   function AnswerChoices({ answers, onAnswerClick }) {
     return (
       <div className="answers-grid">
         {answers.map((answer, index) => (
           <button
             key={index}
             className="answer-button"
             onClick={() => onAnswerClick(index)}
           >
             {answer}
           </button>
         ))}
       </div>
     );
   }
   ```

   ```javascript
   <AnswerChoices 
     answers={question.answers} 
     onAnswerClick={handleAnswerClick}
   />
   ```

   **Test** by clicking zone → clicking answer button → Next Question should be enabled allowing you to move to next question

2. **Add conditional styling** by updating AnswerChoices and JSX

   ```javascript
   function AnswerChoices({ answers, onAnswerClick, chosenAnswer, correctAnswer }) {
     const getButtonStyle = (answerIndex) => {
       if (chosenAnswer === null) return "answer-button";
       if (answerIndex === correctAnswer) return "answer-button correct";
       if (answerIndex === chosenAnswer) return "answer-button incorrect";
       return "answer-button";
     };

     return (
       <div className="answers-grid">
         {answers.map((answer, index) => (
           <button
             key={index}
             className={getButtonStyle(index)}
             onClick={() => onAnswerClick(index)}
           >
             {answer}
           </button>
         ))}
       </div>
     );
   }
   ```

   ```javascript
   <AnswerChoices 
     answers={question.answers} 
     onAnswerClick={handleAnswerClick}
     chosenAnswer={chosenAnswer}
     correctAnswer={question.correct}
   />
   ```

   **Test** by clicking zone → clicking answer → Different styling for correct vs incorrect

3. **Prevent multiple clicks** by updating AnswerChoices

   ```javascript
   function AnswerChoices({ answers, onAnswerClick, chosenAnswer, correctAnswer }) {
     const getButtonStyle = (answerIndex) => {
       if (chosenAnswer === null) return "answer-button";
       if (answerIndex === correctAnswer) return "answer-button correct";
       if (answerIndex === chosenAnswer) return "answer-button incorrect";
       return "answer-button";
     };

     return (
       <div className="answers-grid">
         {answers.map((answer, index) => (
           <button
             key={index}
             className={getButtonStyle(index)}
             onClick={() => onAnswerClick(index)}
             disabled={chosenAnswer !== null}
           >
             {answer}
           </button>
         ))}
       </div>
     );
   }
   ```

   **Test** by clicking zone → clicking answer → trying to click other buttons → Other buttons should be unclickable



**Event handlers** like `onClick` connect user actions to your app's logic, making static components come alive with interactivity. **Conditional styling** then provides immediate visual feedback to users through the `getButtonStyle` function, which returns different CSS classes based on the current state. The `disabled` attribute prevents multiple clicks after an answer is selected, creating a polished user experience where buttons respond intelligently to user interactions.

<a id="creating-feedback-messages"></a>

## 💬 Adding Feedback Messages

Let's add personality to your game with custom feedback messages that celebrate correct answers and encourage players after mistakes, then make them dynamic with random selection.

1. **Create** the messages file by right-clicking `src/constants` → New File → naming it `messages.js`

2. **Add** feedback message arrays

   ```javascript
   export const CORRECT_FEEDBACK = [
     "🎉 Nailed it!",
     "🔥 You got it!",
     "✨ Awesome!",
     "🏆 Perfect!",
     "💯 Brilliant!",
     "⭐ Outstanding!",
     "🚀 Amazing!"
   ];

   export const INCORRECT_FEEDBACK = [
     "😬 Missed it!",
     "💥 Not quite!",
     "🤔 Close one!",
     "😅 Try again!",
     "🎯 Almost there!",
     "💪 Keep going!",
     "🧠 Learning time!"
   ];
   ```

3. **Import** the constants into QuizModal.jsx

   ```javascript
   import { CORRECT_FEEDBACK, INCORRECT_FEEDBACK } from "../constants/messages";
   ```

4. **Find** the AnswerFeedback function in QuizModal.jsx and replace the placeholder message with random selection logic

   ```javascript
   function AnswerFeedback({ hasAnswered, isCorrect, correctAnswerText }) {
     if (!hasAnswered) {
       return <AnswerPlaceholder />;
     }

     // Random selection using Math.random() and array length
     const messages = isCorrect ? CORRECT_FEEDBACK : INCORRECT_FEEDBACK;
     const message = messages[Math.floor(Math.random() * messages.length)];

     return (
       <div className="result">
         <strong>{message}</strong>
         {!isCorrect && <div>The answer was: {correctAnswerText}</div>}
       </div>
     );
   }
   ```

5. **Add** AnswerFeedback component by placing in JSX right after QuestionHeader

   ```jsx
   <AnswerFeedback
     hasAnswered={chosenAnswer !== null}
     isCorrect={chosenAnswer === question.correct}
     correctAnswerText={question.answers[question.correct]}
   />
   ```

   **Test** by clicking zone → clicking answers → seeing different messages each time

### Random Selection Breakdown

```javascript
const messages = isCorrect ? CORRECT_FEEDBACK : INCORRECT_FEEDBACK;
// Choose the right array based on whether answer was correct

const message = messages[Math.floor(Math.random() * messages.length)];
// Math.random() → 0 to 0.999...
// * messages.length → 0 to array length
// Math.floor() → Round down to whole number
// messages[index] → Get message at that position
```



**Constants** keep your feedback messages organized and easy to modify. By storing them in a separate file, you can easily add new messages or change the tone without hunting through component code. **Random selection** adds variety and personality to your game using `Math.random()` and `Math.floor()` — the same pattern used in games, animations, and any app that needs variety.

### 🏆 Bonus Challenge

Add more feedback messages to each array to increase variety! Try different emojis and encouraging phrases.

<a id="testing-your-quiz-system"></a>

## 🧪 Testing Your Quiz System

Let's test your complete quiz system and verify all the interactive pieces work together.

### Complete Quiz Flow Test

- **Navigate** to game by clicking "Start Adventure"
- **Click** any zone where modal should appear with question and answers
- **Click** any answer 
  - Button should show correct/incorrect styling
  - Random feedback message should appear
  - Other buttons should be disabled
  - Continue button should become enabled
- **Click** Continue button where next question should load
- **Complete** all questions where modal should close and zone should be marked complete

### React DevTools Inspection

- **Open** DevTools by pressing F12 → Components tab
- **Find** QuizModal by examining the component tree
- **Inspect** AnswerChoices by checking answers prop and chosenAnswer state
- **Watch** state changes by clicking answers and observing chosenAnswer updates



**End-to-end testing** ensures all your components work together correctly. By testing the complete user flow, you catch integration issues that might not appear when testing individual components.

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the component composition and interaction concepts you just learned:_

| Term   | Definition | Why it matters |
|--------|------------|----------------|
| 🧩 component composition | Building complex components by combining smaller, focused components together. | Your `QuizModal` is composed of five smaller components, making it easier to understand and maintain. |
| 🗺️ Array.map() | JavaScript method that transforms each item in an array into something else, returning a new array. | Essential for converting your answers array into JSX button elements in React. |
| 🔑 key prop | Unique identifier React needs for each element in a mapped array to track changes efficiently. | Helps React optimize updates when answer lists change or reorder. |
| 🔄 event handling | Managing user interactions like clicks, form submissions, and keyboard input in React components. | Your answer buttons use `onClick` handlers to trigger state changes and provide interactivity. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Creating the Quiz Experience

You just built a complex interactive quiz system using component composition, array mapping, and dynamic styling — excellent work!

Now let's deepen your understanding of React patterns, component architecture, and user interaction design. Here are the most impactful questions to ask your AI assistant about today's session:

- **How does component composition make React apps more maintainable than monolithic components?**
- **How do conditional classes provide better user experience than static styling?**
- **How does the disabled attribute improve the user experience in quiz interfaces?**
- **Why is it better to store feedback messages in constants rather than hardcoding them?**
- **How does the AnswerChoices component demonstrate the single responsibility principle?**

# Session 8 — Implementing Scoring & Victory

Application State Management 🏆

You're about to add the most satisfying part of any game — scoring and victory! This guide walks you through implementing a complete scoring system, managing complex application state, and creating your first independent React component. Ready to make your trivia game feel like a real achievement? Let's go!

## Table of Contents

- [Understanding Application State](#understanding-application-state)
- [Adding Score Tracking](#adding-score-tracking)
- [Implementing Score Updates](#implementing-score-updates)
- [Adding Cache Clearing](#adding-cache-clearing)
- [Updating Reset Functionality](#updating-reset-functionality)
- [Solo Mission: GameOver Component](#solo-mission-gameover-component)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 7.

<a id="understanding-application-state"></a>

## 🧠 Understanding Application State

Before we dive into scoring, let's understand how **application state** differs from the component state you've used before.

**Application state** is the complete picture of your game's current condition — everything from the player's score to which zones are completed. Think of it as your game's "save file" that tracks all progress and achievements.

### State Categories in Your Game

Your `GameContext` manages five categories of state:

| Category | Purpose | Examples |
|----------|---------|----------|
| **Game State** | Core game progress | `score`, `screen`, `zoneProgress` |
| **Quiz State** | Current quiz session | `currentQuestions`, `currentQuestion`, `correctAnswers` |
| **Audio** | Sound controls | `music` settings |
| **Actions** | Game logic functions | `recordCorrectAnswer`, `resetGame` |
| **Controls** | UI state setters | `setScreen`, `setIsQuizVisible` |

### Visualizing Game State

Think of your `GameContext` as the brain of your game — it keeps track of everything that's happening behind the scenes. The `useGame` hook provides access to this brain from any component that needs it. The mind map below breaks down how your game's state is organized, with a spotlight on **actions** — these are the functions that drive your game logic and help different parts of your app work together:

![GameContext Mind Map](images/session-08/game-context-mind-map.png)
*Figure: GameContext Mind Map*



**Application state management** is what separates simple websites from complex, interactive applications. Your scoring system will coordinate multiple pieces of state to create a cohesive game experience where every action has consequences and every achievement is tracked.

<a id="adding-score-tracking"></a>

## 🏆 Adding Score Tracking

Let's add a scoring system that tracks player performance and displays it prominently in your game's HUD.

1. **Open** `src/context/GameContext.jsx` and add score state inside the GameProvider function

   ```javascript
   const [score, setScore] = useState(0);
   ```

2. **Make** score available by adding it to the Context value

   ```javascript
   <GameContext value={{
     // GAME STATE
     screen,
     score,
     zoneProgress,
     // ... rest of existing properties
   ```

3. **Open** `src/components/HUD.jsx` and add a Scoreboard component at the top of the file

   ```javascript
   function Scoreboard() {
     const { score } = useGame();
     return <div className="score-display">Score: {score}</div>;
   }
   ```

4. **Update** HUD component to render both components using a React Fragment (`<>...</>`)

   ```javascript
   // Replace this single line:
   return <CurrentZone />;
   
   // With this Fragment structure:
   return (
     {/* Fragment groups components without extra DOM wrapper */}
     <>
       <Scoreboard />
       <CurrentZone />
     </>
   );
   ```

5. **Test** by navigating to the game screen and verifying Score: 0 appears in HUD



The **Scoreboard component** demonstrates the single responsibility principle — it has one job: display the current score. This modular approach makes your code easier to maintain and test.

<a id="implementing-score-updates"></a>

## 📊 Implementing Score Updates

Now let's make the score actually change based on player performance with point rewards and penalties.

1. **Open** `src/context/GameContext.jsx` and find the `recordCorrectAnswer` function, then add points for correct answers

   ```javascript
   const recordCorrectAnswer = () => {
     setCorrectAnswers((prev) => prev + 1);
     setScore((prev) => prev + POINTS_PER_CORRECT);
   };
   ```

2. **Find** the `recordIncorrectAnswer` function and add point deduction

   ```javascript
   const recordIncorrectAnswer = () => {
     // Prevent score from going negative
     setScore((prev) => Math.max(0, prev - POINTS_PER_CORRECT));
   };
   ```

3. **Test** by clicking zone, answering questions, and observing score changes

   - Correct answer → +100 points
   - Incorrect answer → -100 points (but never below 0)



**Updater functions** like `setScore((prev) => prev + 100)` are crucial when updating state based on the previous value. React batches state updates, so using the previous value ensures accurate calculations even when multiple updates happen quickly.

<a id="adding-cache-clearing"></a>

## 🗄️ Adding Cache Clearing

Let's add cache clearing functions to remove stored questions when zones are completed or the game resets.

1. **Open** `src/services/trivia.js` and add cache clearing functions at the end of the file

   ```javascript
   export function clearQuestionCache(zoneId) {
     const cacheKey = getCacheKey(zoneId);
     localStorage.removeItem(cacheKey);
   }

   export function clearAllQuestionCache() {
     Object.keys(localStorage)
       .filter((key) => key.startsWith("trivia_questions_zone_"))
       .forEach((key) => localStorage.removeItem(key));
   }
   ```

2. **Import** the cache functions into GameContext.jsx

   ```javascript
   import { 
     fetchQuestions, 
     clearQuestionCache, 
     clearAllQuestionCache 
   } from "../services/trivia";
   ```

3. **Update** the `checkZoneCompletion` function to clear the current zone's cached questions when completed

   ```javascript
   const checkZoneCompletion = () => {
     if (activeZone === null || currentQuestions.length === 0) return;

     const questionsNeeded = Math.ceil(
       currentQuestions.length * PASS_PERCENTAGE
     );
     const passed = correctAnswers >= questionsNeeded;

     if (passed) {
       setZoneProgress((prev) => ({
         ...prev,
         [activeZone]: { completed: true },
       }));
       
       clearQuestionCache(activeZone);

       if (activeZone === ZONES.length - 1) {
         setScreen(SCREENS.GAME_OVER);
       }
     }
   };
   ```



**Cache management** prevents stale data from affecting gameplay. When players complete a zone, clearing its cache ensures they get fresh questions if they replay. The `Object.keys()` and `filter()` pattern is an effective way to find and remove related localStorage entries.

<a id="updating-reset-functionality"></a>

## 🔄 Updating Reset Functionality

Let's update the reset function to properly clear all game state and cached data for a fresh start.

1. **Find** the `resetGame` function in GameContext.jsx and update it

   ```javascript
   const resetGame = () => {
     setScore(0);
     setZoneProgress({
       0: { completed: false },
       1: { completed: false },
       2: { completed: false },
     });
     setIsQuizVisible(false);
     setCurrentQuestions([]);
     setCurrentQuestion(0);
     setCorrectAnswers(0);
     clearAllQuestionCache();
   };
   ```

2. **Test** the reset functionality by completing a zone and then using React DevTools to trigger `resetGame()`



**Complete state reset** ensures players can start fresh without any lingering data from previous games. This includes both React state and localStorage cache, providing a clean slate for new gameplay sessions.

<a id="solo-mission-gameover-component"></a>

## 🎖️ Solo Mission: GameOver Component

Now for the exciting part — you'll create a GameOver component that celebrates player achievements and allows them to play again! You've got all the tools — now it's time to build your own victory screen using everything you've learned.

### 1. Create the Component Foundation

- **Create** `src/components/GameOver.jsx` with function component and default export
- **Return** JSX with div `className="game-over"` containing h1 congratulations message
- **Import** `GameOver` into `App.jsx` and add conditional rendering for `SCREENS.GAME_OVER`
- **Test** by using React DevTools → setting `screen` to "gameover" → Component appears

### 2. Add Score Display

- **Import** `useGame` hook and destructure `score`
- **Add** div with `className="final-score"` displaying `Final Score: {score}`
- **Test** by checking score display → Shows current game score

### 3. Add Play Again Functionality

- **Create** click handler calling `resetGame` and `setScreen(SCREENS.SPLASH)`
- **Import** and render `GameButton` with "Play Again" text and `"primary"` variant
- **Test** by clicking Play Again → Game resets → Returns to splash screen

### Testing Tips

- **Quick testing** by using React DevTools to change `screen` state to "gameover" (find `GameProvider` → hooks → screen)
- **Full testing** by completing all three zones to naturally trigger GameOver screen
- **Verify** final score displays correctly and Play Again button resets everything

### **Requirements Checklist**

Your completed GameOver component must:

- Export function component as default
- Wrap content in div with `className="game-over"`
- Display congratulations using h1 element
- Import `GameButton`, `useGame`, `SCREENS`
- Show final score in div with `className="final-score"`
- Include Play Again button using `GameButton` with `"primary"` variant
- Reset game and navigate to splash screen when Play Again is clicked
- Display when screen state equals `SCREENS.GAME_OVER` in `App.jsx`

### 🔍 Reference Files

- **`SplashScreen.jsx`**: Component structure, `GameButton` usage, `useGame` hook, screen navigation, click handler patterns
- **`HUD.jsx`**: Accessing `score` from `useGame` hook
- **Session 2 guide**: `GameButton` props and component export patterns
- **Session 3 guide**: `SCREENS` constants and navigation patterns



This challenge combines everything you've learned: component creation, props, shared state, event handling, and conditional rendering. Following guided steps without code examples builds confidence in applying React patterns — you're connecting concepts rather than copying code.



<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for the key concepts you just learned:_

| Term   | Definition | Why it matters |
|--------|------------|----------------|
| 🏗️ application state | The complete condition of an application at a specific moment in time, encompassing all the information it needs to function correctly. | Your GameContext manages all application state — screen, score, zone progress — making it accessible to any component through useGame. |
| 🔄 updater function | A function passed to setState that receives the previous state value and returns the new state. | Essential for score calculations — ensures accurate updates even when React batches multiple state changes. |
| 🎯 single responsibility principle | Design pattern where each component or function has one clear, focused purpose. | Your Scoreboard component only displays score — this separation makes code easier to test and maintain. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Implementing Scoring & Victory

You just implemented a complete scoring system, managed complex application state, and built your first independent React component — excellent work!

Now let's deepen your understanding of state management patterns, component architecture, and development practices. Here are the most impactful questions to ask your AI assistant about today's session:

- **How does application state differ from component state, and when should I use each?**
- **Why are updater functions important for state that depends on previous values?**
- **What are some common patterns for resetting application state in React apps?**
- **What makes a component follow the single responsibility principle?**
- **How do you decide what props a new component needs when building it from scratch?**

# Session 9 — Adding Theme Music

Custom Hooks & Browser APIs 🎵

You're about to add another feature to your trivia game — theme music! This guide walks you through creating custom React hooks, working with browser audio APIs, and building reusable audio controls. Ready to bring your game to life with sound? Let's go!

## Table of Contents

- [Understanding Custom Hooks](#understanding-custom-hooks)
- [Exploring Browser Audio APIs](#exploring-browser-audio-apis)
- [Understanding Refs and useRef](#understanding-refs-and-useref)
- [Building the MusicToggle Component](#building-the-musictoggle-component)
- [Adding Audio Reference to useAudio](#adding-audio-reference-to-useaudio)
- [Implementing Audio Playback](#implementing-audio-playback)
- [GitHub Copilot Workflow](#github-copilot-workflow)
- [Solo Mission: Complete useAudio Hook](#solo-mission-complete-useaudio-hook)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 8.

<a id="understanding-custom-hooks"></a>

## 🪝 Understanding Custom Hooks

Before we dive into audio, let's understand **custom hooks** — one of React's most powerful patterns for code reuse.

**Custom hooks** are functions that start with "use" and let you extract component logic into reusable functions. Think of them as your own personal React features that you can use across multiple components.

### Built-in vs Custom Hooks

| **Built-in Hooks** | **Custom Hooks** |
|-------------------|------------------|
| `useState`, `useEffect`, `useRef` | `useGame`, `useAudio` |
| Provided by React | Created by developers |
| Basic React features | Complex, reusable logic |
| Used in every React app | Specific to your app's needs |



**Custom hooks** embody one of programming's most important principles: **"Don't Repeat Yourself" (DRY)**. Instead of copying and pasting audio logic into every component that needs music, you encapsulate that complexity into a reusable `useAudio` hook. Now, any component can add background music with a single line of code:

```javascript
const music = useAudio('/music.mp3');
```

This is the difference between basic and advanced code — experienced developers reduce repetition by creating reusable solutions. Custom hooks let you **"write once, use often,"** making your code cleaner, more maintainable, and easier to scale.

### 🏆 Bonus Challenge

Visit [useHooks – The React Hooks Library](https://usehooks.com/) and find three interesting custom hooks that might be great for use in a web-based video game.

<a id="exploring-browser-audio-apis"></a>

## 🔊 Exploring Browser Audio APIs

Let's understand the **HTMLAudioElement** — the browser's built-in interface for controlling audio playback.

You might be familiar with HTML audio elements like `<audio src="music.mp3"></audio>` that you write in HTML files. **HTMLAudioElement** is the JavaScript version of the same thing — it's like a digital music player that you create and control entirely with JavaScript code. Instead of writing HTML tags, you use `new Audio()` to create the player, then control it with methods like `play()` and `pause()`.

### Creating Audio Elements

```javascript
// Create new audio element
const audio = new Audio(getAssetPath('audio/theme-music.mp3'));

// Configure audio properties
audio.loop = true;        // Repeat when finished
audio.volume = 0.5;       // 50% volume
```

### Audio Control Methods

```javascript
// Playback control
audio.play();             // Start playing
audio.pause();            // Stop playing

// Properties
audio.currentTime = 0;    // Reset to beginning
audio.muted = true;       // Mute audio
```



The **HTMLAudioElement** gives you programmatic control over audio playback. Your `useAudio` hook will wrap this browser API in a clean React interface, making it easy to add music to any component.

<a id="understanding-refs-and-useref"></a>

## 🔗 Understanding Refs and useRef

Now let's understand **refs** — React's way to "step outside" the component system and work directly with DOM elements or browser APIs.

**Refs** are like bookmarks that let you remember information that doesn't affect what's rendered on the page. Unlike **state**, changing a ref doesn't trigger re-renders.

### State vs Refs: The Key Differences

| **State** | **Refs** |
|-----------|----------|
| Triggers re-renders when changed | No re-renders when changed |
| For data that affects UI | For data that doesn't affect UI |
| `const [value, setValue] = useState()` | `const ref = useRef()` |
| Access with `value` | Access with `ref.current` |

### Common useRef Patterns

**Storing Mutable Values (Your Audio Use Case):**
```javascript
function useAudio(src) {
  const audioRef = useRef(null); // Starts as null, won't trigger re-renders
  
  const play = () => {
    if (!audioRef.current) { // Check if audio element exists
      audioRef.current = new Audio(src); // Store in .current property
    }
    audioRef.current.play(); // Access stored element via .current
  };
}
```

The ref acts like a bookmark — it remembers where your audio element is so you can find it again later. Create the audio element once, bookmark it in `audioRef.current`, then use that bookmark every time `play()` is called. No re-renders, no recreating the same audio element.

**Accessing DOM Elements:**
```javascript
function MyComponent() {
  const inputRef = useRef(null); // Create ref for DOM element
  
  const focusInput = () => {
    inputRef.current.focus(); // Call DOM method via .current
  };
  
  return <input ref={inputRef} />; // Connect ref to DOM element
}
```

The ref creates a direct connection to the actual HTML input element. When you call `inputRef.current.focus()`, you're telling the browser to focus that specific input — just like clicking on it.



**Refs** are perfect for storing audio elements because the audio object doesn't need to trigger re-renders — it just needs to be remembered between function calls. The `current` property holds the actual value you stored.

<a id="building-the-musictoggle-component"></a>

## 🎛️ Building the MusicToggle Component

Before we implement the audio functionality, let's add the UI controls you'll need to test it. This music toggle will provide the interface for testing the `useAudio` hook as you build it in the next sections.

1. **Add** the asset utility import at the top of `src/components/HUD.jsx`

   ```javascript
   import { getAssetPath } from "../utils/assets";
   ```

2. **Add** the `MusicToggle` component after the `CurrentZone` function

   ```javascript
   function MusicToggle() {
     const { music } = useGame();
     return (
       <button 
         onClick={music.toggle}
         className="music-toggle"
         title={music.isPlaying ? "Pause Music" : "Play Music"}
       >
         <img 
           src={getAssetPath(
             music.isPlaying ? "images/playing.svg" : "images/paused.svg"
           )}
           alt={music.isPlaying ? "Pause" : "Play"}
           className="music-icon"
           width={24}
           height={24}
         />
       </button>
     );
   }
   ```

3. **Add** MusicToggle component by updating the HUD JSX return

   ```javascript
   return (
     <>
       <Scoreboard />
       <CurrentZone />
       <MusicToggle />
     </>
   );
   ```

4. **Test** by starting Game and verifying music toggle is visible but inoperable when clicked



The **`MusicToggle` component** demonstrates conditional rendering with dynamic images and tooltips. The `music.isPlaying` state controls both the icon and the tooltip text, providing clear visual feedback to users.

<a id="adding-audio-reference-to-useaudio"></a>

## 📻 Adding Audio Reference to useAudio

Now let's add the audio reference to your `useAudio` hook so it can store the HTMLAudioElement.

1. **Open** `src/hooks/useAudio.js` and add the audio reference

   ```javascript
   export function useAudio(src) {
     const audioRef = useRef(null);
     const [isPlaying, setIsPlaying] = useState(false);
     // ... rest of hook
   }
   ```

2. **Add** the useRef import at the top of the file

   ```javascript
   import { useRef, useState } from "react";
   ```

Your hook now has a ref that can store and remember the audio element we'll create in the `play` function. The ref starts as `null` and will hold our audio element once it's created.

### Audio Reference Flow

```text
useAudio hook called → audioRef.current is null → play() creates new Audio() → 
audioRef.current stores Audio element → future calls reuse same element
```



The `audioRef` you just created provides persistent storage for the audio element across component re-renders. Without refs, you'd create a new audio element every time the component updates, causing audio to restart unexpectedly.

<a id="implementing-audio-playback"></a>

## 🎵 Implementing Audio Playback

Let's implement the core audio functionality by updating the `play` function to create and control audio elements.

1. **Update** the play function in `src/hooks/useAudio.js`

   ```javascript
   const play = () => {
     // Lazy initialization - create audio element only when first needed
     if (!audioRef.current) {
       audioRef.current = new Audio(src);
       audioRef.current.loop = true;
       audioRef.current.volume = 0.5;
     }
     audioRef.current.play();
     setIsPlaying(true);
   };
   ```

   The `if (!audioRef.current)` check is an example of **lazy initialization** — creating a resource only when it's first needed. Since `audioRef.current` starts as `null`, the first time `play()` runs it creates the audio element. Every time after that, `audioRef.current` contains the audio element, so the `if` condition is false and it skips creating a new one.

2. **Test** by clicking music toggle and verifying game theme plays with button showing playing state

### Audio Creation Logic

```text
Check if audio exists → If not, create new Audio(src) → Configure loop and volume → 
Call play() method → Update isPlaying state → UI reflects playing state
```



Creating audio elements only once and reusing them prevents overlapping sounds, memory leaks, and performance issues. Without this pattern, clicking the music toggle rapidly would create multiple audio elements playing simultaneously, causing audio chaos and slowing down your browser.

<a id="github-copilot-workflow"></a>

## ⚡ GitHub Copilot Workflow

You're now working with production-quality code. GitHub Copilot can help you write, fix, and understand code faster — but only if you know how to guide it.

### How to Use Copilot Chat Effectively

1. **Use** a Copilot chat command like `/fix`, `/explain`, or `/test`
2. **Write** a clear, focused prompt describing what you want
3. **Review** the suggestion Copilot generates
4. **Apply** the change if it meets your needs
5. **Test** the update to confirm it works

### Example Prompt

```text
/fix Add error handling to the play function in the useAudio hook so that 
if the audio fails to play, it catches the error, logs a warning, and 
updates isPlaying to false
```

Use this workflow during your Solo Mission and anytime you're stuck or want to improve your code.

<a id="solo-mission-complete-useaudio-hook"></a>

## 🎖️ Solo Mission: Complete useAudio Hook

Now for your independent challenge — complete the `useAudio` hook with pause functionality, error handling, and cleanup! You'll use AI assistance for the advanced parts.

### 1. Implement Pause Functionality

- **Update** the `pause` function to pause audio and update state
- **Use** `audioRef.current.pause()` to stop playback
- **Set** `isPlaying` to `false` when paused
- **Test** by clicking music toggle while playing → Music stops and music toggle shows paused state

### 2. Add Error Handling with AI Assistance

With `useAudio.js` open, use the GitHub Copilot workflow you just learned:

**Prompt**:
```text
/fix Add error handling to the play function in the useAudio hook so that 
if the audio fails to play, it catches the error, logs a warning, and 
updates isPlaying to false
```

- **Review** the generated code
- **Apply** the changes if they look correct
- **Test** to verify error handling works, temporarily break the audio path
  - **Open** `src/context/GameContext.jsx`
  - **Find** the line `const music = useAudio(getAssetPath("audio/dramatic-action.mp3"));`
  - **Change** `"audio/dramatic-action.mp3"` to `"audio/nonexistent.mp3"` (keep the `getAssetPath()` wrapper)
  - **Save** the file → click music toggle → check browser console for error message
  - **Important** change the path back to `"audio/dramatic-action.mp3"` when done testing

### 3. Add Cleanup with AI Assistance

**Prompt**:
```text
/fix Add a useEffect cleanup function to the useAudio hook that stops 
the audio and clears the reference when the component unmounts
```

- **Review** the generated useEffect code
- **Apply** the changes to prevent memory leaks
- **Test** by navigating between screens to verify cleanup works

### Requirements Checklist

Your completed `useAudio` hook must:

- Export `play`, `pause`, `toggle`, and `isPlaying`
- Successfully toggle audio playback
- Handle errors when attempting to play audio
- Set `isPlaying(false)` if an error occurs
- Include a `useEffect` cleanup function for component unmounting



This challenge combines everything you've learned: custom hooks, browser APIs, error handling, and AI-assisted development. You're building quality code that handles edge cases and prevents memory leaks — exactly what experienced developers do.

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the custom hooks and browser API concepts you just learned:_

| Term   | Definition | Why it matters |
|--------|------------|----------------|
| 🪝 hook | Functions starting with "use" that let you use React features like state and context. | Hooks like `useState` are your tools for managing data and behavior in components. |
| 🔄 DRY (Don't Repeat Yourself) | A fundamental programming principle that emphasizes eliminating code duplication through reusable solutions. | Custom hooks like `useAudio` let you "write once, use often" instead of copying audio logic across components. |
| 🔊 HTMLAudioElement | Part of the Web API that provides an interface for controlling audio playback, with methods like play(), pause(), and properties like volume and loop. | Gives you programmatic control over audio files in web applications. |
| 🔗 ref | A way to access DOM elements or store values that don't cause re-renders when changed. | Perfect for storing audio elements that need to persist but don't affect UI rendering. |
| 🎯 useRef | A React hook that creates a persistent reference to a DOM element or value that doesn't cause re-renders when it changes. | Essential for storing audio elements and other browser API objects across component updates. |
| 🔄 mutable | Data that can be changed or modified after it's created, as opposed to immutable data that cannot be changed. | Refs store mutable values that can be updated without triggering re-renders, perfect for audio objects that change state. |
| ⏳ lazy initialization | A pattern where resources are created only when first needed, rather than upfront. | Avoids unnecessary setup and ensures efficient resource reuse, like creating audio elements only when play() is first called. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Adding Theme Music

You just created a custom React hook with browser API integration and AI-assisted development — excellent work!

Now let's deepen your understanding of custom hooks, browser APIs, and development practices. Here are the most impactful questions to ask your AI assistant about today's session:

- **What makes custom hooks different from regular functions, and why do they need to start with "use"?**
- **How do refs differ from state, and when should I use each one?**
- **Why do I need to use ref.current instead of just ref?**
- **What are the benefits of wrapping browser APIs in custom hooks?**
- **How does HTMLAudioElement work, and what other Web APIs are commonly used in web development?**
- **How can AI assistants help with coding, and what should I watch out for?**# Session 10 — Publishing Your Game

Version Control & Deployment 🚀

You're about to take your trivia game from local development to the live internet! This guide walks you through version control concepts, Git workflows, and automated deployment using GitHub Pages. Ready to share your creation with the world? Let's go!

## Table of Contents

- [Understanding Version Control](#understanding-version-control)
- [Understanding CI/CD](#understanding-cicd)
- [Making This Project Yours](#making-this-project-yours)
- [Learning the Git Workflow](#learning-the-git-workflow)
- [Customizing Your Game Title](#customizing-your-game-title)
- [Watching Your Deployment](#watching-your-deployment)
- [Sharing Your Live Game](#sharing-your-live-game)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 9.

<a id="understanding-version-control"></a>

## 📚 Understanding Version Control

Before we publish your game, let's understand **version control** — the system that tracks every change to your code and lets you collaborate safely with other developers.

**Version control** is a system that tracks every change you make to your project files. Every time you make changes, you can create a snapshot (called a **commit**) that records exactly what you did and when. This creates a complete history of your project's evolution — you can always see what changed and when.

### Why Version Control Exists

| Problem | Solution |
|---------|----------|
| **"My code worked yesterday!"** | **Git history** shows exactly what changed |
| **"I broke everything!"** | **Rollback** to any previous working version |
| **"Who changed this file?"** | **Blame/history** shows author and reason |
| **"How do we work together?"** | **Branches** let multiple people code simultaneously |

### How Version Control Works

**Version control** systems like **Git** work by tracking changes to files in a special folder called a **repository**. When you're ready to save your progress, you create a **commit** — a permanent snapshot of your project at that moment.

Think of **Git** as your project's memory system. It remembers every change you've ever made, who made it, and when. If you need to work on a new feature without breaking your main code, you can create a **branch** — like a parallel universe where you can experiment safely.

When you're ready to share your work or back it up online, you **push** your commits to a remote repository on platforms like GitHub. This uploads your entire project history, not just the current files.



**Version control** is essential for any real development work. It tracks every decision and change you make — you can experiment confidently knowing you can always reference or return to any previous state. This tracking transforms how you approach development, making you more willing to try new ideas and refactor existing code.

<a id="understanding-cicd"></a>

## ⚙️ Understanding CI/CD

Now let's understand **CI/CD** — the automated processes that build and deploy your code whenever you push changes.

**CI/CD** stands for **Continuous Integration/Continuous Deployment**. It's like having a robot assistant that automatically builds and publishes your app every time you save changes to GitHub.

### CI/CD Components

| Component | Purpose | Your Setup |
|-----------|---------|------------|
| **Continuous Integration (CI)** | Automatically test and build code when changes are pushed | **GitHub Actions** runs your build process |
| **Continuous Deployment (CD)** | Automatically deploy successful builds to production | **GitHub Pages** hosts your built app |
| **Build Process** | Convert source code into deployable files | **Vite** bundles your React app |
| **Hosting Platform** | Serve your app to users on the internet | **GitHub Pages** provides free hosting |

### 📊 From Push to Publish

This diagram shows what happens behind the scenes when you push code. GitHub detects the change, runs your build process, and deploys your updated game automatically:

<img src="images/session-10/cicd-pipeline-flowchart.png" alt="CI/CD Pipeline" style="max-width: 300px; width: 100%;">
*Figure: CI/CD Pipeline — GitHub Actions builds and deploys your app automatically*



**CI/CD** eliminates manual deployment work. Instead of building and uploading files yourself, the system automatically handles everything when you push code. This is how teams deploy apps multiple times per day.

<a id="making-this-project-yours"></a>

## 🏠 Making This Project Yours

All `git` commands should be run in your Codespace terminal

### 1. Check Your Git Remote Status

First, let's **see** if your Codespace has any remote connections

```bash
git remote -v
```

If this returns nothing (which is typical for Codespaces), you can **skip** to step 2. If it shows a remote, you'll need to **remove** it first

```bash
git remote remove origin
```

### 2. Create a New Repo on GitHub

- **Go** to [github.com/new](https://github.com/new)
- **Name** your repo, e.g., `trivia-quest`
- **Do not add** a `README` or `.gitignore` — your project already has those!
- **Click** "Create repository"

Upon completion, you will be redirected to your new repo page.

### 3. Update the Vite Build Path

**Open** `package.json` and update the `build` script to match your repo name

```javascript
"build": "vite build --base=/your-repo-name/"
```

**Example**:

```javascript
"build": "vite build --base=/trivia-quest/"
```

This ensures your site works correctly when deployed to GitHub Pages by matching the repo's name to the URL path.

### 4. Create a Personal Access Token

Since GitHub requires authentication, you need to create a Personal Access Token (PAT):

- **Go** to [github.com/settings/tokens](https://github.com/settings/tokens)
- **Click** "Generate new token" → "Generate new token (classic)"
- **Note** by entering "Codespace Git Access" or similar
- **Expiration** by choosing "30 days" (or longer if preferred)
- **Scopes** by checking both "repo" and "workflow" (needed to push GitHub Actions files)
- **Click** "Generate token"
- **Copy** the token immediately - you won't see it again!

### 5. Connect Your Project with Authentication

**Replace** the placeholders with your actual values

```bash
git remote add origin \
  https://USERNAME:TOKEN@github.com/USERNAME/REPO-NAME.git
```

**Example**:
```bash
git remote add origin \
  https://babalugats76:ghp_abc123xyz@github.com/babalugats76/trivia-quest.git
```

**Make** a mistake typing the URL? Just remove it using `git remote remove origin` and try again. You can always use `git remote -v` to verify this connection.

**Important**: Keep your token private! Don't share it with anyone.

### 6. Push Your Code to GitHub

```bash
git push -u origin main
```

**You should see output like this**
```text
Enumerating objects: 80, done.
Counting objects: 100% (80/80), done.
Delta compression using up to 2 threads
Compressing objects: 100% (73/73), done.
Writing objects: 100% (80/80), 1.80 MiB | 7.07 MiB/s, done.
Total 80 (delta 5), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (5/5), done.
To https://github.com/your-username/your-repo-name.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

**Note** This first push will trigger GitHub Actions, but deployment will fail because Pages isn't enabled yet. That's expected!

### 7. Verify Your Code Is On GitHub

- **Go** to your GitHub profile `https://github.com/your-username`
- **Click** on your new repo (e.g., trivia-quest)
- **If you see** your files, your push worked! You now officially own your project!

### 8. Enable GitHub Pages

- **Go** to your repo → Settings → Pages
- Under "Build and deployment", **find** the "Source" dropdown
- **Select** "GitHub Actions"
- **Save** (this happens automatically)

### 9. Commit Your Course Progress

Now let's **commit** all the amazing work you've done throughout the course! You likely have changes from previous sessions that need to be saved

```bash
# Stage all your changes from the entire course
git add .

# Commit your progress with a meaningful message
git commit -m "feat: complete trivia game with all course features"

# Push your complete game to trigger deployment
git push
```

**This will trigger a successful deployment with all your course work since Pages is now enabled!**

### 10. Find Your Live Site

Your site should now be live at `https://your-username.github.io/your-repo-name/`

**Note** It may take a few minutes for the deployment to complete. Check the Actions tab to monitor progress.

Once you complete the Git workflow in the next section, your site will be live at `https://your-username.github.io/your-repo-name/`



These steps transform your project from a shared template into your personal creation. Now you can make updates, publish changes to the web, and share your unique version with the world. Your trivia game is officially yours to customize and deploy!

**Note** Your game uses a special `getAssetPath()` utility function to ensure images and audio work correctly both in development and when deployed to GitHub Pages. This automatically handles the different URL paths needed for deployment.

<a id="learning-the-git-workflow"></a>

## 🔄 Learning the Git Workflow

Whether you're fixing bugs, adding new features, or updating the design, you'll need a reliable way to manage and publish changes. That's where **Git** comes in.

Git is a version control tool that helps you track your progress, explain what changed, and safely update your project. It works alongside GitHub (where your code lives) and GitHub Actions (which automatically rebuilds and redeploys your site every time you push changes). In this section, you'll learn the three essential Git commands that power this workflow.

### The Three Essential Commands

Every update follows this simple pattern:

```bash
# 1. Stage your changes (get them ready to save)
git add .

# 2. Save a snapshot with a message (like a journal entry)
git commit -m "feat(logo): customize game title to Trivia Quest"

# 3. Upload to GitHub (share with the world and trigger deployment)
git push
```

### How Your Changes Go Live

This diagram shows how your changes move from your computer to the live website, step by step. Once you push your code, GitHub takes care of the rest and automatically updates your game online:

<img src="images/session-10/git-workflow-flowchart.png" alt="Git Workflow" style="max-width: 300px; width: 100%;">
*Figure: Git Development Workflow*

### Writing Good Commit Messages

Every commit requires a message (any text string) that explains what changed. These messages create a readable history - like a diary of your project's evolution.

While you can write any message you want, we'll use a common convention that many teams find helpful: `type(scope): description`

The message `feat(logo): customize game title to Trivia Quest` follows this format:

- `feat`: Type of change (other types: `fix`, `style`, `docs`)
- `logo`: What part of the app changed
- `customize game title to Trivia Quest`: What you actually did

### Common Message Types

| Type | Example | What It Means |
|------|---------|---------------|
| **feat** | `feat(quiz): add timer` | New feature |
| **fix** | `fix(scoring): resolve bug` | Bug fix |
| **style** | `style(button): update colors` | Visual changes |



Git connects your local code to your live site. With just three commands — `add`, `commit`, and `push` — you can track changes, explain what you did, and publish updates instantly. It’s the core workflow behind every improvement you’ll make from here on out.

<a id="customizing-your-game-title"></a>

## ✏️ Customizing Your Game Title

Now let's practice the Git workflow by making a real change to your game. We'll personalize your game's title and see the complete process in action.

### Make Your Change

Let's personalize your game by changing the title that appears on the splash screen:

1. **Open** `src/components/GameLogo.jsx`
2. **Find** these two text elements:
   ```javascript
   <text id="title-first-line">
     Wizcamp
   </text>
   <text id="title-second-line">
     Realms
   </text>
   ```
3. **Change** them to something that matches your game:
   ```javascript
   <text id="title-first-line">
     Trivia
   </text>
   <text id="title-second-line">
     Quest
   </text>
   ```
4. **Check your browser** - you should see the new title!

### Apply the Git Workflow

Now let's commit and share this change using the workflow you just learned

```bash
# 1. Stage your changes (prepare them for committing)
git add .

# 2. Commit your changes (create a permanent snapshot)
git commit -m "feat(logo): customize game title to Trivia Quest"

# 3. Push your changes (share with the world and trigger deployment)
git push
```



You just experienced the complete developer workflow - from making a change to deploying it live. This same pattern applies whether you're fixing a bug, adding a feature, or updating styles.

<a id="watching-your-deployment"></a>

## 👀 Watching Your Deployment

Now let's track your title change through the automated deployment process!

### Monitor the Build Process

1. **Go** to your repository on GitHub
2. **Click** the "Actions" tab
3. **Click** on your latest workflow run (should show your commit message)
4. **Click** on "build-and-deploy" to see the deployment steps
5. **Watch** the status - wait for the green checkmark!

### Test Your Live Game

- **Visit** your live game at `https://your-username.github.io/your-repo-name/`
- **Check** the splash screen - you should see your new title!
- **Test** the game - make sure everything still works



You just experienced the complete developer workflow - from code change to live deployment. This automation is how teams ship updates multiple times per day.

<a id="sharing-your-live-game"></a>

## 🌍 Sharing Your Live Game

Congratulations! Your trivia game is now live on the internet. Here's how to share it with others.

### Your Game's Public URL

Your game is available at
```text
https://your-username.github.io/your-repo-name/
```

**Example**: `https://babalugats76.github.io/trivia-quest/`

### Sharing Your Achievement

- **Copy** the URL and share it with friends and family
- **Test** on different devices — phones, tablets, computers
- **Share** on social media with screenshots of your game
- **Add** the URL to your GitHub profile or portfolio



Having your game live on the internet transforms it from a learning exercise into something real that others can actually use. You've built something that exists on the web — that's a genuine accomplishment!

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the version control and deployment concepts you just learned:_

| Term   | Definition | Why it matters |
|--------|------------|----------------|
| 📚 version control | A system that tracks changes to files over time, allowing you to see history, revert changes, and collaborate safely. | Essential for any serious development work — lets you experiment fearlessly and work with others. |
| 🔧 Git | The version control tool that tracks changes in your code — like a save system for your project with complete history. | The industry standard that every developer uses daily — powers the add, commit, push workflow you just learned. |
| 📁 repository | A folder containing your project files and their complete change history, managed by Git. | Your project's home base where all code and history live — can be local (on your computer) or remote (on GitHub). |
| 📝 commit | A snapshot of your project at a specific point in time, with a message describing what changed. | Creates permanent save points you can return to — like checkpoints in a video game. |
| ⬆️ push | Upload your local commits to a remote repository like GitHub, making them available to others. | How you share your work and trigger automated deployments — essential for collaboration and publishing. |
| ⚙️ CI/CD | Continuous Integration/Continuous Deployment — automated processes that build and deploy code when changes are made. | Eliminates manual deployment work — your code automatically becomes a live website when you push changes. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Publishing Your Game

You just published your trivia game to the internet using development workflows — excellent work!

Now let's deepen your understanding of version control, Git workflows, and deployment automation. Here are the most impactful questions to ask your AI assistant about today's session:out today's session:

- **Why is version control essential for software development, and what problems does it solve?**
- **What makes a good commit message, and why do they matter?**
- **How does the Git workflow (add, commit, push) relate to saving files on my computer?**
- **What are the benefits of automated deployment over manual file uploads?**
- **How do GitHub Actions and GitHub Pages work together to deploy websites?**
- **What's the difference between local repositories and remote repositories?**
- **How can I use version control for future projects and collaboration?**# Session 11 — Extending Your Game

Choose Your Adventure 🎯

You've built a complete trivia game and deployed it to the internet — now it's time to make it uniquely yours! Ready to add your personal touch and practice new skills? Let's go!

## Table of Contents

- [Choose Your Own Adventure](#choose-your-own-adventure)
- [GitHub Copilot Workflow](#github-copilot-workflow)
- [Git Workflow](#git-workflow)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 10.

<a id="choose-your-own-adventure"></a>

## 🎯 Choose Your Own Adventure

Choose **up to 4 extensions** to implement — try 2 Starter + 1 Power + 1 Beast, or mix and match based on your interests.

Use the [GitHub Copilot Workflow](#github-copilot-workflow) to get AI help with implementation, and the [Git Workflow](#git-workflow) to save and deploy your changes.

### 🚀 Starter Mods: Fast Wins

| Extension     | Description          | What You'll Practice |
|---------------|----------------------|----------------------|
| **Custom Fonts** | Replace existing fonts with your choices for game logo, zone labels, and UI elements | Importing Google Fonts, updating component styling, creating visual consistency |
| **Character Swap** | Replace character-1.png with character-2, 3, 4, or 5 from available sprites | Working with image assets, updating component references, testing visual changes |
| **Game Instructions Modal** | Create instructions modal explaining game rules and scoring | Building reusable components, showing/hiding content, creating user-friendly interfaces |

### ⚡ Power Mods: Build Skills

| Extension     | Description          | What You'll Practice |
|---------------|----------------------|----------------------|
| **Visual Progress Indicator** | Replace "Question X of Y" text with colored dots showing progress | Managing component state, transforming arrays into visual elements, styling based on user actions |
| **Color & Font System** | Convert hardcoded colors/fonts in main.css to reusable CSS variables | Organizing stylesheets, creating reusable design tokens, making code easier to maintain |
| **Interactive Sound Effects** | Add audio feedback for quiz interactions using existing useAudio pattern | Using custom hooks, working with browser audio, triggering sounds on user interactions |

### 🦁 Beast Mods: Go Big

| Extension     | Description          | What You'll Practice |
|---------------|----------------------|----------------------|
| **Character Selection Screen** | Add character selection screen before entering game map | Building new screens, managing game-wide state, composing complex interfaces |
| **Animated Character Movement** | Animate character sprite moving between zone positions when completed | Creating smooth animations, coordinating with game state, providing visual feedback |
| **Dark/Light Mode Toggle** | Add dark/light mode toggle affecting colors throughout game | Building theme systems, persisting user preferences, creating toggleable interfaces |

<a id="github-copilot-workflow"></a>

## ⚡ GitHub Copilot Workflow

Use this workflow from Session 9 for each extension:

### How to Use Copilot Chat Effectively

1. Use a Copilot chat command like `/fix`, `/explain`, or `/test`
2. Write a clear, focused prompt describing what you want
3. Review the suggestion Copilot generates
4. Apply the change if it meets your needs
5. Test the update to confirm it works

### Example Prompt Sequence

```text
/fix Import Orbitron, Roboto, and Inter from Google Fonts into fonts.css.
```

followed by

```text
/fix Update all fontFamily references:
- Orbitron for game logo title
- Roboto for zone map labels
- Inter for UI elements
```

**Good Prompts Follow the 3S's:**

- **Simple:** Use clear, direct language
- **Specific:** Say exactly what you want
- **Short:** Focus on one task at a time

<a id="git-workflow"></a>

## 🔄 Git Workflow

Every time you finish an extension, use this Git workflow to save and deploy your changes:

### The Essential Commands

```bash
# 1. Stage your changes (prepare them for committing)
git add .

# 2. Commit your changes (create a permanent snapshot)
git commit -m "feat(extension): add custom fonts to game logo"

# 3. Push your changes (share with the world and trigger deployment)
git push
```

### Commit Message Examples

| Extension Type                   | Example Message                                              |
|----------------------------------|--------------------------------------------------------------|
| **Custom Fonts**                 | `feat(typography): update Google Fonts for game logo`        |
| **Character Swap**               | `feat(character): replace default sprite with archer`        |
| **Visual Progress Indicator**    | `feat(quiz): add visual progress indicator with dots`        |
| **Interactive Sound Effects**    | `feat(audio): add feedback sounds for answers`               |
| **Character Selection Screen**   | `feat(character): add character selection screen`            |
| **Animated Character Movement**  | `feat(animation): animate character movement between zones`  |
| **Dark/Light Mode Toggle**       | `feat(theme): implement dark/light theme system`             |

Your live game will automatically update each time you push changes thanks to the CI/CD pipeline you set up in Session 10.