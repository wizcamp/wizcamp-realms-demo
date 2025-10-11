# Iterative Build Pattern

**Use when:** Building features through incremental modifications to one or more files with testing after each step.

**Key characteristics:**
- Multiple steps that build on each other
- Frequent verification points
- Incremental complexity
- Single file focus per section
- Test-driven progression

---

## Pattern Structure

### Section Header

```markdown
## 🔄 Feature Name

Brief description of what will be built and why.
```

### Step Format

```markdown
### Step X: Descriptive Action Name

Context sentence explaining what this step accomplishes.

- **Open** `path/to/file.js` (only when file changes)
- **Action** verb with specific instruction
- **Action** verb with code modification
- **Verify:** How to confirm it worked

> **Callout Type:** Teaching moment or important note
```

### Key Principles

1. **Step X: Descriptive Name** provides wayfinding + meaning
2. **All actions use bullets** for consistency
3. **Open** `file` only when file changes (track current file)
4. **Backticks** for all code elements (props, functions, variables)
5. **Callouts** teach concepts without blocking action
6. **Code scaffolding** matches complexity (simple → detailed)
7. **Verification** always uses bullets
8. **Consistent patterns** reduce cognitive load

---

## Code Scaffolding Approaches

Match scaffolding detail to task complexity and action type.

**For complete scaffolding reference with all variants, see:** `../code-scaffolding-reference.md`

### Decision Tree: Which Scaffolding Pattern?

```
What type of change?

├─ Adding 1-2 lines
│  └─ Use: Pattern 1 (Inline Comment)
│
├─ Updating existing function
│  └─ Use: Pattern 2 (Context Preservation)
│
├─ Adding complete section (function/component)
│  └─ Use: Pattern 3 (Region Markers)
│
├─ Replacing code structure
│  └─ Use: Pattern 4 (Before/After)
│
├─ Student implements independently
│  └─ Use: Pattern 5 (Placeholder Comments)
│
├─ Adding JSX elements (full context)
│  └─ Use: Pattern 6 (JSX Comments)
│
├─ Large file navigation
│  └─ Use: Pattern 7 (Ellipsis)
│
├─ 2-4 related changes (long lines)
│  └─ Use: Pattern 8 (Multi-Change)
│
└─ Adding JSX props (partial context)
   └─ Use: Pattern 9 (Partial Context)
```

---

### Pattern 1: Inline Comment (Simple Additions)

**Use when:** Adding 1-2 lines in obvious location

```javascript
const [zoneProgress, setZoneProgress] = useState({});
// Add score state here
```

**After student adds:**
```javascript
const [zoneProgress, setZoneProgress] = useState({});
const [score, setScore] = useState(0);
```

---

### Pattern 2: Context Preservation (Function Updates)

**Use when:** Modifying existing functions

```javascript
// Find this function and add the score update:
const recordCorrectAnswer = () => {
  setCorrectAnswers((prev) => prev + 1);
  // Add score update here
};
```

**After student adds:**
```javascript
const recordCorrectAnswer = () => {
  setCorrectAnswers((prev) => prev + 1);
  setScore((prev) => prev + POINTS_PER_CORRECT);
};
```

---

### Pattern 3: Region Markers (New Sections)

**Use when:** Adding complete functions or components

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

---

### Pattern 4: Before/After (Replacements)

**Use when:** Replacing or significantly modifying code

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

---

### Pattern 5: Placeholder Comments (Solo Missions)

**Use when:** Students implement independently

```javascript
const pause = () => {
  // TODO: Check if audio exists
  // TODO: Call pause() method
  // TODO: Update isPlaying state
};
```

---

### Pattern 6: JSX Comments (JSX Additions)

**Use when:** Adding elements in JSX with full context

**Two approaches based on complexity:**

**Approach A: Placeholder Comment (student fills in)**
```javascript
return (
  <div className="game-board">
    <Scoreboard />
    {/* Add CurrentZone component here */}
    <MusicToggle />
  </div>
);
```

**Approach B: Actual Code with Pointer (show what to add)**
```javascript
return (
  <div className="splash-screen">
    <GameLogo />
    <div className="splash-buttons">
      <GameButton /> {/* ← Add this */}
    </div>
  </div>
);
```

