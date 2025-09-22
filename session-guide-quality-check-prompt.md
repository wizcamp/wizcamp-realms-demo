# Session Guide Quality Check Prompt

## Task
Review all SESSION-XX.md and SESSION-XX-instruction.md files to verify accuracy of session continuity elements and naming conventions. Focus on critical areas that depend on other sessions' content:

1. **Session Naming Convention** (Titles and references)
2. **Previous Session Recap** (Slide 2 in each session)
3. **What's Next** (Final slide in each session)

## Instructions

### Step 1: Verify Session Naming Convention
For each SESSION-XX.md student guide:
- Check title format: `# Session X — [Student-Friendly Name]`
- Check subtitle format: `[Technical Concept] 🎯`
- Verify student-friendly name emphasizes what students are building/achieving
- Verify technical concept provides educational context without overwhelming

For each SESSION-XX-instruction.md instructor guide:
- Check slide titles include both names: `"Session X: [Technical Name] — [Student-Friendly Name]"`
- Verify session recaps reference student-friendly names from previous sessions
- Ensure dual naming provides complete pedagogical context

**Session Name Reference:**
| Session | Technical Name | Student-Friendly Name |
|---------|---------------|----------------------|
| 1 | Welcome to React Development | Setting Up Your Trivia Game |
| 2 | Creating Reusable Components | Building Game Components |
| 3 | Shared State with Context | Managing Game Flow |
| 4 | Data-Driven Design | Configuring Game Zones |
| 5 | Connecting to External APIs | Generating Dynamic Questions |
| 6 | Browser Storage & Caching | Adding Question Caching |
| 7 | Building Complex Interactive Components | Creating the Quiz Experience |
| 8 | Application State Management | Implementing Scoring & Victory |
| 9 | Custom Hooks & Browser APIs | Adding Theme Music |
| 10 | Version Control & Deployment | Publishing Your Game |
| 11 | Choose Your Adventure | Extending Your Game |
| 12 | Project Showcase & Next Steps | Celebrating Your Achievement |

### Step 2: Map Session Flow
Create a table showing:
- Session number
- Main topic/focus
- Key deliverables/outcomes

### Step 3: Verify Previous Session Recaps
For each SESSION-XX-instruction.md (starting with SESSION-02):
- Check if Slide 2 "Previous Session Recap" accurately reflects the previous session's main outcomes
- Verify the recap mentions the correct deliverables from the prior session
- Ensure the recap sets up the current session logically

### Step 4: Verify What's Next Slides
For each SESSION-XX-instruction.md (except the final session):
- Check if the "What's Next" slide accurately previews the next session's focus
- Verify it mentions the correct upcoming topics/activities
- Ensure it creates appropriate anticipation without over-promising

### Step 5: Check Section Ordering Consistency
For each SESSION-XX-instruction.md:
- Verify Learning Outcomes, Instruction overview, and Slide Deck Outline sections follow the same logical order
- Check that concepts are introduced in consistent sequence across all three sections
- Ensure slide order matches the learning progression outlined in Learning Outcomes
- Flag any sections where topics appear in different orders or are missing from one section

### Step 6: Check Session Boundaries
Identify any:
- Missing connections between sessions
- Contradictory information across sessions
- Gaps in the learning progression
- Overly detailed or vague transitions

## Output Format
For each issue found, provide:
```
SESSION-XX[-instruction].md - [NAMING/RECAP/NEXT/TONE/ORDER] - Line X
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
- **List Indentation**: Is all content following numbered and non-numbered list items properly indented with 3 spaces to maintain grouping under the bullet point?
- **Section Ordering Consistency**: Do Learning Outcomes, Instruction, and Slide Deck Outline sections follow the same logical order?
- **File Saving References**: Are students directed to save files?
  - Flag any instructions telling students to "Save the file" or "Save your changes"
  - Files are automatically saved in Codespaces
- **Ask the AI Question Novelty**: Are Ask the AI questions already answered in the session content?
  - Flag questions where the answer is explicitly provided in the preceding material
  - Example: Don't ask "How does async/await make code easier to work with?" if the session already states "async/await makes asynchronous code easier to read and debug"
  - Questions should explore concepts beyond what's directly explained in the guide
- **Code Block Commenting Standards**: Do code blocks follow proper commenting guidelines?
  - Use terse, action-based inline comments with standard `//` format
  - Avoid confusing `{/* */}` style comments in JSX
  - Only comment new lines to add or existing lines to change
  - Do not include comments solely to explain code or concepts
  - Comments should indicate what students will actually do: `// Add this function`, `// Add cache check`, `// Update this line`
  - Flag explanatory comments that don't guide student actions
- **Tone and Audience Appropriateness**: Is content engaging and relatable for 13-18 year olds?
  - Check "Why This Matters" sections use conversational, empowering language
  - Verify metaphors and examples resonate with teenage experiences
  - Ensure tone avoids corporate jargon, academic dryness, and excessive exclamations
  - Confirm genuine excitement and capability-building focus rather than abstract professional development
  - Flag overly cheesy language or excessive use of "awesome/super/amazing" without substance

### List Indentation Check
For each SESSION-XX.md student guide and SESSION-XX-instruction.md instructor guide:
- Verify that code blocks, explanatory text, "Test" paragraphs, and any other content following numbered and non-numbered list items are indented with exactly 3 spaces
- Check that this indentation maintains proper visual grouping under the bullet point
- Ensure consistent indentation across all list sections in each guide
- Report any instances where content is not properly aligned with the list item structure

### Step 7: Verify Essential Terms Ordering
For each SESSION-XX.md student guide:
- Check if Essential Terms table follows logical learning progression
- Verify terms are grouped by related concepts (foundational → data formats → tools → implementation)
- Ensure ordering matches the conceptual flow from "what" to "how" to "implementation details"
- Confirm ordering aligns with how concepts are introduced in the session content

### Step 8: Evaluate Tone and Audience Appropriateness
For each SESSION-XX.md student guide:
- Review "Why This Matters" sections for engaging, conversational tone appropriate for teenagers
- Check for relatable metaphors and examples (detective work, X-ray vision, digital breadcrumbs, etc.)
- Verify language is empowering and capability-focused rather than abstract or corporate
- Ensure content connects to familiar teenage experiences and builds genuine excitement about technology
- Flag overly formal, academic, or dry explanations that could be made more engaging
- Flag excessive exclamations, overuse of "awesome/super/amazing", or language that feels forced or cheesy
- Ensure enthusiasm feels natural and respects the audience's intelligence

Review all session guides and report any continuity, ordering, or tone issues found.