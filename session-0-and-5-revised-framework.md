# Session 0 — Getting Ready for Camp (REVISED FRAMEWORK)

## 🏕️ Pre-Camp Orientation

[Course Name] lets you experience the world from a Junior Developer's perspective, building a browser-based trivia adventure game.

## Table of Contents

- [Introducing Yourself](#introducing-yourself)
- [Planning Your Schedule](#planning-your-schedule)
- [Setting Up Your GitHub Account](#setting-up-your-github-account)
- [Connecting with Your Instructor](#connecting-with-your-instructor)

<a id="introducing-yourself"></a>

## 👋 Introducing Yourself

**Navigate** to Wizcamp Portal introductions → **Click** "New Introduction" → **Share** your name, coding experience, what excites you, and one fun fact → **Read** and respond to others

<a id="planning-your-schedule"></a>

## 📅 Planning Your Schedule

**Navigate** to class calendar → **RSVP** for sessions you'll attend

<a id="setting-up-your-github-account"></a>

## 🐙 Setting Up Your GitHub Account

GitHub is where developers store and share code worldwide.

**Create** account at github.com ([Signup Guide](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github#signing-up-for-a-new-personal-account)) or **use** existing account

<a id="connecting-with-your-instructor"></a>

## 📨 Connecting with Your Instructor

**DM** Mr. Colestock in Wizcamp Portal → **Include** full name, email, and GitHub username

This adds you to the Wizcamp GitHub Organization for Codespaces and Copilot access.

## 🎉 You're Ready for Camp!

See you in Session 1!

---

# Session 5 — Generating Dynamic Questions (REVISED FRAMEWORK)

Connecting to Real APIs 🌐

## Table of Contents

- [Understanding APIs](#understanding-apis)
- [Exploring OpenTrivia Database](#exploring-opentrivia-database)
- [Building the Fetch Foundation](#building-the-fetch-foundation)
- [Transforming API Data](#transforming-api-data)
- [Testing Your Integration](#testing-your-integration)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="accessing-your-codespace"></a>

## ☁️ Accessing Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 4.

<a id="understanding-apis"></a>

## 🌐 Understanding APIs

APIs (Application Programming Interfaces) are like restaurant menus — they tell you what data is available and how to request it, but they're not the data itself.

Your trivia game will use the OpenTrivia Database API to fetch real questions, making your game dynamic with fresh content.

### 🏆 Bonus Challenge

Think of three apps you use daily — what external data might they fetch through APIs?

<a id="exploring-opentrivia-database"></a>

## 🔍 Exploring OpenTrivia Database

**Visit** [https://opentdb.com/api.php?amount=3&category=18&type=multiple&difficulty=easy&encode=url3986](https://opentdb.com/api.php?amount=3&category=18&type=multiple&difficulty=easy&encode=url3986) → **Notice** JSON structure with `question`, `correct_answer`, `incorrect_answers` → **Observe** URL encoding (`%20`, `%3A`)

JSON is the universal language of APIs. Your job is transforming this raw data into your game's format.

**📚 Full Documentation:** [https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)

### Transformation Journey

**API Format:**
```json
{
  "question": "What%20does%20GHz%20stand%20for%3F",
  "correct_answer": "Gigahertz",
  "incorrect_answers": ["Gigahotz", "Gigahetz", "Gigahatz"]
}
```

**Game Format:**
```json
{
  "question": "What does GHz stand for?",
  "answers": ["Gigahotz", "Gigahertz", "Gigahetz", "Gigahatz"],
  "correct": 1
}
```

<a id="building-the-fetch-foundation"></a>

## ⚠️ HMR Note

Changes to `trivia.js` may reset game to splash screen or show provider errors.

**Fix:** Refresh browser (Ctrl+R) → Click "Start Game" → Click zone to test

**Pro tip:** Make several changes, then refresh once

## 🔧 Building the Fetch Foundation

### Add Basic Fetch

- **Open** `src/services/trivia.js`
- **Replace** alert with:
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
- **Test:** Open DevTools (F12) → Start Game → Click zone → Check Console and Network tabs

### Add Validation

- **Add** after getting data:
  ```javascript
  if (!data.results || data.results.length === 0) {
    console.log("No questions received from API");
    return [];
  }
  ```

Error handling and validation are crucial with external APIs. Networks fail, APIs go down, responses can be empty — developers always plan for these scenarios.

<a id="transforming-api-data"></a>

## 🔄 Transforming API Data

Build the transformation incrementally, testing after each phase.

### Phase 1: Extract Properties

- **Add** in transformQuestion function:
  ```javascript
  const question = apiQuestion.question;
  const incorrectAnswers = apiQuestion.incorrect_answers;
  const correctAnswer = apiQuestion.correct_answer;
  
  console.log("Extracted:", { question, incorrectAnswers, correctAnswer });
  ```
- **Test** → See extracted properties in console

### Phase 2: Decode Text

- **Update** to use helper functions:
  ```javascript
  const question = decodeText(apiQuestion.question);
  const incorrectAnswers = apiQuestion.incorrect_answers.map(decodeText);
  const correctAnswer = decodeText(apiQuestion.correct_answer);
  
  console.log("Decoded:", { question, incorrectAnswers, correctAnswer });
  ```
- **Test** → See formatted text: `"What does GHz stand for?"`

### Phase 3: Shuffle and Return

- **Add** shuffling and return object:
  ```javascript
  const shuffledAnswers = shuffleAnswers(correctAnswer, incorrectAnswers);
  const correctIndex = shuffledAnswers.indexOf(correctAnswer);
  
  return {
    question: question,
    answers: shuffledAnswers,
    correct: correctIndex
  };
  ```
- **Test** → See complete game object with shuffled answers

### Phase 4: Integrate

- **Replace** test logging in fetchQuestions:
  ```javascript
  const questions = data.results.map(apiQuestion => transformQuestion(apiQuestion));
  return questions;
  ```
- **Test** → Click zone, see array of formatted questions

Data transformation is core to web development. APIs rarely return data in your exact format. The `map()` method transforms arrays, and helper functions keep code clean and reusable.

<a id="testing-your-integration"></a>

## 🧪 Testing Your Integration

### Clean Up

- **Remove** console logs from functions (keep error logging)
- **Final code** should look like:
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

- **Navigate** to game → Click "Start Game"
- **Click** different zones → Test various categories/difficulties
- **Open** React DevTools → Components → GameProvider
- **Examine** `currentQuestions` state → Watch it populate with transformed questions

You've built a complete API integration that fetches real data, transforms it, and feeds it into your game's state management.

### Data Flow

```text
User clicks zone
  ↓
GameMap handleZoneClick
  ↓
GameContext loadQuestionsForZone
  ↓
trivia.js fetchQuestions
  ↓
fetch from OpenTrivia DB
  ↓
transformQuestion for each result
  ↓
GameContext updates currentQuestions
  ↓
React re-renders with new data
```

<a id="essential-terms"></a>

## 📚 Essential Terms

| Term | Definition | Why it matters |
|------|------------|----------------|
| 🌐 API | Rules for software communication | Fetches real questions from OpenTrivia Database |
| 📋 JSON | Text format for structured data | OpenTrivia returns JSON you transform to game format |
| 📨 HTTP request | Message requesting data from server | Each zone click triggers request with zone parameters |
| 📡 Fetch API | JavaScript interface for HTTP requests | Your `fetchQuestions` uses `fetch` to request data |
| 🔐 URL encoding | Safe character format for internet | Question text comes encoded — `decodeText` makes readable |
| ⏰ async/await | Readable syntax for asynchronous code | `fetchQuestions` uses `async/await` for step-by-step handling |
| 🤝 promise | Object representing eventual async completion | Every `fetch` returns promise — gets questions or handles error |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Generating Dynamic Questions

- **What makes APIs so important in modern web development?**
- **Why do APIs often return data in formats that need transformation?**
- **What are the benefits of separating data fetching from data transformation?**
- **How does the Fetch API handle network errors?**
- **How do helper functions like `decodeText` and `shuffleAnswers` improve code quality?**
- **What is functional programming?**
