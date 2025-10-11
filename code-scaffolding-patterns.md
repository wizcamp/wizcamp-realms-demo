# Code Scaffolding Patterns: Industry Best Practices

Research from GitHub, Stripe, Microsoft, AWS, and Google documentation on how to guide students through code modifications.

---

## Research: Industry Code Scaffolding Approaches

### GitHub Docs
- **Inline comments** with `// Add this line` or `// Replace this`
- **Ellipsis (`...`)** to indicate existing code
- **File path headers** above every code block
- **Diff-style highlighting** (+ for add, - for remove)

### Stripe API Docs
- **Context comments** showing where code goes
- **Placeholder comments** like `// Your code here`
- **Complete examples** followed by focused snippets
- **Line-by-line explanations** after code blocks

### Microsoft Docs
- **Location markers** like `// Add after this line`
- **Section labels** like `// STEP 1: Initialize`
- **Existing code context** with `// ... existing code ...`
- **Clear action verbs** in comments

### AWS Documentation
- **Region markers** like `// START: New code` and `// END: New code`
- **Numbered steps** in comments
- **Function/class context** showing where to add code
- **Before/after examples** for complex changes

### Google Cloud Docs
- **Descriptive comments** explaining purpose
- **Placeholder values** like `YOUR_PROJECT_ID`
- **Context preservation** showing surrounding code
- **Minimal examples** focusing on the change

---

## Code Scaffolding Pattern Recommendations

### Pattern 1: Inline Action Comments (Simple Additions)

**Best for:** Adding single lines or small blocks

```javascript
function GameProvider({ children }) {
  const [screen, setScreen] = useState(SCREENS.SPLASH);
  const [zoneProgress, setZoneProgress] = useState({});
  // Add score state here
  
  // ... rest of provider logic
}
```

**After:**
```javascript
function GameProvider({ children }) {
  const [screen, setScreen] = useState(SCREENS.SPLASH);
  const [zoneProgress, setZoneProgress] = useState({});
  const [score, setScore] = useState(0);  // ← Add this line
  
  // ... rest of provider logic
}
```

---

### Pattern 2: Context Preservation (Updates Within Functions)

**Best for:** Modifying existing functions

```javascript
// Find this function in GameContext.jsx
const recordCorrectAnswer = () => {
  setCorrectAnswers((prev) => prev + 1);
  // Add score update here
};
```

**After:**
```javascript
const recordCorrectAnswer = () => {
  setCorrectAnswers((prev) => prev + 1);
  setScore((prev) => prev + POINTS_PER_CORRECT);  // ← Add this line
};
```

---

### Pattern 3: Ellipsis for Existing Code (Large Files)

**Best for:** Showing position without overwhelming detail

```javascript
export function GameProvider({ children }) {
  // ... existing state declarations ...
  
  const [score, setScore] = useState(0);  // ← Add this line
  
  // ... rest of provider logic ...
  
  return (
    <GameContext.Provider value={{
      // ... existing values ...
      score,        // ← Add this line
      setScore,     // ← Add this line
    }}>
      {children}
    </GameContext.Provider>
  );
}
```

---

### Pattern 4: Region Markers (Multi-Line Additions)

**Best for:** Adding complete sections

```javascript
// ========== ADD THIS SECTION ==========
function Scoreboard() {
  const { score } = useGame();
  return <div className="score-display">Score: {score}</div>;
}
// ========== END SECTION ==========

// Existing CurrentZone function below
function CurrentZone() {
  // ... existing code ...
}
```

---

### Pattern 5: Before/After Split (Complex Changes)

**Best for:** Significant refactoring or replacements

**Before:**
```javascript
return (
  <div className="hud">
    <CurrentZone />
  </div>
);
```

**After:**
```javascript
return (
  <div className="hud">
    <Scoreboard />      {/* ← Add this */}
    <CurrentZone />
  </div>
);
```

---

### Pattern 6: Numbered Steps in Comments (Sequential Changes)

**Best for:** Multiple changes in one file

```javascript
function transformQuestion(apiQuestion) {
  // STEP 1: Extract properties
  const question = apiQuestion.question;
  const incorrectAnswers = apiQuestion.incorrect_answers;
  const correctAnswer = apiQuestion.correct_answer;
  
  // STEP 2: Decode text (add these lines)
  const decodedQuestion = decodeText(question);
  const decodedIncorrect = incorrectAnswers.map(decodeText);
  const decodedCorrect = decodeText(correctAnswer);
  
  // STEP 3: Shuffle and return (add these lines)
  const shuffled = shuffleAnswers(decodedCorrect, decodedIncorrect);
  return {
    question: decodedQuestion,
    answers: shuffled,
    correct: shuffled.indexOf(decodedCorrect)
  };
}
```

---

### Pattern 7: Placeholder Comments (Student Implementation)

**Best for:** Solo missions or independent work

