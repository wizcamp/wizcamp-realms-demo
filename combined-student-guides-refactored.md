# Session 1 — Setting Up Your Trivia Game

Welcome to React Development! 🎉

## Table of Contents

- [Launching Your Codespace](#launching-your-codespace)
- [Starting the Development Server](#starting-the-development-server)
- [Replacing the Placeholder Component](#replacing-the-placeholder-component)
- [Updating the Page Title](#updating-the-page-title)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="launching-your-codespace"></a>

## 🔧 Launching Your Codespace

Your cloud coding environment eliminates setup headaches — no installs, just code.

1. **Navigate** to [github.com](https://github.com) and log in
2. **Visit** [github.com/wizcamp/wizcamp-realms-demo](https://github.com/wizcamp/wizcamp-realms-demo)
3. **Click** Use this template → Open in codespace
4. **Wait** for VS Code editor to appear in browser
5. **Verify** project files appear in left sidebar

Codespaces give everyone identical setups. If something breaks, delete and restart fresh.

### 🏆 Bonus Challenge

Visit [github.com/codespaces](https://github.com/codespaces) to explore Codespace management.

<a id="starting-the-development-server"></a>

## 🚀 Starting the Development Server

1. **Run** `npm run dev` in the terminal
2. **Click** "Open in Browser" when prompted
3. **Verify** starter app loads with placeholder component

Your dev server provides live preview — every code change appears instantly in the browser.

### 🏆 Bonus Challenge

**Stop** the server with `Ctrl + C`, **verify** localhost shows nothing, then **restart** with `npm run dev`.

<a id="replacing-the-placeholder-component"></a>

## 🧩 Replacing the Placeholder Component

With dev server running, swap components to experience live updates.

1. **Open** `src/App.jsx`
2. **Add** import at top:
   ```javascript
   import SplashScreen from "./components/SplashScreen";
   ```
3. **Replace** `<StartHere />` with `<SplashScreen />`
4. **Watch** screen update instantly

Components are React's building blocks — reusable UI pieces combining markup, styling, and logic. The `.jsx` extension means you're writing JSX, which looks like HTML but is JavaScript. Vite's Hot Module Replacement (HMR) applies updates instantly as you code.

<a id="updating-the-page-title"></a>

## 🏷️ Updating the Page Title

React apps use standard HTML as entry points. Update the browser tab title.

1. **Open** `index.html`
2. **Change** `<title>` to `Wizcamp Realms - Legends of Trivia`
3. **Verify** browser tab shows new title

Descriptive page titles improve usability, accessibility, and SEO — helping users identify your app in multiple tabs.

<a id="essential-terms"></a>

## 📚 Essential Terms

| Term | Definition | Why it matters |
|------|------------|----------------|
| ☁️ Codespace | Cloud dev environment from GitHub — ready-made VS Code in browser | Jump straight to coding with identical setup for everyone |
| 🖥️ VS Code | Your coding headquarters — file explorer, editor, terminal in one | Where development happens |
| 🔧 Node.js | JavaScript runtime outside browsers | Powers dev tools and npm commands |
| 📦 npm | Node's package manager — installs libraries, runs scripts | Use for dependencies and starting dev server |
| ⚡ Vite | Lightning-fast dev server | Serves your app instantly during development |
| 🔁 HMR | Updates only changed code without full reload | See edits instantly while preserving app state |
| ⚛️ React | Library for building UIs from components | The foundation of your project |
| ✨ JSX | JavaScript syntax resembling HTML | Describe UI in React components |
| 🧩 component | Reusable UI piece with markup, styles, logic | Building blocks you'll compose into apps |
| 🌐 DOM | Browser's object model of the page | React updates DOM to change what users see |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Setting Up Your Trivia Game

- **Why is cloud development better for beginners?**
- **What is a development server and why do we need it?**
- **What does the localhost URL mean?**
- **How and why do I import a component in React?**
- **What does import SplashScreen from './components/SplashScreen' mean?**
- **In a React app, what does the index.html file do?**

---

# Session 2 — Building Game Components

Building Reusable UI Elements 🧩

## Table of Contents

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

<a id="creating-your-first-component"></a>

## 🧩 Creating Your First Component

Build a GameButton component — your first custom, reusable UI element.

1. **Create** `src/components/GameButton.jsx`
2. **Add** component structure:
   ```javascript
   export default function GameButton() {
     return <button>Start Adventure</button>;
   }
   ```
3. **Open** `src/components/SplashScreen.jsx`
4. **Import** at top: `import GameButton from "./GameButton";`
5. **Add** `<GameButton />` inside `div.splash-buttons`
6. **Test** by running `npm run dev` → custom button appears

Components are React's heart — reusable UI elements combining markup, styling, and logic. Think of them as custom HTML tags. JSX looks like HTML but is JavaScript, letting you describe UI with readable, expressive code.

### 🏆 Bonus Challenge

Change button text in GameButton.jsx and watch HMR update instantly.

<a id="understanding-props"></a>

## 📦 Understanding Props

Props pass data from parent to child components — like function parameters for React components.

1. **Update** GameButton to accept props:
   ```javascript
   export default function GameButton({ text }) {
     return <button>{text}</button>;
   }
   ```
2. **Update** SplashScreen to pass prop:
   ```javascript
   <GameButton text="Start Adventure" />
   ```
3. **Verify** button shows custom text

Props let parent components pass data to children. The `{ text }` syntax is destructuring — pulling out just the values you need from the props object, keeping code clean.

<a id="adding-click-functionality"></a>

## 🖱️ Adding Click Functionality

Make buttons interactive by passing functions as props.

1. **Add** onClick prop to GameButton:
   ```javascript
   export default function GameButton({ text, onClick }) {
     return <button onClick={onClick}>{text}</button>;
   }
   ```
2. **Update** SplashScreen with click handler:
   ```javascript
   <GameButton
     text="Start Adventure"
     onClick={() => alert('Start Game!')}
   />
   ```
3. **Test** by clicking button → alert appears

Functions as props give components different behaviors. Same button, different actions depending on where you use it — a key React pattern for building interactive apps.

<a id="styling-with-variants"></a>

## 🎨 Styling with Variants

Add visual variety using CSS classes, default parameters, and dynamic class names.

1. **Update** GameButton with variant prop:
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
2. **Update** SplashScreen to specify variant:
   ```javascript
   <GameButton
     text="Start Adventure"
     onClick={() => alert('Start Game!')}
     variant="primary"
   />
   ```
3. **Verify** button has primary styling

`className` is React's version of HTML's `class` attribute. Template literals build dynamic class names like `game-button primary`. The `variant` prop switches between styles, and default parameters (`variant = "primary"`) ensure components work even without all props.

<a id="reusing-your-component"></a>

## 🔄 Reusing Your Component

Experience component reusability by adding a second button.

1. **Add** Credits button in SplashScreen:
   ```javascript
   <GameButton
     text="Credits"
     onClick={() => alert('Show Credits')}
     variant="secondary"
   />
   ```
2. **Verify** two different buttons using same component

Component reusability is React's superpower. Write code once, use anywhere with different props. Your stylesheet automatically applies the right look for each variant.

### 🏆 Bonus Challenge

Add a third GameButton with `variant="primary"` and `text="Instructions"`.

<a id="installing-react-devtools"></a>

## 🔍 Installing React DevTools

React DevTools provides X-ray vision into your React app — see components, props, and state in real-time.

### Browser Installation

| Browser | Link |
|---------|------|
| **Chrome** | [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) |
| **Firefox** | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) |
| **Edge** | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) |

### Using DevTools

1. **Open** DevTools with F12 or right-click → Inspect
2. **Find** Components tab
3. **Click** components in tree to see props
4. **Inspect** GameButton to see text, onClick, and variant props

React DevTools gives X-ray vision into your app. Inspect components, props, and state in real time — essential for debugging and understanding how your app works.

<a id="essential-terms"></a>

## 📚 Essential Terms

| Term | Definition | Why it matters |
|------|------------|----------------|
| 🧩 component | Reusable UI piece with markup, styles, logic | React's building blocks you compose into apps |
| 📦 props | Data passed from parent to child components | Customize components and pass data around |
| ✨ JSX | JavaScript syntax resembling HTML | Describe what UI should look like |
| 🎨 className | React's version of HTML `class` attribute | Apply CSS styles (`class` is reserved in JavaScript) |
| 📤 destructuring | Extract values from objects into variables | Cleaner than repetitive `props.text`, `props.onClick` |
| 🔤 template literals | String interpolation with backticks and `${}` | Create dynamic CSS classes |
| ⚙️ default parameters | Fallback values for function parameters | Components work even without all props |
| 🔍 React DevTools | Browser extension for inspecting React apps | X-ray vision for debugging |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Building Game Components

- **What makes React components reusable and why is that important?**
- **How do props work in React and why are they read-only?**
- **How do template literals work and why are they perfect for dynamic CSS classes?**
- **How does JSX let me write HTML-like code inside JavaScript?**
- **Can I pass functions as props? How does that work?**
- **What can I do with React DevTools that I can't do with regular browser DevTools?**

---

*[Note: This demonstrates the refactored framework for Sessions 1-2. The full refactored guide would continue with all remaining sessions following the same patterns.]*
