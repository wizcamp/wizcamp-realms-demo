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
SESSION-XX-instruction.md - [RECAP/NEXT] - Line X
Issue: [Description of the problem]
Should be: [Suggested correction]
```

## Focus Areas
- **Accuracy**: Does the recap/preview match actual session content?
- **Continuity**: Do sessions flow logically from one to the next?
- **Consistency**: Are similar concepts described the same way across sessions?
- **Completeness**: Are all major outcomes/previews covered?
- **Essential Terms Ordering**: Are terms ordered by logical learning progression rather than alphabetically?

### Step 5: Verify Essential Terms Ordering
For each SESSION-XX.md student guide:
- Check if Essential Terms table follows logical learning progression
- Verify terms are grouped by related concepts (foundational → data formats → tools → implementation)
- Ensure ordering matches the conceptual flow from "what" to "how" to "implementation details"
- Confirm ordering aligns with how concepts are introduced in the session content

Review all session guides and report any continuity or ordering issues found.