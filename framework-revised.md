# Revised Instructional Framework

## Core Principle: Structure Matches Complexity

**Numbering is cognitive overhead. Use it only when sequence matters or steps exceed working memory (5-7 items).**

---

## **Pattern 1: Micro-Tasks** (1-3 actions)
*For simple, obvious sequences*

**Structure:**
```
## [Action] + [Outcome]

[Optional: One sentence context]

**[Action]** [target] → **[Action]** [target] → **[Action]** [target]

[Optional: Single insight callout]
```

**Example:**
```markdown
## 📅 Planning Your Schedule

**Navigate** to class calendar → **RSVP** for sessions you'll attend
```

**When to use:**
- Account setup
- Navigation tasks
- Simple configurations
- Obvious sequences

---

## **Pattern 2: Simple Procedures** (4-7 actions)
*For straightforward tasks requiring attention*

**Structure:**
```
## [Action] + [Outcome]

[1-2 sentence context]

- **[Action]** [target]
- **[Action]** [target]
- **[Action]** [target]
- **[Action]** [target]

[Optional: Insight callout]
```

**Example:**
```markdown
## 🔧 Launching Your Codespace

- **Navigate** to github.com and log in
- **Visit** github.com/wizcamp/wizcamp-realms-demo
- **Click** Use this template → Open in codespace
- **Wait** for VS Code editor to appear
- **Verify** project files appear in left sidebar
```

**When to use:**
- Setup procedures
- Installation steps
- File operations
- Linear workflows

**Note:** Use bullets, not numbers. Sequence is clear from order.

---

## **Pattern 3: Grouped Procedures** (8-12 actions)
*For multi-step tasks with logical groupings*

**Structure:**
```
## [Action] + [Outcome]

[2-3 sentence context]

### [Sub-task 1]

- **[Action]** [target]
- **[Action]** [target]
- **Test** by [verification] → [expected result]

### [Sub-task 2]

- **[Action]** [target]
- **[Action]** [target]
- **Test** by [verification] → [expected result]

[Callout: Key concept]
```

**Example:**
```markdown
## 🧩 Creating Your First Component

### Build the Component

- **Create** `src/components/GameButton.jsx`
- **Add** component structure:
  ```javascript
  export default function GameButton() {
    return <button>Start Adventure</button>;
  }
  ```

### Integrate into App

- **Open** `src/components/SplashScreen.jsx`
- **Import** at top: `import GameButton from "./GameButton";`
- **Add** `<GameButton />` inside `div.splash-buttons`
- **Test** by running `npm run dev` → custom button appears
```

**When to use:**
- Component creation
- Feature implementation
- Multi-file changes
- Related action groups

**Note:** Still bullets. Sub-headings provide structure without numbering overhead.

---

## **Pattern 4: Iterative Development** (Complex, multi-phase)
*For building features incrementally with testing*

**Structure:**
```
## [Action] + [Outcome]

[2-3 sentence context explaining iterative approach]

### Phase 1: [Foundation Name]

- **[Action]** [target]
  ```code
  [example]
  ```
- **Test** → [expected result]

### Phase 2: [Enhancement Name]

- **[Action]** [target]
- **[Action]** [target]
- **Test** → [expected result]

### Phase 3: [Integration Name]

- **[Action]** [target]
- **Test complete flow:**
  - [Scenario A] → [result]
  - [Scenario B] → [result]

[Callout: Big picture explanation]
```

