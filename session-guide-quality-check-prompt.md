# Session Guide Quality Check Prompt

## Task
Review all SESSION-XX-instruction.md files to verify accuracy of session continuity elements. Focus on two critical areas that depend on other sessions' content:

1. **Previous Session Recap** (Slide 2 in each session)
2. **What's Next** (Final slide in each session)

## Instructions

### Step 1: Map Session Flow
Create a table showing:
- Session number
- Main topic/focus
- Key deliverables/outcomes

### Step 2: Verify Previous Session Recaps
For each SESSION-XX-instruction.md (starting with SESSION-02):
- Check if Slide 2 "Previous Session Recap" accurately reflects the previous session's main outcomes
- Verify the recap mentions the correct deliverables from the prior session
- Ensure the recap sets up the current session logically

### Step 3: Verify What's Next Slides
For each SESSION-XX-instruction.md (except the final session):
- Check if the "What's Next" slide accurately previews the next session's focus
- Verify it mentions the correct upcoming topics/activities
- Ensure it creates appropriate anticipation without over-promising

### Step 4: Check Session Boundaries
Identify any:
- Missing connections between sessions
- Contradictory information across sessions
- Gaps in the learning progression
- Overly detailed or vague transitions

## Output Format
For each issue found, provide:
```
SESSION-XX-instruction.md - [RECAP/NEXT/TONE] - Line X
Issue: [Description of the problem]
Should be: [Suggested correction]
```

## Focus Areas
- **Accuracy**: Does the recap/preview match actual session content?
- **Continuity**: Do sessions flow logically from one to the next?
- **Consistency**: Are similar concepts described the same way across sessions?
- **Completeness**: Are all major outcomes/previews covered?
- **Essential Terms Ordering**: Are terms ordered by logical learning progression rather than alphabetically?
- **Code Block Consistency**: Do all multi-line code blocks include language qualifiers (```javascript, ```bash, ```json, etc.)?
- **Numbered List Indentation**: Is all content following numbered list items properly indented with 3 spaces to maintain grouping under the bullet point?
- **Tone and Audience Appropriateness**: Is content engaging and relatable for 13-18 year olds?
  - Check "Why This Matters" sections use conversational, empowering language
  - Verify metaphors and examples resonate with teenage experiences
  - Ensure tone avoids corporate jargon, academic dryness, and excessive exclamations
  - Confirm genuine excitement and capability-building focus rather than abstract professional development
  - Flag overly cheesy language or excessive use of "awesome/super/amazing" without substance

### Numbered List Indentation Check
For each SESSION-XX.md student guide:
- Verify that code blocks, explanatory text, "Test" paragraphs, and any other content following numbered list items are indented with exactly 3 spaces
- Check that this indentation maintains proper visual grouping under the numbered bullet point
- Ensure consistent indentation across all numbered sections in each guide
- Report any instances where content is not properly aligned with the list item structure

### Step 5: Verify Essential Terms Ordering
For each SESSION-XX.md student guide:
- Check if Essential Terms table follows logical learning progression
- Verify terms are grouped by related concepts (foundational → data formats → tools → implementation)
- Ensure ordering matches the conceptual flow from "what" to "how" to "implementation details"
- Confirm ordering aligns with how concepts are introduced in the session content

### Step 6: Evaluate Tone and Audience Appropriateness
For each SESSION-XX.md student guide:
- Review "Why This Matters" sections for engaging, conversational tone appropriate for teenagers
- Check for relatable metaphors and examples (detective work, X-ray vision, digital breadcrumbs, etc.)
- Verify language is empowering and capability-focused rather than abstract or corporate
- Ensure content connects to familiar teenage experiences and builds genuine excitement about technology
- Flag overly formal, academic, or dry explanations that could be made more engaging
- Flag excessive exclamations, overuse of "awesome/super/amazing", or language that feels forced or cheesy
- Ensure enthusiasm feels natural and respects the audience's intelligence

Review all session guides and report any continuity, ordering, or tone issues found.