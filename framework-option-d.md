# Option D: Visual Separation Patterns

Exploring different ways to separate ACTION from CONTEXT/TEACHING

---

## Pattern D1: Bullet Indentation (Most Common in Technical Docs)

### Step 3: Decode the URL Encoding

Convert the encoded text (`What%20does%20GHz%20stand%20for%3F`) into readable format.

- **Update** transformQuestion to use the helper function:
  ```javascript
  function transformQuestion(apiQuestion) {
    const question = decodeText(apiQuestion.question);
    const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
    const correctAnswer = decodeText(apiQuestion.correct_answer);
    
    console.log("Decoded data:", { question, incorrectAnswers, correctAnswer });
  }
  ```

- **Test** → You should now see readable text:
  ```javascript
  {
    "question": "What does GHz stand for?",
    "incorrectAnswers": ["Gigahotz", "Gigahetz", "Gigahatz"],
    "correctAnswer": "Gigahertz"
  }
  ```

- **Why this works:** The `map()` method transforms each item in an array. Here, it decodes each incorrect answer.

**Pros:** Clear visual separation, scannable action items
**Cons:** Adds vertical space, bullets might feel like sub-steps

---

## Pattern D2: Blockquote for Context (Used in Some Tutorials)

### Step 3: Decode the URL Encoding

> Convert the encoded text (`What%20does%20GHz%20stand%20for%3F`) into readable format.

**Update** transformQuestion to use the helper function:
```javascript
function transformQuestion(apiQuestion) {
  const question = decodeText(apiQuestion.question);
  const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
  const correctAnswer = decodeText(apiQuestion.correct_answer);
  
  console.log("Decoded data:", { question, incorrectAnswers, correctAnswer });
}
```

**Test** → You should now see readable text:
```javascript
{
  "question": "What does GHz stand for?",
  "incorrectAnswers": ["Gigahotz", "Gigahetz", "Gigahatz"],
  "correctAnswer": "Gigahertz"
}
```

> **Why this works:** The `map()` method transforms each item in an array. Here, it decodes each incorrect answer.

**Pros:** Clear visual distinction, context stands out
**Cons:** Blockquotes might feel like "notes" rather than core content

---

## Pattern D3: Horizontal Rule Separation (Clean Break)

### Step 3: Decode the URL Encoding

Convert the encoded text (`What%20does%20GHz%20stand%20for%3F`) into readable format.

---

**Update** transformQuestion to use the helper function:
```javascript
function transformQuestion(apiQuestion) {
  const question = decodeText(apiQuestion.question);
  const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
  const correctAnswer = decodeText(apiQuestion.correct_answer);
  
  console.log("Decoded data:", { question, incorrectAnswers, correctAnswer });
}
```

**Test** → You should now see readable text:
```javascript
{
  "question": "What does GHz stand for?",
  "incorrectAnswers": ["Gigahotz", "Gigahetz", "Gigahatz"],
  "correctAnswer": "Gigahertz"
}
```

---

The `map()` method transforms each item in an array. Here, it decodes each incorrect answer.

**Pros:** Very clear separation, clean visual breaks
**Cons:** Might feel too segmented, lots of horizontal lines

---

## Pattern D4: Emoji/Icon Markers (Visual Cues)

### Step 3: Decode the URL Encoding

💡 Convert the encoded text (`What%20does%20GHz%20stand%20for%3F`) into readable format.

**Update** transformQuestion to use the helper function:
```javascript
function transformQuestion(apiQuestion) {
  const question = decodeText(apiQuestion.question);
  const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
  const correctAnswer = decodeText(apiQuestion.correct_answer);
  
  console.log("Decoded data:", { question, incorrectAnswers, correctAnswer });
}
```

**Test** → You should now see readable text:
```javascript
{
  "question": "What does GHz stand for?",
  "incorrectAnswers": ["Gigahotz", "Gigahetz", "Gigahatz"],
  "correctAnswer": "Gigahertz"
}
```

🎓 **Why this works:** The `map()` method transforms each item in an array. Here, it decodes each incorrect answer.

**Pros:** Visual cues help scanning, friendly tone
**Cons:** Can feel cluttered if overused

---

## Pattern D5: Nested Structure (Hierarchical)

### Step 3: Decode the URL Encoding

**Context:** Convert the encoded text (`What%20does%20GHz%20stand%20for%3F`) into readable format.

**Action:**
- **Update** transformQuestion to use the helper function:
  ```javascript
  function transformQuestion(apiQuestion) {
    const question = decodeText(apiQuestion.question);
    const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
    const correctAnswer = decodeText(apiQuestion.correct_answer);
    
    console.log("Decoded data:", { question, incorrectAnswers, correctAnswer });
  }
  ```

