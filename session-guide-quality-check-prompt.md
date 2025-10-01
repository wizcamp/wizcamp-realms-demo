# Session Guide Quality Check Prompt

## Objective
Verify session continuity, naming conventions, and content quality across all SESSION-XX.md and SESSION-XX-instruction.md files.

## Critical Areas
1. Session naming conventions and references
2. Previous session recaps and next session previews
3. Content consistency and tone appropriateness
4. Technical formatting and standards compliance

## Review Process

### Step 1: Verify Session Naming Convention
For each SESSION-XX.md student guide:
- Check title format: `# Session X — [Student-Friendly Name]`
- Check subtitle format: `[Technical Concept] [emoji]` (emoji should match instructor guide)
- Verify student-friendly name emphasizes what students are building/achieving
- Verify technical concept provides educational context without overwhelming

For each SESSION-XX-instruction.md instructor guide:
- Check file title format: `# Session X Instructor Guide: [Technical Name]`
- Check Slide 1 heading format: `### **Slide 1: [Technical Name] [emoji]**` (technical name with topic emoji)
- Check last slide heading format: `### **Slide X: What's Next - [Next Session Technical Name] [emoji]**`
- Verify emojis are consistent between student and instructor guides for each session
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

## Quality Check Categories

### 1. Content Continuity
- **Accuracy**: Recaps/previews match actual session content
- **Flow**: Sessions connect logically
- **Consistency**: Similar concepts described identically across sessions
- **Completeness**: All major outcomes/previews covered

### 2. Technical Formatting
- **File titles**: Instructor guides use `# Session X Instructor Guide: [Technical Name]`
- **Slide headings**: Slide 1 and last slide follow correct format with emojis matching student guides
- **Code blocks**: Include language qualifiers (```javascript, ```bash, ```json)
- **List indentation**: 3-space indentation for content following list items
- **Code formatting**: Backticks only for code identifiers, not concepts
- **Prettier standards**: Semicolons, double quotes, proper arrow function syntax

### 3. Content Standards
- **File saving**: No manual save instructions (auto-saved in Codespaces)
- **Ask the AI**: Use format `## 🤖 Ask the AI — [Student-Friendly Name]` where Student-Friendly Name matches the Session Name Reference table, and questions explore beyond what's directly explained
- **Code comments**: Action-based guidance only, not explanatory
- **Essential terms**: Logical learning progression order
- **Command patterns**: Follow standardized instruction formats for consistency
- **Section naming**: Use consistent gerund verb forms and established patterns

### 6. Command Pattern Standards
- **File operations**: Use `**Open `src/path/file.jsx`**` format with backticks for file paths
- **Code modifications**: Use `**Add [specific element]**`, `**Update [specific target]**`, `**Replace [old] with [new]**` patterns
- **UI interactions**: Use `**Open DevTools**: Press F12 or right-click → Inspect` format
- **Testing**: Use `**Test**: [Specific expected behavior]` or `**Verify**: [Specific outcome]` patterns
- **User actions**: Use `**Click [specific element]**`, `**Navigate to [location]**` patterns
- **External links**: Use `**Visit [URL]**: Visit [https://example.com](https://example.com)` format

### 4. Tone and Audience
- **Voice**: Conversational, empowering for 13-18 year olds
- **Language**: Direct terms without empty adjectives ("Development Workflow" not "Effective Workflow")
- **Avoid**: "like a pro", "professional," "enterprise," "industry-standard," "production-ready", "master", "expert", "mastery"
- **Accept**: "Best Practice" as standard nomenclature

### 5. Cross-Guide Consistency
- **Emoji alignment**: Student guide emojis match corresponding instructor guide emojis
- **Term definitions**: Student Essential Terms align with instructor explanations
- **Section ordering**: Learning Outcomes, Instruction, Slides follow same sequence
- **Terminology**: Consistent usage across all guides

## Execution Steps

### Step 1-6: Core Verification
(Follow existing steps 1-6 for naming conventions, session flow, recaps, previews, ordering, and boundaries)

### Step 7: Technical Standards Check
- **Code formatting**: Language qualifiers, indentation, backtick usage
- **Content standards**: File saving commands, comment guidelines, Essential Terms ordering
- **Prettier compliance**: Semicolons, quotes, arrow functions (standalone code blocks only)

### Step 8: Tone and Consistency Review
- **Audience appropriateness**: Age-appropriate language and examples
- **Term consistency**: Student Essential Terms align with instructor explanations
- **Language quality**: Direct terms without empty adjectives or formal jargon

### Step 9: Command Pattern Verification
- **File operations**: Verify consistent use of backticks for file paths in Open/Create commands
- **Code modifications**: Check for standardized Add/Update/Replace patterns
- **UI interactions**: Ensure consistent DevTools, Click, Navigate command formats
- **Testing language**: Verify use of Test/Verify patterns with specific expected behaviors

### Step 10: Section Naming Verification

**Section Naming Standards for Student Guides (SESSION-XX.md):**

**Preferred Gerund Forms:**
- "Building [Feature]" ✅ not "Build [Feature]" ❌
- "Adding [Functionality]" ✅ not "Add [Functionality]" ❌
- "Creating [Component]" ✅ not "Create [Component]" ❌
- "Testing [System]" ✅ not "Test [System]" ❌
- "Implementing [Logic]" ✅ not "Implement [Logic]" ❌
- "Exploring [Concept]" ✅ not "Explore [Concept]" ❌
- "Installing [Tool]" ✅ not "Install [Tool]" ❌
- "Updating [Code]" ✅ not "Update [Code]" ❌

**Established Conceptual Patterns:**
- "Understanding [Concept]" for conceptual sections
- "Understanding State vs Props", "Understanding APIs and External Data"
- "Understanding Asynchronous Programming", "Understanding Custom Hooks"

**Protected Sections (Do Not Change):**
- "Essential Terms" - always keep as-is
- "Ask the AI — [Student-Friendly Name]" - always keep as-is
- "Access Your Codespace" - always keep as-is
- "Choose Your Own Adventure" - always keep as-is

**Verification Steps:**
- **Gerund consistency**: Check all section headings use gerund verb forms
- **Pattern adherence**: Verify conceptual sections follow "Understanding [Concept]" pattern
- **Exception handling**: Confirm protected sections remain unchanged
- **Cross-session consistency**: Ensure similar section types use identical naming patterns

## Output
Report issues using format:
```
SESSION-XX[-instruction].md - [CATEGORY] - Line X
Issue: [Description]
Should be: [Correction]
```