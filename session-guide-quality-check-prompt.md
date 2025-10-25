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
| 0 | Pre-Camp Orientation | Getting Ready for Camp |
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
- **Code comments**: Follow detailed commenting guidelines below
- **Essential terms**: Logical learning progression order
- **Essential Terms table formatting**: Must use `| Term   | Definition | Why it matters |` with `|--------|------------|----------------|` to prevent emoji + term wrapping in PDFs; don't remove emojis
- **Bolding/emphasis**: Follow detailed bolding standards below
- **Command patterns**: Follow standardized instruction formats for consistency
- **Section naming**: Use consistent gerund verb forms and established patterns

### 3a. Commenting Guidelines
- **Only comment non-obvious logic**: Complex transformations, calculations, React-specific patterns, cache/state management
- **Use block comments above code**: Place explanatory comments on the line before, not inline
- **Use JSX comments for React patterns**: `{/* Fragment avoids wrapper div */}` for React-specific explanations
- **Focus on "why" not "what"**: Explain intent and reasoning, not obvious actions
- **Remove simple action comments**: No comments for imports, basic additions, obvious operations

**Examples of Comments to Remove:**
```javascript
// REMOVE THESE:
import HUD from "./components/HUD"; // Add this import
const [score, setScore] = useState(0); // Add score state
<GameButton text="Start" /> // Add this component
```

**Examples of Comments to Keep (with improved format):**
```javascript
// KEEP THESE (improved format):
// Prevent score from going negative
setScore((prev) => Math.max(0, prev - POINTS_PER_CORRECT));

{/* Fragment groups components without extra DOM wrapper */}
<>
  <GameMap />
  <HUD />
</>

// Transform API response into game-ready format
const questions = data.results.map(apiQuestion => transformQuestion(apiQuestion));
```

### 3b. Bolding/Emphasis Standards

**Essential Terms Bolding Verification:**
- **First introduction**: Essential terms must be bolded when first introduced in body text
- **Subsequent uses**: Should use regular text for repeated mentions within the same section
- **Cross-section**: Should be bolded again if term reappears in a different major section after significant gap
- **Essential Terms table**: Terms in table should NOT be bolded (formatting handled by table structure)

**Instructional Command Bolding Verification:**
- **Action verbs only**: Bold only the primary action verb, not entire phrases (`**Open** src/App.jsx`, `**Add** the import`, `**Watch** the screen update`)
- **File operations**: Bold only the operation verb (`**Create** the file:`, `**Update** the component`, `**Replace** the code`)
- **Testing commands**: Bold only the directive verb (`**Test**:`, `**Verify**:`, `**Watch**:`)
- **UI interactions**: Bold only the interaction verb (`**Click** the button`, `**Navigate** to the screen`)
- **Avoid over-bolding**: Do not bold entire instructional phrases, descriptions, or outcomes

**Concept Emphasis Verification:**
- **Technical concepts**: New programming concepts should be bolded on introduction (**state management**, **component composition**)
- **React-specific terms**: React terminology should be bolded on first use (**JSX**, **hooks**, **Context API**)
- **Avoid over-bolding**: Common terms like "function", "variable", "array" should not be bolded unless they're the focus of explanation

**Consistency Pattern Verification:**
- **Section introductions**: Key concept being taught should be bolded in section opening paragraphs
- **Explanatory callouts**: Main concept should be bolded in explanation boxes
- **Avoid bolding**: File paths (should use backticks), code snippets (should use backticks), generic programming terms

**Common Issues to Flag:**
- Essential terms not bolded on first introduction
- Action verbs in instructions not bolded
- Over-bolding of entire instructional phrases (should bold verb only)
- Over-bolding of common programming terms
- Inconsistent bolding of the same concept across sections
- Bolding used instead of backticks for code identifiers
- Terms bolded in Essential Terms table (should be unbolded)
- Entire outcomes/descriptions bolded instead of just action verbs

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

### Step 1-5: Core Verification
(Follow existing steps 1-5 for naming conventions, session flow, recaps, previews, ordering, and boundaries)

### Step 6: Technical Standards Check
- **Code formatting**: Language qualifiers, indentation, backtick usage
- **Content standards**: File saving commands, comment guidelines, Essential Terms ordering
- **Bolding/emphasis**: Essential terms bolded on first use, action verbs bolded in instructions, concepts appropriately emphasized
- **Instructional sections**: Verify command bolding in all hands-on sections (see Step 9)
- **Prettier compliance**: Semicolons, quotes, arrow functions (standalone code blocks only)

### Step 7: Tone and Consistency Review
- **Audience appropriateness**: Age-appropriate language and examples
- **Term consistency**: Student Essential Terms align with instructor explanations
- **Language quality**: Direct terms without empty adjectives or formal jargon

### Step 8: Section Naming Verification

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

### Step 9: Solo Mission Pattern Verification

**Solo Mission Structure Standards:**

All Solo Mission sections must follow this exact pattern:

