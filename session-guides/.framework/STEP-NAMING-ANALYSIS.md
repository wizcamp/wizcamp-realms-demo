# Step Naming Analysis

## Current State

Step names across sessions show significant inconsistency in specificity and style.

### Pattern 1: Generic Action Names
**Examples:**
- "Add imports to App"
- "Add local state"
- "Add fetch logic"
- "Add cache checking"
- "Add conditional rendering"
- "Test your component"

**Characteristics:**
- Generic verbs (Add, Update, Test)
- No specific entity names
- Could apply to many contexts
- Less scannable

### Pattern 2: Specific Entity Names
**Examples:**
- "Add text prop to GameButton"
- "Update GameMap to show modal"
- "Update Zone 0 coordinates"
- "Pass click handler from SplashScreen"
- "Create AnswerChoices component"
- "Update AnswerFeedback component"

**Characteristics:**
- Names specific components/entities
- Clear what's being modified
- More scannable
- Better for reference

### Pattern 3: Action + Purpose
**Examples:**
- "Add variant prop and dynamic className"
- "Add array mapping to generate buttons"
- "Open DevTools and find GameProvider"
- "Observe a cache miss"
- "Prevent multiple clicks"

**Characteristics:**
- Action + what it accomplishes
- More descriptive
- Sometimes verbose
- Explains the "why"

### Pattern 4: Testing/Verification Steps
**Examples:**
- "Test your component"
- "Test the fetch request"
- "Test the modal connection"
- "Verify props are passed"
- "Confirm a cache hit"
- "Inspect component state with DevTools"

**Characteristics:**
- Verification-focused
- Mix of generic and specific
- Often end of a sequence

## Analysis by Session

### SESSION-01 (Setup)
- Mostly generic procedural steps
- Appropriate for setup context
- Examples: "Sign in to GitHub", "Launch the template"

### SESSION-02 (First Component)
- Mix of generic and specific
- Generic: "Create the component file", "Write the component structure"
- Specific: "Add text prop to GameButton", "Pass the text prop from SplashScreen"
- **Inconsistency**: Sometimes names GameButton, sometimes doesn't

### SESSION-03 (State Management)
- Mostly specific with component names
- Examples: "Add imports to SplashScreen", "Update the Credits button onClick"
- **Good**: Consistently names components

### SESSION-04 (Configuration)
- Mix of generic and specific
- Generic: "Add imports to App", "Test the display"
- Specific: "Update Zone 0 coordinates", "Update Zone 1 coordinates"
- **Inconsistency**: "Add imports to App" vs "Update Zone 0"

### SESSION-05 (API Integration)
- Mostly generic
- Examples: "Add fetch logic", "Extract object properties", "Add decoding"
- **Issue**: Hard to scan, unclear what's being modified
- Exception: "Complete the integration" (purpose-driven)

### SESSION-06 (Caching)
- Very generic
- Examples: "Add key generation", "Add cache retrieval", "Add cache storage"
- **Issue**: Doesn't name functions being created
- Better would be: "Create getCacheKey function", "Create getCachedQuestions function"

### SESSION-07 (Quiz Components)
- Mix of specific and generic
- Specific: "Add QuizModal to App", "Update GameMap to show modal", "Create AnswerChoices component"
- Generic: "Add component to JSX", "Add click handling", "Add conditional styling"
- **Inconsistency**: Sometimes names entities, sometimes doesn't

## Problems with Current Approach

### 1. Scannability
Generic names make it hard to quickly find specific steps:
- "Add imports to App" - which imports?
- "Add local state" - what state?
- "Add fetch logic" - where?

### 2. Reference
When students need to refer back:
- "Which step added the cache checking?" 
- Hard to find with generic names

### 3. Consistency
Mixing patterns within same session creates confusion:
- SESSION-07: "Update GameMap to show modal" (specific) vs "Add component to JSX" (generic)

### 4. Context Loss
Generic names lose context when viewed in isolation:
- "Add cache storage" - storage of what? where?
- "Add conditional rendering" - rendering what?

## Recommendations

### Option A: Always Specific (Recommended)
**Rule**: Always name the primary entity being created/modified

**Examples:**
- ❌ "Add imports to App" 
- ✅ "Import QuizModal and useGame in App"

- ❌ "Add local state"
- ✅ "Add showCredits state"

- ❌ "Add fetch logic"
- ✅ "Add fetch logic to fetchQuestions"

- ❌ "Add cache checking"
- ✅ "Add cache checking to fetchQuestions"

- ❌ "Add component to JSX"
- ✅ "Add AnswerChoices to QuizModal"

**Pros:**
- Maximum scannability
- Clear reference points
- Consistent pattern
- No ambiguity

**Cons:**
- Slightly longer names
- May feel repetitive

### Option B: Specific for Code, Generic for Actions
**Rule**: Name entities for code changes, use generic for procedural steps

**Examples:**
- Code: "Add QuizModal to App", "Create getCacheKey function"
- Procedural: "Test the fetch request", "Open DevTools"

