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

### When to Use Both Bold + Backticks

- **File paths in action bullets**: **Open** `src/components/App.jsx`
- **Important code elements in instructions**: **Find** the `recordCorrectAnswer` function
- **UI elements that are also code**: Click the **`<StartButton />`** component

### When to Use Neither

- Regular descriptive text
- Explanations and context
- UI navigation paths in verification (React DevTools → Components → GameProvider)
- Callout body text

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

## Section Types & Patterns

### Conceptual Sections

**Purpose:** Explain concepts before students write code

**Conventions:**
- ❌ Does NOT include Goal statement
- ❌ Does NOT automatically include callouts (only when elevating understanding)
- ✅ Uses emoji in section heading (e.g., `## 🌐 APIs and External Data`)
- ✅ Direct, technical explanations
- ✅ Avoid marketing language ("supercharge", "lightning-fast", "magic")
- ✅ Bold Essential Terms on first occurrence
- ✅ May include diagrams, examples, or use cases

**Example:** "APIs and External Data" in SESSION-05

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

### Decision Tree

Choose the appropriate pattern based on the type of change:

```text
What type of change?
├─ Simple line replacement → Inline Before/After
├─ Adding new lines → Scaffolding with Comments
├─ Updating existing lines → Diff Format
├─ Complex multi-line addition → Numbered Annotations
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

### Pattern 4: Numbered Annotations

**When to use:** Complex multi-line additions that need explanation

**Format:**
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

**Follow with explanatory callout:**
```markdown
> 💡 **Understanding the Fetch Process**
>
> This code performs four key operations:
>
> 1. **Log the URL**: Shows what endpoint we're calling
> 2. **Send the request**: `await fetch(url)` sends HTTP request and waits for response
> 3. **Parse JSON**: `await response.json()` converts response text into JavaScript object
> 4. **Log the data**: Shows the raw API response structure
```

### Pattern 5: Multi-Part Steps

**When to use:** Single step involves multiple distinct actions

**Format:**
```markdown
### Step 6: Complete the integration

#### Part A: Remove test code

[Instructions and code for Part A]

#### Part B: Format all questions

[Instructions and code for Part B]

#### Part C: Verify integration

[Instructions and code for Part C]
```

### Pattern 6: Reference Code Blocks

**When to use:** After iterative steps complete, show final result

**Format:**
```markdown
Here's the complete `fetchQuestions` function for reference:

```javascript
export async function fetchQuestions(zoneId, count = null) {
  // ... complete final code ...
}
```
```

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