```javascript
function useAudio(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    // TODO: Create audio element if it doesn't exist
    // TODO: Set loop and volume properties
    // TODO: Call play() method
    // TODO: Update isPlaying state
  };

  const pause = () => {
    // TODO: Implement pause functionality
  };

  return { play, pause, isPlaying };
}
```

---

### Pattern 8: Diff-Style Annotations (Replacements)

**Best for:** Showing what to remove and add

```javascript
function SplashScreen() {
  const [showCredits, setShowCredits] = useState(false);
  
  return (
    <div className="splash-container">
-     <button onClick={() => alert('Start Game!')}>Start Adventure</button>
+     <GameButton 
+       text="Start Adventure" 
+       onClick={startGame}
+       variant="primary"
+     />
    </div>
  );
}
```

---

### Pattern 9: Location Anchors (Precise Positioning)

**Best for:** Large files with multiple insertion points

```javascript
export function GameProvider({ children }) {
  // ===== STATE DECLARATIONS =====
  const [screen, setScreen] = useState(SCREENS.SPLASH);
  const [zoneProgress, setZoneProgress] = useState({});
  // Add score state after this line ↓
  
  // ===== EVENT HANDLERS =====
  const startGame = () => {
    setScreen(SCREENS.PLAYING);
  };
  // Add recordCorrectAnswer function after this line ↓
  
  // ===== CONTEXT VALUE =====
  return (
    <GameContext.Provider value={{
      screen,
      setScreen,
      // Add score and setScore after this line ↓
    }}>
      {children}
    </GameContext.Provider>
  );
}
```

---

### Pattern 10: Minimal Context (Focus on Change)

**Best for:** Simple, obvious changes

```javascript
// In GameContext.jsx, add to the state declarations:
const [score, setScore] = useState(0);

// In the Context value, add:
score,
setScore,
```

---

## RECOMMENDED APPROACH: Context-Dependent Scaffolding

### For Simple Additions (1-2 lines):
Use **Pattern 1 (Inline Action Comments)** or **Pattern 10 (Minimal Context)**

```javascript
const [zoneProgress, setZoneProgress] = useState({});
// Add score state here
```

### For Function Updates:
Use **Pattern 2 (Context Preservation)** with clear markers

```javascript
// Find this function and add the score update:
const recordCorrectAnswer = () => {
  setCorrectAnswers((prev) => prev + 1);
  // Add score update here
};
```

### For New Sections:
Use **Pattern 4 (Region Markers)** or **Pattern 6 (Numbered Steps)**

```javascript
// ========== ADD THIS FUNCTION ==========
function Scoreboard() {
  const { score } = useGame();
  return <div className="score-display">Score: {score}</div>;
}
// ========== END ==========
```

### For Complex Changes:
Use **Pattern 5 (Before/After Split)** with clear visual separation

### For Solo Missions:
Use **Pattern 7 (Placeholder Comments)** to guide without giving answers

---

## File Path Headers: Always Include

Every code block should have a file path header:

```markdown
**File:** `src/context/GameContext.jsx`
```javascript
const [score, setScore] = useState(0);
```
```

Or for updates:

```markdown
**Update** `src/context/GameContext.jsx`:
```javascript
const [score, setScore] = useState(0);
```
```

---

## Complete Example: Combining Patterns

### Step 2: Add Score State and Display

Add score tracking to your game's state management.

- **Open** `src/context/GameContext.jsx`

- **Add** score state after the existing state declarations:
  ```javascript
  export function GameProvider({ children }) {
    const [screen, setScreen] = useState(SCREENS.SPLASH);
    const [zoneProgress, setZoneProgress] = useState({});
    const [score, setScore] = useState(0);  // ← Add this line
    
    // ... rest of provider logic
  }
  ```

- **Update** the Context value to include score:
  ```javascript
  <GameContext.Provider value={{
    // GAME STATE
    screen,
    score,        // ← Add this line
    zoneProgress,
    
    // ACTIONS
    setScreen,
    setScore,     // ← Add this line
    // ... rest of existing properties
  ```

- **Open** `src/components/HUD.jsx`

- **Add** the Scoreboard component at the top of the file:
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

- **Update** the HUD return statement:
  ```javascript
  // Replace this:
  return <CurrentZone />;
  
  // With this:
  return (
    <>
      <Scoreboard />      {/* ← Add this */}
      <CurrentZone />
    </>
  );
  ```

---

## Key Principles

1. **Always Show Context**
   - Include surrounding code
   - Show where to add/modify
   - Use ellipsis for brevity

2. **Use Clear Markers**
   - Arrows (←, ↓) for additions
   - Comments for guidance
   - Region markers for sections

3. **Match Complexity to Pattern**
   - Simple changes = minimal scaffolding
   - Complex changes = detailed scaffolding
   - Solo work = placeholder comments

4. **File Paths Are Mandatory**
   - Every code block needs a file path
   - Reduces confusion
   - Speeds up navigation

5. **Consistent Conventions**
   - Same markers = same meaning
   - Predictable patterns
   - Easy to scan
