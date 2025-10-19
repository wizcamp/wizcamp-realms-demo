# Step Introduction Backporting: SESSION-05 and SESSION-06

## Date
2025-01-XX

## Context
After improving step intro paragraphs in SESSION-07 based on student-centered guidelines, we reviewed SESSION-05 and SESSION-06 for similar mechanical/ineffective patterns.

## Issues Found

### SESSION-05
**Step 1: Add fetch logic**
- ❌ Before: "Add fetch logic after the alert to request data from the API."
- ✅ After: "Replace the placeholder alert with real code that requests trivia questions from the OpenTrivia Database."
- **Issue**: Too mechanical, just describes location without purpose
- **Fix**: Explains what's being replaced and why (placeholder → real functionality)

### SESSION-06
Found 5 mechanical step intros that just described code location:

**Step 1: Add key generation**
- ❌ Before: "Add the `getCacheKey` function after the existing helper functions (`decodeText`, `shuffleAnswers`, etc.)."
- ✅ After: "Create a function that generates unique cache keys for each zone's questions."
- **Issue**: Focuses on where to add code, not what it accomplishes
- **Fix**: Explains the function's purpose

**Step 2: Add cache retrieval**
- ❌ Before: "Add the `getCachedQuestions` function after `getCacheKey`."
- ✅ After: "Create a function that checks localStorage for cached questions and deserializes them back into JavaScript objects."
- **Issue**: Just says where to add it
- **Fix**: Explains what the function does (check + deserialize)

**Step 3: Add cache storage**
- ❌ Before: "Add the `setCachedQuestions` function after `getCachedQuestions`."
- ✅ After: "Create a function that serializes questions and saves them to localStorage for future use."
- **Issue**: Just says where to add it
- **Fix**: Explains what the function does (serialize + save)

**Step 1: Add cache checking (in "Updating fetchQuestions with Caching")**
- ❌ Before: "Add cache checking at the beginning of `fetchQuestions`, before the zone lookup."
- ✅ After: "Check if questions are already cached before making an API request — if they exist, return them immediately."
- **Issue**: Describes location without explaining the optimization
- **Fix**: Explains the early-return optimization pattern

**Step 2: Add cache storage (in "Updating fetchQuestions with Caching")**
- ❌ Before: "Add cache storage after the data transformation, before the return statement."
- ✅ After: "Store the freshly fetched and transformed questions in localStorage so the next click loads instantly."
- **Issue**: Describes location without explaining benefit
- **Fix**: Explains the caching benefit (instant loading on next click)

## Pattern Analysis

### Common Issues
1. **Location-focused**: "Add X after Y" tells where but not why
2. **Mechanical language**: "Add", "Update" without context
3. **Missing purpose**: Doesn't explain what the student is accomplishing

### Improvement Pattern
1. **Action-oriented**: Use verbs that describe what's happening (Create, Check, Store, Replace)
2. **Purpose-driven**: Explain what the code accomplishes
3. **Benefit-aware**: When relevant, mention the user benefit (instant loading, optimization)

## Guidelines Applied

From CONVENTIONS.md Step Introduction Paragraphs section:

✅ **Orient**: Where in the codebase  
✅ **Contextualize**: How it fits into the bigger picture  
✅ **Prepare**: What it accomplishes  

### Voice Flexibility Used
- **Imperative**: "Create a function that..." (Steps 1-3 in Building Cache Helper Functions)
- **Explanatory**: "Check if questions are already cached before..." (Step 1 in Updating fetchQuestions)
- **Contextual**: "Replace the placeholder alert with real code..." (SESSION-05 Step 1)

## Files Modified
- `session-guides/SESSION-05.md`: 1 step intro improved
- `session-guides/SESSION-06.md`: 5 step intros improved

## Result
All step intros in SESSION-05 and SESSION-06 now follow student-centered guidelines:
- Focus on purpose over location
- Explain what students are accomplishing
- Use helpful, conversational language
- Avoid mechanical "Add X after Y" patterns

## Related Documents
- `STEP-INTRO-FINAL-IMPLEMENTATION.md`: Original guidelines and SESSION-01 through SESSION-04 improvements
- `CONVENTIONS.md`: Step Introduction Paragraphs section with decision tree
