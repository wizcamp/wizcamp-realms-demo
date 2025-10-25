# Solo Mission Pattern

**Use when:** Students apply learned concepts independently with minimal guidance to build confidence and assess understanding.

---

## Purpose

Solo Missions provide structured independence where students synthesize multiple concepts without step-by-step instructions. This pattern bridges guided learning and autonomous development, building confidence through achievable challenges.

---

## Core Principles

### 1. Scaffolded Independence
- Provide clear success criteria without prescriptive steps
- Reference existing patterns students can adapt
- Balance challenge with achievability

### 2. Progressive Disclosure
- Start with what to build (the goal)
- Provide building blocks (what's needed)
- Offer verification points (how to test)
- Include references (where to look)

### 3. Cognitive Load Management
- Break complex tasks into logical phases
- Use visual hierarchy to organize information
- Provide quick-reference materials
- Minimize extraneous cognitive load

---

## Structure

### Required Components

```markdown
## 🎖️ Solo Mission: [Feature Name]

[Brief motivational intro - 1-2 sentences connecting to prior learning]

### What You're Building

[Clear description of the end goal - what the feature does and why it matters]

<img src="https://placehold.co/600x400?text=[Description]" alt="[Descriptive alt text]" style="max-width: 600px; width: 100%;">
*Figure: [Caption reinforcing what students will build]*

---

### Phase 1: [Phase Name]

🎯 **Goal:** [What this phase accomplishes]

**Your Tasks:**

1. Task 1 with specific details
2. Task 2 with specific details
3. Task 3 with specific details
4. Nested sub-tasks when needed:
   - Sub-task detail
   - Sub-task detail

**Test:** [How to verify this phase works]

---

### Phase 2: [Phase Name]

🎯 **Goal:** [What this phase accomplishes]

**Your Tasks:**

1. Task 1 with specific details
2. Task 2 with specific details

**Test:** [How to verify this phase works]

---

### ✅ Success Review

Your [feature name] should:

- Criterion 1
- Criterion 2
- Criterion 3
- Criterion 4
- Criterion 5

### 🔍 Reference Guide

- **File.jsx** – Pattern 1, Pattern 2, Pattern 3
- **File2.jsx** – Pattern 4, Pattern 5
- **File3.jsx** – Pattern 6, Pattern 7
```

---

## Design Rationale

### Why Phases Instead of Steps?

**Steps** imply a single correct path and prescriptive actions.  
**Phases** suggest logical groupings while allowing student agency in implementation order.

### Why Phases at Top Level?

Phases as primary sections (not nested under "Building Blocks") create cleaner visual hierarchy and make the structure more scannable. Each phase stands on its own with clear goal, requirements, and testing.

### Why Success Checklist?

Provides clear completion criteria without dictating implementation approach, allowing multiple valid solutions.

---

## Pedagogical Foundation

### Bloom's Taxonomy Alignment

Solo Missions target higher-order thinking:
- **Apply:** Use learned patterns in new contexts
- **Analyze:** Break down requirements into components
- **Create:** Synthesize multiple concepts into working features

### Zone of Proximal Development

- **Scaffolding:** References and building blocks provide support
- **Challenge:** No step-by-step instructions require problem-solving
- **Achievability:** All required knowledge was taught in prior sessions

### Cognitive Load Theory

- **Intrinsic load:** Managed through phases and building blocks
- **Extraneous load:** Minimized through clear organization and references
- **Germane load:** Maximized through synthesis and application

---

## Writing Guidelines

### Do's

✅ Use clear, action-oriented language  
✅ Provide specific, detailed requirements  
✅ Reference concrete examples from prior work  
✅ Break complex features into 3 logical phases  
✅ Include verification points for each phase  
✅ Keep intro brief and motivational  
✅ Use emojis for visual hierarchy (🎖️, 🎯, ✅, 🔍)  
✅ Add visual placeholder showing completed work in context  
✅ Use horizontal rules (---) to separate phases  

### Don'ts

❌ Provide step-by-step instructions  
❌ Include code examples (except in references)  
❌ Use vague requirements ("make it work")  
❌ Create more than 3-4 phases  
❌ Skip testing guidance  
❌ Add unnecessary "What You'll Need" section  
❌ Include encouraging callouts (keep it concise)  
❌ Omit visual placeholder figure  

---

## Visual Placeholder Standards

### Purpose
Provides students with a visual reference of what their completed work should look like in context.

### Format
```markdown
<img src="https://placehold.co/[width]x[height]?text=[Description]" alt="[Descriptive alt text]" style="max-width: 600px; width: 100%;">
*Figure: [Caption reinforcing what students will build]*
```

### Guidelines
- **Dimensions**: 500x350 to 600x400 depending on content
- **Service**: Use placehold.co for consistency
- **Description**: Brief text describing the component/feature
- **Alt text**: Detailed description of what the figure shows
- **Caption**: Reinforces the learning goal
- **Placement**: Immediately after "What You're Building" section, before first horizontal rule

### Examples
```markdown
<img src="https://placehold.co/600x400?text=GameOver+Screen+with+Score+and+Play+Again+Button" alt="GameOver component showing congratulations message, final score display, and Play Again button" style="max-width: 600px; width: 100%;">
*Figure: Your completed GameOver screen will display the final score and allow players to restart*
```

---

## Example: GameOver Component

See SESSION-08.md for complete implementation.

**Key features:**
- 3 logical phases (Foundation, Score Display, Play Again Button)
- Visual placeholder showing completed component
- Clear requirements for each phase
- Specific testing instructions using React DevTools
- Reference guide to similar patterns
- Horizontal rules separating phases

---

## Accessibility Considerations

### Visual Hierarchy

- Use headings to create scannable structure
- Employ consistent formatting for similar elements
- Provide white space between sections

### Cognitive Accessibility

- Chunk information into digestible pieces
- Use familiar terminology from prior sessions
- Provide multiple entry points (phases, checklist, references)

### Success Indicators

- Clear, testable criteria
- Multiple verification methods
- Concrete examples to reference

---

## Variations

### Difficulty Levels

**Beginner Solo Mission:**
- More detailed building blocks
- Explicit testing instructions
- More reference examples

**Advanced Solo Mission:**
- Broader requirements
- Less prescriptive testing
- Fewer references (encourage exploration)

### Time Constraints

**In-Session Solo Mission:**
- 3 phases maximum
- Clear 15-20 minute scope
- Quick verification methods

**Extended Solo Mission:**
- 4-5 phases
- Multiple features
- Comprehensive testing

---

## Common Pitfalls

### Too Prescriptive
**Problem:** Requirements read like step-by-step instructions  
**Solution:** Focus on "what" not "how"

### Too Vague
**Problem:** Students don't know where to start  
**Solution:** Add building blocks and references

### Missing Verification
**Problem:** Students can't tell if they succeeded  
**Solution:** Include specific test criteria for each phase

### Cognitive Overload
**Problem:** Too many requirements at once  
**Solution:** Break into smaller phases with clear goals

---

## Integration with Other Patterns

Solo Missions often follow:
- **Iterative Build** - Apply patterns just learned
- **Integration** - Synthesize multiple systems

Solo Missions prepare for:
- **Advanced features** - Build confidence for complexity
- **Independent projects** - Develop autonomous skills

---

## Assessment Value

Solo Missions serve as formative assessment:
- Reveal understanding gaps
- Show pattern recognition
- Demonstrate synthesis ability
- Build metacognitive skills

Instructors can observe:
- Which phases cause difficulty
- Common misconceptions
- Time to completion
- Solution approaches

---

## Success Metrics

A well-designed Solo Mission:
- ✅ Most students complete within time limit
- ✅ Students reference prior work effectively
- ✅ Multiple valid solutions emerge
- ✅ Students report feeling challenged but capable
- ✅ Completion demonstrates session objectives

---

## Revision Checklist

Before publishing a Solo Mission:

- [ ] Goal is clear and motivating
- [ ] All required knowledge was taught previously
- [ ] Phases are logical and achievable
- [ ] Requirements are specific but not prescriptive
- [ ] Testing instructions are concrete
- [ ] References point to relevant examples
- [ ] Success checklist covers all requirements
- [ ] Encouraging callout provides context
- [ ] Estimated time is realistic (15-25 minutes)
- [ ] Visual hierarchy aids scanning

---

## Related Patterns

- **Iterative Build** - Provides the foundation Solo Missions build upon
- **Integration** - Often combined with Solo Missions for complex features
- **Conceptual** - Provides the "why" that Solo Missions apply

---

## Further Reading

- Bloom's Taxonomy (Anderson & Krathwohl, 2001)
- Zone of Proximal Development (Vygotsky, 1978)
- Cognitive Load Theory (Sweller, 1988)
- Problem-Based Learning (Barrows, 1996)
