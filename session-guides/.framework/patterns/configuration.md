# Configuration Pattern

**Use when:** Setting up tools, environments, accounts, or running commands that configure the development environment.

**Key characteristics:**
- Terminal commands or external service setup
- Tool/environment configuration
- Account creation or access
- Server start/stop operations
- Browser extension installation
- One-time or recurring setup tasks

---

## Pattern Structure

Configuration sections scale based on complexity. Choose the appropriate variant based on step count and content type.

### Decision Tree

```
How many steps?

├─ 1-2 steps
│  └─ Variant A (Minimal)
│
├─ 3-4 steps
│  └─ Variant B (Hybrid)
│
└─ 5+ steps OR has commands/output
   └─ Variant C (Full)
```

---

## Variant A: Minimal (1-2 Steps)

**Use when:** Simple, obvious tasks with 1-2 steps and no commands

**Structure:**
```markdown
## [Emoji] Section Title

[Single instruction paragraph OR 2-step numbered list]

> **[Callout Type]:** [Explanation]
```

**Required elements:**
- Section title with emoji
- Instruction (paragraph or numbered list)
- Callout

**Optional elements:**
- Figure with caption (for visual reinforcement)

---

### Example 1: Single Step

```markdown
## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 1.

> **ℹ️ Note:** Your Codespace saves your work automatically. You can close and reopen it anytime without losing progress.
```

---

### Example 2: Two Steps

```markdown
## 🐙 Setting Up Your GitHub Account

1. Go to [github.com](https://github.com) and create a new account ([signup guide](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github#signing-up-for-a-new-personal-account))
2. If you already have an account, verify you can log in

> **💡 Concept:** GitHub is where developers worldwide store and share code. You'll use it throughout the course to access your coding environment and AI-powered coding assistant.
```

---

### Example 3: With Figure (Sub-Variation)

```markdown
## 📨 Connecting with Your Instructor

DM Mr. Colestock in the [Wizcamp Portal](https://portal.wizcamp.com) with your full name, email, and GitHub username.

<img src="images/portal-dm.png" alt="Portal DM interface" style="max-width: 500px; width: 100%;">
*Figure: Send a direct message with your information*

You'll receive confirmation that you've been added to the Wizcamp GitHub Organization.

> **💡 Concept:** Being added to the organization gives you access to Codespaces and GitHub Copilot Pro — the tools you'll use to build your trivia game.
```

**When to use figure sub-variation:**
- UI navigation is not obvious
- Visual reinforcement aids understanding
- Screenshot clarifies location/action
- Reduces potential confusion

---

## Variant B: Hybrid (3-4 Steps)

**Use when:** Standard configurations with 3-4 sequential steps

**Structure:**
```markdown
## [Emoji] Section Title

🎯 **Goal:** [What you'll accomplish]

1. **[Action]** [instruction]
2. **[Action]** [instruction]
3. **[Action]** [instruction]
4. **[Action]** [instruction]

**Verify:** [Brief check]

> **[Callout Type]:** [Explanation]

[Optional: Bonus challenge]
```

**Required elements:**
- Section title with emoji
- Goal statement
- Numbered steps with **bold action verbs**
- Brief verification
- Callout

**Optional elements:**
- Code blocks (if commands)
- Platform-specific table
- Bonus challenge

---

### Example 1: Standard Configuration

```markdown
## 👋 Introducing Yourself

🎯 **Goal:** Connect with your cohort and share your coding journey.

1. **Log in** to the [Wizcamp Portal](https://portal.wizcamp.com)
2. **Click** "New Introduction" and share:
   - Your name and coding experience
   - What excites you about learning to code
   - One fun fact about yourself
3. **Read** and respond to other student introductions

**Verify:** Your introduction post is visible in the portal.

> **💡 Concept:** Building connections with your cohort creates a supportive learning community where you can share challenges, celebrate wins, and learn from each other throughout the course.
```

---

### Example 2: With Platform-Specific Table

