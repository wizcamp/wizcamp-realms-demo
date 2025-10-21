# Formatting Consistency Audit Report

## Audit Date
Generated during SESSION-07 review

## Conventions Being Checked

From CONVENTIONS.md:
- **Constants** (UPPERCASE_NAMES) = backticks
- **Props/variables** (camelCase) = backticks  
- **Functions/methods** (camelCase) = backticks
- **Component names in natural text** = NO backticks
- **Component names in numbered items** = NO backticks (referring to concept)
- **JSX syntax** = backticks (`<Component />`)

---

## SESSION-07.md - FINDINGS

### ✅ CORRECT Examples

1. **Understanding Random Feedback Selection**
   - `CORRECT_FEEDBACK` ✓ (constant with backticks)
   - `INCORRECT_FEEDBACK` ✓ (constant with backticks)
   - `isCorrect` ✓ (prop with backticks)
   - "The AnswerFeedback component" ✓ (component name without backticks in prose)

2. **Understanding Array Mapping**
   - `map()` ✓ (method with backticks)
   - `key` ✓ (prop with backticks)

3. **Understanding Click Handling**
   - `onClick` ✓ (prop with backticks)
   - `index` ✓ (variable with backticks)

### ❌ ISSUES FOUND

1. **Understanding Conditional Rendering** - Line ~87
   - "Import QuizModal" - component name in numbered item (CORRECT - no backticks)
   - "Add isQuizVisible" - missing backticks around `isQuizVisible`
   - "Conditionally render QuizModal" - component name (CORRECT - no backticks)
   - Context: "`<QuizModal />`" ✓ (JSX with backticks)

2. **Understanding Modal Visibility Control** - Line ~115
   - "Access setIsQuizVisible" - missing backticks around `setIsQuizVisible`
   - "Setting `isQuizVisible` to true" ✓ (has backticks)

3. **Understanding Array Mapping** - Line ~185
   - "The `map()` method" ✓
   - "The `key` prop" ✓
   - All correct!

4. **Understanding Click Handling** - Line ~235
   - "Add onAnswerClick prop" - missing backticks around `onAnswerClick`
   - "Add `onClick` to each button" ✓
   - "The `onClick` prop" ✓
   - "the `index` parameter" ✓

5. **Understanding Dynamic Styling** - Line ~285
   - "Accept `chosenAnswer` and `correctAnswer`" ✓
   - "`getButtonStyle()` returns" ✓
   - "Each button calls the function with its `index`" ✓
   - All correct!

---

## Summary for SESSION-07

**Total Issues: 4**

1. Line ~87: "Add isQuizVisible" → should be "Add `isQuizVisible`"
2. Line ~115: "Access setIsQuizVisible" → should be "Access `setIsQuizVisible`"  
3. Line ~235: "Add onAnswerClick prop" → should be "Add `onAnswerClick` prop"
4. Line ~87: "Import QuizModal" - VERIFY: Should component names in numbered items have backticks?

**Pattern Observed:**
- Props/variables in numbered item descriptions are inconsistently formatted
- Some have backticks, some don't
- Need to establish: Do numbered items follow same rules as prose?

---

## Next Steps

1. Review CONVENTIONS.md to clarify: Should numbered items in Understanding callouts use backticks for code elements?
2. Audit SESSION-06.md
3. Audit SESSION-05.md
4. Audit SESSION-04.md
5. Audit SESSION-03.md (already found 4 violations with component names)
6. Audit SESSION-02.md (already found 2 violations with component names)
7. Audit SESSION-01.md
