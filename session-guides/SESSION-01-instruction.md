# Session 1 Instructor Guide: Setting Up Your Trivia Game

## Learning Outcomes & Instructional Sequence

### **Pre-Activity Context (5-10 minutes)**
**Instructor introduces key concepts students need to succeed:**

1. **"What we're building"** - Quick demo of the finished trivia game to show the end goal
2. **"React vs. regular websites"** - Brief comparison: "Traditional sites reload entire pages; React updates just the parts that change"
3. **"Your development setup"** - Overview: "Codespaces gives you a complete coding environment in your browser - no downloads needed"
4. **"The magic of live updates"** - Preview: "When you change code, you'll see results instantly without refreshing"

### **Learning Outcomes (Hands-On Practice)**
**By the end of Session 1, students will be able to:**

1. **Launch and navigate a professional development environment** using GitHub Codespaces and VS Code
2. **Start a React development server** and understand the basic development workflow (`npm run dev`)
3. **Navigate the project structure** and understand file organization (`src/`, `public/`, etc.)
4. **Identify the React entry point flow** from `index.html` → `main.jsx` → `App.jsx` → components
5. **Replace React components** and experience Hot Module Replacement (HMR) in action
6. **Distinguish between React apps and vanilla HTML/CSS/JS** through hands-on component swapping

### **Post-Activity Reinforcement (5 minutes)**
**Instructor connects the dots:**
- **"What just happened?"** - Students experienced the React development workflow
- **"Why it matters"** - This setup enables rapid iteration and professional development
- **"What's next"** - Preview Session 2's focus on building reusable components

---

## Slide Deck Outline

### **Slide 1: Welcome to React Development! 🎉**
- **Title:** "Session 1: Setting Up Your Trivia Game"
- **Subtitle:** "From zero to running React app in 30 minutes"
- **Visual:** Screenshot of the finished trivia game

### **Slide 2: What We're Building 🎮**
- **Live Demo:** 2-minute walkthrough of completed trivia game
- **Key Points:**
  - Interactive trivia with multiple zones
  - Smooth animations and instant feedback
  - Professional-looking UI
- **Hook:** "You'll build this step-by-step over 12 sessions"

### **Slide 3: React vs. Regular Websites 🆚**
- **Split Screen Comparison:**
  - **Left:** Traditional website (full page reloads)
  - **Right:** React app (smart updates)
- **Analogy:** "Like editing a Google Doc vs. refreshing email"
- **Key Insight:** "React updates only what changes"

### **Slide 4: Your Cloud Development Setup ☁️**
- **Visual:** GitHub Codespaces interface screenshot
- **Benefits:**
  - No downloads or installations
  - Same setup for everyone
  - Professional VS Code editor
- **Reassurance:** "If you break something, just start fresh!"

### **Slide 4.5: Your Project Structure 🏗️** *(Strategic Placement)*
- **Visual:** Clean project tree diagram
- **Key Focus:** "Just 3 folders matter today: `src/`, `public/`, `session-guides/`"
- **Student Relevance:** "You'll edit files in `src/` and follow guides in `session-guides/`"
- **Reassurance:** "Don't worry about the other folders yet - we'll explore them in future sessions"

### **Slide 5: The Magic of Live Updates ⚡**
- **Demo:** Show HMR in action (change code → instant browser update)
- **Key Point:** "See your changes instantly without refreshing"
- **Student Expectation:** "You'll experience this in 5 minutes"

### **Slide 6: Your Mission Today 🎯**
- **5 Tasks Overview:**
  1. Launch Your Codespace
  2. Start the Development Server
  3. Replace a Component
  4. Update the Page Title
  5. Ask the AI
- **Time Estimate:** "~20 minutes of hands-on work"

### **Slide 7: Let's Code! 🚀**
- **Call to Action:** "Open SESSION-01.md and let's begin!"
- **Support Available:** "Raise your hand if you get stuck"
- **First Step:** "Navigate to the GitHub repo link in your materials"

### **[HANDS-ON WORK HAPPENS HERE - 20 minutes]**

### **Slide 8: What Just Happened? 🤔**
- **Reflection Questions:**
  - "What surprised you about the setup?"
  - "How did the live updates feel?"
  - "What questions do you have?"
- **Key Wins:** Students experienced professional React workflow

### **Slide 9: The Big Picture 🗺️** *(Enhanced with Architecture)*
- **Visual:** React DOM Rendering Flow diagram
- **Narrative:** "Here's what happened when you swapped components..."
- **Connection:** Students just experienced this flow, now they see the theory
- **Key Insight:** "React takes your JSX and creates real HTML in the browser"

