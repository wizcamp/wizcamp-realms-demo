# Conceptual Pattern

**Use when:** Explaining concepts, providing context, or orienting students without requiring them to perform actions.

**Key characteristics:**
- No step-by-step instructions
- No code modifications or tasks
- Explanatory and educational focus
- Reinforces previous instruction
- Builds mental models and understanding

---

## Pattern Structure

Conceptual sections provide understanding without action. Choose the appropriate variant based on complexity and content type.

### Decision Tree

```
What type of conceptual content?

├─ Brief explanation or orientation
│  └─ Variant A (Simple)
│
├─ Multi-part explanation with visuals
│  └─ Variant B (Structured)
│
├─ End-of-session vocabulary reference
│  └─ Special Section: Essential Terms
│
└─ End-of-session reflection prompts
   └─ Special Section: Ask the AI
```

---

## Variant A: Simple Explanation (1-3 Paragraphs)

**Use when:** Brief context, orientation, or single-concept explanation

**Structure:**
```markdown
## [Emoji] Section Title

[Introductory context - often italicized]

[Explanation content - paragraphs or simple lists]

[Optional: Forward-looking or reassuring statement]
```

**Required elements:**
- Section title with emoji
- Clear explanation
- Conversational tone

**Optional elements:**
- Italicized intro/context
- Forward-looking statements
- Reassurance about complexity

**CRITICAL:** Do NOT wrap reference sections (project structure, navigation) in callouts. They are standalone sections.

---

### Example 1: Brief Orientation

```markdown
## 🎯 What You'll Build Today

_A quick look at where you're headed:_

Today you'll transform your splash screen from static to interactive. You'll add buttons that respond to clicks, connect them to your game's state management system, and see how React updates the UI automatically when data changes.

_Don't worry if "state management" sounds intimidating — you'll see it's just a fancy term for keeping track of what's happening in your app._
```

---

### Example 2: Concept Explanation

```markdown
## 🧠 Understanding Components

Components are React's building blocks — think digital LEGO pieces you snap together to build apps. Each component is a self-contained piece of UI that can include its own markup, styling, and logic.

When you write `<SplashScreen />`, you're using a component. When you create a new file like `GameButton.jsx`, you're building a component. This modular approach makes your code reusable and easier to maintain.
```

---

## Variant B: Structured Explanation (With Visuals)

**Use when:** Multi-part explanation requiring visual aids or organization

**Common sub-variants:**
- **B1: Understanding** - Concept explanation with comparisons
- **B2: Why** - Motivation/rationale with problem/solution
- **B3: Exploring** - Discovery/investigation of existing code/tools
- **B4: Data Flow** - Architecture and how pieces connect

**Base structure:**
```markdown
## [Emoji] Section Title

[Introductory context - often italicized]

[Visual aid: code block, diagram, or figure]

[Explanation organized with subheadings, bullets, or paragraphs]

[Optional: Transitional ending or reassurance]
```

**Required elements:**
- Section title with emoji
- Visual aid (code block, diagram, or figure)
- Organized explanation
- Context or scoping

**Optional elements:**
- Subheadings for organization
- Scoping statements ("For today...")
- Reassurance about complexity
- Transitional ending to next section

---

### Sub-Variant B1: Understanding (Concept Explanation)

**Use when:** Explaining core concepts before hands-on work

**Emojis:** 💡 🧠 🪝 🔗

**Structure:**
- Opens with context/why
- Comparison table or diagram
- Explanation paragraphs
- Transitional ending

**Example:**

```markdown
## 🧠 Understanding State vs Props

Before we dive into code, let's understand the key difference between **state** and **props** — two fundamental concepts that control how data flows in React apps.

### Props vs State: The Key Differences

| **Props** | **State** |
|-----------|-----------|
| Data flows **down** from parent to child | Data lives **inside** a component |
| **Read-only** — child can't change them | **Changeable** — component can update it |
| Like function parameters | Like component memory |
| External data | Internal data |

**Props** are like ingredients you receive to make a recipe — you can't change them, but you use them to create something. **State** is like your kitchen's current condition — you can rearrange, add, or remove things as needed.

Understanding this difference is crucial because it determines how data flows through your app and which component is responsible for managing what information.
```

---

### Sub-Variant B2: Why (Motivation/Rationale)

**Use when:** Explaining why a technique/tool matters before teaching it

**Emojis:** ⚡

**Structure:**
- Problem/Solution format
- Bullet lists of pain points
- Real-world context
- Brief (2-4 paragraphs)

**Example:**

