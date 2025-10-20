# Instructional Conventions

Global formatting and style rules for all Wizcamp session guides.

---

## Special Sections

Certain sections have unique conventions that differ from standard patterns.

### Accessing Your Codespace

**When to include:** Sessions 2+ (not Session 1, which covers initial setup)

**Conventions:**
- ❌ Does NOT appear in Table of Contents (use `####` heading level, not `##`)
- ❌ Does NOT include Goal statement
- ✅ Brief, single-sentence instruction
- ✅ Always first section after TOC
- ✅ Uses ☁️ emoji in heading

**Format:**
```markdown
<a id="accessing-your-codespace"></a>

#### ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session X.
```

### Essential Terms

**Conventions:**
- ❌ Does NOT include Goal statement
- ✅ Appears in Table of Contents
- ✅ Uses 📋 emoji in heading
- ✅ Includes italic description line
- ✅ 3-column table format

**Format:**
```markdown
## 📋 Essential Terms

_Quick reference for all the [topic] concepts you just learned:_

| Term | Definition | Why it matters |
```

### Ask the AI

**Conventions:**
- ❌ Does NOT include Goal statement
- ✅ Appears in Table of Contents
- ✅ Uses 🤖 emoji in heading
- ✅ Includes context paragraph + curated questions
- ✅ Always final section

**Format:**
```markdown
## 🤖 Ask the AI — [Session Topic]

[Context paragraph summarizing what was accomplished]

[Context paragraph introducing questions]

- **Question 1?**
- **Question 2?**
```

### Bonus Challenge

**Conventions:**
- ❌ Does NOT have its own heading
- ✅ Appears at end of conceptual sections
- ✅ Uses 🏆 emoji
- ✅ Formatted as blockquote callout
- ✅ Contains thought-provoking question or task

**Format:**
```markdown
> 🏆 **Bonus Challenge**
>
> Think of three apps you use daily — can you identify what external data they might be fetching through APIs?
```

---

## Formatting Best Practices

### When to Use Bold

- **Action verbs** at the start of bullet points: **Open**, **Add**, **Update**, **Find**, **Replace**, **Verify**, **Create**, **Delete**, **Install**, **Run**, **Navigate**, **Click**, **Check**, **Confirm**
- **File paths** when mentioned inline: Open **`src/components/App.jsx`**
- **Important UI elements**: Click the **Start Game** button
- **Key terms** on first mention in a section: The **Context API** provides shared state

### When to Use Backticks

- **Code elements**: function names (`useState`), variables (`score`), properties (`value`), constants (`SCREENS.SPLASH`)
- **File paths**: `src/context/GameContext.jsx`
- **Keyboard shortcuts**: Press `Ctrl+C` or `Cmd+C`
- **Terminal commands**: Run `npm install`
- **HTML/CSS selectors**: `.score-display` or `<div>`
- **Package names**: Install `react-router-dom`
- **Props and attributes in Understanding callouts**: When referring to specific code elements like `onClick`, `onAnswerClick`, `className`, `disabled`

### When to Use Both Bold + Backticks

- **File paths in action bullets**: **Open** `src/components/App.jsx`
- **Important code elements in instructions**: **Find** the `recordCorrectAnswer` function
- **UI elements that are also code**: Click the **`<StartButton />`** component

### Import Statement Scaffolding

**Use ellipsis to show import context:**

```javascript
// ... existing imports ...
import NewComponent from "./components/NewComponent";  // Add import
```