**When to use each:**
- **Placeholder:** Student knows what component to add (referenced earlier)
- **Pointer:** First time adding component or complex props needed
- **For partial context:** Use Pattern 9 instead

> **⚠️ Warning:** In JSX, use `{/* comment */}` syntax, not `// comment`. Regular JavaScript comments only work outside JSX or in JavaScript expressions.

---

### Pattern 7: Ellipsis (Large Files)

**Use when:** Showing position in large files without overwhelming detail

```javascript
export function GameProvider({ children }) {
  // ... existing state declarations ...
  
  const [score, setScore] = useState(0);  // Add this line
  
  // ... rest of provider logic ...
  
  return (
    <GameContext.Provider value={{
      // ... existing values ...
      score,        // Add this line
      setScore,     // Add this line
    }}>
      {children}
    </GameContext.Provider>
  );
}
```

---

### Pattern 8: Multi-Change (2-4 Related Changes)

**Use when:** Making 2-4 related changes where inline comments would run off page

**Recommended: Numbered Above-Line Markers**

```javascript
// [1] Add variant parameter with default value
export default function GameButton({ text, onClick, variant = "primary" }) {
  // [2] Add this line
  const buttonClass = `game-button ${variant}`;

  return (
    // [3] Update to use className
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}
```

**Key characteristics:**
- Numbered markers for clear sequencing
- Comments above lines (not inline)
- Avoids off-page comment issues
- Works well for 2-4 related changes

**See `../code-scaffolding-reference.md` for 7 variants of Pattern 8**

---

### Pattern 9: Partial Context (JSX Props)

**Use when:** Adding props to JSX without showing full file

**Recommended: Function Signature + Target**

```javascript
export default function SplashScreen() {
  // ... existing code ...
  
  <GameButton
    text="Start Adventure"
    onClick={() => alert('Start Game!')}
    variant="primary"
  />
  {/* ↑ Add variant prop */}
}
```

**Key characteristics:**
- Shows function signature for orientation
- Uses ellipsis for omitted code
- Valid JSX comment syntax
- Keeps guide size manageable
- Balances context vs. brevity

**See `../code-scaffolding-reference.md` for 6 variants of Pattern 9**

---

## Code Scaffolding Pattern Selection Guide

| Changes | Line Length | Context | Pattern | Variants Available |
|---------|-------------|---------|---------|-------------------|
| 1-2 | Short | Minimal | 1 (Inline Comment) | - |
| 1-3 | Any | Function | 2 (Context Preservation) | - |
| Complete | Any | None | 3 (Region Markers) | - |
| Replacement | Any | Before/After | 4 (Before/After) | - |
| Student work | Any | Guidance | 5 (Placeholder) | - |
| JSX element | Any | Full file | 6 (JSX Comments) | 2 approaches |
| Any | Long file | Navigation | 7 (Ellipsis) | - |
| 2-4 related | Long lines | Minimal | 8 (Multi-Change) | 7 variants |
| JSX prop | Any | Partial | 9 (Partial Context) | 6 variants |

---

## Verification Patterns

Match verification detail to task complexity and verification type.

### Decision Tree: Which Verification Pattern?

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

### Pattern A: Inline Verification (Simple)

**Use when:** Quick checks with obvious results

```markdown
- **Update** the score state:
  ```javascript
  const [score, setScore] = useState(0);
  ```
- **Verify:** React DevTools → GameProvider → hooks → `score` should be `0`
```

**Key characteristics:**
- Single line verification
- Obvious expected result
- No numbered steps
- Uses arrow notation (→) for navigation

---

### Pattern B: Bullet Verification (Standard)

**Use when:** Single verification step needs brief explanation

```markdown
- **Update** the score state:
  ```javascript
  const [score, setScore] = useState(0);
  ```
- **Verify:** Open React DevTools → Find GameProvider → Check hooks → `score` should be `0`
```

**Key characteristics:**
- Separate bullet for verification
- Brief explanation or context
- Still uses arrow notation
- More detail than inline

---

### Pattern C: Dedicated Verification Section (Complex)

**Use when:** Multiple checks or detailed verification required

