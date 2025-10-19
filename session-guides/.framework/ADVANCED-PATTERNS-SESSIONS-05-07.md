# Advanced Code Scaffolding Patterns (Sessions 5-7)

## Overview

As sessions progress and complexity increases, the code scaffolding patterns evolve to handle:
- Multi-step transformations with intermediate verification
- Complex function modifications with multiple changes
- Integration of multiple systems (API + caching + state)
- Full-context function scaffolding with numbered annotations

This document captures the advanced patterns that emerged in SESSION-05, SESSION-06, and SESSION-07.

---

## Pattern: Numbered Inline Annotations with Understanding Callouts

**When to use:** 
- 3+ related changes in a single code block
- Complex logic that needs step-by-step explanation
- When students need to understand the sequence and purpose of each change

**Structure:**
1. Show complete function/component with numbered inline comments
2. Follow with Understanding callout that explains each number
3. Include verification statement

**Example from SESSION-05:**

```javascript
export async function fetchQuestions(zoneId, count = null) {
  // ... existing code ...
  
  try {
    console.log("Fetching from:", url);        // [1] Log the URL
    const response = await fetch(url);         // [2] Send HTTP request
    const data = await response.json();        // [3] Parse JSON response
    console.log("Raw API data:", data);        // [4] Log the data
  } catch (error) {
    console.log("Failed to fetch questions:", error);
    return [];
  }
}
```

> 💡 **Understanding the Fetch Process**
>
> This code performs four key operations:
>
> 1. **Log the URL**: Shows what endpoint we're calling
> 2. **Send the request**: `await fetch(url)` sends HTTP request and waits for response
> 3. **Parse JSON**: `await response.json()` converts the response text into a JavaScript object
> 4. **Log the data**: Shows the raw API response structure
>
> The `await` keyword pauses execution until each async operation completes, making the code read top-to-bottom like synchronous code. However, the rest of your app remains responsive during these pauses.

**✓ You should see:** Alert appears, then console shows the fetching URL and raw API data.

**Key characteristics:**
- Inline comments use `// [N] Brief label` format
- Understanding callout uses numbered list matching the annotations
- Each numbered item has **bold heading** + explanation
- Additional context provided after the numbered list
- Verification statement confirms expected behavior

---

## Pattern: Full Function Context with Multiple Changes

**When to use:**
- Showing multiple changes across different parts of a function
- When students need to see how changes fit together
- When location context is crucial (beginning, middle, end of function)

**Example from SESSION-06:**

```javascript
export async function fetchQuestions(zoneId, count = null) {
  // Add cache check:
  const cachedQuestions = getCachedQuestions(zoneId);  // [1] Check cache
  if (cachedQuestions) {                               // [2] If found
    console.log(`Cache hit for zone ${zoneId}`);       // [3] Log hit
    return cachedQuestions;                            // [4] Return early
  }

  console.log(`Cache miss for zone ${zoneId}`);        // [5] Log miss

  const zone = getZoneById(zoneId);
  // ... rest of existing code ...
}
```

**Key characteristics:**
- Shows function signature for orientation
- Uses ellipsis for unchanged code sections
- Numbers continue sequentially through the entire block
- Provides clear location markers ("Add cache check:")

---

## Pattern: Iterative Transformation with Intermediate Verification

**When to use:**
- Building complex logic step-by-step
- Each step produces verifiable output
- Students need to see progression and test along the way

**Structure:**
1. **Step 1**: Set up testing infrastructure
2. **Steps 2-N**: Incremental improvements with verification
3. **Final Step**: Remove test code and complete integration

**Example from SESSION-05 (transformQuestion function):**

### Step 1: Set up transformation testing
```javascript
// Add transformation testing:
const question = data.results[0];                // [1] Get first question
console.log("Before transform:", question);      // [2] Log before
const transformed = transformQuestion(question); // [3] Transform it
console.log("After transform:", transformed);    // [4] Log after
```

**✓ You should see:** Console shows `undefined` for transformed question

### Step 2: Extract object properties
```javascript
function transformQuestion(apiQuestion) {
  const question = apiQuestion.question;
  const incorrectAnswers = apiQuestion.incorrect_answers;
  const correctAnswer = apiQuestion.correct_answer;
  
  return {
    question: question,
    incorrectAnswers: incorrectAnswers,
    correctAnswer: correctAnswer,
  };
}
```

**✓ You should see:** Console shows extracted properties with URL encoding still present