**When to use different patterns:**
- **Single new import**: Use `// ... existing imports ...` above the new import
- **Multiple related imports**: Show all new imports together with ellipsis above
- **First import in file**: Show without ellipsis (it's the first one)
- **Import with other changes**: Show ellipsis, then continue with function code

**Why:** The ellipsis provides context that the import goes with other imports at the top of the file, without cluttering the code block with unnecessary existing imports.

### When to Use Neither

- Regular descriptive text
- Explanations and context
- UI navigation paths in verification (React DevTools → Components → GameProvider)
- Generic references to concepts ("the click handler", "the prop", "the function") when not referring to specific code elements

### Consistent Patterns

**Action Bullets:**

- **Open** `src/context/GameContext.jsx`
- **Add** score state after the existing declarations
- **Find** the `recordCorrectAnswer` function
- **Update** the Context value to include `score`

**Inline File References:**

The `GameContext.jsx` file manages shared state. Open `src/components/HUD.jsx` to add the scoreboard.

**Code Element References:**

The `useState` hook creates state. Pass the `score` prop to the component. Update the `value` property in the object.

**Verification Text:**

- **Verify:** Open React DevTools → GameProvider → hooks → `score` should be `0`
- **Verify:** Navigate to game screen. "Score: 0" should appear in the HUD.
- **Verify:** Check the `currentQuestions` state in GameProvider

### Common Mistakes to Avoid

- ❌ Don't bold entire sentences
- ❌ Don't use backticks for non-code terms ("the `game` needs scoring")
- ❌ Don't mix styles inconsistently (Open **src/file.js** vs **Open** `src/file.js`)
- ❌ Don't bold verification text except the word "Verify" or "✓ You should see"
- ❌ Don't use backticks around quoted UI text ("Score: 0" not `"Score: 0"`)
- ❌ Don't use emojis in step headings (use in section headings only)
- ❌ Don't add callouts automatically (only when they elevate understanding)

### Quick Reference

| Element | Format | Example |
|---------|--------|----------|
| Action verb | **Bold** | **Open** the file |
| File path in action | **Bold** + `backticks` | **Open** `src/App.jsx` |
| File path inline | `backticks` | The `App.jsx` file contains... |
| Function/variable | `backticks` | The `useState` hook |
| UI element | **Bold** | Click the **Start** button |
| Code + UI element | **Bold** + `backticks` | The **`<Button />`** component |
| Keyboard shortcut | `backticks` | Press `F12` |
| Terminal command | `backticks` | Run `npm start` |
| Property/constant | `backticks` | Set `score` to `0` |
| Props/attributes | `backticks` | The `onClick` prop |
| Quoted text | "Quotes" | Display "Score: 0" |

---

## Essential Terms Bolding

**Rule:** Bold the first occurrence of each term that appears in the current guide's Essential Terms table.

**Important:** 
- Only bold terms that are listed in the Essential Terms section of the current session guide
- Do not bold terms from other sessions
- **Essential Terms should never repeat across guides** — once a term appears in one session's Essential Terms table, it should not appear in any other session's Essential Terms table

### Where to Bold

- ✅ Paragraph text in explanations
- ✅ Callout body text
- ✅ Table cells (Definition/Why it matters columns in Essential Terms table)

### Where NOT to Bold

- ❌ Headings (## or ###)
- ❌ Code blocks (```...```) or inline code (`...`)
- ❌ Bullet points or numbered lists
- ❌ Already bolded text
- ❌ Table of Contents
- ❌ Essential Terms table (Term column - already has emoji)
- ❌ File paths or technical references

### Example

```markdown
You're about to launch your **Codespace** and start building.

## Creating Your Codespace  ← Don't bold here

- Open Codespace  ← Don't bold here
- Run `npm install` in your Codespace  ← Don't bold here

Your Codespace is ready.  ← Already bolded, skip

> 💡 **Why Codespaces**
>
> A **Codespace** gives everyone the same setup.  ← Bold in callout body
```

### Author Checklist

- [ ] Verify no Essential Terms repeat from previous sessions
- [ ] Identify all terms in the current guide's Essential Terms table
- [ ] Bold first occurrence of each term in body text (before Essential Terms section)
- [ ] Verify no bolding in headings, code, or lists
- [ ] Confirm only terms from current guide's Essential Terms table are bolded
- [ ] Ensure term is bolded before it appears in Essential Terms section

---

## Callout Types

**General Guidelines:**
- Callouts should elevate understanding beyond the immediate task
- Not every section needs a callout
- Conceptual sections: Use callouts sparingly, only when they add insight beyond core content
- Iterative build sections: Use callouts to explain patterns, principles, or "why" behind the code

### 💡 Concept

Use for explaining how or why something works, or connecting to broader patterns.

> **💡 Understanding the Fetch Process**
>
> This code performs four key operations:
>
> 1. **Log the URL**: Shows what endpoint we're calling
> 2. **Send the request**: `await fetch(url)` sends HTTP request and waits for response
> 3. **Parse JSON**: `await response.json()` converts the response text into a JavaScript object
> 4. **Log the data**: Shows the raw API response structure

### ⚠️ Warning

Use to prevent common mistakes or highlight important gotchas.

> **⚠️ Warning:** Don't modify the original arrays. The helper functions return new arrays to avoid side effects.

### ✅ Success Check

Use for verification checklists with multiple conditions.

> **✅ Success Check:**
>
> - [ ] `questions` array appears in GameProvider state
> - [ ] Each question has `question`, `answers`, and `correct` properties
> - [ ] Answers are shuffled (different order each time)

### ℹ️ Note

Use for additional context, tips, or side information.

> **ℹ️ Note:** State initialized to `0` ensures the game starts with a clean slate.

### 🎯 Pro Tip

Use for advanced techniques or shortcuts.

> **🎯 Pro Tip:** Use React DevTools to change the score value and watch the UI update in real-time.

---

## Step Introduction Paragraphs

The paragraph before a code block bridges the step heading and the code itself, providing context that helps students understand what they're about to do and why it matters.

### Purpose

Step intro paragraphs serve three functions:
1. **Orient** - Help students locate where to make changes
2. **Contextualize** - Explain how this step fits into the bigger picture
3. **Prepare** - Set expectations for what the code will accomplish

### Guidelines (Not Rules)

**Be conversational but clear:**
- Write like you're sitting next to the student
- Use natural language, not robotic commands
- It's okay to explain "why" briefly if it helps understanding

**Keep it focused:**
- 1-3 sentences is ideal
- Don't repeat what's obvious from the step heading
- Don't duplicate what code comments will show
- Save detailed explanations for Understanding callouts

**Provide helpful context:**
- Where to make the change ("at the top", "after the QuestionHeader", "inside the function")
- What the change accomplishes ("to track modal visibility", "to trigger the modal")
- How it connects to previous steps ("this satisfies Step 1's condition")

### Voice Options

**Imperative (direct command):**
> "Add the import at the top with your other component imports."

**Explanatory (what and why):**
> "To track whether the modal is visible, add state that starts with `false` since the modal should be hidden initially."

**Contextual (how it fits):**
> "Add `setIsQuizVisible` and call it after questions load — this sets the state to true, satisfying Step 1's condition and making the modal appear."

**Choose the voice that best serves student understanding for that specific step.**

### Examples by Complexity

**Simple steps** (obvious from heading):
> "Add the import at the top with your other imports."

Or even simpler - let the code speak:
```javascript
// No intro paragraph needed - step heading + code is clear
```

**Medium steps** (needs location/context):
> "Update the `AnswerChoices` component to accept an `onAnswerClick` prop and attach it to each button."

**Complex steps** (needs connection to bigger picture):
> "Create a state variable to track whether the modal is visible, starting with `false` since the modal should be hidden initially. The `useState` hook returns both the current value (`showCredits`) and a setter function (`setShowCredits`) that you'll use to update the state later."

### What to Avoid

- ❌ Don't be overly verbose or academic
- ❌ Don't repeat the step heading verbatim
- ❌ Don't explain every detail (save for Understanding callouts)
- ❌ Don't use jargon without context for first-time learners
- ❌ Don't write paragraphs just to have paragraphs (sometimes code + comments is enough)

### Decision Tree

```
Is the step obvious from the heading + code?
├─ Yes → Consider skipping intro paragraph or keep it minimal
└─ No → Ask: What would help students most?
   ├─ Location guidance? → "Add X at the top..."
   ├─ Purpose clarity? → "To accomplish Y, add X..."
   └─ Connection to flow? → "Add X — this connects to Step N by..."
```

### Real Examples

**Good - Provides helpful context:**
> "Create a state variable to track whether the modal is visible, starting with `false` since the modal should be hidden initially."

**Good - Explains connection:**
> "Add `setIsQuizVisible` and call it after questions load — this sets the state to true, satisfying Step 1's condition and making the modal appear."

**Too rigid - Loses helpful context:**
> "Add state to track modal visibility."

**Too verbose - Belongs in Understanding callout:**
> "Create a state variable to track whether the modal is visible, starting with `false` since the modal should be hidden initially. The `useState` hook returns both the current value (`showCredits`) and a setter function (`setShowCredits`) that you'll use to update the state later. State persists between renders and causes re-renders when updated."

### Key Principle

**Optimize for student understanding, not formula adherence.**

If a longer, more explanatory intro helps a teenage student understand what they're about to do and why it matters, that's better than a terse command that leaves them confused. The goal is learning, not brevity.

---

## Markdown Best Practices

### Lists

Always include a blank line before lists to ensure proper rendering:

```markdown
Here is some context.

- First item
- Second item
```

### Code Blocks

Use appropriate language identifiers for syntax highlighting:

```markdown
\`\`\`javascript
function App() {
  return <div>Hello</div>;
}
\`\`\`
```

### Callouts

Always include blank line before lists inside callouts:

```markdown
> **✅ Success Check:**
>
> - [ ] First condition
> - [ ] Second condition
```

---

## Step Naming Conventions

### Core Principle

**Always name the primary entity being created or modified.**

### Format Patterns

**Creating new entities:**
- `Create [EntityName] [component/function/file]`
- Examples: "Create AnswerChoices component", "Create getCacheKey function"

**Modifying existing entities:**
- `Update [EntityName] to [purpose]`
- `Add [feature] to [EntityName]`
- Examples: "Update GameMap to show modal", "Add cache checking to fetchQuestions"

**Adding to existing structures:**
- `Add [EntityName] to [ParentEntity]`
- Examples: "Add QuizModal to App", "Add AnswerChoices to QuizModal"

**Testing/Verification:**
- `Test [specific feature]` or `Verify [specific behavior]`
- Examples: "Test the modal connection", "Verify props are passed"

**Procedural (setup/tools):**
- Generic is acceptable for non-code steps
- Examples: "Open DevTools", "Navigate to Components tab"

### Decision Tree

```
Is this a code change?
├─ Yes → Name the entity
│   ├─ Creating? → "Create [EntityName] [type]"
│   ├─ Modifying? → "Update [EntityName] to [purpose]"
│   │              or "Add [feature] to [EntityName]"
│   └─ Adding? → "Add [EntityName] to [ParentEntity]"
│
└─ No → Is it testing/verification?
    ├─ Yes → "Test/Verify [specific feature]"
    └─ No → Generic procedural name OK
```

### Examples

**Good (specific):**
- ✅ "Create getCacheKey function"
- ✅ "Add cache checking to fetchQuestions"
- ✅ "Add AnswerChoices to QuizModal"
- ✅ "Update GameMap to show modal"
- ✅ "Test the modal connection"

**Avoid (generic):**
- ❌ "Add cache retrieval" → "Create getCachedQuestions function"
- ❌ "Add component to JSX" → "Add AnswerChoices to QuizModal"
- ❌ "Add fetch logic" → "Add fetch logic to fetchQuestions"
- ❌ "Add local state" → "Add showCredits state"

### Benefits

- **Scannability**: Students can quickly find specific steps
- **Context**: Names provide context even in isolation
- **Consistency**: Same pattern throughout all sessions
- **Reference**: Easy to reference in cross-references and discussions

---

## Section Types & Patterns

### Conceptual Sections

**Purpose:** Explain concepts before students write code

**Conventions:**
- ❌ Does NOT include Goal statement
- ❌ Does NOT automatically include callouts (only when elevating understanding)
- ❌ Does NOT use gerunds in section titles (use nouns: "Component Composition" not "Understanding Component Composition")
- ✅ Uses emoji in section heading (e.g., `## 🌐 APIs and External Data`)
- ✅ Direct, technical explanations
- ✅ Avoid marketing language ("supercharge", "lightning-fast", "magic")
- ✅ Bold Essential Terms on first occurrence
- ✅ May include diagrams, examples, or use cases

**Example:** "APIs and External Data" in SESSION-05, "Component Composition" in SESSION-07

### Iterative Build Sections

**Purpose:** Guide students through building code step-by-step

**Conventions:**
- ✅ MUST include Goal statement
- ✅ MUST include File reference
- ✅ Uses `### Step N:` headings (not numbered lists)
- ✅ Each step includes verification ("✓ You should see:")
- ✅ May include callouts that explain patterns or principles

**Example:** "Building the Fetch Foundation" in SESSION-05

### Testing Sections

**Purpose:** Guide students through verifying their implementation

**Conventions:**
- ✅ MUST include Goal statement
- ✅ Uses `### Step N:` headings (not numbered lists)
- ❌ Does NOT use emojis in step headings
- ✅ Each step includes verification ("✓ You should see:")
- ✅ May include flow diagrams

**Example:** "Testing Your API Integration" in SESSION-05

---

## Code Scaffolding Patterns

**See also:** `ADVANCED-PATTERNS-SESSIONS-05-07.md` for complex patterns used in later sessions

### Decision Tree

Choose the appropriate pattern based on the type of change:

```text
What type of change?
├─ Simple line replacement → Inline Before/After
├─ Adding new lines → Scaffolding with Comments
├─ Updating existing lines → Diff Format
├─ Complex multi-line addition (3+) → Numbered Inline Annotations + Understanding Callout
├─ Iterative transformation → Multi-Step with Intermediate Verification
└─ Multiple distinct actions → Multi-Part Steps
```

### Pattern 1: Inline Before/After

**When to use:** Simple line replacements

**Format:**
```javascript
// Before:
alert(`Loading questions for ${zone.name}`);

// After:
console.log("Fetching from:", url);
const response = await fetch(url);
const data = await response.json();
```

### Pattern 2: Scaffolding with Comments

**When to use:** Adding new lines to existing code

**Format:**
```javascript
export default function SplashScreen() {
  const [showCredits, setShowCredits] = useState(false);
  // Add this line to access the shared state setter
  const { setScreen } = useGame();
  
  // ... rest of function ...
}
```

### Pattern 3: Diff Format

**When to use:** Updating existing lines (shows precise changes)

**Format:**
```diff
function transformQuestion(apiQuestion) {
- const question = apiQuestion.question;
+ const question = decodeText(apiQuestion.question);
- const incorrectAnswers = apiQuestion.incorrect_answers;
+ const incorrectAnswers = apiQuestion.incorrect_answers.map(
+   (answer) => decodeText(answer)
+ );
}
```

### Pattern 4: Numbered Inline Annotations

**When to use:** Complex multi-line additions (3+) that need step-by-step explanation

**Three levels of detail based on complexity:**

#### Level 1: Simple Multi-Change (3-5 changes)

**For straightforward changes where purpose is relatively clear:**

```javascript
function AnswerChoices({ answers, onAnswerClick }) {  // [1] Add onAnswerClick prop
  return (
    <div className="answers-grid">
      {answers.map((answer, index) => (
        <button
          onClick={() => onAnswerClick(index)}  // [2] Attach click handler
        >
          {answer}
        </button>
      ))}
    </div>
  );
}
```

**Understanding callout:**
```markdown
> 💡 **Understanding Click Handling**
>
> 1. **Add onAnswerClick prop**: Accept the click handler function from the parent
> 2. **Attach click handler**: Pass the button's index when clicked
>
> [Optional: One paragraph of additional context]
```

**Characteristics:**
- Inline annotations on changed lines
- Brief Understanding callout
- Minimal additional explanation

#### Level 2: Medium Complexity (4-8 changes)

**For moderately complex logic requiring more explanation:**

```javascript
try {
  console.log("Fetching from:", url);        // [1] Log the URL
  const response = await fetch(url);         // [2] Send HTTP request
  const data = await response.json();        // [3] Parse JSON response
  console.log("Raw API data:", data);        // [4] Log the data
} catch (error) {
  // ... error handling ...
}
```

**Understanding callout:**
```markdown
> 💡 **Understanding the Fetch Process**
>
> 1. **Log the URL**: Shows what endpoint we're calling
> 2. **Send the request**: `await fetch(url)` sends HTTP request and waits for response
> 3. **Parse JSON**: `await response.json()` converts response text into JavaScript object
> 4. **Log the data**: Shows the raw API response structure
>
> The `await` keyword pauses execution until each async operation completes, making the code read top-to-bottom like synchronous code.
```

**Characteristics:**
- Inline annotations on each significant line
- Detailed Understanding callout with explanations
- Additional context paragraph explaining broader concepts

#### Level 3: Critical Passages (Maximum Support)

**For complex logic requiring line-by-line explanation:**

```javascript
// Add cache check:
const cachedQuestions = getCachedQuestions(zoneId);  // [1] Check cache
if (cachedQuestions) {                               // [2] If found
  console.log(`Cache hit for zone ${zoneId}`);       // [3] Log hit
  return cachedQuestions;                            // [4] Return early
}

console.log(`Cache miss for zone ${zoneId}`);        // [5] Log miss
```

**Understanding callout:**
```markdown
> 💡 **Understanding Cache Checking**
>
> 1. **Check cache**: Call `getCachedQuestions()` to see if we have stored questions for this zone
> 2. **If found**: **Cache hit** — we have the data already
> 3. **Log hit**: Record the cache hit for debugging
> 4. **Return early**: Skip the entire API request and return cached data immediately
> 5. **Log miss**: If cache is empty, record the miss before fetching from API
>
> The early return in step 4 is crucial — it prevents the expensive API request from executing when cached data exists. If `getCachedQuestions()` returns `null` (**cache miss**), execution continues past the if block to fetch fresh data.
```

**Characteristics:**
- Section label comment ("Add cache check:")
- Inline annotation on EVERY significant line
- Aligned annotations for readability
- Comprehensive Understanding callout
- Each numbered item has detailed explanation
- Additional paragraph explaining critical concepts or flow
- Used for: complex algorithms, critical logic paths, non-obvious patterns

**When to use Level 3:**
- ✅ Complex conditional logic with early returns
- ✅ Critical performance optimizations
- ✅ Non-obvious patterns (cache-aside, circuit breakers)
- ✅ Code where understanding the flow is essential
- ✅ First-time introduction of advanced concepts

### Multi-Line Chunk Annotation Guidelines

**For multi-line chunks within numbered annotation blocks:**

1. **Short chunks (1-3 lines)**: Inline annotation on first line
   ```javascript
   const messages = isCorrect ? CORRECT_FEEDBACK : INCORRECT_FEEDBACK;  // [1] Pick array
   ```

2. **Medium chunks (4-8 lines)**: Above-line annotation
   ```javascript
   // [1] Add style function
   const getButtonStyle = (index) => {
     if (chosenAnswer === null) return "answer-button";
     if (index === correctAnswer) return "answer-button correct";
     return "answer-button";
   };
   ```

3. **Long chunks or multiple separate additions**: Stacked annotations
   ```javascript
   // [1] Pick the appropriate array
   const messages = isCorrect ? CORRECT_FEEDBACK : INCORRECT_FEEDBACK;
   // [2] Select random message  
   const message = messages[Math.floor(Math.random() * messages.length)];
   ```

**Key principle:** Optimize for clarity - if the chunk's purpose isn't immediately obvious, use above-line annotation.

**Always follow with Understanding callout** that explains each numbered annotation.

### Pattern 5: Multi-Part Steps

**When to use:** Single step involves multiple distinct actions that need separate focus

**Format:**
```markdown
### Step 6: Complete the integration

#### Part A: Remove test code

Remove the temporary transformation testing we added earlier:

[Code showing removals]

#### Part B: Format all questions for your game

Apply your transformation to every question and return the formatted data:

[Code showing implementation]

#### Part C: Verify your integration

Test the complete API integration using React DevTools:

[Verification instructions]

**✓ You should see:** [Expected result]
```

**Key characteristics:**
- Main step heading describes overall goal
- Parts use `####` subheadings
- Each part has intro paragraph + code/instructions
- Final part often includes verification
- Used for complex integration steps (common in SESSION-05, 06)

### Pattern 6: Reference Code Blocks

**When to use:** After iterative steps complete, show final result for verification

**Format:**
```markdown
Here's the complete `fetchQuestions` function for reference:

```javascript
export async function fetchQuestions(zoneId, count = null) {
  // ... complete final code without annotations ...
}
```
```

**Key characteristics:**
- Introduced with "Here's the complete X for reference:"
- Shows entire function/component
- No annotations or instructional comments (clean final code)
- Helps students verify their work
- Only used after iterative build completes

### Pattern 7: Destructuring Changes

**When to use:** Showing changes to destructuring statements

**Primary Pattern - Before/After (for isolated changes):**
```javascript
// Before:
const { screen } = useGame();

// After:
const { screen, setScreen } = useGame();
```

**Secondary Pattern - Numbered Annotations (for multi-change steps):**
```javascript
export default function Component() {
  // [1] Add setScreen
  const { screen, setScreen } = useGame();
  
  const handleClick = () => {
    setScreen(SCREENS.PLAYING);  // [2] Navigate to game
  };
}
```

**Decision criteria:**
- **Isolated destructuring change only** → Use Before/After
- **Destructuring + other changes in same code block** → Use Numbered Annotations
- **Multiple destructuring statements in one step** → Use Numbered Annotations
- **When clarity is paramount** → Use Before/After

**Why Before/After for isolated changes:**
- Shows exact transformation with zero ambiguity
- Student sees precisely what changed
- No need to scan entire line to find the addition
- Clearest pattern for learning

**Why Numbered Annotations for multi-change steps:**
- More concise when showing full function context
- Allows referencing multiple changes in Understanding callout
- Maintains flow when destructuring is one of several modifications

---

## Verification Patterns

### Text-Based Verification

**Format:**
```markdown
**✓ You should see:** Console shows the fetching URL and raw API data.
```

### Example Output Verification

**When to use:** Show exact expected output (JSON, console logs, etc.)

**Format:**
```markdown
**✓ You should see:** Console shows "After transform:" with extracted properties (example):
```json
{
  "question": "What%20is%20RAM%3F",
  "incorrectAnswers": ["Processor", "Storage", "Graphics"],
  "correctAnswer": "Memory"
}
```
```

### Multi-Condition Verification

**Format:**
```markdown
**✓ You should see:**
- Console shows `Cache hit for zone X`
- localStorage entry remains unchanged
- No new network requests in Network tab
```
