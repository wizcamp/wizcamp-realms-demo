# Iterative Build Pattern - Complete Framework Summary

This document provides a complete reference for applying the Iterative Build Pattern with proper code scaffolding and callout usage.

---

## Quick Reference: Pattern Application

### 1. Code Scaffolding Decision Tree

```
What type of change?

├─ Adding 1-2 lines
│  └─ Use: Inline Comment Pattern
│
├─ Updating existing function
│  └─ Use: Context Preservation Pattern
│
├─ Adding complete section (function/component)
│  └─ Use: Region Markers Pattern
│
├─ Replacing code structure
│  └─ Use: Before/After Pattern
│
├─ Student implements independently
│  └─ Use: Placeholder Comments Pattern
│
└─ Adding JSX elements
   └─ Use: JSX Comments Pattern
```

### 2. Callout Placement Rules

- **💡 Concept:** After code block introducing new concept
- **⚠️ Warning:** After code with potential pitfalls
- **ℹ️ Note:** After code or verification for additional context
- **✅ Success Check:** After final step in section
- **🎯 Pro Tip:** After related code for advanced techniques

### 3. Verification Pattern Decision Tree

```
What type of verification?

├─ Quick check with obvious result
│  └─ Use: Pattern A (Inline)
│
├─ Single step with brief explanation
│  └─ Use: Pattern B (Bullet)
│
├─ Multiple detailed steps
│  └─ Use: Pattern C (Dedicated Section)
│
├─ Show exact data structure/API response
│  └─ Use: Pattern D (Expected Output)
│
└─ Multiple success conditions (end of section)
   └─ Use: Pattern E (Success Checklist)
```

---

## Complete Example: Adding Score Tracking

This example demonstrates all patterns working together.

### Step 1: Add Score State

Add state to track the player's score in the game context.

- **Open** `src/context/GameContext.jsx`
- **Add** inside the `GameProvider` function:
  ```javascript
  const [zoneProgress, setZoneProgress] = useState({});
  // Add score state here
  ```
- **Verify:** File should compile without errors

> **ℹ️ Note:** State initialized to `0` ensures the game starts with a clean slate.

**Scaffolding Used:** Inline Comment Pattern (simple addition)
**Callout Used:** Note (additional context)
**Verification:** Pattern A - Inline (quick obvious check)

---

### Step 2: Expose Score in Context

Make the `score` accessible to all components through the Context value.

- **Update** the Context value to include `score`:
  ```javascript
  <GameContext.Provider value={{
    // GAME STATE
    screen,
    // Add score here
    zoneProgress,
    
    // ACTIONS
    setScreen,
    // Add setScore here
  ```
- **Verify:** Open React DevTools → GameProvider → hooks → `score` should be `0`

> **💡 Concept:** The Context Provider makes state available to all child components without prop drilling.

**Scaffolding Used:** Inline Comment Pattern (simple additions)
**Callout Used:** Concept (explaining how it works)
**Verification:** Pattern B - Bullet (single step with explanation)

---

### Step 3: Create Scoreboard Component

Build a component to display the current score.

- **Open** `src/components/HUD.jsx`
- **Add** at the top of the file:
  ```javascript
  // ========== ADD THIS COMPONENT ==========
  function Scoreboard() {
    const { score } = useGame();
    return <div className="score-display">Score: {score}</div>;
  }
  // ========== END ==========
  
  // Existing CurrentZone function below
  function CurrentZone() {
    // ... existing code ...
  }
  ```

> **💡 Concept:** The `Scoreboard` component demonstrates the single responsibility principle — it has one job: display the current score.

**Scaffolding Used:** Region Markers Pattern (complete component)
**Callout Used:** Concept (design principle)
**Verification:** None (deferred to next step)

---

### Step 4: Render Scoreboard in HUD

Update the HUD to display both the scoreboard and current zone.

