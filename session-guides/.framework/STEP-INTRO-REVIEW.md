# Step Introduction Paragraph Review - SESSION-01 through SESSION-07

## Review Summary

### SESSION-01 ✅ Good
Step intros are minimal and action-oriented. No changes needed.

### SESSION-02 ⚠️ Needs Improvement
Some intros are overly verbose and academic.

**Issues found:**
- Step 2: "Create the basic component function that returns a button element, establishing the foundation for your reusable GameButton."
  - Too formal, "establishing the foundation" is unnecessary
- Step 3: "Import your new GameButton component into SplashScreen and add it to the JSX to see it render on the page."
  - Good, but could be slightly more concise
- Step 5: "Modify the component to accept a `text` prop using destructuring, replacing the hardcoded button text with a dynamic value."
  - Too technical for first-time learners
- Step 6: "Provide the button text from the parent component by passing it as a prop, demonstrating how data flows from parent to child."
  - "demonstrating how data flows" is too academic

### SESSION-03 ✅ Good (after our improvements)
Step intros are conversational and helpful.

### SESSION-04 ⚠️ Needs Improvement
Some intros use "To [purpose], we need to..." pattern which is wordy.

**Issues found:**
- Step 1: "To display game progress and assist with positioning, we need to import the HUD and CoordinateDisplay components."
  - Should be: "Add the imports for the HUD and CoordinateDisplay components."
- Step 2: "Replace the single GameMap component with a Fragment containing multiple components, allowing you to display the map, HUD, and coordinate helper together."
  - "allowing you to display" is unnecessary explanation
- Step 7: "Replace the first zone object with your Zone 0 design from your planning organizer. Use the values you decided on for `name`, `subtitle`, `categoryId`, `difficulty`, and `questionCount`. Keep the `mapLabel` coordinates as-is for now."
  - Too long, could be more concise

### SESSION-05 ✅ Good
Step intros are concise and action-oriented.

### SESSION-06 ✅ Good
Step intros are clear and helpful.

### SESSION-07 ✅ Good (after our improvements)
Step intros provide helpful context without being overly verbose.

## Recommended Changes

### SESSION-02 Improvements

**Step 2 (Current):**
> "Create the basic component function that returns a button element, establishing the foundation for your reusable GameButton."

**Recommended:**
> "Create the basic component function that returns a button element."

**Step 5 (Current):**
> "Modify the component to accept a `text` prop using destructuring, replacing the hardcoded button text with a dynamic value."

**Recommended:**
> "Update the component to accept a `text` prop, replacing the hardcoded button text with a dynamic value."

**Step 6 (Current):**
> "Provide the button text from the parent component by passing it as a prop, demonstrating how data flows from parent to child."

**Recommended:**
> "Pass the button text from the parent component as a prop."

**Step 7 (Current):**
> "Extend the component to accept an `onClick` function prop and attach it to the button element, enabling interactive behavior."

**Recommended:**
> "Update the component to accept an `onClick` prop and attach it to the button element."

### SESSION-04 Improvements

**Step 1 (Current):**
> "To display game progress and assist with positioning, we need to import the HUD and CoordinateDisplay components."

**Recommended:**
> "Add the imports for the HUD and CoordinateDisplay components."

**Step 2 (Current):**
> "Replace the single GameMap component with a Fragment containing multiple components, allowing you to display the map, HUD, and coordinate helper together."

**Recommended:**
> "Replace the single GameMap component with a Fragment containing the map, HUD, and coordinate helper."

**Step 7 (Current):**
> "Replace the first zone object with your Zone 0 design from your planning organizer. Use the values you decided on for `name`, `subtitle`, `categoryId`, `difficulty`, and `questionCount`. Keep the `mapLabel` coordinates as-is for now."

**Recommended:**
> "Update Zone 0 with your design from the planning organizer, using your values for `name`, `subtitle`, `categoryId`, `difficulty`, and `questionCount`."

## Patterns to Apply

### ✅ Good Patterns (Keep These)

**Conversational and helpful:**
> "Add `setIsQuizVisible` and call it after questions load — this sets the state to true, satisfying Step 1's condition and making the modal appear."

**Clear location guidance:**
> "Add the `getCacheKey` function after the existing helper functions."

**Simple and direct:**
> "Add fetch logic after the alert to request data from the API."

### ❌ Patterns to Avoid

**Overly academic:**
> "...establishing the foundation for your reusable GameButton"
> "...demonstrating how data flows from parent to child"

**Wordy purpose statements:**
> "To display game progress and assist with positioning, we need to..."

**Unnecessary explanations:**
> "...allowing you to display the map, HUD, and coordinate helper together"
> "...enabling interactive behavior"

**Too much detail:**
> "Use the values you decided on for `name`, `subtitle`, `categoryId`, `difficulty`, and `questionCount`. Keep the `mapLabel` coordinates as-is for now."

## Implementation Priority

1. **High Priority:** SESSION-02 and SESSION-04 (most verbose)
2. **Low Priority:** SESSION-01, 03, 05, 06, 07 (already good)

## Key Takeaway

The best step intros:
- Are conversational but not chatty
- Provide location/context when helpful
- Avoid academic or marketing language
- Trust students to understand from code + comments
- Save detailed explanations for Understanding callouts