**Verify:**
- **Test** → You should now see readable text:
  ```javascript
  {
    "question": "What does GHz stand for?",
    "incorrectAnswers": ["Gigahotz", "Gigahetz", "Gigahatz"],
    "correctAnswer": "Gigahertz"
  }
  ```

**Learn:**
- The `map()` method transforms each item in an array. Here, it decodes each incorrect answer.

**Pros:** Very explicit structure, clear roles
**Cons:** Verbose, might feel over-structured for simple steps

---

## Pattern D6: Minimal with Inline Context (Streamlined)

### Step 3: Decode the URL Encoding

**Update** transformQuestion to use the helper function (this converts encoded text like `What%20does%20GHz%20stand%20for%3F` into readable format):

```javascript
function transformQuestion(apiQuestion) {
  const question = decodeText(apiQuestion.question);
  const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
  const correctAnswer = decodeText(apiQuestion.correct_answer);
  
  console.log("Decoded data:", { question, incorrectAnswers, correctAnswer });
}
```

**Test** → You should now see readable text:
```javascript
{
  "question": "What does GHz stand for?",
  "incorrectAnswers": ["Gigahotz", "Gigahetz", "Gigahatz"],
  "correctAnswer": "Gigahertz"
}
```

The `map()` method transforms each item in an array — here, it decodes each incorrect answer.

**Pros:** Compact, context flows naturally
**Cons:** Less visual separation between elements

---

## Pattern D7: Two-Column Concept (Side-by-Side)

### Step 3: Decode the URL Encoding

| **What to Do** | **Why It Matters** |
|----------------|-------------------|
| **Update** transformQuestion to use the helper function:<br><br>```javascript```<br>```function transformQuestion(apiQuestion) {```<br>```  const question = decodeText(apiQuestion.question);```<br>```  const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));```<br>```  const correctAnswer = decodeText(apiQuestion.correct_answer);```<br>```}```<br><br>**Test** → Check console for readable text | Converts encoded text (`What%20does%20GHz%20stand%20for%3F`) into readable format.<br><br>The `map()` method transforms each item in an array. |

**Pros:** Clear separation, parallel information
**Cons:** Doesn't work well in narrow viewports, code in tables is awkward

---

## RECOMMENDATION: Pattern D1 (Bullet Indentation)

### Step 3: Decode the URL Encoding

Convert the encoded text (`What%20does%20GHz%20stand%20for%3F`) into readable format.

- **Update** transformQuestion to use the helper function:
  ```javascript
  function transformQuestion(apiQuestion) {
    const question = decodeText(apiQuestion.question);
    const incorrectAnswers = apiQuestion.incorrect_answers.map(answer => decodeText(answer));
    const correctAnswer = decodeText(apiQuestion.correct_answer);
    
    console.log("Decoded data:", { question, incorrectAnswers, correctAnswer });
  }
  ```

- **Test** → You should now see readable text:
  ```javascript
  {
    "question": "What does GHz stand for?",
    "incorrectAnswers": ["Gigahotz", "Gigahetz", "Gigahatz"],
    "correctAnswer": "Gigahertz"
  }
  ```

The `map()` method transforms each item in an array. Here, it decodes each incorrect answer.

### Why This Works Best:

1. **Clear Visual Hierarchy**
   - Heading = wayfinding + meaning
   - Context paragraph = the "why"
   - Bullets = the "what to do"
   - Teaching moment = the "how it works"

2. **Scannable**
   - Students can quickly find action items (bullets)
   - Context is there when needed but doesn't block action
   - Teaching moments are integrated but not intrusive

3. **Familiar Pattern**
   - Used in technical documentation (MDN, AWS docs, etc.)
   - Matches how developers naturally scan for tasks
   - Bullets signal "do this" without being numbered sub-steps

4. **Flexible**
   - Works for simple steps (one bullet)
   - Works for complex steps (multiple bullets)
   - Teaching can be brief or detailed as needed

5. **Reduces Cognitive Load**
   - Context sets the stage
   - Bullets provide clear action items
   - Teaching reinforces understanding
   - No artificial structure to remember

### Best Practices from Technical Documentation:

- **Microsoft Docs**: Uses bullets for action items within numbered steps
- **MDN Web Docs**: Uses bullets to separate code examples from explanations
- **AWS Documentation**: Uses bullets for multi-part instructions within sections
- **Google Developer Docs**: Uses bullets for action sequences with context paragraphs

The bullet pattern is the industry standard because it balances structure with readability.
