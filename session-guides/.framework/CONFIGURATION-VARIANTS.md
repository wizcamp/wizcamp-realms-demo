# Configuration Pattern Variants

Three pattern variants tested on real sections from Sessions 0-3.

---

## Variant A: Minimal (1-2 Steps)

**Use when:** Simple, obvious tasks with 1-2 steps

**Structure:**
- Section title with emoji
- Single paragraph or 2-step instruction
- Callout explaining value

**Elements:**
- ✗ Goal statement
- ✗ Numbered steps (unless 2 steps)
- ✗ Step subheadings
- ✗ Expected result
- ✓ Callout

---

### Example 1: Accessing Your Codespace (Current)

```markdown
## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 1.
```

### Example 1: Accessing Your Codespace (Variant A)

```markdown
## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 1.

💡 **Quick tip:** Your Codespace saves your work automatically. You can close and reopen it anytime without losing progress.
```

**Changes:**
- Added callout for value/context
- Kept minimal single-line format

---

### Example 2: Setting Up Your GitHub Account (Current)

```markdown
## 🐙 Setting Up Your GitHub Account

Go to [github.com](https://github.com) and create a new account ([signup guide](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github#signing-up-for-a-new-personal-account)). If you already have an account, verify you can log in.

💡 **Why GitHub matters:** GitHub is where developers worldwide store and share code. You'll use it throughout the course to access your coding environment and AI-powered coding assistant.
```

### Example 2: Setting Up Your GitHub Account (Variant A)

```markdown
## 🐙 Setting Up Your GitHub Account

1. Go to [github.com](https://github.com) and create a new account ([signup guide](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github#signing-up-for-a-new-personal-account))
2. If you already have an account, verify you can log in

💡 **Why GitHub matters:** GitHub is where developers worldwide store and share code. You'll use it throughout the course to access your coding environment and AI-powered coding assistant.
```

**Changes:**
- Numbered the 2 steps for clarity
- Kept callout
- No goal statement (obvious from title)
- No expected result (implicit)

---

## Variant B: Hybrid (3-4 Steps)

**Use when:** Standard configurations with 3-4 sequential steps

**Structure:**
- Section title with emoji
- Goal statement
- Numbered steps with bold action verbs
- Brief verification
- Callout explaining value

**Elements:**
- ✓ Goal statement
- ✓ Numbered steps
- ✗ Step subheadings
- ✓ Brief verification
- ✓ Callout

---

### Example 3: Installing React DevTools (Current)

```markdown
## 🔍 Installing React DevTools

React DevTools is like X-ray vision for your React app — see component structure, props, and state in real-time.

### Browser Installation

| Browser     | Installation Link                                                                                                        | Notes               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| **Chrome**  | [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)     | Most popular choice |
| **Firefox** | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)                                        | Great alternative   |
| **Edge**    | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) | Windows default     |
| **Safari**  | Manual installation required                                                                                             | Advanced users only |

### Using DevTools

1. **Open** DevTools by pressing F12 or right-clicking → Inspect
2. **Find** Components tab by looking for "Components" next to Console, Network, etc.
3. **Explore** your app by clicking on components in the tree to see their props
4. **Inspect** GameButton by finding your GameButton component and see the text, onClick, and variant props!

💡 **React DevTools** gives you X-ray vision into your app. You can inspect components, props, and state in real time — essential for debugging and understanding how your app works under the hood.
```

### Example 3: Installing React DevTools (Variant B)

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
3. **Click** on GameButton in the component tree
4. **Inspect** the props: `text`, `onClick`, and `variant`

**Verify:** You can see GameButton's props in the right panel.

💡 **Why this matters:** React DevTools gives you X-ray vision into your app — essential for debugging and understanding how components work.
```

**Changes:**
- Added goal statement
- Kept platform table
- Simplified usage steps (removed redundancy)
- Added brief verification
- Streamlined callout
- No step subheadings

---

### Example 4: Creating Your Codespace (Variant B - Simplified)

```markdown
## ☁️ Creating Your Codespace

🎯 **Goal:** Set up your cloud development environment so you can start coding without any local installations.