```markdown
- **Update** the scoring system:
  ```javascript
  const recordCorrectAnswer = () => {
    setCorrectAnswers((prev) => prev + 1);
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

**Key characteristics:**
- Numbered steps for clarity
- Multiple verification actions
- Bold for action verbs in steps
- Clear sequential flow

---

### Pattern D: Expected Output Block (API/Data)

**Use when:** Showing exact expected output or data structure

```markdown
- **Fetch** questions from the API:
  ```javascript
  const response = await fetch(url);
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
        "correct_answer": "Central Processing Unit",
        "incorrect_answers": ["..."]
      }
    ]
  }
  ```
```

**Key characteristics:**
- Shows exact data structure
- Uses code block for output
- Helps students recognize correct format
- Common for API integration

---

### Pattern E: Success Checklist (Comprehensive)

**Use when:** Multiple success conditions at end of section

```markdown
- **Complete** the scoring system implementation

> **✅ Success Check:**
>
> - [ ] Score displays `0` when game starts
> - [ ] Score increases by `100` for correct answers
> - [ ] Score decreases by `100` for incorrect answers (minimum `0`)
> - [ ] Score resets to `0` when "Play Again" is clicked
```

**Key characteristics:**
- Callout format with checkboxes
- Multiple conditions to verify
- End-of-section comprehensive check
- Uses backticks for code elements
- Blank line after callout header

---

## Verification Pattern Selection Guide

| Complexity | Steps | Format | Pattern |
|------------|-------|--------|----------|
| Simple | 1 | Inline | A |
| Simple | 1 | Separate bullet | B |
| Medium | 2-5 | Numbered list | C |
| Data | N/A | Code block | D |
| Complex | Multiple | Checklist callout | E |

---

## Callout Usage Guidelines

Use callouts strategically after code blocks or verification steps.

### 💡 Concept Callout

**Use when:** Explaining how or why something works

**Placement:** After code block that introduces new concept

```markdown
- **Add** the mapping logic:
  ```javascript
  {answers.map((answer, index) => (
    <button key={index}>{answer}</button>
  ))}
  ```

> **💡 Concept:** The `map()` method transforms each item in an array. Here, each answer string becomes a button element.
```

### ⚠️ Warning Callout

**Use when:** Preventing common mistakes or highlighting gotchas

**Placement:** After code that has potential pitfalls

```markdown
- **Update** the audio playback:
  ```javascript
  if (!audioRef.current) {
    audioRef.current = new Audio(src);
  }
  ```

> **⚠️ Warning:** Creating audio elements only once prevents overlapping sounds and memory leaks.
```

### ℹ️ Note Callout

**Use when:** Providing additional context or tips

**Placement:** After code or verification

```markdown
- **Verify:** Navigate to game screen → Score: 0 should appear in HUD

> **ℹ️ Note:** React Fragments (`<>...</>`) let you group components without adding extra DOM wrapper elements.
```

### ✅ Success Check Callout

**Use when:** End-of-section comprehensive verification

**Placement:** After final step in section

```markdown
- **Return** the transformed questions

> **✅ Success Check:**
>
> - [ ] Questions display without HTML entities
> - [ ] Answers are in random order
> - [ ] Each question has exactly 4 answers
```

### 🎯 Pro Tip Callout

**Use when:** Sharing advanced techniques or shortcuts

**Placement:** After related code or verification

```markdown
- **Verify:** Open React DevTools → GameProvider → hooks → `score` should be `0`

> **🎯 Pro Tip:** Use React DevTools to change the `score` value and watch the UI update in real-time.
```

---

## When to Use This Pattern

✅ **Good for:**
- Building new features incrementally
- Data transformation tasks
- State management implementation
- Component creation with multiple parts
- API integration with testing at each stage

❌ **Not ideal for:**
- Non-coding sequential tasks (use Procedural pattern)
- Configuration and setup tasks (use Configuration pattern)
- Connecting multiple systems (use Integration pattern)
- Independent practice (use Solo Mission pattern)

---

## Example Usage

See `../examples/iterative-build-example.md` for complete working example.

---

## Quick Reference

**Most Common Patterns:**
1. Pattern 1 - Single additions
2. Pattern 2 - Function updates
3. Pattern 3 - New sections
4. Pattern 8A - Multi-change (2-4 items)
5. Pattern 9C - JSX prop additions

**For all pattern variants:** See `../code-scaffolding-reference.md`
