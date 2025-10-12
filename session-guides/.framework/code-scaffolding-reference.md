# Code Scaffolding Reference Guide

Complete toolkit of scaffolding patterns for instructional design.

---

## Core Patterns (1-7)

### Pattern 1: Inline Comment
**Use:** Adding 1-2 lines in obvious location

```javascript
const [zoneProgress, setZoneProgress] = useState({});
// Add score state here
```

---

### Pattern 2: Context Preservation
**Use:** Modifying existing functions

```javascript
// Find this function and add the score update:
const recordCorrectAnswer = () => {
  setCorrectAnswers((prev) => prev + 1);
  // Add score update here
};
```

---

### Pattern 3: Region Markers
**Use:** Adding complete functions or components

```javascript
// ========== ADD THIS COMPONENT ==========
function Scoreboard() {
  const { score } = useGame();
  return <div className="score-display">Score: {score}</div>;
}
// ========== END ==========
```

---

### Pattern 4: Before/After
**Use:** Replacing or significantly modifying code

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

### Pattern 5: Placeholder Comments
**Use:** Students implement independently

```javascript
const pause = () => {
  // TODO: Check if audio exists
  // TODO: Call pause() method
  // TODO: Update isPlaying state
};
```

---

### Pattern 6: JSX Comments
**Use:** Adding elements in JSX with full context

```javascript
return (
  <div className="game-board">
    <Scoreboard />
    {/* Add CurrentZone component here */}
    <MusicToggle />
  </div>
);
```

---

### Pattern 7: Ellipsis
**Use:** Showing position in large files

```javascript
export function GameProvider({ children }) {
  // ... existing state declarations ...
  
  const [score, setScore] = useState(0);  // Add this line
  
  // ... rest of provider logic ...
}
```

---

## Pattern 8: Multi-Change Approaches

### 8A: Numbered Above-Line Markers ⭐ RECOMMENDED
**Use:** 2-4 related changes, long lines, clear sequencing needed

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

**Pros:** Clear sequencing, no off-page issues, clean  
**Cons:** Requires numbered instruction list

---

### 8B: Stacked Annotations
**Use:** Descriptive guidance without numbers

```javascript
// Add variant parameter with default value
export default function GameButton({ text, onClick, variant = "primary" }) {
  // Add this line: create buttonClass variable
  const buttonClass = `game-button ${variant}`;

  return (
    // Update this line: add className prop
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}
```

**Pros:** Descriptive, self-documenting  
**Cons:** More verbose, can clutter

---

### 8C: Arrow Markers with Short Comments
**Use:** When inline comments fit on page

```javascript
export default function GameButton({ text, onClick, variant = "primary" }) { // ← Add variant
  const buttonClass = `game-button ${variant}`; // ← Add this

  return (
    <button className={buttonClass} onClick={onClick}> {/* ← Update */}
      {text}
    </button>
  );
}
```

**Pros:** Compact, visual  
**Cons:** Can run off page with long lines

---

### 8D: Annotated Complete Code
**Use:** Multiple changes with post-line annotations

```javascript
export default function GameButton({ text, onClick, variant = "primary" }) {
  // ↑ [1] Add variant parameter with default value "primary"
  
  const buttonClass = `game-button ${variant}`;
  // ↑ [2] Add this line to create dynamic class name
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
  // ↑ [3] Update button to use className={buttonClass}
}
```

**Pros:** Clear, doesn't interfere with code  
**Cons:** Takes more vertical space

---

### 8E: Progressive Disclosure (Layered)
**Use:** Complex changes benefit from seeing evolution

**Step 1:**
```javascript
export default function GameButton({ text, onClick, variant = "primary" }) {
  return <button onClick={onClick}>{text}</button>;
}
```

**Step 2:**
```javascript
export default function GameButton({ text, onClick, variant = "primary" }) {
  const buttonClass = `game-button ${variant}`;
  
  return <button onClick={onClick}>{text}</button>;
}
```

**Step 3:**
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

**Pros:** Shows progression, builds understanding  
**Cons:** Repetitive, takes more space

---

### 8F: Sectioned Before/After
**Use:** Isolating distinct changes

