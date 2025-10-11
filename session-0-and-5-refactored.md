# Session 0 — Getting Ready for Camp (REFACTORED)

## 🏕️ Pre-Camp Orientation

[Course Name] lets you experience the world from a Junior Developer's perspective, building a browser-based trivia adventure game. Through hands-on coding with React, Node.js, GitHub Codespaces, and Copilot, you'll learn to think and work like a developer.

## Table of Contents

- [Introducing Yourself](#introducing-yourself)
- [Planning Your Schedule](#planning-your-schedule)
- [Setting Up Your GitHub Account](#setting-up-your-github-account)
- [Connecting with Your Instructor](#connecting-with-your-instructor)

<a id="introducing-yourself"></a>

## 👋 Introducing Yourself

1. **Navigate** to introductions section in Wizcamp Portal
2. **Click** "New Introduction"
3. **Share** your name, coding experience, what excites you, and one fun fact
4. **Read** and respond to other introductions

<a id="planning-your-schedule"></a>

## 📅 Planning Your Schedule

1. **Navigate** to class calendar in Wizcamp Portal
2. **RSVP** for sessions you plan to attend

<a id="setting-up-your-github-account"></a>

## 🐙 Setting Up Your GitHub Account

GitHub is where developers store and share code worldwide. You'll use it throughout the course for your coding environment and AI assistant.

1. **Create** account at github.com → [GitHub Signup Guide](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github#signing-up-for-a-new-personal-account)
2. **Use** existing account if you have one (ensure you have access)

<a id="connecting-with-your-instructor"></a>

## 📨 Connecting with Your Instructor

1. **DM** Mr. Colestock in Wizcamp Portal
2. **Include** full name, email, and GitHub username

This adds you to the Wizcamp GitHub Organization, giving you access to Codespaces and GitHub Copilot Pro.

## 🎉 You're Ready for Camp!

You've completed all pre-camp requirements. See you in Session 1!

---

# Session 5 — Generating Dynamic Questions (REFACTORED)

Connecting to Real APIs 🌐

## Table of Contents

- [Understanding APIs and External Data](#understanding-apis-and-external-data)
- [Exploring the OpenTrivia Database](#exploring-the-opentrivia-database)
- [Building the Fetch Foundation](#building-the-fetch-foundation)
- [Transforming API Data](#transforming-api-data)
- [Testing Your API Integration](#testing-your-api-integration)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 4.

<a id="understanding-apis-and-external-data"></a>

## 🌐 Understanding APIs and External Data

APIs (Application Programming Interfaces) are like restaurant menus — they tell you what data is available, how to request it, and what format you'll receive, but they're not the data itself.

APIs are the backbone of modern web applications. Your trivia game will use the OpenTrivia Database API to fetch real questions, making your game dynamic with fresh content.

### 🏆 Bonus Challenge

Think of three apps you use daily — can you identify what external data they might fetch through APIs?

<a id="exploring-the-opentrivia-database"></a>

## 🔍 Exploring the OpenTrivia Database

Let's see what real API data looks like.

1. **Visit** [https://opentdb.com/api.php?amount=3&category=18&type=multiple&difficulty=easy&encode=url3986](https://opentdb.com/api.php?amount=3&category=18&type=multiple&difficulty=easy&encode=url3986)
2. **Notice** the JSON structure with `question`, `correct_answer`, and `incorrect_answers`
3. **Observe** URL encoding (`%20`, `%3A`) for safe internet transmission

JSON (JavaScript Object Notation) is the universal language of APIs. Your job is transforming this raw data into your game's format.

**📚 API Documentation:** [https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)

### Data Transformation Journey

**Before (API):**
```json
{
  "question": "What%20does%20GHz%20stand%20for%3F",
  "correct_answer": "Gigahertz",
  "incorrect_answers": ["Gigahotz", "Gigahetz", "Gigahatz"]
}
```

**After (Game):**
```json
{
  "question": "What does GHz stand for?",
  "answers": ["Gigahotz", "Gigahertz", "Gigahetz", "Gigahatz"],
  "correct": 1
}
```

<a id="building-the-fetch-foundation"></a>

## ⚠️ HMR Note

Changes to `trivia.js` may return game to splash screen or show "useGame must be used within GameProvider" error.

**Fix:** Refresh browser (Ctrl+R), click "Start Game", click zone to test.

**Pro tip:** Make several changes, then refresh once to test together.

## 🔧 Building the Fetch Foundation

### Phase 1: Basic Fetch

1. **Open** `src/services/trivia.js`
2. **Replace** alert with fetch logic:
   ```javascript
   try {
     console.log("Fetching from:", url);
     const response = await fetch(url);
     const data = await response.json();
     console.log("Raw API data:", data);
   } catch (error) {
     console.log("Failed to fetch questions:", error);
     return [];
   }
   ```
3. **Test** by opening DevTools (F12) → Start Game → Click zone → Check Console and Network tabs

### Phase 2: Data Validation

4. **Add** validation after getting data:
   ```javascript
   if (!data.results || data.results.length === 0) {
     console.log("No questions received from API");
     return [];
   }
   ```

Error handling and data validation are crucial with external APIs. Networks fail, APIs go down, responses can be empty — developers always plan for these scenarios.

<a id="transforming-api-data"></a>

## 🔄 Transforming API Data

Build the transformation function incrementally, testing after each phase.

### Phase 1: Test Transformation

1. **Add** test logging after validation:
   ```javascript
   const firstQuestion = data.results[0];
   console.log("Before transform:", firstQuestion);
   
   const transformed = transformQuestion(firstQuestion);
   console.log("After transform:", transformed);
   ```
   **Test** → See `undefined` in console

### Phase 2: Extract Properties

2. **Update** transformQuestion function:
   ```javascript
   function transformQuestion(apiQuestion) {
     const question = apiQuestion.question;
     const incorrectAnswers = apiQuestion.incorrect_answers;
     const correctAnswer = apiQuestion.correct_answer;
     
     console.log("Extracted properties:", { question, incorrectAnswers, correctAnswer });
   }
   ```
   **Test** → See extracted properties

### Phase 3: Decode Text

3. **Add** decoding with helper functions:
   ```javascript
   function transformQuestion(apiQuestion) {
     const question = decodeText(apiQuestion.question);
     const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
     const correctAnswer = decodeText(apiQuestion.correct_answer);
     
     console.log("Decoded data:", { question, incorrectAnswers, correctAnswer });
   }
   ```
   **Test** → See formatted data like `"What does GHz stand for?"`

### Phase 4: Shuffle and Find Index

4. **Add** shuffling logic:
   ```javascript
   function transformQuestion(apiQuestion) {
     const question = decodeText(apiQuestion.question);
     const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
     const correctAnswer = decodeText(apiQuestion.correct_answer);
     const shuffledAnswers = shuffleAnswers(correctAnswer, incorrectAnswers);
     const correctIndex = shuffledAnswers.indexOf(correctAnswer);
     
     console.log("Shuffled answers:", shuffledAnswers);
     console.log("Correct answer is at index:", correctIndex);
   }
   ```
   **Test** → See shuffled answers array

### Phase 5: Return Game Object

5. **Complete** transformation:
   ```javascript
   function transformQuestion(apiQuestion) {
     const question = decodeText(apiQuestion.question);
     const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
     const correctAnswer = decodeText(apiQuestion.correct_answer);
     const shuffledAnswers = shuffleAnswers(correctAnswer, incorrectAnswers);
     const correctIndex = shuffledAnswers.indexOf(correctAnswer);
   
     return {
       question: question,
       answers: shuffledAnswers,
       correct: correctIndex
     };
   }
   ```
   **Test** → See complete game object

### Phase 6: Integration

6. **Replace** test logging with production code:
   ```javascript
   const questions = data.results.map(apiQuestion => transformQuestion(apiQuestion));
   console.log("All transformed questions:", questions);
   return questions;
   ```
   **Test** → See array of formatted questions

Data transformation is core to web development. APIs rarely return data in your exact format. The `map()` method transforms arrays, and helper functions keep code clean and reusable.

<a id="testing-your-api-integration"></a>

## 🧪 Testing Your API Integration

### Clean Up Code

1. **Remove** console logs from functions:
   ```javascript
   export async function fetchQuestions(zoneId, count = null) {
     const zone = getZoneById(zoneId);
     if (!zone) return [];
   
     const questionCount = count || zone.questionCount;
     const url = buildApiUrl(zone, questionCount);
   
     try {
       const response = await fetch(url);
       const data = await response.json();
   
       if (!data.results || data.results.length === 0) {
         return [];
       }
   
       const questions = data.results.map(apiQuestion => transformQuestion(apiQuestion));
       return questions;
   
     } catch (error) {
       console.log("Failed to fetch questions:", error);
       return [];
     }
   }
   ```

### Verify Complete Flow

2. **Test** complete integration:
   - Game resets to splash
   - **Navigate** to game → Click "Start Game"
   - **Click** different zones → Test various categories/difficulties
   - **Open** React DevTools → Components → GameProvider
   - **Examine** `currentQuestions` state → Watch it populate

You've built a complete API integration that fetches real data, transforms it, and feeds it into your game's state management — the foundation for your quiz functionality.

### Complete Data Flow

```text
User clicks zone
  ↓
GameMap handleZoneClick
  ↓
GameContext loadQuestionsForZone
  ↓
trivia.js fetchQuestions
  ↓
buildApiUrl helper
  ↓
fetch from OpenTrivia DB
  ↓
response.json parsing
  ↓
data.results.map transformation
  ↓
transformQuestion for each item
  ↓
decodeText + shuffleAnswers helpers
  ↓
Formatted game objects returned
  ↓
GameContext updates currentQuestions state
  ↓
React re-renders with new data
```

<a id="essential-terms"></a>

## 📚 Essential Terms

| Term | Definition | Why it matters |
|------|------------|----------------|
| 🌐 API | Rules and protocols for software communication | Your game uses OpenTrivia Database API to fetch real questions |
| 📋 JSON | JavaScript Object Notation — text format for structured data | OpenTrivia returns JSON that your `transformQuestion` converts |
| 📨 HTTP request | Message sent to server requesting data | Each zone click triggers HTTP request with zone parameters |
| 📡 Fetch API | Modern JavaScript interface for HTTP requests | Your `fetchQuestions` uses `fetch` to request trivia data |
| 🔐 URL encoding | Converting characters for safe internet transmission | Question text comes URL-encoded — `decodeText` makes it readable |
| ⏰ asynchronous programming | Code execution that doesn't block while waiting | Game stays responsive while fetching questions |
| 🔄 async/await | JavaScript syntax for readable asynchronous code | `fetchQuestions` uses `async/await` for step-by-step API handling |
| 🤝 promise | Object representing eventual completion/failure of async operation | Every `fetch` returns promise — game gets questions or handles error |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Generating Dynamic Questions

- **What makes APIs so important in modern web development?**
- **Why do APIs often return data in formats that need transformation?**
- **What are the benefits of separating data fetching from data transformation?**
- **How does the Fetch API handle network errors and what should developers do about them?**
- **How do helper functions like `decodeText` and `shuffleAnswers` improve code quality?**
- **How does the return keyword work in JavaScript functions?**
- **What is functional programming?**
