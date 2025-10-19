# Step Introduction Simplification Pass

## Date
2025-01-XX

## Context
After initial improvements to step intros, user feedback identified that some paragraphs were still problematic - either over-explaining technical details or being too mechanical. This pass focused on simplifying intros to be clear, purposeful, and student-friendly without over-explaining.

## Core Principle
**Step intros should set up WHAT the student will do, not explain HOW the code works.**

The "how" belongs in:
- The code itself (with annotations)
- Understanding callouts after the code
- Conceptual sections before hands-on work

## Problems Identified

### 1. Over-Explaining Technical Details
❌ **Bad**: "Add `setIsQuizVisible` and call it after questions load — this sets the state to true, satisfying Step 1's condition and making the modal appear."

✅ **Good**: "Make the modal appear after questions finish loading by updating the visibility state."

**Why**: The intro was explaining the entire mechanism (state → true → condition satisfied → modal appears). That's what the Understanding callout is for.

### 2. Listing Instructions Instead of Purpose
❌ **Bad**: "Right-click `src/components` → New File → name it `GameButton.jsx`"

✅ **Good**: "Create a new file for your reusable button component."

**Why**: Step-by-step instructions belong in the body, not the intro paragraph.

### 3. Mechanical "Add X" Language
❌ **Bad**: "Add the imports for the HUD and CoordinateDisplay components."

✅ **Good**: "Import the HUD and coordinate display components you'll add to the game screen."

**Why**: Adds context about why these imports matter.

### 4. Over-Specifying Implementation Details
❌ **Bad**: "Add a `variant` prop with a default value to control button styling, then create a dynamic className that combines the base class with the variant."

✅ **Good**: "Add support for different button styles using a variant prop."

**Why**: The intro listed every implementation detail. Students just need to know the goal.

## All Changes Made

### SESSION-02 (4 improvements)
1. **Step 1: Create the component file**
   - Before: Instructions for right-clicking and naming
   - After: "Create a new file for your reusable button component."

2. **Step 1: Add text prop**
   - Before: "Update the component to accept a `text` prop, replacing the hardcoded button text with a dynamic value."
   - After: "Make the button text customizable by accepting it as a prop."

3. **Step 1: Add onClick prop**
   - Before: "Update the component to accept an `onClick` prop and attach it to the button element."
   - After: "Make the button interactive by accepting a click handler as a prop."

4. **Step 1: Add variant prop**
   - Before: "Add a `variant` prop with a default value to control button styling, then create a dynamic className that combines the base class with the variant."
   - After: "Add support for different button styles using a variant prop."

### SESSION-03 (7 improvements)
1. **Step 1: Add imports to SplashScreen (first occurrence)**
   - Before: "Add the imports for React's state management and the credits modal."
   - After: "Import the tools you'll need for managing modal visibility."

2. **Step 3: Update the Credits button onClick**
   - Before: "Update the Credits button's onClick handler to show the modal when clicked."
   - After: "Connect the Credits button to your modal visibility state."

3. **Step 4: Add the modal to JSX**
   - Before: "Add the modal with conditional rendering so it only appears when `showCredits` is true."
   - After: "Add the modal to your component so it can appear when needed."

4. **Step 1: Add imports to App**
   - Before: "Add the imports for the `useGame` hook, `SCREENS` constants, and the `GameMap` component."
   - After: "Import the tools you'll need for screen navigation and the game map."

5. **Step 2: Access shared state**
   - Before: "Extract the `screen` value from the `useGame` hook to access the current screen state."
   - After: "Get the current screen value from your game's shared state."

6. **Step 3: Add conditional rendering**
   - Before: "Replace the hardcoded `<SplashScreen />` with conditional logic that renders different components based on the `screen` state value."
   - After: "Set up your app to show different screens based on the current game state."

7. **Step 1: Add imports to SplashScreen (second occurrence)**
   - Before: "Add the imports for `SCREENS` constants and the `useGame` hook."
   - After: "Import the tools you'll need to navigate to the game screen."

### SESSION-04 (2 improvements)
1. **Step 1: Add imports to App**
   - Before: "Add the imports for the HUD and CoordinateDisplay components."
   - After: "Import the HUD and coordinate display components you'll add to the game screen."

2. **Step 2: Update PLAYING screen rendering**
   - Before: "Replace the single GameMap component with a Fragment containing the map, HUD, and coordinate helper."
   - After: "Add the HUD and coordinate display alongside your game map."

### SESSION-07 (3 improvements)
1. **Step 2: Update GameMap to show modal**
   - Before: "Add `setIsQuizVisible` and call it after questions load — this sets the state to true, satisfying Step 1's condition and making the modal appear."
   - After: "Make the modal appear after questions finish loading by updating the visibility state."

2. **Step 1: Create the messages file**
   - Before: "Right-click `src/constants` → New File → name it `messages.js`, then add the feedback message arrays."
   - After: "Create a new file to store your custom feedback messages for correct and incorrect answers."

3. **Step 4: Add AnswerFeedback to JSX**
   - Before: "Add the AnswerFeedback component right after `<QuestionHeader question={question} />`."
   - After: "Place the feedback component in your modal so players see their results after answering."

## Patterns for Good Step Intros

### ✅ DO
- Focus on the goal/outcome
- Use simple, direct language
- Provide just enough context
- Keep it to 1-2 sentences max
- Make it conversational
- **Exception**: When instructions are the ONLY content under a step (no code block), keep the instructions there

### ❌ DON'T
- Explain how the code works (that's for Understanding callouts)
- List step-by-step instructions when there's a code block following (that's for the body)
- Use overly technical language
- Repeat what's obvious from the step title
- Over-specify implementation details

## Examples by Complexity

### Simple Steps (File Creation, Imports)
"Create a new file for your reusable button component."
"Import the tools you'll need for managing modal visibility."

### Medium Steps (Adding Features)
"Make the button text customizable by accepting it as a prop."
"Add support for different button styles using a variant prop."

### Complex Steps (Integration)
"Make the modal appear after questions finish loading by updating the visibility state."
"Set up your app to show different screens based on the current game state."

## Files Modified
- `session-guides/SESSION-02.md`: 4 step intros simplified
- `session-guides/SESSION-03.md`: 7 step intros simplified
- `session-guides/SESSION-04.md`: 2 step intros simplified
- `session-guides/SESSION-07.md`: 3 step intros simplified

Total: 16 step intros improved across 4 sessions

## Related Documents
- `STEP-INTRO-FINAL-IMPLEMENTATION.md`: Initial improvements (SESSION-01 through SESSION-04)
- `STEP-INTRO-BACKPORT-SESSIONS-05-06.md`: SESSION-05 and SESSION-06 improvements
- `CONVENTIONS.md`: Step Introduction Paragraphs guidelines