**Part A: Add variant parameter**
```javascript
// Before:
export default function GameButton({ text, onClick }) {

// After:
export default function GameButton({ text, onClick, variant = "primary" }) {
```

**Part B: Create buttonClass variable**
```javascript
// Add after function declaration:
const buttonClass = `game-button ${variant}`;
```

**Part C: Update button element**
```javascript
// Before:
<button onClick={onClick}>

// After:
<button className={buttonClass} onClick={onClick}>
```

**Pros:** Isolates concerns, clear focus  
**Cons:** Loses full context

---

### 8G: Diff-Style with Markers
**Use:** Showing exact line changes

```javascript
export default function GameButton({ text, onClick, variant = "primary" }) { // ← Add
  const buttonClass = `game-button ${variant}`; // ← Add

  return (
-   <button onClick={onClick}>
+   <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}
```

**Pros:** Git-familiar, precise  
**Cons:** Requires understanding diff syntax

---

### 8H: Pure Diff-Style ⭐ RECOMMENDED FOR EXPERIENCED STUDENTS
**Use:** Clean diff format without extra markers

```diff
-export default function GameButton({ text, onClick }) {
+export default function GameButton({ text, onClick, variant = "primary" }) {
+  const buttonClass = `game-button ${variant}`;
+
   return (
-    <button onClick={onClick}>
+    <button className={buttonClass} onClick={onClick}>
       {text}
     </button>
   );
 }
```

**Pros:** Clean, industry-standard, no clutter, precise  
**Cons:** Requires diff literacy, may intimidate beginners

**When to use:**
- Students familiar with Git/version control
- Multiple line additions/removals
- Professional development context
- Clear before/after comparison needed

---

## Pattern 9: JSX Partial Context Approaches

### 9A: Minimal JSX Context
**Use:** Just enough to locate change

```javascript
export default function SplashScreen() {
  return (
    <div className="splash-screen">
      {/* ... existing elements ... */}
      <div className="splash-buttons">
        <GameButton
          text="Start Adventure"
          onClick={() => alert('Start Game!')}
          variant="primary"
        />
        {/* ↑ Add variant prop */}
      </div>
    </div>
  );
}
```

**Pros:** Shows structure, manageable size  
**Cons:** May need more context for complex files

---

### 9B: Ultra-Minimal (Target Only)
**Use:** Obvious location, minimal context needed

```javascript
<div className="splash-buttons">
  <GameButton
    text="Start Adventure"
    onClick={() => alert('Start Game!')}
    variant="primary"
  />
  {/* ↑ Add variant prop */}
</div>
```

**Pros:** Extremely concise  
**Cons:** May lack orientation

---

### 9C: Function Signature + Target ⭐ RECOMMENDED
**Use:** Balance of context and brevity

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

**Pros:** Good orientation, concise, scalable  
**Cons:** None significant

---

### 9D: Above-Line Marker (No JSX Comments)
**Use:** Avoid JSX comment syntax

```javascript
export default function SplashScreen() {
  return (
    <div className="splash-screen">
      {/* ... existing elements ... */}
      <div className="splash-buttons">
        {/* Add variant="primary" prop to GameButton below */}
        <GameButton
          text="Start Adventure"
          onClick={() => alert('Start Game!')}
          variant="primary"
        />
      </div>
    </div>
  );
}
```

**Pros:** Avoids inline JSX comments  
**Cons:** Less precise

---

### 9E: Contextual Ellipsis with Numbered Changes
**Use:** Multiple changes in same JSX block

```javascript
export default function SplashScreen() {
  return (
    {/* ... existing JSX ... */}
    <div className="splash-buttons">
      <GameButton
        text="Start Adventure"
        onClick={() => alert('Start Game!')}
        variant="primary"
      />
      {/* ↑ [1] Add variant prop */}
      
      <GameButton
        text="Credits"
        onClick={() => alert('Show Credits')}
        variant="secondary"
      />
      {/* ↑ [2] Add this button */}
    </div>
    {/* ... rest of JSX ... */}
  );
}
```

**Pros:** Handles multiple changes, clear sequencing  
**Cons:** More verbose

---

### 9F: Anchor Point Reference
**Use:** Simple prop addition with minimal context

