# Student Instructions - Wizcamp Realms: Legends of Trivia

Welcome to your React development journey! You'll be building an interactive trivia game over 12 sessions.

## 🚀 Getting Started

### Step 1: Launch Your Codespace
1. **Navigate to**: `https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=wizcamp/wizcamp-realms-demo`
2. **Click**: "Create new codespace"
3. **Wait**: For Codespace to build (Dark Dracula theme loads automatically)
4. **Run**: `npm run dev` in the terminal
5. **Port Notification**: When you see "Your application running on port 5173 is available" → Click **"Open in Browser"** (NOT "Make Public") or visit http://localhost:5173/
6. **Follow the on-screen instructions** to swap `<StartHere />` for `<SplashScreen />` and experience hot module reloading
7. **Optional**: Configure terminal settings to send keybindings to shell
8. **Optional**: Allow sharing of clipboard when prompted

### Step 2: Understand the Project Structure
- `src/App.jsx` - Main app component (starts with placeholder)
- `src/components/` - Individual UI pieces
- `src/context/GameContext.jsx` - Shared game state
- `src/data/zones.js` - Game configuration
- `public/` - Images, audio, and other assets

## 📅 Daily Learning Path

### Day 1: Welcome to React
- **Goal**: Replace StartHere with SplashScreen component
- **Key Concept**: Component composition and hot module reloading
- **Task**: Follow the on-screen instructions to swap `<StartHere />` for `<SplashScreen />` in App.jsx

### Day 2: Reusable Components  
- **Goal**: Create GameButton component
- **Key Concept**: Props and reusability
- **Task**: Build GameButton and replace SplashScreen buttons

### Day 3: Shared State
- **Goal**: Add screen navigation
- **Key Concept**: Context and state management
- **Task**: Use setScreen to navigate between SPLASH and PLAYING

### Day 4: Data Configuration
- **Goal**: Design your zone themes
- **Key Concept**: Data-driven design
- **Task**: Configure zones.js with creative themes and API categories

### Day 5: External APIs
- **Goal**: Fetch trivia questions
- **Key Concept**: Async JavaScript and fetch()
- **Task**: Complete fetchQuestions function in api.js

### Day 6: Browser Storage
- **Goal**: Add question caching
- **Key Concept**: localStorage and performance
- **Task**: Cache API responses for better user experience

### Day 7: Complex Components
- **Goal**: Build quiz interface
- **Key Concept**: Component composition
- **Task**: Create QuizModal with questions and answers

### Day 8: Game Logic
- **Goal**: Add scoring and victory
- **Key Concept**: State management
- **Task**: Implement scoring system and GameOver screen

### Day 9: Custom Hooks
- **Goal**: Add background music
- **Key Concept**: Custom hooks and browser APIs
- **Task**: Build useAudio hook for music control

### Day 10: Deployment
- **Goal**: Publish your game
- **Key Concept**: Git workflow and CI/CD
- **Task**: Deploy to GitHub Pages

### Day 11: Extensions
- **Goal**: Add personal features
- **Key Concept**: Self-directed learning
- **Task**: Choose from Starter/Power/Beast mods

### Day 12: Showcase
- **Goal**: Present your work
- **Key Concept**: Technical communication
- **Task**: Demo your game and reflect on learning

## 🛠️ Development Tips

### Essential Commands
```bash
npm run dev          # Start development server (use this most!)
npm run format       # Clean up your code formatting
```

### 💡 Codespaces Tips

**Terminal Keybindings**: If you see a message about "keybindings don't go to the terminal," click "Configure Terminal Settings" and enable "Send Keybindings to Shell" for smoother terminal experience.

**Everything Configured**: Dark Dracula theme, extensions, and formatting are pre-configured - no manual setup needed!

### React DevTools
1. Install React DevTools browser extension
2. Use Components tab to inspect state
3. Great for debugging Context and props

### Getting Help
- Read the TODO comments in each file
- Use console.log() to debug
- Ask questions during sessions
- Experiment and break things (that's how you learn!)

## 🎯 Success Metrics

By the end, you'll have:
- ✅ A fully functional trivia game
- ✅ Understanding of React fundamentals
- ✅ Experience with external APIs
- ✅ A deployed project you can share
- ✅ Confidence to continue learning React

## 🚨 Important Notes

- **Don't skip the TODOs** - They guide your learning progression
- **Commit often** - Save your progress with meaningful messages
- **Ask questions** - No question is too small
- **Codespace Issues?** - Try rebuilding your container: `Ctrl+Shift+P` → "Codespaces: Rebuild Container"
- **Have fun** - You're building something awesome!

---

Ready to start your React journey? Let's build something amazing! 🚀