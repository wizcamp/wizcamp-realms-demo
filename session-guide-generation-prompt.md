# Session Guide Generation Prompt

## Task
Generate both student guide (SESSION-XX.md) and instructor guide (SESSION-XX-instruction.md) for the specified session.

## Required Steps
1. First read SESSION-01.md and SESSION-01-instruction.md to understand the exact format, structure, voice, and style
2. Generate both files following the established patterns exactly

## Session Naming Convention
**Student Guides (SESSION-XX.md):**
- **Primary Title**: Student-friendly, game-centric name that emphasizes what students are building/achieving
- **Format**: `# Session X — [Student-Friendly Name]`
- **Subtitle**: Technical concept (smaller text, provides educational context)
- **Subtitle Format**: `[Technical Concept] 🎯`

**Instructor Guides (SESSION-XX-instruction.md):**
- **Slide Titles**: Include both names for complete pedagogical context
- **Format**: `"Session X: [Technical Name] — [Student-Friendly Name]"`
- **Session Recaps**: Reference student-friendly names from previous sessions

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

## Student Guide Requirements (SESSION-XX.md)
- Follow SESSION-01.md structure: Table of Contents with anchor links, step-by-step sections, "Why This Matters" explanations, "Bonus Challenge" sections
- Use the same engaging, conversational tone and emoji usage
- **Apply naming convention**: Use student-friendly name as primary title, technical concept as subtitle
- Include Essential Terms table with consistent definitions (match previous sessions exactly, "Why it matters" can vary for context)
- Include "Ask the AI" section with 5-7 high-impact questions for deeper learning
- End with "Pro Tip" section
- Use practical, hands-on approach with clear numbered steps
- **Do not instruct students to save files** - files are automatically saved in Codespaces
- **All content following numbered and non-numbered list items must be properly indented** - indent code blocks, Test paragraphs, explanatory text, and any other content with 3 spaces to align with list item content and maintain proper grouping under the bullet point
- **All multi-line code blocks must include language qualifiers** - use ```javascript, ```bash, ```json, etc. for proper syntax highlighting and consistency. Use `javascript` for all React/JSX code blocks as `jsx` provides poor syntax highlighting in PDF output
- **Apply code formatting rule consistently** - always use backticks for code elements, even inside bold text, following industry documentation standards

### Code Block Commenting Standards
- Use terse, action-based inline comments with standard `//` format
- **AVOID** confusing `{/* */}` style comments in JSX
- **ONLY** comment new lines to add or existing lines to change
- **DO NOT** include comments solely to explain code or concepts
- Focus on reducing cognitive load while providing clear, simple, unambiguous guidance
- Comments should indicate what students will actually do: `// Add this function`, `// Add cache check`, `// Update this line`
- Remove explanatory comments that don't guide student actions

### Code Formatting Rule
**Use backticks only for actual code identifiers that students type in their codebase:**

- **Code identifiers get backticks**: Component names, function names, props, constants that appear in code
  - ✅ "Use the `GameButton` component with `variant="primary"`"
  - ✅ "Access `score` from the `useGame` hook"
  - ✅ "Import `SCREENS` constant"
  - ✅ "Add `className="game-over"`"

- **Conceptual terms and technologies stay as regular text**: Even when emphasized
  - ✅ "**Components** are reusable UI elements" (concept, not code)
  - ✅ "**React** uses a virtual DOM" (technology name)
  - ✅ "**State** lets components remember information" (concept)
  - ✅ "**APIs** provide data" (concept)

- **File references**: Always use backticks
  - ✅ "Open `src/components/GameOver.jsx`"
  - ✅ "Look at `SplashScreen.jsx` for patterns"

**Rationale**: Backticks should only mark things students literally type in code. Conceptual terms, technology names, and general programming concepts should use regular emphasis to avoid confusion between code and concepts.

### Essential Terms Table Standards
- Terms use proper capitalization: lowercase for common terms, proper case for product names (e.g., "component", "Codespace", "Vite", "Node.js")
- Acronyms should be spelled out in full (e.g., "Hot Module Replacement (HMR)", "Document Object Model (DOM)")
- Term column should not wrap - adjust table formatting to prevent wrapping
- Definitions must match exactly if the term appears in multiple sessions
- "Why it matters" column should be unique to each session's context
- First use of essential terms in body text should be **bolded**, subsequent uses unemphasized
- Use "Node.js" for the technology, not "node" (which refers to the binary)
- Format: emoji + term + definition + session-specific relevance

### Essential Terms Ordering
- Order terms to follow **logical learning progression** rather than alphabetical order
- Group related concepts together (e.g., foundational concepts → data formats → tools → implementation details)
- Follow the conceptual flow from "what" to "how" to "implementation details"
- Match the order in which concepts are introduced in the session content
- Examples of good ordering:
  - SESSION-02: component → props → JSX → className → destructuring → template literals → default parameters → React DevTools
  - SESSION-05: API → HTTP request → JSON → URI → URL encoding → Fetch API → asynchronous programming → async/await → promise