```javascript
<div className="splash-buttons">
  <GameButton
    text="Start Adventure"
    onClick={() => alert('Start Game!')}
    variant="primary"
  />
  {/* ↑ Add this prop */}
</div>
```

**Pros:** Very concise  
**Cons:** Generic marker

---

## Pattern 8 Quick Reference

| Variant | Best For | Pros | Cons |
|---------|----------|------|------|
| 8A (Numbered) | Clear sequencing needed | No off-page issues | Requires numbered list |
| 8B (Stacked) | Descriptive guidance | Self-documenting | Verbose |
| 8C (Arrow) | Short lines | Compact, visual | Can run off page |
| 8D (Annotated) | Post-line clarity | Doesn't interfere | Takes vertical space |
| 8E (Progressive) | Complex evolution | Shows progression | Repetitive |
| 8F (Sectioned) | Isolated concerns | Clear focus | Loses context |
| 8G (Diff+Markers) | Git-familiar with help | Precise with guidance | Mixed syntax |
| 8H (Pure Diff) | Experienced students | Clean, standard | Requires diff literacy |

---

## Pattern Selection Matrix

| Scenario | Pattern | Variant | Why |
|----------|---------|---------|-----|----|---------|-----|
| 1-2 line addition | 1 | - | Simple, clear |
| Function update | 2 | - | Preserves context |
| New component/function | 3 | - | Clear boundaries |
| Replacement | 4 | - | Shows transformation |
| Student implements | 5 | - | Guided independence |
| JSX element (full) | 6 | - | Complete context |
| Large file navigation | 7 | - | Manageable size |
| 2-4 changes, long lines | 8 | A (Numbered) | Clear, no overflow |
| 2-4 changes, descriptive | 8 | B (Stacked) | Self-documenting |
| 2-4 changes, compact | 8 | C (Arrows) | Visual, if fits |
| Complex multi-step | 8 | E (Layered) | Builds understanding |
| Isolated changes | 8 | F (Sectioned) | Focus per change |
| JSX prop, balanced | 9 | C (Function+Target) | Best balance |
| JSX prop, minimal | 9 | B (Ultra-minimal) | Very concise |
| JSX prop, full context | 9 | A (Minimal) | More structure |
| Multiple JSX changes | 9 | E (Numbered) | Clear sequencing |

---

## Decision Tree

```
What are you scaffolding?

├─ Single line addition
│  └─ Pattern 1 (Inline Comment)
│
├─ Function modification
│  └─ Pattern 2 (Context Preservation)
│
├─ New complete section
│  └─ Pattern 3 (Region Markers)
│
├─ Code replacement
│  └─ Pattern 4 (Before/After)
│
├─ Student implementation
│  └─ Pattern 5 (Placeholder)
│
├─ JSX element addition (full context)
│  └─ Pattern 6 (JSX Comments)
│
├─ Large file navigation
│  └─ Pattern 7 (Ellipsis)
│
├─ 2-4 related changes
│  ├─ Long lines? → Pattern 8A (Numbered Above-Line)
│  ├─ Need description? → Pattern 8B (Stacked)
│  ├─ Fits inline? → Pattern 8C (Arrows)
│  ├─ Complex learning? → Pattern 8E (Layered)
│  └─ Isolated concerns? → Pattern 8F (Sectioned)
│
└─ JSX prop addition
   ├─ Need balance? → Pattern 9C (Function+Target) ⭐
   ├─ Minimal context? → Pattern 9B (Ultra-minimal)
   ├─ More structure? → Pattern 9A (Minimal)
   └─ Multiple changes? → Pattern 9E (Numbered)
```

---

## Recommended Defaults

**Most Common Scenarios:**

1. **Single addition:** Pattern 1
2. **Function update:** Pattern 2
3. **New section:** Pattern 3
4. **Multi-change (2-4):** Pattern 8A
5. **JSX prop addition:** Pattern 9C

**These 5 patterns cover 80% of use cases.**

---

## Integration with Iterative Build Pattern

Reference this document when applying code scaffolding in iterative-build.md steps. Each step should select the most appropriate pattern based on the decision tree.

**Usage in session guides:**
1. Identify the type of change needed
2. Consult decision tree
3. Select appropriate pattern/variant
4. Apply consistently throughout section