### **Slide 10: Next Session Preview 👀**
- **Coming Up:** "Building Reusable Components"
- **Teaser:** "You'll create a custom button that works everywhere"
- **Homework:** "Explore the AI prompts in SESSION-01.md"

### **Slide 10.5: Behind the Scenes ⚙️** *(Optional/Advanced)*
- **Visual:** Codespace Architecture diagram
- **Purpose:** For curious students who ask "How does this all work?"
- **Positioning:** "This is the engine powering your development experience"
- **Note:** "Don't memorize this - just appreciate the complexity that's hidden from you"

---

## Strategic Material Placement

### **Terms & Definitions**
**Location:** `SESSION-01-terms.md` (separate reference document)
**Usage Strategy:**
- **Not in slide deck** - too much information for presentation
- **Reference during hands-on** - students can look up unfamiliar terms
- **Post-session study** - reinforces concepts after experience
- **AI prompt resource** - students can ask AI to explain any term

### **Architectural Diagrams**

#### **Project Structure Diagram**
- **When:** Slide 4.5 (before hands-on work)
- **Purpose:** Helps students navigate during tasks
- **Scope:** Focus only on folders they'll use today
- **Also Include:** In `SESSION-01.md` for reference during hands-on work

#### **React DOM Rendering Flow**
- **When:** Slide 9 (after hands-on experience)
- **Purpose:** Explains what students just experienced
- **Context:** "This is what happened when you swapped components"
- **Also Include:** In `SESSION-01-architecture.md` for deeper study

#### **Codespace Architecture**
- **When:** Slide 10.5 (optional, end of session)
- **Purpose:** Satisfies curious students without overwhelming beginners
- **Context:** "The infrastructure powering your experience"
- **Also Include:** In `SESSION-01-architecture.md` for reference

### **Detailed Instructions**
**Location:** `SESSION-01.md` (step-by-step guide)
**Usage Strategy:**
- **Primary resource** during hands-on work
- **Self-paced** - students work through at their own speed
- **Instructor support** - teacher circulates while students follow guide
- **Includes screenshots** and detailed steps for each task

---

## Timing & Flow

### **Total Session Time: 35 minutes**

| Time | Activity | Materials Used |
|------|----------|----------------|
| 0-10 min | Pre-activity context (slides 1-7) | Slide deck |
| 10-30 min | Hands-on work | `SESSION-01.md` |
| 30-35 min | Reflection & wrap-up (slides 8-10) | Slide deck |

### **Material Access Strategy**
- **Slide deck:** Instructor presentation only
- **SESSION-01.md:** Students' primary working document
- **SESSION-01-terms.md:** Reference lookup during/after session
- **SESSION-01-architecture.md:** Optional deeper study for interested students

---

## Instructional Principles

### **Just-in-Time Learning**
- Give students minimum context needed to succeed
- Introduce theory after hands-on experience
- Avoid information overload in initial presentation

### **Experience Before Explanation**
- Students do the work first, understand theory second
- Architectural diagrams reinforce what they've experienced
- Terms become meaningful through usage, not memorization

### **Scaffolded Complexity**
- Start with essential folders only (src/, public/, session-guides/)
- Introduce full architecture gradually across sessions
- Optional advanced content for curious students

### **Multiple Learning Modalities**
- Visual (diagrams, screenshots)
- Kinesthetic (hands-on coding)
- Auditory (instructor explanation)
- Reference (written guides and terms)

---

## Success Indicators

### **During Session**
- Students successfully launch Codespaces
- Development server starts without issues
- Component swap produces visible change
- Students express "aha moments" about live updates

### **Post-Session**
- Students can navigate project structure
- Students understand React vs. traditional websites
- Students feel confident about development workflow
- Students are excited for next session

### **Red Flags**
- Students overwhelmed by too much theory upfront
- Technical issues preventing hands-on experience
- Students confused about file locations
- Students disengaged during architectural explanations

---

## Instructor Notes

### **Common Student Questions**
- **"Why is this better than regular HTML?"** → Show live update demo
- **"What if I break something?"** → Emphasize Codespace reset capability
- **"Do I need to understand all these folders?"** → Focus on today's essentials
- **"How does this all work?"** → Use optional architecture slide

### **Technical Troubleshooting**
- **Codespace won't load:** Check GitHub login, try incognito mode
- **npm run dev fails:** Check Node version, restart Codespace
- **Component swap doesn't work:** Check import syntax, file paths
- **Browser preview blank:** Check console for errors, restart dev server

### **Differentiation Strategies**
- **Fast finishers:** Direct to AI prompts in SESSION-01.md
- **Struggling students:** Pair with successful peer, focus on core tasks
- **Curious students:** Share SESSION-01-architecture.md for deeper study
- **Visual learners:** Emphasize diagrams and screenshots in materials