**Pros:**
- Balances specificity with brevity
- Natural distinction

**Cons:**
- Still requires judgment calls
- Some ambiguity remains

### Option C: Action + Entity + Location
**Rule**: [Action] [Entity] [in/to Location]

**Examples:**
- "Add QuizModal to App"
- "Create AnswerChoices in QuizModal"
- "Add cache checking to fetchQuestions"
- "Update GameMap to show modal"

**Pros:**
- Maximum clarity
- Consistent structure
- Easy to scan

**Cons:**
- Can be verbose
- May feel formulaic

## Proposed Best Practice

### Core Principle
**Always name the primary entity being created or modified.**

### Format Patterns

**Creating new entities:**
- `Create [EntityName] [component/function/file]`
- Examples: "Create AnswerChoices component", "Create getCacheKey function"

**Modifying existing entities:**
- `Update [EntityName] to [purpose]`
- `Add [feature] to [EntityName]`
- Examples: "Update GameMap to show modal", "Add cache checking to fetchQuestions"

**Adding to existing structures:**
- `Add [EntityName] to [ParentEntity]`
- Examples: "Add QuizModal to App", "Add AnswerChoices to QuizModal"

**Testing/Verification:**
- `Test [specific feature]` or `Verify [specific behavior]`
- Examples: "Test the modal connection", "Verify props are passed"

**Procedural (setup/tools):**
- Generic is acceptable for non-code steps
- Examples: "Open DevTools", "Navigate to Components tab"

### Decision Tree

```
Is this a code change?
├─ Yes → Name the entity
│   ├─ Creating? → "Create [EntityName] [type]"
│   ├─ Modifying? → "Update [EntityName] to [purpose]"
│   └─ Adding? → "Add [EntityName] to [ParentEntity]"
│
└─ No → Is it testing/verification?
    ├─ Yes → "Test/Verify [specific feature]"
    └─ No → Generic procedural name OK
```

### Examples Applied

**SESSION-02:**
- ❌ "Add text prop to GameButton" (current - good)
- ✅ Keep as is

- ❌ "Pass the text prop from SplashScreen" (current - good)
- ✅ Keep as is

**SESSION-05:**
- ❌ "Add fetch logic"
- ✅ "Add fetch logic to fetchQuestions"

- ❌ "Extract object properties"
- ✅ "Extract properties in transformQuestion"

- ❌ "Add decoding"
- ✅ "Add decoding to transformQuestion"

**SESSION-06:**
- ❌ "Add key generation"
- ✅ "Create getCacheKey function"

- ❌ "Add cache retrieval"
- ✅ "Create getCachedQuestions function"

- ❌ "Add cache storage"
- ✅ "Create setCachedQuestions function"

- ❌ "Add cache checking"
- ✅ "Add cache checking to fetchQuestions"

**SESSION-07:**
- ❌ "Add component to JSX"
- ✅ "Add AnswerChoices to QuizModal"

- ❌ "Add click handling"
- ✅ "Add click handling to AnswerChoices"

- ❌ "Add conditional styling"
- ✅ "Add conditional styling to AnswerChoices"

## Benefits of Specific Naming

### 1. Scannability
Students can quickly find:
- "Which step creates the cache functions?" → "Create getCacheKey function"
- "Where do I add the modal?" → "Add QuizModal to App"

### 2. Context
Names provide context even in isolation:
- "Add cache checking to fetchQuestions" - clear what and where
- "Create AnswerChoices component" - clear what's being created

### 3. Consistency
Same pattern throughout:
- All creation steps: "Create [Entity] [type]"
- All additions: "Add [Entity] to [Parent]"
- All updates: "Update [Entity] to [purpose]"

### 4. Reference
Easy to reference in:
- Step intro paragraphs
- Understanding callouts
- Cross-references between steps

## Implementation Plan

1. **Document the pattern** in CONVENTIONS.md
2. **Create examples** for each pattern type
3. **Review all sessions** and identify steps needing updates
4. **Apply systematically** starting with SESSION-05, 06, 07
5. **Verify consistency** across all sessions

## Edge Cases

### When entity name is obvious from section
If section is "Building the Fetch Foundation" and there's only one function:
- ❌ "Add fetch logic to fetchQuestions" (redundant)
- ✅ "Add fetch logic" (acceptable if context is clear)

**Guideline**: When in doubt, be specific. Redundancy is better than ambiguity.

### When multiple entities are involved
- Use primary entity: "Add QuizModal to App" (not "Add QuizModal to App's JSX")
- Or use "and": "Import QuizModal and useGame in App"

### When step has multiple actions
- Use multi-part steps (Part A, Part B)
- Or focus on primary action: "Complete the integration"

## Conclusion

**Recommendation**: Adopt Option A (Always Specific) with the format patterns defined above.

This provides maximum clarity, consistency, and scannability while maintaining natural language flow. The slight increase in verbosity is offset by significant improvements in usability and reference.