### Step 3: Add decoding
```diff
function transformQuestion(apiQuestion) {
- const question = apiQuestion.question;
+ const question = decodeText(apiQuestion.question);
  // ... etc
}
```

**✓ You should see:** Console shows readable text without encoding

### Step 6: Complete the integration

#### Part A: Remove test code
[Remove temporary testing]

#### Part B: Format all questions
[Apply transformation to all questions]

**Key characteristics:**
- Each step builds on previous step
- Verification after each step shows progress
- Final step removes scaffolding and completes integration
- Uses mix of patterns (numbered annotations, diff, before/after)

---

## Pattern: Multi-Part Steps for Complex Integration

**When to use:**
- Single step involves multiple distinct actions
- Actions are related but need separate focus
- Helps break down complexity without creating too many steps

**Example from SESSION-05:**

```markdown
### Step 6: Complete the integration

#### Part A: Remove test code

Remove the temporary transformation testing we added earlier:

[Code showing removals]

#### Part B: Format all questions for your game

Apply your transformation to every question and return the formatted data:

[Code showing map() application]

#### Part C: Verify your integration

Test the complete API integration using React DevTools:

[Verification instructions]
```

**Key characteristics:**
- Main step heading describes overall goal
- Parts use `####` subheadings
- Each part has its own intro paragraph and code
- Final part often includes verification

---

## Pattern: JSX Bottom-Up Annotations

**When to use:**
- Adding elements within JSX structure
- Need to show where element goes in hierarchy
- Want to avoid cluttering JSX with inline comments

**Example from SESSION-07:**

```javascript
return (
  <div className="quiz-modal">
    {/* ... existing code ... */}
    <QuestionHeader question={question} />
    <AnswerChoices answers={question.answers} />
    {/* ↑ [3] Conditional rendering */}
    {/* ... rest of modal ... */}
  </div>
);
```

**Key characteristics:**
- Uses `{/* ↑ [N] Label */}` format
- Arrow points up to the relevant line
- Keeps JSX structure clean and readable
- Numbers match Understanding callout

---

## Pattern: Ellipsis for Context Without Clutter

**When to use:**
- Large files where showing everything is overwhelming
- Need to indicate position without showing all code
- Want to focus attention on the changes

**Variations:**

**Import context:**
```javascript
// ... existing imports ...
import NewComponent from "./components/NewComponent";
```

**Function context:**
```javascript
export default function Component() {
  // ... existing state declarations ...
  
  const [newState, setNewState] = useState(false);
  
  // ... rest of component ...
}
```

**JSX context:**
```javascript
return (
  <div className="container">
    {/* ... existing elements ... */}
    <NewComponent />
    {/* ... rest of JSX ... */}
  </div>
);
```

**Key characteristics:**
- Always use `// ... existing X ...` or `{/* ... existing X ... */}` format
- Describes what's being omitted
- Provides orientation without clutter
- Used consistently throughout SESSION-05, 06, 07

---

## Pattern: Before/After for Simple Transformations

**When to use:**
- Simple, isolated changes
- Clear transformation from one state to another
- No need for numbered annotations

**Example from SESSION-05:**

```javascript
// Before:
function transformQuestion(apiQuestion) {}

// After:
function transformQuestion(apiQuestion) {
  const question = apiQuestion.question;
  const incorrectAnswers = apiQuestion.incorrect_answers;
  const correctAnswer = apiQuestion.correct_answer;
  
  return {
    question: question,
    incorrectAnswers: incorrectAnswers,
    correctAnswer: correctAnswer,
  };
}
```

**Key characteristics:**
- Clear "Before:" and "After:" labels
- Shows complete transformation
- No intermediate steps needed
- Good for early stages of iterative build

---

## Pattern: Diff Format for Precise Changes

**When to use:**
- Updating existing lines (not adding new ones)
- Need to show exact character-level changes
- Students familiar with version control concepts

**Example from SESSION-05:**

```diff
function transformQuestion(apiQuestion) {
- const question = apiQuestion.question;
+ const question = decodeText(apiQuestion.question);
- const incorrectAnswers = apiQuestion.incorrect_answers;
+ const incorrectAnswers = apiQuestion.incorrect_answers.map(
+   (answer) => decodeText(answer)
+ );
}
```

**Key characteristics:**
- Uses `-` for removed lines, `+` for added lines
- Shows exact changes without ambiguity
- Preserves context (unchanged lines)
- Requires `diff` language identifier in code fence

