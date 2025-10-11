# Configuration Pattern: Complete Examples

This document demonstrates all three Configuration Pattern variants using real examples from Session 0.

---

## Variant A: Minimal (1-2 Steps)

### Example 1: Simple Browser Extension

**🔧 Install React DevTools**

**Install** the React DevTools browser extension from [chrome.google.com/webstore](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) or [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

**Verify:** Open DevTools (`F12`) and look for the **Components** and **Profiler** tabs

> **💡 Concept:** React DevTools lets you inspect component state, props, and hierarchy in real-time—essential for debugging React applications.

---

### Example 2: Terminal Setting

**⚙️ Enable Terminal Keybindings**

**Navigate** to File → Preferences → Settings → Features → Terminal → **enable** "Send Keybindings to Shell"

**Verify:** Press `Ctrl+C` in the terminal—it should interrupt running processes instead of copying text

---

### Example 3: With Figure Sub-Variation

**⚙️ Configure GitHub Pages**

**Navigate** to your repository → Settings → Pages → Source → **select** `gh-pages` branch

**Verify:** Your game deploys to `https://USERNAME.github.io/REPO-NAME/`

**Figure 1: GitHub Pages Configuration**
```
Repository Settings
└── Pages
    ├── Source: gh-pages branch
    ├── Folder: / (root)
    └── Custom domain: (optional)
```

> **ℹ️ Note:** Deployment typically takes 2-3 minutes after pushing to the `gh-pages` branch.

---

## Variant B: Hybrid (3-4 Steps) - Recommended Default

### Example 1: Codespaces Setup

**🚀 Launch Your Development Environment**

**Create** your Codespace:

1. **Click** the green **Code** button on your repository
2. **Select** the **Codespaces** tab
3. **Click** "Create codespace on main"
4. **Wait** 2-3 minutes for the environment to build

**Verify:** VS Code opens in your browser with the project files visible in the sidebar

> **💡 Concept:** Codespaces provides a complete development environment in the cloud—no local setup required. Everything from Node.js to VS Code extensions is pre-configured.

---

### Example 2: Development Server

**🎮 Start Your Game**

**Launch** the development server:

1. **Open** the integrated terminal (`` Ctrl+` `` or View → Terminal)
2. **Run** `npm run dev`
3. **Wait** for "Local: http://localhost:5173" to appear
4. **Click** "Open in Browser" when the port notification appears

**Verify:** Your game loads in a new browser tab showing the splash screen

> **⚠️ Warning:** If port 5173 is already in use, Vite will automatically use the next available port (5174, 5175, etc.). Check the terminal output for the actual URL.

---

### Example 3: Git Configuration

**🔧 Configure Git Identity**

**Set** your Git credentials:

1. **Open** the terminal
2. **Run** `git config --global user.name "Your Name"`
3. **Run** `git config --global user.email "your.email@example.com"`
4. **Verify** with `git config --list`

**Expected output:**
```
user.name=Your Name
user.email=your.email@example.com
```

> **ℹ️ Note:** These credentials appear in your commit history, so use your GitHub-associated email for proper attribution.

---

## Variant C: Full (5+ Steps or Commands)

### Example 1: Complete Project Setup

**🏗️ Set Up Your Trivia Game Project**

**Create** and configure your repository:

1. **Navigate** to [github.com/YOUR-ORG/wizcamp-realms-template](https://github.com/YOUR-ORG/wizcamp-realms-template)
2. **Click** "Use this template" → "Create a new repository"
3. **Name** your repository `trivia-quest`
4. **Select** "Public" visibility
5. **Check** "Include all branches" (important for deployment)
6. **Click** "Create repository"
7. **Wait** for GitHub to finish copying the template

**Launch** your development environment:

1. **Click** the green **Code** button
2. **Select** the **Codespaces** tab
3. **Click** "Create codespace on main"
4. **Wait** 2-3 minutes for the build to complete

**Start** the development server:

1. **Open** the terminal (`` Ctrl+` ``)
2. **Run** `npm install` (if dependencies aren't already installed)
3. **Run** `npm run dev`
4. **Click** "Open in Browser" when prompted

**Verify the complete setup:**

1. **Check** that your game loads in the browser
2. **Open** React DevTools (`F12` → Components tab)
3. **Confirm** you see the component tree
4. **Test** hot module reloading by editing `src/App.jsx`
5. **Verify** changes appear instantly without refresh

> **✅ Success Check:**
>
> - [ ] Repository created with all branches
> - [ ] Codespace running without errors
> - [ ] Development server accessible in browser
> - [ ] React DevTools showing component hierarchy
> - [ ] Hot reloading working on file changes

> **💡 Concept:** This workflow—template → repository → Codespace → dev server—is the foundation of modern web development. You'll repeat variations of this pattern throughout your career.

---

### Example 2: Deployment Pipeline

**🚀 Deploy Your Game to GitHub Pages**

**Configure** GitHub Actions:

1. **Navigate** to your repository on GitHub
2. **Click** the **Actions** tab
3. **Find** "Deploy to GitHub Pages" workflow
4. **Click** "Enable workflow" if prompted
5. **Verify** the workflow file exists at `.github/workflows/deploy.yml`

**Enable** GitHub Pages:

1. **Navigate** to Settings → Pages
2. **Source** → select `gh-pages` branch
3. **Folder** → select `/ (root)`
4. **Click** "Save"
5. **Note** the deployment URL: `https://USERNAME.github.io/REPO-NAME/`

**Trigger** your first deployment:

1. **Make** a small change to `README.md`
2. **Commit** with message "Test deployment"
3. **Push** to the `main` branch
4. **Navigate** to Actions tab
5. **Watch** the workflow run (takes 2-3 minutes)
6. **Check** for green checkmark indicating success

**Verify the deployment:**

1. **Visit** your deployment URL
2. **Confirm** your game loads correctly
3. **Test** all game functionality
4. **Check** that assets (images, audio) load properly
5. **Verify** routing works if you refresh the page

**Expected workflow output:**
```
Run actions/checkout@v3
Run actions/setup-node@v3
Run npm ci
Run npm run build
Run peaceiris/actions-gh-pages@v3
✓ Deploy to GitHub Pages completed
```

> **⚠️ Warning:** The first deployment can take 5-10 minutes. Subsequent deployments are faster. If deployment fails, check the Actions tab for error logs.

> **🎯 Pro Tip:** Add a deployment badge to your README to show build status: `![Deploy](https://github.com/USERNAME/REPO/actions/workflows/deploy.yml/badge.svg)`

---

## Pattern Selection Guide

### Use Variant A (Minimal) when:
- Single action or setting change
- No command output to verify
- Self-explanatory task
- Optional: Add figure for visual reinforcement

**Examples:** Browser extension install, single setting toggle, simple navigation

---

### Use Variant B (Hybrid) when:
- 3-4 sequential steps
- Moderate complexity
- Clear verification point
- Standard development task

**Examples:** Starting dev server, running tests, basic Git operations, installing packages

---

### Use Variant C (Full) when:
- 5+ steps or multiple commands
- Complex multi-stage process
- Multiple verification points needed
- Critical setup that must succeed

**Examples:** Complete project setup, deployment pipeline, database configuration, multi-service integration

---

## Key Principles Demonstrated

1. **Variant A** = Minimal friction for simple tasks
2. **Variant B** = Balanced guidance for standard workflows (recommended default)
3. **Variant C** = Comprehensive support for complex operations
4. **Callouts** teach concepts without blocking action
5. **Verification** matches task complexity
6. **Formatting** maintains consistency across variants

---

**Framework Version:** 1.2  
**Last Updated:** 2025
