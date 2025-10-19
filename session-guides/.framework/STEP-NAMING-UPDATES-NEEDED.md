# Step Naming Updates Needed

## Proposed Changes by Session

Based on the "Always Specific" principle: **Always name the primary entity being created or modified.**

---

## SESSION-02: Building Game Components

### Current → Proposed

✅ **Keep (already specific):**
- Step 1: Create the component file
- Step 2: Write the component structure
- Step 3: Import and use the component
- Step 4: Test your component
- Step 1: Add text prop to GameButton
- Step 2: Pass the text prop from SplashScreen
- Step 1: Add onClick prop to GameButton
- Step 2: Pass click handler from SplashScreen
- Step 3: Test the GameButton
- Step 1: Add variant prop and dynamic className
- Step 2: Use the variant prop in SplashScreen
- Step 1: Install the browser extension
- Step 2: Open and explore DevTools

**No changes needed** - SESSION-02 already follows best practices

---

## SESSION-03: Shared State with Context

### Current → Proposed

✅ **Keep (already specific):**
- Step 1: Add imports to SplashScreen
- Step 3: Update the Credits button onClick
- Step 4: Add the modal to JSX
- Step 5: Test the modal
- Step 1: Add imports to App
- Step 3: Add conditional rendering
- Step 4: Test the setup
- Step 1: Open DevTools and find GameProvider
- Step 2: Examine and modify state
- Step 1: Add imports to SplashScreen
- Step 3: Create the start game function
- Step 4: Update the Start Adventure button
- Step 5: Test the navigation

🔄 **Update:**
- ❌ Step 2: Add local state
- ✅ Step 2: Add showCredits state

- ❌ Step 2: Access shared state
- ✅ Step 2: Access screen from useGame

- ❌ Step 2: Access the state setter
- ✅ Step 2: Access setScreen from useGame

**Total changes: 3**

---

## SESSION-04: Data-Driven Design

### Current → Proposed

✅ **Keep (already specific):**
- Step 1: Add imports to App
- Step 2: Update PLAYING screen rendering
- Step 3: Test the display
- Step 1: Explore available categories
- Step 2: Brainstorm zone concepts
- Step 3: Plan your zones
- Step 1: Update Zone 0
- Step 2: Add Zone 1
- Step 3: Add Zone 2
- Step 4: Test your configuration
- Step 1: Navigate to the game screen
- Step 2: Find optimal positions
- Step 3: Update Zone 0 coordinates
- Step 4: Update Zone 1 coordinates
- Step 5: Update Zone 2 coordinates
- Step 6: Test and refine
- Step 1: Open DevTools
- Step 2: Navigate to Components tab
- Step 3: Locate GameProvider
- Step 4: Find zoneProgress state
- Step 5: Experiment with progression
- Step 6: Observe state relationships

**No changes needed** - SESSION-04 already follows best practices

---

## SESSION-05: Generating Dynamic Questions

### Current → Proposed

🔄 **Update:**
- ❌ Step 1: Add fetch logic
- ✅ Step 1: Add fetch logic to fetchQuestions

- ❌ Step 2: Test the fetch request
- ✅ Step 2: Test the API request (acceptable - testing step)

- ❌ Step 1: Set up transformation testing
- ✅ Step 1: Set up transformation testing in fetchQuestions

- ❌ Step 2: Extract object properties
- ✅ Step 2: Extract properties in transformQuestion

- ❌ Step 3: Add decoding
- ✅ Step 3: Add decoding to transformQuestion

- ❌ Step 4: Shuffle answers
- ✅ Step 4: Shuffle answers in transformQuestion

- ❌ Step 5: Return game format
- ✅ Step 5: Return game format from transformQuestion

✅ **Keep:**
- Step 6: Complete the integration (purpose-driven, acceptable)

**Total changes: 6**

---

## SESSION-06: Adding Question Caching

### Current → Proposed

🔄 **Update:**
- ❌ Step 1: Add key generation
- ✅ Step 1: Create getCacheKey function

- ❌ Step 2: Add cache retrieval
- ✅ Step 2: Create getCachedQuestions function