```markdown
## 🔍 Installing React DevTools

🎯 **Goal:** Install and learn to use React DevTools for inspecting your app's components.

### Browser Installation

| Browser     | Installation Link                                                                                                        | Notes               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| **Chrome**  | [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)     | Most popular choice |
| **Firefox** | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)                                        | Great alternative   |
| **Edge**    | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) | Windows default     |
| **Safari**  | Manual installation required                                                                                             | Advanced users only |

### Using DevTools

1. **Open** DevTools by pressing `F12` or right-clicking → Inspect
2. **Find** the Components tab next to Console, Network, etc.
3. **Click** on `GameButton` in the component tree
4. **Inspect** the props: `text`, `onClick`, and `variant`

**Verify:** You can see GameButton's props in the right panel.

> **💡 Concept:** React DevTools gives you X-ray vision into your app — essential for debugging and understanding how components work.
```

---

### Example 3: With Bonus Challenge

```markdown
## ☁️ Creating Your Codespace

🎯 **Goal:** Set up your cloud development environment so you can start coding without any local installations.

1. **Sign in** to [github.com](https://github.com)
2. **Navigate** to [github.com/wizcamp/wizcamp-realms-demo](https://github.com/wizcamp/wizcamp-realms-demo)
3. **Click** Use this template → Open in a codespace
4. **Wait** for the build to complete (1-2 minutes)

**Verify:** VS Code opens in your browser with project files visible in the left sidebar.

> **💡 Concept:** Everyone gets the same setup — no more "it works on my machine" drama. Mess something up? Just delete and start fresh. You'll use this Codespace for all 12 sessions.

### 🏆 Bonus Challenge

Customize your theme by clicking the ⚙️ gear icon → **Themes** → **Color Theme**, or explore [github.com/codespaces](https://github.com/codespaces) to learn about managing Codespaces.
```

---

## Variant C: Full (5+ Steps or Commands)

**Use when:** Complex configurations with 5+ steps, terminal commands, or detailed output

**Structure:**
```markdown
## [Emoji] Section Title

🎯 **Goal:** [What you'll accomplish]

### Step 1: [Action Name]

[Context sentence]

```[language]
[command or code]
```

**Expected result:** [What you should see]

### Step 2: [Action Name]

[Continue pattern...]

> **[Callout Type]:** [Explanation]

[Optional: Bonus challenge]
```

