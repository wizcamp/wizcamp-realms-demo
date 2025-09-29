# Session 11 — Extending Your Game

Choose Your Adventure 🎯

You've built a complete trivia game and deployed it to the internet — now it's time to make it uniquely yours! Ready to add your personal touch and practice new skills? Let's go!

## Table of Contents

- [Choose Your Own Adventure](#choose-your-own-adventure)
- [GitHub Copilot Workflow](#github-copilot-workflow)
- [Git Workflow](#git-workflow)

<a id="access-your-codespace"></a>

## ☁️ Access Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 10.

<a id="choose-your-own-adventure"></a>

## 🎯 Choose Your Own Adventure

You've reached a major milestone — your game is live! Now it's time to level up by choosing your own path. This session introduces self-directed learning, where you decide what to build next using AI assistance and your growing developer skills.

Choose **up to 4 extensions** to implement — we recommend 2 Starter + 1 Power + 1 Beast, but feel free to mix and match based on your interests.

Use the [GitHub Copilot Workflow](#github-copilot-workflow) to get AI help with implementation, and the [Git Workflow](#git-workflow) to save and deploy your changes.

### 🚀 Starter Mods: Fast Wins

| Extension     | Description          | What You'll Practice |
|---------------|----------------------|----------------------|
| **Custom Fonts** | Replace existing fonts with your choices for game logo, zone labels, and UI elements | Importing Google Fonts, updating component styling, creating visual consistency |
| **Character Swap** | Replace character-1.png with character-2, 3, 4, or 5 from available sprites | Working with image assets, updating component references, testing visual changes |
| **Game Instructions Modal** | Create instructions modal explaining game rules and scoring | Building reusable components, showing/hiding content, creating user-friendly interfaces |

### ⚡ Power Mods: Build Skills

| Extension     | Description          | What You'll Practice |
|---------------|----------------------|----------------------|
| **Visual Progress Indicator** | Replace "Question X of Y" text with colored dots showing progress | Managing component state, transforming arrays into visual elements, styling based on user actions |
| **Color & Font System** | Convert hardcoded colors/fonts in main.css to reusable CSS variables | Organizing stylesheets, creating reusable design tokens, making code easier to maintain |
| **Interactive Sound Effects** | Add audio feedback for quiz interactions using existing useAudio pattern | Using custom hooks, working with browser audio, triggering sounds on user interactions |

### 🦁 Beast Mods: Go Big

| Extension     | Description          | What You'll Practice |
|---------------|----------------------|----------------------|
| **Character Selection Screen** | Add character selection screen before entering game map | Building new screens, managing game-wide state, composing complex interfaces |
| **Animated Character Movement** | Animate character sprite moving between zone positions when completed | Creating smooth animations, coordinating with game state, providing visual feedback |
| **Dark/Light Mode Toggle** | Add dark/light mode toggle affecting colors throughout game | Building theme systems, persisting user preferences, creating toggleable interfaces |

<a id="github-copilot-workflow"></a>

## ⚡ GitHub Copilot Workflow

Use this workflow from Session 9 for each extension:

### How to Use Copilot Chat Effectively

1. Use a Copilot chat command like `/fix`, `/explain`, or `/test`
2. Write a clear, focused prompt describing what you want
3. Review the suggestion Copilot generates
4. Apply the change if it meets your needs
5. Test the update to confirm it works

### Example Prompt

```
/fix Help me replace fonts in my React trivia game. I want "Orbitron" 
for the game logo title, "Roboto" for zone map labels, and "Inter" for 
UI elements. Update fonts.css imports and all fontFamily references.
```

**Good Prompts Include:**

- **Context:** "In my React trivia game..."
- **Specific goal:** "Add a progress indicator that shows..."
- **Constraints:** "Using existing CSS classes and..."
- **Expected behavior:** "When a question is answered correctly..."

<a id="git-workflow"></a>

## 🔄 Git Workflow

Every time you finish an extension, use this Git workflow to save and deploy your changes:

### The Essential Commands

```bash
# 1. Stage your changes (prepare them for committing)
git add .

# 2. Commit your changes (create a permanent snapshot)
git commit -m "feat(extension): add custom fonts to game logo"

# 3. Push your changes (share with the world and trigger deployment)
git push
```

### Commit Message Examples

| Extension Type                   | Example Message                                              |
|----------------------------------|--------------------------------------------------------------|
| **Custom Fonts**                 | `feat(typography): update Google Fonts for game logo`        |
| **Character Swap**               | `feat(character): replace default sprite with archer`        |
| **Visual Progress Indicator**    | `feat(quiz): add visual progress indicator with dots`        |
| **Interactive Sound Effects**    | `feat(audio): add feedback sounds for answers`               |
| **Character Selection Screen**   | `feat(character): add character selection screen`            |
| **Animated Character Movement**  | `feat(animation): animate character movement between zones`  |
| **Dark/Light Mode Toggle**       | `feat(theme): implement dark/light theme system`             |

Your live game will automatically update each time you push changes thanks to the CI/CD pipeline you set up in Session 10.