- **Update** the HUD return statement:
  ```javascript
  // Before:
  return <CurrentZone />;
  
  // After:
  return (
    <>
      <Scoreboard />
      <CurrentZone />
    </>
  );
  ```
- **Verify:** Navigate to game screen → Score: 0 should appear in HUD

> **ℹ️ Note:** React Fragments (`<>...</>`) let you group components without adding extra DOM wrapper elements.

**Scaffolding Used:** Before/After Pattern (replacement)
**Callout Used:** Note (additional context)
**Verification:** Pattern B - Bullet (single step with context)

---

### Step 5: Update Score on Correct Answers

Reward players with points for correct answers.

- **Open** `src/context/GameContext.jsx`
- **Find** the `recordCorrectAnswer` function
- **Add** point reward:
  ```javascript
  // Find this function and add the score update:
  const recordCorrectAnswer = () => {
    setCorrectAnswers((prev) => prev + 1);
    // Add score update here
  };
  ```
- **Verify the implementation:**
  1. **Click** a zone
  2. Answer a question correctly
  3. Check that `score` increases by `100` points
  4. Answer incorrectly
  5. Verify `score` doesn't go below `0`

> **💡 Concept:** Updater functions like `setScore((prev) => prev + 100)` ensure accurate calculations even when React batches multiple state updates.

> **⚠️ Warning:** Always use updater functions when new state depends on previous state to avoid stale state bugs.

**Scaffolding Used:** Context Preservation Pattern (function update)
**Callouts Used:** Concept + Warning (how it works + common mistake)
**Verification:** Pattern C - Dedicated Section (multiple detailed steps)

---

### Step 6: Complete Implementation

Verify the complete scoring system works end-to-end.

- **Test** the complete flow:
  1. **Start** a new game
  2. **Complete** a zone with correct and incorrect answers
  3. **Check** that score updates correctly
  4. **Reset** the game
  5. **Verify** score returns to `0`

> **✅ Success Check:**
>
> - [ ] Score displays `0` when game starts
> - [ ] Score increases by `100` for correct answers
> - [ ] Score decreases by `100` for incorrect answers (minimum `0`)
> - [ ] Score resets to `0` when game resets
> - [ ] Score persists across zone changes

**Scaffolding Used:** None (verification only)
**Callout Used:** Success Check (comprehensive checklist)
**Verification:** Pattern E - Success Checklist (multiple conditions, end-of-section)

---

## Verification Patterns Reference

### Pattern A: Inline Verification

**Use when:** Quick checks with obvious results

**Example:**
```markdown
- **Update** the score state:
  ```javascript
  const [score, setScore] = useState(0);
  ```
- **Verify:** React DevTools → GameProvider → hooks → `score` should be `0`
```

**Characteristics:**
- Single line verification
- Obvious expected result
- Uses arrow notation (→)
- No numbered steps

---

### Pattern B: Bullet Verification

**Use when:** Single step needs brief explanation

**Example:**
```markdown
- **Update** the Context value:
  ```javascript
  <GameContext.Provider value={{ score, setScore }}>
  ```
- **Verify:** Open React DevTools → Find GameProvider → Check hooks → `score` should be `0`
```

**Characteristics:**
- Separate bullet for verification
- Brief explanation or context
- Still uses arrow notation
- More detail than inline

---

### Pattern C: Dedicated Verification Section

**Use when:** Multiple checks or detailed verification required

**Example:**
```markdown
- **Update** the scoring system:
  ```javascript
  const recordCorrectAnswer = () => {
    setScore((prev) => prev + POINTS_PER_CORRECT);
  };
  ```
- **Verify the implementation:**
  1. **Click** a zone
  2. Answer a question correctly
  3. Check that `score` increases by `100` points
  4. Answer incorrectly
  5. Verify `score` doesn't go below `0`
```

**Characteristics:**
- Numbered steps for clarity
- Multiple verification actions
- Bold for action verbs
- Clear sequential flow

---

### Pattern D: Expected Output Block

