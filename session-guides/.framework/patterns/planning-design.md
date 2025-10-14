# Planning/Design Pattern

**Use when:** Students need to make creative design decisions or gather information before implementation.

**Key characteristics:**
- Bridge pattern between learning and implementation
- Structured organizer for capturing decisions
- Resource exploration (external links, documentation)
- Design considerations and tips
- Example completed organizer (optional)
- Explicit connection to next section
- Callout reinforces design thinking

---

## Pattern Structure

### Section Header

```markdown
## 🎨 Section Title

🎯 **Goal:** What students will plan/design and why it matters.

Brief context connecting to previous learning and explaining the planning purpose.
```

### Resource Exploration

```markdown
### Step 1: Explore [resource name]

Guidance for gathering information needed for design decisions.

[Links to external resources, API documentation, examples, etc.]
```

### Design Considerations

```markdown
### Step 2: Consider [constraints/context]

Explanation of design constraints, project context, or visual environments.

Bullet points or descriptions of what students should consider.
```

### Planning Organizer

```markdown
### Step 3: Plan your [items] using this organizer

For each [item], decide on the following properties. You can write these down, or use the AI to help brainstorm ideas:

**[Item 1 Name]**
- **property1**: _Description/guidance_
- **property2**: _Description/guidance_
- **property3**: _Description/guidance_

**[Item 2 Name]**
- **property1**: _Description/guidance_
- **property2**: _Description/guidance_

[Continue for all items...]
```

### Design Tips

```markdown
### Design Tips

**[Concept]** explanation:
- Tip 1
- Tip 2
- Tip 3
```

### Callout and Optional Bonus

```markdown
> 💡 **Design Before Implementation**
>
> Explanation of why planning matters, connection to professional practices, and what students are learning beyond just this task.

> 🏆 **Bonus Challenge**
>
> Optional creative extension or alternative approach.
```

---

## Organizer Formats

### Format A: Bullet List (Recommended)

Simple, clear, easy to fill in:

```markdown
### Step 3: Plan your zones using this organizer

For each zone, decide on the following properties. You can write these down, or use the AI to help brainstorm ideas:

**Zone 0 (Forest)**
- **name**: _Creative zone title (e.g., "Forest of Wisdom")_
- **subtitle**: _Zone tagline (e.g., "Where nature meets knowledge")_
- **categoryId**: _Number from API (e.g., 17 for Science & Nature)_
- **difficulty**: _"easy", "medium", or "hard"_
- **questionCount**: _Number of questions (max 50, recommend 4-6 for testing)_

**Zone 1 (Desert)**
- **name**: _Creative zone title_
- **subtitle**: _Zone tagline_
- **categoryId**: _Number from API_
- **difficulty**: _"easy", "medium", or "hard"_
- **questionCount**: _Number of questions_

**Zone 2 (Ice Castle)**
- **name**: _Creative zone title_
- **subtitle**: _Zone tagline_
- **categoryId**: _Number from API_
- **difficulty**: _"easy", "medium", or "hard"_
- **questionCount**: _Number of questions_
```

---

### Format B: Tree Structure

More visual, shows hierarchy:

```markdown
### Step 3: Complete your zone planning organizer

Copy this template and fill in your designs:

```
ZONE PLANNING ORGANIZER
=======================

Zone 0: Forest Environment
├─ name: ___________________________
├─ subtitle: ________________________
├─ categoryId: _____ (from API)
├─ difficulty: _____ (easy/medium/hard)
└─ questionCount: _____ (max 50)

Zone 1: Desert Environment
├─ name: ___________________________
├─ subtitle: ________________________
├─ categoryId: _____ (from API)
├─ difficulty: _____ (easy/medium/hard)
└─ questionCount: _____ (max 50)

Zone 2: Ice Castle Environment
├─ name: ___________________________
├─ subtitle: ________________________
├─ categoryId: _____ (from API)
├─ difficulty: _____ (easy/medium/hard)
└─ questionCount: _____ (max 50)
```
```

---

### Format C: Table

Compact, good for many properties:

