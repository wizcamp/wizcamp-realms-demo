# Destructuring Pattern Analysis

## Problem Statement

When showing students how to add items to existing destructuring statements, we currently use inconsistent patterns:

1. **Numbered annotations** (SESSION-07): `// [1] Access setIsQuizVisible`
2. **Before/After blocks** (SESSION-03): Shows old line, then new line
3. **Inline comments** (SESSION-04): `// Add these two imports`

This inconsistency makes it harder for students to predict what pattern they'll encounter and creates unnecessary cognitive load.

## Current Examples

### Pattern 1: Numbered Annotation (SESSION-07)
```javascript
export default function GameMap() {
  // [1] Access setIsQuizVisible
  const { activeZone, loadQuestionsForZone, setIsQuizVisible, zoneProgress } =
    useGame();
}
```

**Pros:**
- Consistent with other numbered annotation patterns
- Can reference in Understanding callout
- Clear what's being added

**Cons:**
- Annotation doesn't clearly indicate WHICH item is new
- Student must scan entire line to find the addition
- Ambiguous when multiple items are added

### Pattern 2: Before/After (SESSION-03)
```javascript
// Before:
const { screen } = useGame();

// After:
const { screen, setScreen } = useGame();
```

**Pros:**
- Crystal clear what changed
- Shows exact transformation
- No ambiguity about what's new

**Cons:**
- Takes more space
- Requires showing full line twice
- Can feel repetitive for simple additions

### Pattern 3: Inline Comment (SESSION-04)
```javascript
// Add these two imports
import CoordinateDisplay from "./components/CoordinateDisplay";
import HUD from "./components/HUD";
```

**Pros:**
- Concise
- Works well for multiple new lines
- Clear intent

**Cons:**
- Doesn't show existing context
- Student must know where to place it
- Less precise than other patterns

## Analysis by Scenario

### Scenario A: Adding ONE item to destructuring

**Current file:**
```javascript
const { screen } = useGame();
```

**Goal:** Add `setScreen`

**Option 1 - Before/After:**
```javascript
// Before:
const { screen } = useGame();

// After:
const { screen, setScreen } = useGame();
```

**Option 2 - Inline comment:**
```javascript
const { screen, setScreen } = useGame();  // Add setScreen
```

**Option 3 - Numbered annotation:**
```javascript
// [1] Add setScreen
const { screen, setScreen } = useGame();
```

**Recommendation:** **Before/After** - Clearest for single additions, shows exact transformation

### Scenario B: Adding MULTIPLE items to destructuring

**Current file:**
```javascript
const { activeZone, loadQuestionsForZone, zoneProgress } = useGame();
```

**Goal:** Add `setIsQuizVisible`

**Option 1 - Before/After:**
```javascript
// Before:
const { activeZone, loadQuestionsForZone, zoneProgress } = useGame();

// After:
const { activeZone, loadQuestionsForZone, setIsQuizVisible, zoneProgress } =
  useGame();
```

**Option 2 - Inline comment with highlighting:**
```javascript
const { 
  activeZone, 
  loadQuestionsForZone, 
  setIsQuizVisible,  // Add this
  zoneProgress 
} = useGame();
```

**Option 3 - Numbered annotation:**
```javascript
// [1] Add setIsQuizVisible
const { activeZone, loadQuestionsForZone, setIsQuizVisible, zoneProgress } =
  useGame();
```

**Recommendation:** **Before/After** - Still clearest, especially when line wraps

### Scenario C: Adding items to MULTIPLE destructuring statements

**Current file:**
```javascript
const { screen } = useGame();
const { data } = useQuery();
```

**Goal:** Add `setScreen` and `isLoading`

**Option 1 - Multiple Before/After blocks:**
```javascript
// Before:
const { screen } = useGame();

// After:
const { screen, setScreen } = useGame();

// Before:
const { data } = useQuery();

// After:
const { data, isLoading } = useQuery();
```

**Option 2 - Numbered annotations:**
```javascript
const { screen, setScreen } = useGame();  // [1] Add setScreen
const { data, isLoading } = useQuery();   // [2] Add isLoading
```

**Recommendation:** **Numbered annotations** - More concise for multiple changes

## Recommended Convention

### Primary Pattern: Before/After

