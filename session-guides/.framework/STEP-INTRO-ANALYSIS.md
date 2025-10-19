# Step Introduction Paragraph Analysis

## Current Patterns Observed

### Pattern 1: Purpose Statement (Why)
**Example from SESSION-03:**
> "To use React's state management and the credits modal, we need to import `useState` and `CreditsModal`."

**Example from SESSION-07:**
> "Import QuizModal, add `isQuizVisible` to the destructuring, and conditionally render the modal."

### Pattern 2: Explanatory (What + Why)
**Example from SESSION-03:**
> "Create a state variable to track whether the modal is visible, starting with `false` since the modal should be hidden initially. The `useState` hook returns both the current value (`showCredits`) and a setter function (`setShowCredits`) that you'll use to update the state later."

### Pattern 3: Action-Oriented (What to do)
**Example from SESSION-07:**
> "Add the `AnswerChoices` component after the `QuestionHeader` function."

**Example from SESSION-07:**
> "Add the component to the JSX right after `<QuestionHeader question={question} />`."

### Pattern 4: Contextual (What + How it connects)
**Example from SESSION-07:**
> "Add `setIsQuizVisible` and call it after questions load — this sets the state to true, satisfying Step 1's condition and making the modal appear."

### Pattern 5: Process Overview (What you'll do)
**Example from SESSION-07:**
> "Update the `AnswerChoices` component to accept an `onAnswerClick` prop and attach it to each button."

## Inconsistencies Found

### Issue 1: Varying Levels of Detail

**Too Brief:**
> "Add the import at the top with your other imports."

**Too Detailed:**
> "Create a state variable to track whether the modal is visible, starting with `false` since the modal should be hidden initially. The `useState` hook returns both the current value (`showCredits`) and a setter function (`setShowCredits`) that you'll use to update the state later."

### Issue 2: Inconsistent Voice

**Imperative (Command):**
> "Add the `AnswerChoices` component after the `QuestionHeader` function."

**Explanatory (Description):**
> "You'll create the `AnswerChoices` component in four steps: create the component structure, add it to JSX, then implement array mapping to generate buttons."

**Purpose-Driven (Reason):**
> "To use React's state management and the credits modal, we need to import `useState` and `CreditsModal`."

### Issue 3: Technical Depth Variation

**High Technical:**
> "Update the `AnswerChoices` component to transform the answers array into button elements."

**Low Technical:**
> "Connect the Credits button to your state by updating its onClick handler to show the modal when clicked."

**Mixed:**
> "Add `setIsQuizVisible` and call it after questions load — this sets the state to true, satisfying Step 1's condition and making the modal appear."

## Recommended Convention

### Primary Pattern: Action + Brief Context

**Format:**
```
[Action verb] [what to modify] [brief context or location].
```

**Examples:**
- "Add the import at the top with your other component imports."
- "Update the `useGame` destructuring to include the modal visibility state."
- "Add the QuizModal component inside the PLAYING screen fragment."

### When to Add More Detail

**Add explanation when:**
1. The step involves a new concept
2. The change has non-obvious implications
3. Students need to understand "why" for learning

**Example with added context:**
> "Update the `AnswerChoices` component to accept styling props — this allows the parent component to control button appearance based on answer correctness."

### Voice Guidelines

**Use imperative voice consistently:**
- ✅ "Add the import..."
- ✅ "Update the destructuring..."
- ✅ "Find the QuestionHeader..."
- ❌ "You'll add the import..."
- ❌ "We need to update..."
- ❌ "To use React's state..."

**Exception:** Section-level intros (before Step 1) can use "You'll" to preview the workflow.

### Technical Depth Guidelines

**Match the step's complexity:**

**Simple steps** (adding a line, importing):
> "Add the import at the top with your other imports."

**Medium steps** (updating existing code):
> "Update the `AnswerChoices` component to accept an `onAnswerClick` prop and attach it to each button."

**Complex steps** (multi-part changes):
> "Update the `AnswerChoices` component to accept styling props and add the `getButtonStyle` function."

**Very complex steps** (conceptual + implementation):
> "Add `setIsQuizVisible` and call it after questions load — this sets the state to true, satisfying Step 1's condition and making the modal appear."

## Recommended Format by Step Type

### Import Steps
**Pattern:** "Add the import at the top with your other [category] imports."

**Examples:**
- "Add the import at the top with your other component imports."
- "Add the import at the top with your other hook imports."

### Destructuring Steps
**Pattern:** "Update the [hook/function] destructuring to include [what]."

**Examples:**
- "Update the `useGame` destructuring to include the modal visibility state."
- "Add `setScreen` to the `useGame` destructuring."

### JSX Addition Steps
**Pattern:** "Add [component/element] [location]."

**Examples:**
- "Add the component to the JSX right after `<QuestionHeader question={question} />`."
- "Add the QuizModal component inside the PLAYING screen fragment."

### Function/Logic Steps
**Pattern:** "Update [component/function] to [action] — [brief why if needed]."

**Examples:**
- "Update the `AnswerChoices` component to accept an `onAnswerClick` prop and attach it to each button."
- "Add the `getButtonStyle` function to return different CSS classes based on state."

### Testing/Verification Steps
**Pattern:** "[Action], then [verification action]."

**Examples:**
- "Click a zone, then click any answer button."
- "Navigate to the game by clicking \"Start Adventure\", then test the full interaction sequence."

## Implementation Checklist

For each step intro paragraph, verify:

- [ ] Uses imperative voice (command form)
- [ ] Starts with action verb
- [ ] Includes brief context or location
- [ ] Technical depth matches step complexity
- [ ] Length is 1-2 sentences maximum
- [ ] Avoids redundancy with code comments
- [ ] Focuses on WHAT to do, not HOW (code shows how)

## Examples to Update

### SESSION-03 Step 1 (Current)
> "To use React's state management and the credits modal, we need to import `useState` and `CreditsModal`."

**Recommended:**
> "Add the imports at the top for React's state management and the credits modal."

### SESSION-03 Step 2 (Current)
> "Create a state variable to track whether the modal is visible, starting with `false` since the modal should be hidden initially. The `useState` hook returns both the current value (`showCredits`) and a setter function (`setShowCredits`) that you'll use to update the state later."

**Recommended:**
> "Add state to track modal visibility, starting with `false` since the modal should be hidden initially."

(Move the `useState` explanation to the Understanding callout)

### SESSION-07 Step 1 (Current)
> "Import QuizModal, add `isQuizVisible` to the destructuring, and conditionally render the modal."

**Recommended:**
> "Add QuizModal to your app with import, destructuring, and conditional rendering."

(This is actually good - concise summary of multi-part step)

## Summary

**Recommended Standard:**
1. **Voice:** Imperative (command form)
2. **Length:** 1-2 sentences
3. **Structure:** Action + What + Brief Context
4. **Technical Depth:** Match step complexity
5. **Purpose:** Tell students WHAT to do, not HOW (code shows how)

**Key Principle:** The intro paragraph is a signpost, not a tutorial. It orients students to the task; the code and Understanding callout provide the details.