```markdown
### Step 3: Plan your zones using this table

| Property | Zone 0 (Forest) | Zone 1 (Desert) | Zone 2 (Ice Castle) |
|----------|----------------|-----------------|---------------------|
| **name** | _Your title_ | _Your title_ | _Your title_ |
| **subtitle** | _Your tagline_ | _Your tagline_ | _Your tagline_ |
| **categoryId** | _API number_ | _API number_ | _API number_ |
| **difficulty** | _easy/medium/hard_ | _easy/medium/hard_ | _easy/medium/hard_ |
| **questionCount** | _Number (max 50)_ | _Number (max 50)_ | _Number (max 50)_ |
```

---

## Example Completed Organizer

**Always include an example** to show students what good looks like:

```markdown
**Example completed organizer:**

**Zone 0 (Forest)**
- **name**: "Forest of Wisdom"
- **subtitle**: "Where nature meets knowledge"
- **categoryId**: 17 (Science & Nature)
- **difficulty**: "easy"
- **questionCount**: 5

**Zone 1 (Desert)**
- **name**: "Sands of Time"
- **subtitle**: "Ancient mysteries await"
- **categoryId**: 23 (History)
- **difficulty**: "medium"
- **questionCount**: 5

**Zone 2 (Ice Castle)**
- **name**: "Frozen Theater"
- **subtitle**: "Entertainment on ice"
- **categoryId**: 11 (Film)
- **difficulty**: "hard"
- **questionCount**: 5
```

---

## Complete Example

```markdown
## 🎨 Planning Your Zone Themes

🎯 **Goal:** Design three cohesive zone themes by selecting trivia categories and planning the metadata that will populate your ZONES array.

Now that you understand the ZONES data structure, it's time to design your game experience! You'll plan three distinctive zones, each with its own theme, trivia category, and difficulty level.

### Step 1: Explore available trivia categories

Visit the [Open Trivia Database API](https://opentdb.com/api_category.php) to see all available trivia categories. You'll see categories like:
- General Knowledge (id: 9)
- Entertainment: Film (id: 11)
- Science & Nature (id: 17)
- Sports (id: 21)
- Geography (id: 22)

### Step 2: Consider your game's visual environments

Your game map has three distinct visual zones:
- **Zone 0**: Forest environment (left side of map)
- **Zone 1**: Desert environment (center of map)
- **Zone 2**: Ice castle environment (right side of map)

### Step 3: Plan your zones using this organizer

For each zone, decide on the following properties. You can write these down, or use the AI to help brainstorm ideas:

**Zone 0 (Forest)**
- **name**: _Creative zone title (e.g., "Forest of Wisdom")_
- **subtitle**: _Zone tagline (e.g., "Where nature meets knowledge")_
- **categoryId**: _Number from API (e.g., 17 for Science & Nature)_
- **difficulty**: _"easy", "medium", or "hard"_
- **questionCount**: _Number of questions (max 50, recommend 4-6 for testing)_

**Zone 1 (Desert)**
- **name**: _Creative zone title_
- **subtitle**: _Zone tagline_
- **categoryId**: _Number from API_
- **difficulty**: _"easy", "medium", or "hard"_
- **questionCount**: _Number of questions_

**Zone 2 (Ice Castle)**
- **name**: _Creative zone title_
- **subtitle**: _Zone tagline_
- **categoryId**: _Number from API_
- **difficulty**: _"easy", "medium", or "hard"_
- **questionCount**: _Number of questions_

**Note:** You'll position and style the map labels in a later section.

### Design Tips

**Cohesive theming** creates an immersive experience:
- Match trivia categories to visual environments (e.g., Science & Nature for forest)
- Progress difficulty across zones (easy → medium → hard)
- Use creative names that hint at the category
- Keep question counts low during development (4-6 questions)

**Example completed organizer:**

**Zone 0 (Forest)**
- **name**: "Forest of Wisdom"
- **subtitle**: "Where nature meets knowledge"
- **categoryId**: 17 (Science & Nature)
- **difficulty**: "easy"
- **questionCount**: 5

**Zone 1 (Desert)**
- **name**: "Sands of Time"
- **subtitle**: "Ancient mysteries await"
- **categoryId**: 23 (History)
- **difficulty**: "medium"
- **questionCount**: 5

**Zone 2 (Ice Castle)**
- **name**: "Frozen Theater"
- **subtitle**: "Entertainment on ice"
- **categoryId**: 11 (Film)
- **difficulty**: "hard"
- **questionCount**: 5

> 💡 **Design Before Implementation**
>
> Taking time to plan your data before coding is a professional development practice. This organizer helps you think through all the properties your ZONES array needs, making the implementation step straightforward. You're learning to separate design decisions from technical implementation — a key skill in software development.

> 🏆 **Bonus Challenge**
>
> Try creating a theme where all three zones tell a story! For example: "Journey Through Time" with Ancient History → Modern History → Future/Science Fiction categories.
```

