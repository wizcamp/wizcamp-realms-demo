# Session 9 — Adding Theme Music

Custom Hooks & Browser APIs 🎵

You're about to add another professional feature to your trivia game — theme music! This guide walks you through creating custom React hooks, working with browser audio APIs, and building reusable audio controls. Ready to bring your game to life with sound? Let's go!

## Table of Contents

- [Understanding Custom Hooks](#understanding-custom-hooks)
- [Exploring Browser Audio APIs](#exploring-browser-audio-apis)
- [Understanding Refs and useRef](#understanding-refs-and-useref)
- [Building the MusicToggle Component](#building-the-musictoggle-component)
- [Adding Audio Reference to useAudio](#adding-audio-reference-to-useaudio)
- [Implementing Audio Playback](#implementing-audio-playback)
- [Solo Mission: Complete useAudio Hook](#solo-mission-complete-useaudio-hook)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="access-your-codespace"></a>

## ☁️ Access Your Codespace

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

### 💡 Why This Matters

**Custom hooks** embody one of programming's most important principles: **"Don't Repeat Yourself" (DRY)**. Instead of copying and pasting audio logic into every component that needs music, you encapsulate that complexity into a reusable `useAudio` hook. Now, any component can add background music with a single line of code:

```javascript
const music = useAudio('/music.mp3');
```

This is the difference between amateur and professional code — professionals reduce repetition by creating reusable solutions. Custom hooks let you **"write once, use often,"** making your code cleaner, more maintainable, and easier to scale.

### 🏆 Bonus Challenge

Visit [useHooks – The React Hooks Library](https://usehooks.com/) and find three interesting custom hooks that might be great for use in a web-based video game.

<a id="exploring-browser-audio-apis"></a>

## 🔊 Exploring Browser Audio APIs

Let's understand the **HTMLAudioElement** — the browser's built-in interface for controlling audio playback.

You might be familiar with HTML audio elements like `<audio src="music.mp3"></audio>` that you write in HTML files. **HTMLAudioElement** is the JavaScript version of the same thing — it's like a digital music player that you create and control entirely with JavaScript code. Instead of writing HTML tags, you use `new Audio()` to create the player, then control it with methods like `play()` and `pause()`.

### Creating Audio Elements

```javascript
// Create new audio element
const audio = new Audio('/audio/theme-music.mp3');

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

### 💡 Why This Matters

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

### 💡 Why This Matters

**Refs** are perfect for storing audio elements because the audio object doesn't need to trigger re-renders — it just needs to be remembered between function calls. The `current` property holds the actual value you stored.

<a id="building-the-musictoggle-component"></a>

## 🎛️ Building the MusicToggle Component

Let's add audio controls to your game's HUD so users can toggle the theme music on and off.

1. **Open `src/components/HUD.jsx`** and add the `MusicToggle` component after the `CurrentZone` function:

   ```javascript
   function MusicToggle() { // Add MusicToggle component
     const { music } = useGame();
     return (
       <button 
         onClick={music.toggle}
         className="music-toggle"
         title={music.isPlaying ? "Pause Music" : "Play Music"}
       >
         <img 
           src={music.isPlaying ? "/images/playing.svg" : "/images/paused.svg"}
           alt={music.isPlaying ? "Pause" : "Play"}
           className="music-icon"
           width={24}
           height={24}
         />
       </button>
     );
   }
   ```

2. **Add `MusicToggle` to the HUD** by updating the JSX return:

   ```javascript
   return (
     <>
       <Scoreboard />
       <CurrentZone />
       <MusicToggle /> // Add MusicToggle
     </>
   );
   ```

3. **Test**: Start Game → Audio controls visible, but inoperable when clicked

### 💡 Why This Matters

The **`MusicToggle` component** demonstrates conditional rendering with dynamic images and tooltips. The `music.isPlaying` state controls both the icon and the tooltip text, providing clear visual feedback to users.

<a id="adding-audio-reference-to-useaudio"></a>

## 📻 Adding Audio Reference to useAudio

Now let's add the audio reference to your `useAudio` hook so it can store the HTMLAudioElement.

1. **Open `src/hooks/useAudio.js`** and add the audio reference:

   ```javascript
   export function useAudio(src) {
     const audioRef = useRef(null); // Add audio ref
     const [isPlaying, setIsPlaying] = useState(false);
     // ... rest of hook
   }
   ```

2. **Add the useRef import** at the top of the file:

   ```javascript
   import { useRef, useState } from "react"; // Add useRef import
   ```

3. **Test**: No visible changes yet, but the hook can now store audio elements

### Audio Reference Flow

```text
useAudio hook called → audioRef.current is null → play() creates new Audio() → 
audioRef.current stores Audio element → future calls reuse same element
```

### 💡 Why This Matters

The **audioRef** provides persistent storage for the audio element across component re-renders. Without refs, you'd create a new audio element every time the component updates, causing audio to restart unexpectedly.

<a id="implementing-audio-playback"></a>

## 🎵 Implementing Audio Playback

Let's implement the core audio functionality by updating the `play` function to create and control audio elements.

1. **Update the play function** in `src/hooks/useAudio.js`:

   ```javascript
   const play = () => { // Update play function
     if (!audioRef.current) {
       audioRef.current = new Audio(src);
       audioRef.current.loop = true;
       audioRef.current.volume = 0.5;
     }
     audioRef.current.play();
     setIsPlaying(true);
   };
   ```

2. **Test**: Click music toggle → Game theme plays and button shows playing state

### Audio Creation Logic

```text
Check if audio exists → If not, create new Audio(src) → Configure loop and volume → 
Call play() method → Update isPlaying state → UI reflects playing state
```

### 💡 Why This Matters

This pattern ensures audio elements are created only once and reused. The `if (!audioRef.current)` check prevents creating multiple audio elements, which would cause overlapping sounds and memory leaks.

<a id="solo-mission-complete-useaudio-hook"></a>

## 🎖️ Solo Mission: Complete useAudio Hook

Now for your independent challenge — complete the `useAudio` hook with pause functionality, error handling, and cleanup! You'll use AI assistance for the advanced parts.

### 1. Implement Pause Functionality

- Update the `pause` function to pause audio and update state
- Use `audioRef.current.pause()` to stop playback
- Set `isPlaying` to `false` when paused
- **Test**: Click music toggle while playing → Music stops and button shows paused state

### 2. Add Error Handling with AI Assistance

With `useAudio.js` open, use GitHub Copilot following this workflow:

**⚡ GitHub Copilot Workflow:**

1. Use a Copilot chat command like `/fix`, `/explain`, or `/test`
2. Write a clear, focused prompt describing what you want
3. Review the suggestion Copilot generates
4. Apply the change if it meets your needs
5. Test the update to confirm it works

**Prompt**:
```
/fix Add error handling to the play function in the useAudio hook so that 
if the audio fails to play, it catches the error, logs a warning, and 
updates isPlaying to false
```

- Review the generated code
- Apply the changes if they look correct
- **Test**: Open `src/context/GameContext.jsx` and change `const music = useAudio("/audio/dramatic-action.mp3");` to an invalid path like `"/audio/nonexistent.mp3"` → Click music toggle → Check console for error handling

### 3. Add Cleanup with AI Assistance

**Prompt**:
```
/fix Add a useEffect cleanup function to the useAudio hook that stops 
the audio and clears the reference when the component unmounts
```

- Review the generated useEffect code
- Apply the changes to prevent memory leaks
- **Test**: Navigate between screens to verify cleanup works

### Requirements Checklist

Your completed `useAudio` hook must:

- Export `play`, `pause`, `toggle`, and `isPlaying`
- Successfully toggle audio playback
- Handle errors when attempting to play audio
- Set `isPlaying(false)` if an error occurs
- Include a `useEffect` cleanup function for component unmounting

### 💡 Why This Matters

This challenge combines everything you've learned: custom hooks, browser APIs, error handling, and AI-assisted development. You're building production-quality code that handles edge cases and prevents memory leaks — exactly what professional developers do.

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the custom hooks and browser API concepts you just learned:_

| Term | Definition | Why it matters |
|------|------------|----------------|
| 🪝 hook | Functions starting with "use" that let you use React features like state and context. | Hooks like `useState` are your tools for managing data and behavior in components. |
| 🔄 DRY (Don't Repeat Yourself) | A fundamental programming principle that emphasizes eliminating code duplication through reusable solutions. | Custom hooks like `useAudio` let you "write once, use often" instead of copying audio logic across components. |
| 🔊 HTMLAudioElement | Browser's built-in interface for controlling audio playback, providing methods like play(), pause(), and properties like volume and loop. | Gives you programmatic control over audio files in web applications. |
| 🔗 ref | A way to access DOM elements or store values that don't cause re-renders when changed. | Perfect for storing audio elements that need to persist but don't affect UI rendering. |
| 🎯 useRef | A React hook that creates a persistent reference to a DOM element or value that doesn't cause re-renders when it changes. | Essential for storing audio elements and other browser API objects across component updates. |
| 🔄 mutable | Data that can be changed or modified after it's created, as opposed to immutable data that cannot be changed. | Refs store mutable values that can be updated without triggering re-renders, perfect for audio objects that change state. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Custom Hooks & Browser APIs

You just created a custom React hook with browser API integration and AI-assisted development — excellent work!

Now let's deepen your understanding of custom hooks, browser APIs, and professional development practices. Here are the most impactful questions to ask your AI assistant about today's session:

- **What makes custom hooks different from regular functions, and why do they need to start with "use"?**
- **How do refs differ from state, and when should I use each one?**
- **What are the benefits of wrapping browser APIs in custom hooks?**
- **How does the HTMLAudioElement API work, and what other browser APIs are commonly used?**
- **What are some best practices for error handling in custom hooks?**
- **How can AI assistants help with coding, and what should I watch out for?**