Use **Before/After** as the default pattern for destructuring changes:

```javascript
// Before:
const { screen } = useGame();

// After:
const { screen, setScreen } = useGame();
```

**When to use:**
- Single destructuring statement changes
- Adding 1-3 items to destructuring
- When clarity is more important than brevity
- First time students encounter a pattern

### Secondary Pattern: Inline Comment

Use **inline comments** for simple, obvious additions:

```javascript
const { screen, setScreen } = useGame();  // Add setScreen
```

**When to use:**
- Very simple additions (1 item)
- When Before/After would be redundant
- When space is limited
- When the addition is self-evident

### Tertiary Pattern: Numbered Annotations

Use **numbered annotations** for complex multi-step changes:

```javascript
const { screen, setScreen } = useGame();        // [1] Add setScreen
const { data, isLoading } = useQuery();         // [2] Add isLoading
const { user, logout } = useAuth();             // [3] Add logout
```

**When to use:**
- Multiple destructuring statements in one step
- When you need to reference changes in Understanding callout
- When changes are part of a larger numbered sequence

## Special Cases

### Case 1: Long destructuring that wraps

When destructuring spans multiple lines, use Before/After to show the full structure:

```javascript
// Before:
const { 
  activeZone, 
  loadQuestionsForZone, 
  zoneProgress 
} = useGame();

// After:
const { 
  activeZone, 
  loadQuestionsForZone, 
  setIsQuizVisible,  // ← New addition
  zoneProgress 
} = useGame();
```

### Case 2: Destructuring with other changes

When destructuring change is part of larger code block, use numbered annotations:

```javascript
export default function GameMap() {
  // [1] Add setIsQuizVisible
  const { activeZone, loadQuestionsForZone, setIsQuizVisible, zoneProgress } =
    useGame();
  
  const handleZoneClick = async (zoneId) => {
    await loadQuestionsForZone(zoneId);
    setIsQuizVisible(true);  // [2] Show modal
  };
}
```

### Case 3: Import statements

Import statements follow different rules - use ellipsis pattern:

```javascript
// ... existing imports ...
import QuizModal from "./components/QuizModal";  // [1] Import QuizModal
```

## Implementation Guidelines

### For Guide Authors

1. **Default to Before/After** for destructuring changes
2. **Use inline comments** only when Before/After feels redundant
3. **Use numbered annotations** when part of multi-step sequence
4. **Be consistent within a session** - don't mix patterns unnecessarily
5. **Consider student experience** - clarity over brevity

### Pattern Decision Tree

```
Is it a destructuring change?
├─ Yes
│  ├─ Is it part of a larger code block with multiple changes?
│  │  └─ Yes → Use numbered annotations
│  ├─ Is it a single, simple addition?
│  │  └─ Yes → Use Before/After (or inline comment if obvious)
│  └─ Is it multiple destructuring statements?
│     └─ Yes → Use numbered annotations
└─ No → Follow other scaffolding patterns
```

## Examples to Update

### SESSION-07 Step 2 (Current)

**Current:**
```javascript
export default function GameMap() {
  // [1] Access setIsQuizVisible
  const { activeZone, loadQuestionsForZone, setIsQuizVisible, zoneProgress } =
    useGame();
  
  const handleZoneClick = async (zoneId) => {
    // ... existing code ...
    await loadQuestionsForZone(zoneId);
    setIsQuizVisible(true);  // [2] Show modal
  };
}
```

**Recommended (if isolated change):**
```javascript
// Before:
const { activeZone, loadQuestionsForZone, zoneProgress } = useGame();

// After:
const { activeZone, loadQuestionsForZone, setIsQuizVisible, zoneProgress } =
    useGame();
```

**Recommended (if part of larger block):**
Keep numbered annotations as-is since it's part of a multi-change step.

## Summary

**Primary recommendation:** Use **Before/After** as the default pattern for destructuring changes because it provides maximum clarity with minimal ambiguity.

**Secondary recommendation:** Use **numbered annotations** when destructuring changes are part of larger multi-step code blocks.

**Tertiary recommendation:** Use **inline comments** sparingly for obvious, simple additions.

**Key principle:** Consistency within a session matters more than perfect adherence to patterns. Choose the pattern that best serves student understanding in that specific context.