```markdown
## ⚡ Why Caching Matters

Before we dive into code, let's understand why **caching** is crucial for modern web applications.

**The Problem:** Every time you click a zone, your game makes a network request to the OpenTrivia Database. This means:

- **Slow loading** - Network requests take time
- **Wasted bandwidth** - Downloading the same questions repeatedly
- **Rate limiting** - APIs limit how often you can request data
- **Poor user experience** - Users wait for content they've already seen

**The Solution:** Store API responses locally in the browser so subsequent requests are instant.

**Caching** is a fundamental performance optimization technique used by every major website and app. When you visit YouTube, Netflix, or Instagram, they cache images, videos, and data locally so your experience is fast and smooth.
```

---

### Sub-Variant B3: Exploring (Discovery/Investigation)

**Use when:** Guiding students through examining existing code/tools

**Emojis:** 🔍 📋 🏗️ 🔊

**Structure:**
- Introduces what will be explored
- Shows code/examples
- Explains significance
- 2-5 paragraphs with code blocks

**Example:**

```markdown
## 📋 Exploring Game Constants

Before adding navigation, let's explore the constants file that defines your game's screens.

**Open** `src/constants/screens.js`:

\`\`\`javascript
export const SCREENS = {
  SPLASH: 'splash',
  PLAYING: 'playing',
  GAME_OVER: 'game_over'
};
\`\`\`

These constants define the three main screens in your game. Using constants instead of raw strings prevents typos and makes your code easier to maintain. If you type `SCREENS.SPLASH`, your editor can autocomplete it. If you type `'splsh'` by mistake, your app breaks silently.

This pattern — defining constants in a separate file — is a professional practice you'll see in every production codebase.
```

---

### Sub-Variant B4: Data Flow/Architecture

**Use when:** Explaining how pieces fit together

**Emojis:** 🔄 🏗️

**Structure:**
- Step-by-step flow explanation
- Numbered lists or diagrams
- How pieces connect
- 3-6 paragraphs

**Example:**

```markdown
## 🔄 Understanding the Complete Data Flow

_Let's trace how a question travels from the API to your screen:_

1. **Player clicks a zone** → `handleZoneClick` function runs
2. **Fetch questions** → `fetchQuestions` calls the OpenTrivia API
3. **Transform data** → `transformQuestion` converts API format to game format
4. **Store in Context** → Questions saved in `currentQuestions` state
5. **Quiz modal opens** → Modal reads questions from Context
6. **Player sees question** → UI displays the first question

This unidirectional data flow — from user action → API → transformation → state → UI — is a core React pattern. Data always flows in one direction, making your app predictable and easier to debug.

<img src="https://placehold.co/600x400?text=Data+Flow+Diagram" alt="Data flow diagram" style="max-width: 600px; width: 100%;">
*Figure: Data flows from API through transformation to Context and finally to UI components*
```

---

### Example: Project Structure (Navigation)

```markdown
## 🗂️ Navigating the Project

_Quick orientation to help you find files during today's tasks:_

\`\`\`text
wizcamp-realms/
├── src/                    # Your React code lives here
│   ├── components/         # React components (SplashScreen, etc.)
│   ├── context/            # State management (GameContext)
│   └── App.jsx             # Main app component
├── public/                 # Static files (images, audio)
├── index.html              # HTML entry point
└── package.json            # Project configuration
\`\`\`

**For today's tasks, you'll only work with:**

- `src/components/GameButton.jsx` — create a new reusable button
- `src/components/SplashScreen.jsx` — use your new button

_Don't worry about the other folders yet — we'll explore them in future sessions._
```

---

### Example 2: How It Works

```markdown
## ⚙️ How React Updates the UI

_Understanding the magic behind instant updates:_

When you change state in React, here's what happens:

1. **State changes** — You call a state setter like `setScreen('playing')`
2. **React notices** — React detects the state change
3. **Component re-renders** — React calls your component function again
4. **UI updates** — React updates only the parts of the page that changed

This is why your app feels instant — React is incredibly efficient at figuring out what needs to update and only touching those specific parts of the page.

_You don't need to understand all the internals yet. Just know that when you change state, React handles the UI updates automatically._
```

---

### Example 3: Architecture Overview

```markdown
## 🏗️ Understanding the Game Architecture

_How all the pieces fit together:_

<img src=\"https://placehold.co/600x400?text=Architecture+Diagram\" alt=\"Game architecture diagram\" style=\"max-width: 600px; width: 100%;\">
*Figure: Data flows from Context through components to the UI*

Your trivia game has three main layers:

- **Context Layer** — Stores game state (current screen, score, questions)
- **Component Layer** — UI pieces that display data and handle user actions
- **Data Layer** — Question fetching and caching logic

When a player clicks a button, the event flows up to Context, which updates the state, which flows back down to update all connected components. This unidirectional data flow makes your app predictable and easier to debug.
```