**Required elements:**
- Section title with emoji
- Goal statement
- Step subheadings (### Step X: Name)
- Code blocks with language identifiers
- Expected result/output statements
- Callout

**Optional elements:**
- Expected output in code blocks
- Multiple verification points
- Bonus challenge

---

### Example 1: Terminal Commands

```markdown
## 🚀 Starting Your Development Server

🎯 **Goal:** Practice starting and stopping the local server you'll use to preview real-time changes as you build your app.

### Step 1: Run the dev server

From the terminal at the bottom of your Codespace, run:

```bash
npm run dev
```

### Step 2: Open the app in your browser

After running the command, you'll see output like:

```text
VITE v7.1.7  ready in 2473 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Follow the link (ctrl + click), copy-paste it into a new browser tab, or click "Open in Browser" if a dialog appears.

**Expected result:** A web page displaying the starter app with placeholder content.

### Step 3: Stop the server

Go back to your terminal and press `Ctrl + C`.

**Expected result:**

- Terminal returns to the command prompt
- Refreshing the browser shows a connection error (app no longer running)

> **💡 Concept:** Run `npm run dev` to fire up your server and see your app live. Hit `Ctrl + C` to shut it down. You'll use these commands constantly — they're about to become muscle memory.
```

---

### Example 2: Exploratory Configuration

```markdown
## 🔍 Using React DevTools for Exploring State

🎯 **Goal:** Explore how shared state controls your app by manually changing values in DevTools.

### Step 1: Open DevTools

Press `F12` or right-click → Inspect to open your browser's developer tools.

### Step 2: Navigate to Components tab

Look for "Components" next to Console, Network, etc. and click it.

**Expected result:** You see a tree of React components.

### Step 3: Locate GameProvider

Click on `GameProvider` in the component tree.

**Expected result:** The right panel shows GameProvider's hooks and state.

### Step 4: Find the screen state

Look for the `screen` state value in the hooks section. If hook names aren't clear, click the gear icon and enable "Parse hook names."

### Step 5: Experiment with state

Change the `screen` value from `"splash"` to `"playing"` and watch the UI update instantly!

### Step 6: Change it back

Set `screen` back to `"splash"` to see the SplashScreen return.

**Verify:** The app switches between screens as you change the state value.

> **💡 Concept:** React DevTools gives you X-ray vision into your app's state. You can see exactly what data each component has and modify it in real-time — invaluable for debugging and understanding how shared state affects your entire app.

### 🏆 Bonus Challenge

Try changing the `screen` state to different values and see what happens. What occurs when you set it to a value that doesn't match any of your conditions?
```

---

## Formatting Conventions

### Action Verbs

Always **bold** action verbs at the start of instructions:

- **Open** DevTools
- **Click** the button
- **Navigate** to the URL
- **Run** the command
- **Wait** for completion

### Links

Show fully-qualified URLs (without protocol) for straightforward links:

- ✅ `[github.com](https://github.com)`
- ✅ `[github.com/codespaces](https://github.com/codespaces)`
- ❌ `[GitHub](https://github.com)` (for simple navigation)

Exception: Complex installation links can use descriptive text:
- ✅ `[signup guide](https://docs.github.com/en/get-started/...)`
- ✅ `[Chrome Web Store](https://chrome.google.com/webstore/...)`

### Code Elements

Use `backticks` for:
- Commands: `npm run dev`
- Keyboard shortcuts: `F12`, `Ctrl + C`
- File paths: `src/App.jsx`
- Code elements: `screen`, `GameProvider`
- UI elements that are code: `GameButton`

### UI Navigation

Use arrow notation without backticks:
- Click the gear icon → **Themes** → **Color Theme**
- Open DevTools → Components → GameProvider

---

## Callout Usage

### Callout Types for Configuration

**💡 Concept** - Explain how/why something works
```markdown
> **💡 Concept:** GitHub is where developers worldwide store and share code.
```

**ℹ️ Note** - Additional context or tips
```markdown
> **ℹ️ Note:** Your Codespace saves your work automatically.
```

**⚠️ Warning** - Prevent mistakes or highlight gotchas
```markdown
> **⚠️ Warning:** Don't close the terminal while the server is running.
```

**🎯 Pro Tip** - Advanced techniques or shortcuts
```markdown
> **🎯 Pro Tip:** Use `Ctrl + ~` to quickly toggle the terminal.
```

### Callout Placement

- Always at end of section
- After all steps and verification
- Before bonus challenges

### Callout Content

- Explain value/importance
- Provide context
- Connect to bigger picture
- Keep concise (1-2 sentences)

---

## Verification Patterns

### Implicit Verification (Variant A)

No explicit verification statement. Success assumed if student can proceed.

```markdown
Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace.
```

### Brief Verification (Variant B)

Single statement after all steps:

```markdown
**Verify:** Your introduction post is visible in the portal.
```

### Detailed Verification (Variant C)

After individual steps or at end:

```markdown
**Expected result:** Terminal returns to the command prompt.
```

Or with multiple points:

```markdown
**Expected result:**
- Terminal returns to the command prompt
- Refreshing the browser shows a connection error
```

---

## When to Use This Pattern

✅ **Good for:**
- Account creation and setup
- Environment configuration
- Tool installation
- Server start/stop operations
- Browser extension setup
- CLI command execution
- External service access

❌ **Not ideal for:**
- Code modifications (use Iterative Build pattern)
- Multi-file coordination (use Integration pattern)
- Independent practice (use Solo Mission pattern)
- Conceptual explanations (use Conceptual pattern)

---

## Pattern Selection Guide

| Steps | Commands | Output | Variant | Example |
|-------|----------|--------|---------|---------|
| 1-2 | No | No | A (Minimal) | Relaunch Codespace |
| 2 | No | No | A (Minimal) | GitHub Account |
| 3-4 | No | No | B (Hybrid) | Introducing Yourself |
| 3-4 | Optional | No | B (Hybrid) | Installing DevTools |
| 5+ | No | No | C (Full) | DevTools Exploration |
| 3+ | Yes | Yes | C (Full) | Dev Server |
| Any | Yes | Complex | C (Full) | Multi-step CLI |

---

## Complete Examples

See `../examples/configuration-example.md` for complete working examples of all three variants.

---

## Quick Reference

**Variant A (Minimal):**
- 1-2 steps
- Paragraph or simple list
- Callout only
- Optional figure

**Variant B (Hybrid):**
- 3-4 steps
- Goal + numbered list
- Brief verification
- Callout

**Variant C (Full):**
- 5+ steps or commands
- Goal + step subheadings
- Expected results
- Callout
- Optional bonus
