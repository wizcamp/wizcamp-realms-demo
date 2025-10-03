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
```
App (has screen state)
 ↓ passes screen as prop
SplashScreen (doesn't need screen, just passes it along)
 ↓ passes screen as prop  
GameButton (finally uses screen)
```

**With Context (no prop drilling):**
```
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

