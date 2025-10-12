# Instructional Patterns Index

This guide helps you choose the right pattern for your teaching task based on actual course usage patterns.

---

## Available Patterns

### 1. Conceptual Pattern

**Use when:** Explaining concepts, providing context, or orienting students without requiring actions.

**Characteristics:**
- No step-by-step instructions
- Explanatory and educational focus
- Reinforces previous instruction
- Builds mental models
- Includes special sections (Essential Terms, Ask the AI)

**Example tasks:**
- Project structure orientation
- Explaining how things work
- Vocabulary reference tables
- Reflection prompts
- Architecture overviews

**Course usage:** Sessions 1-11 (appears in most sessions)

**Documentation:** `patterns/conceptual.md`

---

### 2. Procedural Pattern

**Use when:** Guiding students through simple sequential tasks without code.

**Characteristics:**
- Linear step-by-step instructions
- No code modifications
- Account setup, tool access, administrative tasks
- Clear completion criteria

**Example tasks:**
- Creating accounts
- Accessing development environments
- Scheduling and planning
- Submitting assignments

**Course usage:** Session 0 (pre-camp setup)

**Documentation:** `patterns/procedural.md`

---

### 3. Iterative Build Pattern

**Use when:** Building features through incremental modifications with testing after each step.

**Characteristics:**
- Multi-step process
- Single file focus per section
- Frequent verification
- Builds complexity gradually

**Example tasks:**
- Creating new components
- Implementing API integration
- Adding caching logic
- Building custom hooks

**Course usage:** Sessions 2, 5, 6, 7, 9 (most common pattern)

**Documentation:** `patterns/iterative-build.md`

---

### 4. Configuration Pattern

**Use when:** Setting up tools, environments, or project configuration.

**Characteristics:**
- Terminal commands and file modifications
- Tool-specific instructions
- Environment setup
- Build and deployment configuration

**Example tasks:**
- Starting development servers
- Configuring build paths
- Setting up Git remotes
- Enabling deployment platforms

**Course usage:** Sessions 1, 10 (setup and deployment)

**Documentation:** `patterns/configuration.md`

---

### 5. Integration Pattern

**Use when:** Connecting multiple files, systems, or components.

**Characteristics:**
- Multi-file coordination
- Focus on data flow between systems
- Import/export management
- State sharing and event handling

**Example tasks:**
- Connecting Context to components
- Integrating external APIs
- Wiring up event handlers across files
- Composing complex component hierarchies

**Course usage:** Sessions 3, 5, 7 (state, APIs, composition)

**Documentation:** `patterns/integration.md` *(coming soon)*

---

### 6. Solo Mission Pattern

**Use when:** Students apply learned concepts independently with minimal guidance.

**Characteristics:**
- Requirements checklist instead of step-by-step
- Reference files for guidance
- Student autonomy and problem-solving
- Practice/assessment focus

**Example tasks:**
- Building components from scratch
- Extending features independently
- Creative modifications
- Applying learned patterns to new problems

**Course usage:** Sessions 8, 11 (independent challenges)

**Documentation:** `patterns/solo-mission.md` *(coming soon)*

---

## Decision Tree

```
What is the primary goal?

├─ Guide through non-coding tasks
│  └─ Use: Procedural Pattern
│
├─ Build new feature incrementally
│  └─ Use: Iterative Build Pattern
│
├─ Set up tools/environment
│  └─ Use: Configuration Pattern
│
├─ Connect multiple systems
│  └─ Use: Integration Pattern
│
└─ Practice independently
   └─ Use: Solo Mission Pattern
```

---

## Pattern Usage by Session

| Session | Primary Pattern | Secondary Patterns |
|---------|----------------|-------------------|
| 0 | Procedural | - |
| 1 | Configuration | - |
| 2 | Iterative Build | - |
| 3 | Integration | Iterative Build |
| 4 | Configuration | - |
| 5 | Iterative Build | Integration |
| 6 | Iterative Build | - |
| 7 | Iterative Build | Integration |
| 8 | Iterative Build | Solo Mission |
| 9 | Iterative Build | - |
| 10 | Configuration | - |
| 11 | Solo Mission | - |

---

## Combining Patterns

Patterns can be combined within a single session:

**Example: Session 3 (State Management)**
1. **Integration** - Connect Context API to components
2. **Iterative Build** - Add state management step-by-step

**Example: Session 8 (Scoring System)**
1. **Iterative Build** - Add scoring logic to Context
2. **Solo Mission** - Build GameOver component independently

---

## Global Conventions

All patterns follow the same formatting conventions. See `CONVENTIONS.md` for:
- Bold/backtick usage
- Callout types
- Markdown best practices
- Common mistakes to avoid

---

## Pattern Development Priority

Based on course usage frequency:

1. **Iterative Build** ✅ (documented - 5 sessions)
2. **Conceptual** ✅ (documented - appears in most sessions)
3. **Configuration** ✅ (documented - 2 sessions)
4. **Procedural** ✅ (documented - 1 session)
5. **Integration** (needed - 3 sessions)
6. **Solo Mission** (needed - 2 sessions)

---

## Contributing New Patterns

When you identify a new instructional pattern:

1. Document the pattern in `patterns/[pattern-name].md`
2. Include: use cases, structure, examples, when to use
3. Add to this index with decision tree placement
4. Update the "Pattern Usage by Session" table
5. Create example in `examples/[pattern-name]-example.md`