**Example:**
```markdown
## 🔄 Transforming API Data

Build the transformation incrementally, testing after each phase.

### Phase 1: Extract Properties

- **Update** transformQuestion function:
  ```javascript
  function transformQuestion(apiQuestion) {
    const question = apiQuestion.question;
    const incorrectAnswers = apiQuestion.incorrect_answers;
    const correctAnswer = apiQuestion.correct_answer;
    
    console.log("Extracted:", { question, incorrectAnswers, correctAnswer });
  }
  ```
- **Test** → See extracted properties in console

### Phase 2: Decode Text

- **Add** decoding with map:
  ```javascript
  const question = decodeText(apiQuestion.question);
  const incorrectAnswers = apiQuestion.incorrect_answers.map(decodeText);
  const correctAnswer = decodeText(apiQuestion.correct_answer);
  ```
- **Test** → See formatted text like "What does GHz stand for?"

### Phase 3: Complete Transformation

- **Add** shuffling and return object:
  ```javascript
  const shuffledAnswers = shuffleAnswers(correctAnswer, incorrectAnswers);
  const correctIndex = shuffledAnswers.indexOf(correctAnswer);
  
  return { question, answers: shuffledAnswers, correct: correctIndex };
  ```
- **Test** → See complete game object with shuffled answers

Data transformation is core to web development. The map() method transforms arrays, and helper functions keep code clean.
```

**When to use:**
- API integration
- Complex state management
- Multi-step transformations
- Debugging workflows

**Note:** Phases provide structure. Bullets within phases avoid numbering fatigue.

---

## **Pattern 5: Solo Challenges** (Independent work)
*For learner-driven implementation*

**Structure:**
```
## 🎖️ Solo Mission: [Challenge Name]

[2-3 sentences: what they'll build and why]

### Part 1: [Foundation]

- **[Action]** [target]
- **[Action]** [target]
- **Test** → [expected result]

### Part 2: [Enhancement]

- **[Action]** [target]
- **Test** → [expected result]

### Testing Tips

- **[Approach 1]** by [method]
- **[Approach 2]** by [method]

### Requirements Checklist

Your completed [feature] must:
- [ ] [Requirement 1]
- [ ] [Requirement 2]

### Reference Files

- **[File]**: [What to reference]
```

**When to use:**
- Independent challenges
- Synthesis activities
- Extension projects

**Note:** Parts instead of phases. Checklist for self-assessment.

---

## **Numbering Decision Tree**

```
Is sequence critical AND more than 7 steps?
├─ YES → Use numbered list (rare)
└─ NO → Use bullets

Are there logical groupings?
├─ YES → Use sub-headings with bullets
└─ NO → Use flat bullet list

Is it iterative/phased work?
├─ YES → Use "Phase N" headings with bullets
└─ NO → Use bullets
```

---

## **Testing Patterns**

### Inline Testing (Simple)
```markdown
- **Test** by [action] → [expected result]
```

### Grouped Testing (Moderate)
```markdown
- **Test:**
  - [Action A] → [result]
  - [Action B] → [result]
```

### Comprehensive Testing (Complex)
```markdown
### Testing Your [Feature]

- **[Scenario 1]** by [method] → [expected result]
- **[Scenario 2]** by [method] → [expected result]
```

---

## **Callout Box Guidelines**

**Use sparingly (1 per major section max)**

**When to use:**
- After introducing new concept
- To explain "why" behind technical decision
- To connect to broader patterns
- After complex implementation

**When NOT to use:**
- For every step
- For obvious information
- As step-by-step commentary

---

## **Examples: Before & After**

### Before (Cognitive Overload)
```markdown
## Building the Component

1. Create the file
2. Add imports
3. Write function
4. Export default
5. Open parent file
6. Import component
7. Add to JSX
8. Test in browser
```

### After (Appropriate Structure)
```markdown
## Building the Component

### Create Component

- **Create** `GameButton.jsx`
- **Add** function:
  ```javascript
  export default function GameButton() {
    return <button>Start</button>;
  }
  ```

### Integrate

- **Import** into SplashScreen: `import GameButton from "./GameButton";`
- **Add** `<GameButton />` to JSX
- **Test** → Button appears
```

---

## **Key Principles**

1. **Bullets are default** - Numbers only when absolutely necessary
2. **Sub-headings group** - Provide structure without numbering
3. **Phases for iteration** - Clear progression without step fatigue
4. **Test after chunks** - Not after every single action
5. **Callouts are rare** - One per major concept
6. **Structure matches complexity** - Simple tasks stay simple

This framework reduces cognitive load by matching instructional structure to actual task complexity.