- ❌ Step 3: Add cache storage
- ✅ Step 3: Create setCachedQuestions function

- ❌ Step 1: Add cache checking
- ✅ Step 1: Add cache checking to fetchQuestions

- ❌ Step 2: Add cache storage
- ✅ Step 2: Store questions in cache

✅ **Keep (already specific):**
- Step 1: Open DevTools and clear existing cache
- Step 2: Observe a cache miss
- Step 3: Confirm a cache hit
- Step 4: Test cache persistence
- Step 5: Test cache reset

**Total changes: 5**

---

## SESSION-07: Creating the Quiz Experience

### Current → Proposed

✅ **Keep (already specific):**
- Step 1: Add QuizModal to App
- Step 2: Update GameMap to show modal
- Step 3: Test the modal connection
- Step 1: Create AnswerChoices component
- Step 3: Verify props are passed
- Step 5: Test the answer buttons
- Step 1: Create the messages file
- Step 2: Import the constants
- Step 3: Update AnswerFeedback component
- Step 5: Test the feedback messages
- Step 1: Test complete quiz flow
- Step 2: Inspect component state with DevTools

🔄 **Update:**
- ❌ Step 2: Add component to JSX
- ✅ Step 2: Add AnswerChoices to QuizModal

- ❌ Step 4: Add array mapping to generate buttons
- ✅ Step 4: Add array mapping to AnswerChoices

- ❌ Step 1: Add click handling
- ✅ Step 1: Add click handling to AnswerChoices

- ❌ Step 2: Add conditional styling
- ✅ Step 2: Add conditional styling to AnswerChoices

- ❌ Step 3: Prevent multiple clicks
- ✅ Step 3: Disable buttons after answer selection

- ❌ Step 4: Add AnswerFeedback to JSX
- ✅ Step 4: Add AnswerFeedback to QuizModal

**Total changes: 6**

---

## Summary

### Changes by Session:
- SESSION-01: 0 changes (setup steps, generic is appropriate)
- SESSION-02: 0 changes (already specific)
- SESSION-03: 3 changes
- SESSION-04: 0 changes (already specific)
- SESSION-05: 6 changes
- SESSION-06: 5 changes
- SESSION-07: 6 changes

**Total: 20 step names to update**

### Most Common Pattern Violations:
1. **"Add [feature]" without entity** (10 occurrences)
   - Fix: Add entity name → "Add [feature] to [Entity]"

2. **Generic action without context** (6 occurrences)
   - Fix: Add context → "Add [feature] in [Entity]"

3. **Vague purpose** (4 occurrences)
   - Fix: Be specific → "Create [EntityName] function"

### Priority Order:
1. **SESSION-05** (6 changes) - Most generic, hardest to scan
2. **SESSION-06** (5 changes) - Very generic function names
3. **SESSION-07** (6 changes) - Inconsistent with specific names
4. **SESSION-03** (3 changes) - Minor improvements

---

## Implementation Notes

### When to Apply:
- Apply during next editing pass
- Can be done incrementally
- Low risk (doesn't affect code, only step headings)

### What to Update:
- Step headings (`### Step N: ...`)
- Any cross-references to step names
- Table of contents (if steps are listed)

### What NOT to Change:
- Step intro paragraphs (unless they reference old step name)
- Code blocks
- Understanding callouts
- Verification statements

### Testing:
- Verify all internal links still work
- Check that step numbers remain sequential
- Ensure consistency within each section

---

## Format Patterns Reference

**Creating:**
- `Create [EntityName] [component/function/file]`
- Example: "Create getCacheKey function"

**Modifying:**
- `Update [EntityName] to [purpose]`
- `Add [feature] to [EntityName]`
- Example: "Add cache checking to fetchQuestions"

**Adding:**
- `Add [EntityName] to [ParentEntity]`
- Example: "Add AnswerChoices to QuizModal"

**Testing:**
- `Test [specific feature]`
- `Verify [specific behavior]`
- Example: "Test the modal connection"

**Procedural:**
- Generic acceptable for non-code steps
- Example: "Open DevTools"
