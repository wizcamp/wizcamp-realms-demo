# Pattern Application Rules

**Critical lessons from Session 1 feedback - what NOT to do**

## Core Principles

### 1. Verification Must Stay in Context

**❌ WRONG:**
```markdown
### Step 3: Wait for environment to load
Your Codespace will begin building...

**✓ Verify:** Project files appear in the file explorer
```

**✅ RIGHT:**
```markdown
### Step 3: Wait for the environment to load
Once the build completes, VS Code will open in your browser.

**Expected result:** Project files appear in the file explorer on the left side.
```

**Rule:** Verification belongs WITHIN the step it verifies, not extracted to the end of a section.

---

### 2. Not Everything Is a Callout

**❌ WRONG:**
```markdown
## Navigating the Project

> 💡 **Concept: Project Structure**
>
> Quick orientation...
> [entire section in callout]
```

**✅ RIGHT:**
```markdown
## Navigating the Project

_Quick orientation to help you find files during today's tasks:_

[content as standalone section]
```

**Rule:** Reference sections, navigation guides, and orientation content are NOT callouts. They're standalone sections.

---

### 3. Concept Callouts Go at the END

**❌ WRONG (lead-in):**
```markdown
## Editing Your First Component

> 💡 **Concept: Components**
> Components are React's building blocks...

### Step 1: Import SplashScreen
```

**✅ RIGHT (at end):**
```markdown
## Editing Your First Component

### Step 1: Import SplashScreen
[steps...]

**Expected result:** The screen updates instantly...

💡 **What just happened?** Components are React's building blocks...
```

**Rule:** Concept callouts explain AFTER the experience, not before. Few exceptions exist.

---

### 4. Single Actions Don't Need "Step 1"

**❌ WRONG:**
```markdown
## Updating the Page Title

### Step 1: Update the title tag
Open index.html and change...
```

**✅ RIGHT:**
```markdown
## Updating the Page Title

**File:** `index.html`

Open `index.html` and change the `<title>` tag to `Wizcamp Realms - Legends of Trivia`.

**Expected result:** The browser tab displays your new title.
```

**Rule:** If there's only one action, don't number it as "Step 1". Just describe it.

---

### 5. Don't Destroy the Flow

**❌ WRONG:**
```markdown
### Step 2: Open the app
Follow the link...

### Step 3: Stop the server
Go back to terminal...

**✓ Verify:**
- Web page displays starter app
- After stopping: Terminal returns to prompt
```

**✅ RIGHT:**
```markdown
### Step 2: Open the app
Follow the link...

**Expected result:** A web page displaying the starter app with placeholder content.

### Step 3: Stop the server
Go back to your terminal and press Ctrl + C.

**Expected result:**
- Terminal returns to the command prompt
- Refreshing the browser shows a connection error
```

**Rule:** Each step's verification stays WITH that step. Don't consolidate at the end.

---

## When to Apply Patterns

### Configuration Pattern
- Use for multi-step setup/installation tasks
- Keep verification within each step
- Concept callouts go at END of section
- Don't force "Step 1" on single actions

### Iterative Build Pattern
- Use for code editing tasks
- Keep "Expected result" immediately after the code change
- Concept callouts explain AFTER the experience
- Don't move verification out of context

### Conceptual Pattern
- Use for standalone explanatory sections
- NOT for wrapping reference content in callouts
- NOT for lead-in explanations before steps
- Use for post-experience "What just happened?" moments

---

## The Original Was Better When...

1. **Verification was inline** - "Expected result:" after each step
2. **Reference sections stood alone** - Not wrapped in callouts
3. **Concepts came after experience** - "What just happened?" not "Here's what you're about to do"
4. **Single actions weren't numbered** - No forced "Step 1" structure
5. **Flow was preserved** - Context stayed together

---

## Pattern Application Checklist

Before applying patterns, ask:

- [ ] Will this move verification out of its step's context?
- [ ] Am I turning a reference section into a callout?
- [ ] Am I putting concept explanation BEFORE the experience?
- [ ] Am I forcing "Step 1" on a single action?
- [ ] Am I consolidating verification that belongs in separate steps?

If YES to any: **Don't apply the pattern that way.**

---

**Version:** 1.0  
**Date:** 2025-01-XX  
**Status:** Critical - Review before any pattern application