## Instructor Guide Requirements (SESSION-XX-instruction.md)
- Follow SESSION-01-instruction.md structure: Learning Outcomes, Instruction overview, detailed Slide Deck Outline
- Include "[HANDS-ON WORK HAPPENS HERE]" marker
- No time estimates or management details
- **Apply naming convention**: Use dual naming in slide titles, reference student-friendly names in session recaps
- **Section Ordering Consistency**: Ensure Learning Outcomes, Instruction overview, and Slide Deck Outline sections follow the same logical order
  - Concepts should be introduced in consistent sequence across all three sections
  - Slide order must match the learning progression outlined in Learning Outcomes
  - Each section should build upon the previous in a coherent flow

## Learning Outcomes Standards
Format learning outcomes to match SESSION-01 and SESSION-02 standards:
- Use concise, action-oriented language - Start with verbs like "Define," "Explain," "Create," "Apply," "Experience"
- Avoid pedantic technical details - No specific tool names, version numbers, or implementation specifics (e.g., avoid "specifically ednf" or "using template literals and dynamic values")
- Keep descriptions brief - One line per outcome, focus on what students will be able to do
- Use consistent verb patterns - "Define X as Y," "Explain how X works," "Create X with Y"
- Avoid redundant qualifiers - Remove phrases like "including but not limited to" or overly detailed explanations
- Focus on learning, not doing - Emphasize understanding and ability rather than just task completion
- Maintain 10-15 outcomes per session - Enough to be comprehensive without being overwhelming

### Learning Outcomes Examples
✅ Good: "Create a functional component with multiple prop types"
❌ Poor: "Create a functional component with multiple prop types (text, onClick, variant) using destructuring syntax and default parameters"

Consistency check: Compare new learning outcomes against SESSION-01-instruction.md and SESSION-02-instruction.md for similar brevity and specificity levels.

## Ask the AI Section Guidelines
- Provide 5-7 of the most salient, impactful questions a student could ask their coding assistant
- Focus on questions that deepen understanding of core concepts from the session
- Avoid exhaustive lists - prioritize quality over quantity
- Questions should be practical and directly related to what students just accomplished
- Use conversational, student-friendly language
- Questions should encourage deeper exploration of "why" and "how" concepts work
- Format as simple bullet points with bold questions

### Ask the AI Examples
✅ Good: "**What makes React components reusable and why is that important?**"
✅ Good: "**How do props work in React and why are they read-only?**"
❌ Poor: Exhaustive categorized lists with 20+ questions

## Content Guidelines
- Match the established voice: encouraging, professional, practical
- Use LEGO/building block analogies where appropriate
- Include "Why This Matters" explanations for key concepts
- Provide clear examples and code snippets
- Focus on hands-on learning and immediate application
- Maintain consistency with previous sessions' terminology and definitions

## Tone and Audience Guidelines
- **Target Audience**: 13-18 year olds getting their first taste of real-world web development
- **Tone**: Conversational, encouraging, and relatable - avoid overly formal or academic language
- **"Why This Matters" Sections**: Use engaging metaphors and real-world connections teenagers can relate to
  - Examples: "You're basically becoming a detective", "debugging skills", "digital breadcrumbs", "like having X-ray vision"
  - Connect to familiar experiences: apps they use, problems they've encountered, skills that build confidence
  - Focus on empowerment and capability building rather than abstract professional development
- **Avoid**: Corporate jargon, overly technical explanations without context, dry academic tone, excessive exclamations or "awesome/super" language
- **Embrace**: Genuine excitement about technology, practical problem-solving, building useful things, gaining real skills
- **Balance**: Enthusiastic but not cheesy - use natural, conversational language that respects the audience's intelligence

## Essential Terms Consistency
- Use identical definitions from previous sessions for repeated terms
- Only vary the "Why it matters" column to reflect session context
- Add new terms following the established emoji + definition + relevance format
- Order terms by logical learning progression, not alphabetically

## Term Definition Consistency Standard
**Critical Requirement**: Ensure identical technical terms use consistent definitions between student and instructor guides.

### Implementation Guidelines:
- **Primary Source**: Student guide Essential Terms definitions are authoritative
- **Instructor Guide Alignment**: All concept explanations in SESSION-XX-instruction.md must align with corresponding Essential Terms definitions from SESSION-XX.md
- **Learning Outcomes Consistency**: Use terminology that matches Essential Terms definitions exactly
- **Slide Content Alignment**: Instructor slide explanations should reflect the same conceptual understanding as student Essential Terms
- **Cross-Reference Check**: When writing instructor guides, reference the student guide's Essential Terms to ensure definitional consistency

### Quality Check Process:
1. Write student guide Essential Terms first with clear, comprehensive definitions
2. Use those definitions as the foundation for instructor guide concept explanations
3. Ensure Learning Outcomes use identical terminology and conceptual framing
4. Verify slide content aligns with established definitions
5. Flag any definitional discrepancies for resolution

**Example**: If student guide defines "application state" as "the complete condition of an application at a specific moment in time, encompassing all the information it needs to function correctly," the instructor guide must use compatible language and not introduce conflicting definitions.

## Quality Standards
- Engaging and age-appropriate for 13-18 year olds with conversational, relatable tone
- Clear progression from simple to complex concepts
- Practical examples students can relate to (apps they use, problems they've solved)
- Real-world applications framed as exciting opportunities and skill-building rather than abstract career preparation
- "Why This Matters" sections should inspire and empower, using metaphors and language that resonates with teenagers
- **Consistent section ordering** across Learning Outcomes, Instruction, and Slide Deck Outline for maximum comprehensibility
- **Term definition consistency** between student and instructor guides to prevent confusion and ensure coherent learning experience