---

## Special Section: Accessing Your Codespace

**Use when:** Sessions 2+ (not Session 1, which covers initial Codespace setup)

**Structure:**
```markdown
<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session X.
```

**Required elements:**
- Always uses ☁️ emoji in title
- Single sentence instruction
- Link to github.com/codespaces
- References previous session number

**Conventions:**
- ❌ Does NOT appear in Table of Contents
- ❌ Does NOT include Goal statement
- ✅ Always first section after TOC
- ✅ Includes anchor tag for potential linking

**Placement:**
- Always first section after Table of Contents
- Before any instructional content
- Only in Sessions 2+

---

## Special Section: Essential Terms

**Use when:** End-of-session vocabulary reference

**Structure:**
```markdown
## 📚📋 Essential Terms

_Quick reference for all the tools and concepts you just experienced:_

| Term | Definition | Why it matters |
|------|------------|----------------|
| [Emoji] Term | [Clear, concise definition] | [Practical relevance to student] |
| [Emoji] Term | [Clear, concise definition] | [Practical relevance to student] |
```

**Required elements:**
- Always uses 📚📋 emojis in title
- Always 3-column table format
- Italicized intro sentence
- Terms include relevant emojis
- Definitions are clear and concise
- "Why it matters" connects to student experience
- **Terms never repeat across sessions** — each term appears in only one session's Essential Terms table

**Placement:**
- Always near end of session
- Before "Ask the AI" section
- After all instructional content

**Critical Rule:**
- Once a term appears in any session's Essential Terms table, it must NOT appear in any other session's Essential Terms table
- This ensures students build vocabulary progressively without redundancy

---

### Example: Essential Terms

```markdown
## 📚📋 Essential Terms

_Quick reference for all the tools and concepts you just experienced:_

| Term | Definition | Why it matters |
|------|------------|----------------|
| ⚛️ React | A library for building UIs out of components; it updates the UI when data changes. | The project is a React app — you'll edit components to change what users see. |
| 🧩 component | A reusable piece of UI that can include markup, styles, and logic (example: `<SplashScreen />`). | You'll replace a placeholder component with `SplashScreen` to practice editing and imports. |
| ✨ JSX | JavaScript syntax that looks like HTML — used to describe UI in React components (`.jsx`). | You'll edit `.jsx` files (e.g., `src/App.jsx`) to swap components and change UI. |
| 🔁 Hot Module Replacement (HMR) | Updates only the changed code in the browser without a full reload, often keeping app state. | Lets you see edits instantly (CSS/JS) while you work — you'll notice changes apply without losing progress. |
| 📦 npm | Node's package manager — installs libraries and runs scripts (`npm run dev`). | Use it to install dependencies and start the dev server. |
```

---

## Special Section: Ask the AI

**Use when:** End-of-session reflection and deeper understanding

**Structure:**
```markdown
## 🤖 Ask the AI — [Session Topic]

[Recap of what was accomplished - 1-2 sentences]

[Transition sentence about understanding]

- **[Question about why/how something works]**
- **[Question about concepts or tools]**
- **[Question about workflow or best practices]**
[5-7 curated questions total]
```

**Required elements:**
- Always uses 🤖 emoji
- Session topic in title
- Accomplishment recap
- Transition sentence
- 5-7 bold questions
- Questions encourage deeper understanding

**Placement:**
- Always at very end of session
- After Essential Terms
- Final section before next session

---

### Example: Ask the AI

```markdown
## 🤖 Ask the AI — Building Reusable Components

You just created your first reusable component, added props to make it flexible, and used it in multiple places — nice work!

Now let's make sure you understand what you did and why it matters. Here are the most impactful questions to ask your AI assistant about today's session:

- **Why are reusable components better than copying and pasting code?**
- **What's the difference between props and state in React?**
- **How does React know when to re-render a component?**
- **What does the export default syntax do in JavaScript?**
- **Why do we use curly braces in JSX sometimes but not always?**
- **What's the difference between a function component and a class component?**
- **How can I tell if something should be a prop or hardcoded in the component?**
```

---

## Formatting Conventions

### Italicized Context

Use italics for introductory or contextual statements:

```markdown
_Quick orientation to help you find files during today's tasks:_
_Don't worry about the other folders yet — we'll explore them in future sessions._
```

### Bold for Scoping

Use bold for "for today" scoping statements:

```markdown
**For today's tasks, you'll only work with:**
```

### Code Blocks for Structure