---

## Pattern: Reference Code Blocks

**When to use:**
- After iterative steps complete
- Students need to see final result
- Verification that all pieces are in place

**Example from SESSION-05:**

```markdown
Here's the complete `fetchQuestions` function for reference:

```javascript
export async function fetchQuestions(zoneId, count = null) {
  const zone = getZoneById(zoneId);
  if (!zone) return [];

  const questionCount = count || zone.questionCount;
  const url = buildApiUrl(zone, questionCount);

  try {
    const response = await fetch(url);
    const data = await response.json();

    const questions = data.results.map((apiQuestion) =>
      transformQuestion(apiQuestion)
    );
    return questions;
  } catch (error) {
    console.log("Failed to fetch questions:", error);
    return [];
  }
}
```
```

**Key characteristics:**
- Introduced with "Here's the complete X for reference:"
- Shows entire function/component
- No annotations or comments (clean final code)
- Helps students verify their work

---

## Combining Patterns

Advanced sections often combine multiple patterns:

**Example: SESSION-06 cache integration**
1. **Numbered annotations** for cache checking logic
2. **Understanding callout** explaining the early return pattern
3. **Ellipsis** for existing code context
4. **Verification statement** for expected behavior

This layered approach handles complexity while maintaining clarity.

---

## Guidelines for Advanced Patterns

### When to use numbered annotations:
- ✅ 3+ related changes in one block
- ✅ Complex logic needing explanation
- ✅ Sequential operations that build on each other
- ✅ When Understanding callout adds significant value

### When to use Before/After:
- ✅ Simple, isolated transformations
- ✅ Early stages of iterative build
- ✅ Clear state change
- ✅ No need for step-by-step explanation

### When to use Diff format:
- ✅ Updating existing lines (not adding)
- ✅ Character-level precision needed
- ✅ Students comfortable with version control
- ✅ Multiple line modifications

### When to use Multi-Part steps:
- ✅ Complex integration with distinct phases
- ✅ Need to break down without creating too many steps
- ✅ Related actions that need separate focus
- ✅ Final integration step

### When to use Ellipsis:
- ✅ Always for large files
- ✅ When showing position matters more than showing all code
- ✅ To focus attention on changes
- ✅ Consistently throughout a section

---

## Anti-Patterns to Avoid

❌ **Mixing annotation styles within same section**
- Pick one style (numbered, arrows, stacked) and stick with it

❌ **Numbered annotations without Understanding callout**
- If you number them, explain them

❌ **Too many numbers (7+)**
- Break into multiple steps or use different pattern

❌ **Ellipsis without description**
- Always say what's being omitted: `// ... existing imports ...`

❌ **Reference code too early**
- Only show complete code after iterative steps finish

❌ **Inconsistent ellipsis format**
- Use `// ... existing X ...` format consistently

---

## Pattern Selection for Complex Sections

```
Is this an iterative build with multiple transformation steps?
├─ Yes → Use Iterative Transformation pattern
│   ├─ Step 1: Set up testing
│   ├─ Steps 2-N: Incremental changes with verification
│   └─ Final step: Remove scaffolding, complete integration
│
└─ No → Is this a single complex function with multiple changes?
    ├─ Yes → Use Numbered Inline Annotations + Understanding callout
    │
    └─ No → Is this a simple transformation?
        ├─ Yes → Use Before/After
        └─ No → Use Diff format for precise line changes
```

---

## Integration with Existing Framework

These advanced patterns extend (not replace) the core patterns in `code-scaffolding-reference.md`:

- **Core Patterns 1-7**: Still used for simple cases
- **Pattern 8 variants**: Still valid for 2-4 changes
- **Pattern 9 variants**: Still used for JSX additions

**New additions:**
- Numbered inline annotations with Understanding callouts (most common in 5-7)
- Iterative transformation with intermediate verification
- Multi-part steps for complex integration
- JSX bottom-up annotations
- Consistent ellipsis usage

---

## Summary

Sessions 5-7 introduce complexity that requires:
1. **More context** - Full function scaffolding instead of snippets
2. **Better sequencing** - Numbered annotations with explanations
3. **Iterative verification** - Test after each transformation step
4. **Clear progression** - Multi-part steps for complex integration
5. **Consistent patterns** - Ellipsis, annotations, callouts used uniformly

These patterns maintain clarity while handling the increased complexity of API integration, caching systems, and component composition.
