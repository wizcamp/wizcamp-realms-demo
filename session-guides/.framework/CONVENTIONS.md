# Instructional Conventions

Global formatting and style rules for all Wizcamp session guides.

---

## Special Sections

Certain sections have unique conventions that differ from standard patterns.

### Accessing Your Codespace

**When to include:** Sessions 2+ (not Session 1, which covers initial setup)

**Conventions:**
- ❌ Does NOT appear in Table of Contents
- ❌ Does NOT include Goal statement
- ✅ Brief, single-sentence instruction
- ✅ Always first section after TOC
- ✅ Uses ☁️ emoji in heading

**Format:**
```markdown
<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

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
- ❌ Don't bold verification text except the word "Verify"
- ❌ Don't use backticks around quoted UI text ("Score: 0" not `"Score: 0"`)

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

### 💡 Concept

Use for explaining how or why something works.

> **💡 Concept:** The `map()` method transforms each item in an array. Here, it decodes each incorrect answer.

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