1. **Sign in** to [github.com](https://github.com)
2. **Navigate** to [github.com/wizcamp/wizcamp-realms-demo](https://github.com/wizcamp/wizcamp-realms-demo)
3. **Click** Use this template → Open in a codespace
4. **Wait** for the build to complete (1-2 minutes)

**Verify:** VS Code opens in your browser with project files visible in the left sidebar.

💡 **Why Codespaces rocks:** Everyone gets the same setup — no more "it works on my machine" drama. Mess something up? Just delete and start fresh.

🏆 **Bonus Challenge:** Customize your theme by clicking the ⚙️ gear icon → Themes → Color Theme.
```

**Changes:**
- Removed step subheadings
- Condensed to numbered list with bold verbs
- Single verification statement
- Moved optional customization to bonus
- Streamlined callout

---

## Variant C: Full (5+ Steps)

**Use when:** Complex configurations with 5+ steps, commands, or detailed output

**Structure:**
- Section title with emoji
- Goal statement
- Step subheadings with context
- Commands in code blocks
- Expected output/result
- Callout explaining value
- Optional bonus challenge

**Elements:**
- ✓ Goal statement
- ✓ Numbered steps
- ✓ Step subheadings
- ✓ Expected result/output
- ✓ Callout
- ✓ Bonus challenge (optional)

---

### Example 5: Starting Your Development Server (Current)

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

💡 **Your dev server cheat sheet:** Run `npm run dev` to fire up your server and see your app live. Hit `Ctrl + C` to shut it down. You'll use these commands constantly — they're about to become muscle memory.
```

### Example 5: Starting Your Development Server (Variant C)

**No changes needed** - Current format is optimal for complex configs

**Rationale:**
- 3 steps but includes commands and output
- Expected output helps students verify
- Multiple verification points needed
- Cheat sheet callout adds value
- Already follows best practices

---

### Example 6: Using React DevTools for Exploring State (Current)

```markdown
## 🔍 Using React DevTools for Exploring State

Let's use React DevTools to see how **shared state** works behind the scenes and experiment with changing it manually.

1. **Open** DevTools by pressing F12 or right-clicking → Inspect
2. **Find** Components tab by looking for "Components" next to Console, Network, etc.
3. **Locate** GameProvider by clicking on GameProvider in the component tree
4. **Examine** the hooks by looking for the screen state value (if you don't see hook names clearly, click the gear icon and enable "Parse hook names")
5. **Experiment** with state by changing the screen value from "splash" to "playing" and watch the UI update!
6. **Change** it back by setting it back to "splash" to see the SplashScreen return

💡 React DevTools gives you X-ray vision into your app's **state**. You can see exactly what data each component has and even modify it in real-time. This is invaluable for debugging and understanding how **shared state** affects your entire app. Notice how changing one value in `GameProvider` instantly changes what component renders!

### 🏆 Bonus Challenge

Try changing the screen state to different values and see what happens. What occurs when you set it to a value that doesn't match any of your conditions?
```

### Example 6: Using React DevTools for Exploring State (Variant C)

```markdown
## 🔍 Using React DevTools for Exploring State

🎯 **Goal:** Explore how shared state controls your app by manually changing values in DevTools.

### Step 1: Open DevTools

Press `F12` or right-click → Inspect to open your browser's developer tools.

### Step 2: Navigate to Components tab

Look for "Components" next to Console, Network, etc. and click it.

**Expected result:** You see a tree of React components.

### Step 3: Locate GameProvider

Click on GameProvider in the component tree.

**Expected result:** The right panel shows GameProvider's hooks and state.

### Step 4: Find the screen state

Look for the `screen` state value in the hooks section. If hook names aren't clear, click the gear icon and enable "Parse hook names."

### Step 5: Experiment with state

Change the `screen` value from `"splash"` to `"playing"` and watch the UI update instantly!

### Step 6: Change it back

Set `screen` back to `"splash"` to see the SplashScreen return.

**Verify:** The app switches between screens as you change the state value.

💡 **Why this matters:** React DevTools gives you X-ray vision into your app's state. You can see exactly what data each component has and modify it in real-time — invaluable for debugging and understanding how shared state affects your entire app.

🏆 **Bonus Challenge:** Try changing the screen state to different values and see what happens. What occurs when you set it to a value that doesn't match any of your conditions?
```

**Changes:**
- Added goal statement
- Added step subheadings
- Added expected results after key steps
- Streamlined instructions
- Kept bonus challenge
- Improved callout

---

## Variant Comparison Matrix

| Element | Variant A (Minimal) | Variant B (Hybrid) | Variant C (Full) |
|---------|--------------------|--------------------|------------------|
| **Steps** | 1-2 | 3-4 | 5+ |
| **Goal statement** | ✗ | ✓ | ✓ |
| **Step subheadings** | ✗ | ✗ | ✓ |
| **Bold action verbs** | Optional | ✓ | ✓ |
| **Code blocks** | If needed | If needed | ✓ |
| **Expected output** | ✗ | ✗ | ✓ |
| **Expected result** | ✗ | Brief | Detailed |
| **Callout** | ✓ | ✓ | ✓ |
| **Bonus challenge** | ✗ | Optional | Optional |

---

## Decision Tree

```
How many steps?

├─ 1-2 steps
│  └─ Variant A (Minimal)
│     - Paragraph or simple numbered list
│     - Callout only
│     - Example: Relaunch Codespace, GitHub Account
│
├─ 3-4 steps
│  └─ Variant B (Hybrid)
│     - Goal statement
│     - Numbered with bold verbs
│     - Brief verification
│     - Callout
│     - Example: DevTools Install, Codespace (simplified)
│
└─ 5+ steps OR has commands/output
   └─ Variant C (Full)
      - Goal statement
      - Step subheadings
      - Expected results
      - Code blocks
      - Callout
      - Bonus challenge
      - Example: Dev Server, DevTools Explore
```

---

## Recommendations

### Adopt Variant B as Default

**Rationale:**
- Balances structure with brevity
- Works for most configs (3-4 steps)
- Cleaner than current approach
- More structured than industry minimal

### Use Variant A for Simple Tasks

**When:**
- 1-2 obvious steps
- No commands or output
- Minimal verification needed

**Examples:**
- Relaunch Codespace
- Simple account creation

### Reserve Variant C for Complex Tasks

**When:**
- 5+ steps
- Terminal commands with output
- Multiple verification points
- Exploratory/experimental tasks

**Examples:**
- Dev server start/stop
- DevTools exploration
- Multi-step installations

---

## Next Steps

1. Test variants with students (if possible)
2. Evaluate clarity and completeness
3. Choose primary variant
4. Document final pattern
5. Create examples for each variant