**Use when:** Showing exact expected output or data structure

**Example:**
```markdown
- **Fetch** questions from the API:
  ```javascript
  const data = await response.json();
  console.log(data);
  ```
- **Expected output:**
  ```javascript
  {
    "response_code": 0,
    "results": [
      {
        "question": "What does CPU stand for?",
        "correct_answer": "Central Processing Unit"
      }
    ]
  }
  ```
```

**Characteristics:**
- Shows exact data structure
- Uses code block for output
- Helps students recognize format
- Common for API integration

---

### Pattern E: Success Checklist

**Use when:** Multiple success conditions at end of section

**Example:**
```markdown
- **Complete** the scoring system implementation

> **✅ Success Check:**
>
> - [ ] Score displays `0` when game starts
> - [ ] Score increases by `100` for correct answers
> - [ ] Score resets to `0` when game resets
```

**Characteristics:**
- Callout format with checkboxes
- Multiple conditions to verify
- End-of-section comprehensive check
- Blank line after callout header

---

## Pattern Summary Table

| Step | Scaffolding Pattern | Callout Type | Verification Pattern |
|------|-------------------|--------------|----------------------|
| 1 | Inline Comment | Note | A - Inline |
| 2 | Inline Comment | Concept | B - Bullet |
| 3 | Region Markers | Concept | None (deferred) |
| 4 | Before/After | Note | B - Bullet |
| 5 | Context Preservation | Concept + Warning | C - Dedicated Section |
| 6 | None | Success Check | E - Success Checklist |

---

## Key Principles Applied

### Code Scaffolding
✅ Matched pattern to change type (decision tree)
✅ Provided appropriate context for each change
✅ Progressed from simple to complex
✅ Tracked file context with Open statements

### Callout Usage
✅ Placed after relevant code blocks
✅ Used appropriate type for content
✅ Explained concepts without blocking action
✅ Warned about common pitfalls
✅ Provided comprehensive end check

### Verification
✅ Used decision tree to select pattern
✅ Pattern A for quick obvious checks
✅ Pattern B for single steps with explanation
✅ Pattern C for multiple detailed steps
✅ Pattern E for end-of-section checklists
✅ Progressed from simple to comprehensive

### Formatting
✅ All actions use bullets
✅ Backticks for all code elements
✅ Bold for action verbs
✅ Open statement only when file changes
✅ Code blocks use language identifiers

---

## Anti-Patterns to Avoid

❌ **Don't:** Mix scaffolding patterns inconsistently
✅ **Do:** Choose pattern based on decision tree

❌ **Don't:** Place callouts before code blocks
✅ **Do:** Place callouts after related code

❌ **Don't:** Use callouts for every step
✅ **Do:** Use strategically for teaching moments

❌ **Don't:** Repeat file paths in every action
✅ **Do:** Open once, track current file

❌ **Don't:** Use Pattern A (inline) for complex multi-step checks
✅ **Do:** Use decision tree to select appropriate verification pattern

❌ **Don't:** Use Pattern E (checklist) for simple single checks
✅ **Do:** Reserve Pattern E for end-of-section comprehensive verification

❌ **Don't:** Forget backticks for code elements
✅ **Do:** Use backticks for all props, functions, variables

---

## Quick Checklist for Pattern Application

Before applying pattern to a section:

- [ ] Identified change type (decision tree)
- [ ] Selected appropriate scaffolding pattern
- [ ] Determined callout placement and type
- [ ] Selected verification pattern using decision tree
- [ ] Used consistent formatting (bullets, backticks, bold)
- [ ] Tracked file context (Open only when changes)
- [ ] Placed callouts after code blocks
- [ ] Ended section with appropriate verification

---

## Next Steps

1. **Review** this summary for complete pattern understanding
2. **Apply** patterns to testing document examples
3. **Generate** PDF for visual review
4. **Iterate** based on feedback
5. **Document** any additional patterns discovered