---

## When to Use This Pattern

✅ **Good for:**
- Creative design phases before implementation
- Gathering data from external resources
- Planning configuration file content
- Brainstorming with constraints
- Bridging from learning to doing
- Preparing data for Configuration pattern

❌ **Not ideal for:**
- Administrative tasks (use Procedural pattern)
- Technical exploration (use Annotated Code Example)
- Direct implementation (use Configuration or Iterative Build)
- Abstract concepts (use Conceptual pattern)

---

## Integration with Other Patterns

**Flows well from:**
- Conceptual Pattern (abstract concepts → design thinking)
- Annotated Code Example (understanding structure → planning data)

**Flows well into:**
- Configuration Pattern (design decisions → implementation)
- Iterative Build Pattern (planned data → building features)

**Typical sequence:**
```
Annotated Code Example
    ↓ (understand structure)
Planning/Design Pattern
    ↓ (design data)
Configuration Pattern
    ↓ (implement data)
Iterative Build Pattern
    ↓ (use data)
```

---

## Key Principles

### 1. Structured Organizer is Essential

The organizer is what makes this pattern work. It:
- Gives students a clear deliverable
- Ensures all required properties are considered
- Provides a template they can reference during implementation
- Reduces cognitive load during coding phase

### 2. Example Completed Organizer

Always show what good looks like:
- Demonstrates quality standards
- Provides inspiration
- Reduces anxiety about "doing it right"
- Shows realistic scope

### 3. Explicit Bridge to Next Section

Make the connection clear:
- "In the next section, you'll implement these designs"
- "You'll use this organizer to populate the ZONES array"
- "These decisions will become your configuration file"

### 4. Emphasize Flexibility

Students should feel free to iterate:
- "You can change your mind during implementation"
- "These are starting points, not final decisions"
- "Feel free to adjust as you test your game"

---

## Organizer Selection Guide

| Properties | Complexity | Hierarchy | Format |
|------------|-----------|-----------|--------|
| 3-5 | Simple | Flat | A (Bullet List) |
| 3-5 | Simple | Nested | B (Tree) |
| 6+ | Complex | Flat | C (Table) |
| 6+ | Complex | Nested | B (Tree) |

**Recommendation:** Start with Format A (Bullet List) - it's the most flexible and beginner-friendly.

---

## Tips for Effective Use

1. **Connect to previous learning** - Reference the structure they just learned
2. **Provide external resources** - Links to APIs, documentation, examples
3. **Show constraints** - Visual environments, technical limits, project requirements
4. **Include example** - Always show a completed organizer
5. **Keep it simple** - Don't overcomplicate the planning phase
6. **Note deferred decisions** - Clearly state what will be determined later
7. **Encourage AI assistance** - "Use the AI to help brainstorm ideas"

---

## Common Mistakes to Avoid

❌ **No structured organizer** - Vague "plan your zones" without template
❌ **Missing example** - Students don't know what good looks like
❌ **Too complex** - Overwhelming number of properties to plan
❌ **No connection to next section** - Unclear how planning feeds into implementation
❌ **Rigid requirements** - Students feel locked into initial decisions
❌ **Missing resources** - No links to external data sources
❌ **Unclear constraints** - Students don't know the boundaries

---

## Verification

Planning pattern verification is different from other patterns:

**Not:** "You should see X on screen"  
**Instead:** "You have decisions ready for the next section"

**Implicit verification through:**
- Completed organizer (students have filled in properties)
- Understanding of constraints (students considered visual environments)
- Resource exploration (students visited external links)

**No explicit verification statement needed** - the organizer itself is the deliverable.

---

## Pattern Classification

**Category:** Conceptual-to-Implementation Bridge  
**Complexity:** Medium  
**Student Action:** Creative design and planning  
**Best For:** Data-driven configuration, creative design phases, pre-implementation planning