**Required Components (in order):**
1. **Section heading**: `## 🎖️ Solo Mission: [Component/Feature Name]`
2. **Opening statement**: One sentence establishing independence (e.g., "You've built components with guidance — now it's your turn...")
3. **"What You're Building" subsection**: Clear description of end goal
4. **Visual placeholder**: Figure showing completed work in context (use placehold.co)
5. **Horizontal rule**: `---` separator before phases
6. **Phase structure**: Multiple phases (typically 3) with:
   - Phase heading: `### Phase X: [Phase Name]`
   - Goal statement: `🎯 **Goal:** [Clear objective]`
   - "Your Tasks" subheading with numbered task list
   - "Test" subheading with specific verification steps
   - Horizontal rule: `---` separator after each phase
7. **Success Review**: `### ✅ Success Review` with bulleted checklist
8. **Reference Guide**: `### 🔍 Reference Guide` with bulleted file references

**Visual Placeholder Standards:**
- Use placehold.co service: `https://placehold.co/[width]x[height]?text=[Description]`
- Dimensions: 500x350 to 600x400 depending on content
- Alt text: Descriptive explanation of what component shows
- Caption: Reinforces what students will build
- Format:
  ```markdown
  <img src="https://placehold.co/600x400?text=..." alt="..." style="max-width: 600px; width: 100%;">
  *Figure: [Caption text]*
  ```

**Phase Structure Standards:**
- Each phase focuses on one major feature/capability
- Goal statement clearly defines what phase accomplishes
- Tasks are specific, actionable steps (not vague instructions)
- Test section provides concrete verification steps
- Phases build progressively (foundation → features → integration)

**Success Review Standards:**
- Bulleted list of functional requirements
- Each bullet describes observable behavior
- Covers complete feature set
- Written in present tense ("should display", "should include")

**Reference Guide Standards:**
- Bulleted list of relevant files
- Each bullet: `**[FileName.jsx]** – [What to reference]`
- Points to similar patterns students have seen
- Helps students find examples without giving away answers

**Common Issues to Flag:**
- Missing "What You're Building" section
- Missing visual placeholder figure
- Using numbered list instead of phase structure
- Missing "Test" sections in phases
- Missing Success Review or Reference Guide
- Vague task descriptions ("implement functionality" vs specific steps)
- AI-assisted tasks not clearly marked or structured

### Step 10: Instructional Command Bolding Verification

**Hands-On Sections Subject to Command Bolding Standards:**

**Universal Sections (All Sessions):**
- Any section with numbered step-by-step instructions
- "Bonus Challenge" subsections with action items
- Testing and verification procedures

**Common Instructional Section Patterns:**
- "[Gerund] Your [Component/Feature]" (e.g., "Creating Your First Component", "Building Game Components")
- "[Gerund] [Technical Feature]" (e.g., "Adding Click Functionality", "Implementing Score Updates")
- "[Gerund] with [Tool/Method]" (e.g., "Testing with React DevTools", "Styling with Variants")
- "Installing [Tool]" sections
- "Using [Tool/Feature]" sections

**Session-Specific Instructional Sections:**
- **SESSION-01**: "Launching Your Codespace", "Starting the Development Server", "Replacing the Placeholder Component", "Updating the Page Title"
- **SESSION-02**: "Creating Your First Component", "Adding Click Functionality", "Styling with Variants", "Reusing Your Component", "Installing React DevTools"
- **SESSION-03**: "Adding Local State for Credits", "Adding Screen Navigation", "Using React DevTools for Exploring State", "Implementing Start Game Function"
- **SESSION-04**: "Adding the HUD and Coordinate Display", "Configuring Zone Metadata", "Positioning Zone Labels", "Testing with React DevTools"
- **SESSION-05**: "Building the Fetch Foundation", "Transforming API Data", "Testing Your API Integration"
- **SESSION-06**: "Building Cache Helper Functions", "Updating fetchQuestions with Caching", "Testing Your Cache"
- **SESSION-07**: "Connecting the Quiz Modal", "Building Answer Buttons", "Making Buttons Interactive", "Adding Feedback Messages", "Testing Your Quiz System"
- **SESSION-08**: "Adding Score Tracking", "Implementing Score Updates", "Adding Cache Clearing", "Updating Reset Functionality"
- **SESSION-09**: "Building the MusicToggle Component", "Adding Audio Reference to useAudio", "Implementing Audio Playback"
- **SESSION-10**: "Making This Project Yours", "Learning the Git Workflow", "Customizing Your Game Title", "Watching Your Deployment"

**Verification Requirements:**
- **Action verbs**: Must be bolded in numbered steps (`**Open**`, `**Add**`, `**Update**`, `**Test**`, `**Click**`)
- **Verb-only bolding**: Bold only the action verb, not entire phrases or outcomes
- **Consistency**: Same action types should use identical bolding patterns across all sessions
- **File operations**: File-related verbs must be bolded (`**Create**`, `**Import**`, `**Replace**`)
- **UI interactions**: Interface actions must be bolded (`**Navigate**`, `**Click**`, `**Find**`)

## Output
Report issues using format:
```
SESSION-XX[-instruction].md - [CATEGORY] - Line X
Issue: [Description]
Should be: [Correction]
```

**Bolding Issue Examples:**
```
SESSION-01.md - [BOLDING] - Line 45
Issue: "**Watch the screen update instantly**" - entire phrase bolded
Should be: "**Watch** the screen update instantly" - verb only bolded

SESSION-02.md - [BOLDING] - Line 78
Issue: "Add text prop to GameButton" - action verb not bolded
Should be: "**Add** text prop to GameButton" - action verb bolded
```