Use text code blocks for file trees and architecture:

\`\`\`text
project/
├── folder/
│   └── file.js
\`\`\`

### Comparison Tables

Use tables to contrast concepts (common in Understanding sections):

```markdown
| **Props** | **State** |
|-----------|-----------|
| Read-only | Changeable |
| External data | Internal data |
```

### Problem/Solution Format

Use for Why sections:

```markdown
**The Problem:** [pain points with bullets]

**The Solution:** [approach]
```

### Transitional Endings

Bridge to next section:

```markdown
Now let's build your first custom component and see that power in action.
```

### Backticks for Code Elements

Use backticks for file names, functions, and code terms:

```markdown
- `src/App.jsx` — main app component
- The `useState` hook manages state
```

### Conversational Tone

Use friendly, encouraging language:

```markdown
_Don't worry if "state management" sounds intimidating — you'll see it's just a fancy term for keeping track of what's happening in your app._
```

---

## Callout Usage

Conceptual sections rarely use callouts since the entire section is explanatory. However, when needed:

**ℹ️ Note** - Additional context or clarification
```markdown
> **ℹ️ Note:** React components must start with a capital letter. This is how React distinguishes them from regular HTML tags.
```

**💡 Concept** - Deeper technical explanation (rare in Conceptual sections)
```markdown
> 💡 **JSX Under the Hood**
>
> JSX is syntactic sugar for `React.createElement()` calls. The JSX you write gets transformed into regular JavaScript before running in the browser.
```

---

## When to Use This Pattern

✅ **Good for:**
- Project structure orientation (standalone, NOT in callout)
- Explaining how things work
- Building mental models
- Vocabulary reference (Essential Terms)
- Reflection prompts (Ask the AI)
- Architecture overviews
- Concept reinforcement

❌ **Not ideal for:**
- Step-by-step instructions (use Iterative Build, Configuration, or Procedural)
- Tasks requiring actions (use appropriate action pattern)
- Administrative tasks (use Procedural)
- Tool setup (use Configuration)

❌ **NEVER do this:**
- Wrap reference sections in callouts
- Wrap navigation guides in callouts
- Turn standalone sections into callouts

---

## Conceptual vs Other Patterns

| Aspect | Conceptual | Procedural | Configuration | Iterative Build |
|--------|-----------|-----------|---------------|-----------------|
| **Actions** | None | Administrative | Tool setup | Code changes |
| **Purpose** | Understanding | Complete tasks | Configure env | Build features |
| **Verification** | None | Implicit | Expected output | Test after steps |
| **Tone** | Explanatory | Instructional | Technical | Instructional |
| **Examples** | Project structure | Introductions | Dev server | Add component |

**Key distinction:** If students need to DO something, it's not Conceptual. Conceptual is pure explanation and understanding.

---

## Pattern Selection Guide

| Content Type | Complexity | Visual Aid | Variant | Example |
|--------------|-----------|------------|---------|---------|
| Understanding | Medium | Table/diagram | B1 | State vs Props |
| Why/motivation | Simple | Bullets | B2 | Why Caching Matters |
| Exploring | Medium | Code blocks | B3 | Game Constants |
| Data flow | Complex | Diagram | B4 | Complete Data Flow |
| Brief explanation | Simple | No | A (Simple) | What You'll Build |
| Concept explanation | Simple | No | A (Simple) | Understanding Components |
| Project structure | Medium | Yes | B (Structured) | Navigating the Project |
| How it works | Medium | Optional | B (Structured) | How React Updates |
| Architecture | Complex | Yes | B (Structured) | Game Architecture |
| Vocabulary | N/A | Table | Essential Terms | End of session |
| Reflection | N/A | Questions | Ask the AI | End of session |

---

## Complete Examples

See `../examples/conceptual-example.md` for complete working examples of all variants and special sections.

---

## Quick Reference

**Variant A (Simple):**
- 1-3 paragraphs
- Brief explanation
- Optional italicized context
- No visual aids

**Variant B (Structured):**
- Multi-part explanation
- Visual aid required
- Organized with bullets/subheadings
- Optional transitional ending

**Sub-Variants:**
- **B1 (Understanding):** Concept explanation with comparison tables
- **B2 (Why):** Problem/Solution format with motivation
- **B3 (Exploring):** Discovery of existing code/tools
- **B4 (Data Flow):** Architecture and connections

**Essential Terms:**
- 📚📋 emojis in title
- 3-column table
- End of session
- Before Ask the AI

**Ask the AI:**
- 🤖 emoji in title
- Accomplishment recap
- 5-7 bold questions
- Very end of session
