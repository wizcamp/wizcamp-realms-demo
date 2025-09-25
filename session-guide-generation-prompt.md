# Session Guide Generation Prompt

## Objective
Generate SESSION-XX.md (student guide) and SESSION-XX-instruction.md (instructor guide) that follow established patterns exactly.

## Prerequisites
1. Read existing session guides to understand format, structure, voice, and style
2. Reference session naming conventions and quality standards below

## Session Naming Convention
**Student Guides (SESSION-XX.md):**
- **Primary Title**: Student-friendly, game-centric name that emphasizes what students are building/achieving
- **Format**: `# Session X — [Student-Friendly Name]`
- **Subtitle**: Technical concept (smaller text, provides educational context)
- **Subtitle Format**: `[Technical Concept] 🎯`

**Instructor Guides (SESSION-XX-instruction.md):**
- **File Title**: Use technical name: `# Session X Instructor Guide: [Technical Name]`
- **Slide 1 Heading**: Use technical name with topic emoji: `### **Slide 1: [Technical Name] [emoji]**`
- **Last Slide Heading**: Use format: `### **Slide X: What's Next - [Next Session Technical Name] [emoji]**`
- **Slide Titles**: Include both names for complete pedagogical context
- **Format**: `"Session X: [Technical Name] — [Student-Friendly Name]"`
- **Session Recaps**: Reference student-friendly names from previous sessions
- **Emoji Usage**: Match emoji to session topic (🧩 components, 🧠 state, 🌐 APIs, ⚡ caching, etc.)

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

### Structure and Format
- Follow SESSION-01.md structure: Table of Contents, step-by-step sections, "Why This Matters", "Bonus Challenge"
- Use student-friendly name as primary title, technical concept as subtitle
- Table of Contents: Include all sections with anchor links EXCEPT "Access Your Codespace"
- Essential Terms table with consistent definitions and session-specific "Why it matters"
- "Ask the AI" section with 5-7 high-impact questions

### Content Standards
- Practical, hands-on approach with clear numbered steps
- No file saving instructions (auto-saved in Codespaces)
- 3-space indentation for all content following list items
- Multi-line code blocks require language qualifiers (```javascript, ```bash, ```json)
- Use `javascript` for React/JSX (better PDF syntax highlighting than `jsx`)
- Backticks only for actual code identifiers students type

### Code Standards

**Commenting (multi-line blocks only):**
- Use `//` format for action-based guidance: `// Add this function`, `// Update this line`
- Comment only new/changed lines, not explanatory concepts
- Apply only to complex logic blocks (3+ lines)

**Formatting:**
- **Code identifiers**: Use backticks (`GameButton`, `useGame`, `className="game-over"`)
- **Concepts/technologies**: No backticks (**Components**, **React**, **APIs**)
- **File references**: Always use backticks (`src/components/GameOver.jsx`)
- **Rationale**: Backticks mark what students type; concepts use regular emphasis

### Essential Terms Standards

**Format and Style:**
- Proper capitalization: "component", "Codespace", "Node.js" (not "node")
- Spell out acronyms: "Hot Module Replacement (HMR)"
- Format: emoji + term + definition + session-specific relevance
- Bold first use in body text, unemphasized thereafter

**Consistency:**
- Identical definitions across sessions (vary only "Why it matters")
- Logical learning progression order (not alphabetical)
- Group related concepts: foundational → data formats → tools → implementation

## Instructor Guide Requirements (SESSION-XX-instruction.md)

### Structure
- **File title**: Use technical name: `# Session X Instructor Guide: [Technical Name]`
- Follow SESSION-01-instruction.md: Learning Outcomes, Instruction overview, Slide Deck Outline
- Include "[HANDS-ON WORK HAPPENS HERE]" marker
- **Slide 1**: Technical name with topic emoji: `### **Slide 1: [Technical Name] [emoji]**`
- **Last Slide**: `### **Slide X: What's Next - [Next Session Technical Name] [emoji]**`
- Use dual naming in slide titles, reference student-friendly names in recaps
- Maintain consistent concept ordering across all three sections

### Learning Outcomes Standards
- **Action-oriented**: Start with verbs ("Define," "Explain," "Create," "Apply")
- **Concise**: One line per outcome, focus on ability not task completion
- **Brief**: Avoid technical details, tool names, or implementation specifics
- **Consistent**: Use patterns like "Define X as Y," "Explain how X works"
- **Scope**: 10-15 outcomes per session

**Example:**
✅ "Create a functional component with multiple prop types"
❌ "Create a functional component with multiple prop types (text, onClick, variant) using destructuring syntax and default parameters"

## Ask the AI Guidelines
- **Scope**: 5-7 high-impact questions that deepen understanding
- **Focus**: Core concepts from the session, encourage "why" and "how" exploration
- **Style**: Conversational, student-friendly language
- **Format**: Simple bullet points with bold questions

**Examples:**
✅ "**What makes React components reusable and why is that important?**"
❌ Exhaustive categorized lists with 20+ questions

## Tone and Audience Guidelines
**Target Audience**: 13-18 year olds getting their first taste of real-world web development

### Voice and Style
- **Conversational and encouraging** - relatable without being overly casual
- **Genuine excitement** about technology, practical problem-solving, and building useful things
- **Empowering language** that builds confidence and capability
- **Natural enthusiasm** that respects the audience's intelligence

### "Why This Matters" Sections
- Use engaging metaphors teenagers can relate to: "detective work," "X-ray vision," "digital breadcrumbs"
- Connect to familiar experiences: apps they use, problems they've encountered
- Focus on skill-building and empowerment rather than abstract career preparation
- Use LEGO/building block analogies where appropriate

### Language to Avoid
- **Formal/corporate terms**: "professional," "enterprise," "industry-standard," "production-ready"
- **Empty adjectives**: "effective," "smart," "good" when they add no descriptive value
- **Academic dryness**: overly technical explanations without context
- **Forced enthusiasm**: excessive exclamations or overuse of "awesome/super/amazing"

### Language to Use
- **Direct, descriptive terms**: "Development Workflow" not "Effective Workflow"
- **Standard nomenclature**: "Best Practice" is acceptable technical terminology
- **Specific descriptions**: "Cache Management" not "Smart Cache Management"
- **Clear examples and code snippets** with hands-on application focus

## Consistency Requirements

### Term Definitions
- **Primary source**: Student guide Essential Terms are authoritative
- **Cross-guide alignment**: Instructor guides must use compatible definitions
- **Process**: Write student Essential Terms first, then align instructor content

### Quality Standards
- Clear progression from simple to complex concepts
- Consistent section ordering across all guide sections
- Hands-on focus with practical examples
- Terminology consistency with previous sessions