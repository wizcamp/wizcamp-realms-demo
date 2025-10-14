# Wizcamp Instructional Framework

A modular system for creating consistent, effective coding tutorials.

---

## Quick Start

1. **Choose a pattern** - See `PATTERNS.md` for decision tree
2. **Follow conventions** - See `CONVENTIONS.md` for formatting rules
3. **Select code scaffolding** - See `patterns/code-scaffolding-reference.md` for complete toolkit
4. **Reference examples** - See `examples/` for working samples

---

## Framework Structure

```
.framework/
├── README.md                           # This file
├── CONVENTIONS.md                      # Global formatting rules
├── PATTERNS.md                         # Pattern index and decision tree
├── FRAMEWORK-SUMMARY.md                # Complete pattern application reference
├── ITERATIVE-BUILD-TESTING.md          # Testing document for pattern validation
│
├── patterns/
│   ├── iterative-build.md              # ✅ Multi-step file modifications
│   ├── code-scaffolding-reference.md   # ✅ Complete scaffolding toolkit (9 patterns, 15+ variants)
│   ├── annotated-code-example.md       # ✅ Teaching data structures with visual examples
│   ├── planning-design.md              # ✅ Creative design and planning phases
│   ├── procedural.md                   # Sequential non-coding tasks (coming soon)
│   ├── configuration.md                # Setup and tooling tasks (coming soon)
│   ├── integration.md                  # Connecting multiple systems (coming soon)
│   └── solo-mission.md                 # Minimal guidance tasks (coming soon)
│
└── examples/
    └── iterative-build-example.md      # Complete working example
```

---

## Core Philosophy

### Simplexity Principle

Balance minimal structure with appropriate complexity. Don't over-structure simple tasks or under-structure complex ones.

### Student-Centered Design

- Learning outcomes > word count reduction
- Context before action
- Do before explain
- Test frequently
- Teach at moment of relevance
- One concept per section

### Cognitive Load Management

- Bullets separate actions from context
- Callouts teach without blocking action
- Verification matches task complexity
- Consistent patterns reduce mental overhead

---

## Pattern Selection Guide

| Task Type | Pattern | Key Feature |
|-----------|---------|-------------|
| Build new feature | Iterative Build | Step-by-step with testing |
| Teach data structures | Annotated Code Example | Visual examples with annotations |
| Plan/design phase | Planning/Design | Structured organizer for decisions |
| Non-coding tasks | Procedural | Linear sequential instructions |
| Setup tools | Configuration | Terminal-heavy instructions |
| Connect systems | Integration | Multi-file coordination |
| Practice skills | Solo Mission | Minimal guidance |

**See `PATTERNS.md` for complete decision tree and usage by session.**

---

## Code Scaffolding Quick Reference

**9 Core Patterns + 15+ Variants**

| Pattern | Use Case | Variants |
|---------|----------|----------|
| 1. Inline Comment | 1-2 line additions | - |
| 2. Context Preservation | Function updates | - |
| 3. Region Markers | New sections | - |
| 4. Before/After | Replacements | - |
| 5. Placeholder | Student work | - |
| 6. JSX Comments | JSX elements | 2 approaches |
| 7. Ellipsis | Large files | - |
| 8. Multi-Change | 2-4 related changes | 7 variants |
| 9. Partial Context | JSX props | 6 variants |

**See `patterns/code-scaffolding-reference.md` for complete toolkit**

---

## Usage Examples

### Creating a New Session Guide

```markdown
# Session 05: Connecting to External APIs

<!-- Choose pattern based on task -->
<!-- This is building a feature incrementally, so use Iterative Build -->

## 🌐 Generating Dynamic Questions

Students will implement API integration step-by-step...

### Step 1: Create API Service

<!-- Follow iterative-build.md structure -->
<!-- Apply CONVENTIONS.md formatting -->
<!-- Select scaffolding from code-scaffolding-reference.md -->
```

### Combining Multiple Patterns

```markdown
# Session 08: Implementing Scoring & Victory

## Part 1: Add Scoring Logic to Context
<!-- Use Iterative Build Pattern -->
<!-- Use Pattern 8A for multi-change scaffolding -->

## Part 2: Build GameOver Component
<!-- Use Solo Mission Pattern -->
```

---

## Conventions at a Glance

**Bold:** Action verbs, UI elements, file paths in actions  
**`Backticks`:** Code elements, file paths, keyboard shortcuts  
**Neither:** Descriptive text, UI navigation paths

**Callouts:**
- 💡 Concept - Explain how/why
- ⚠️ Warning - Prevent mistakes
- ✅ Success Check - Verification checklist
- ℹ️ Note - Additional context
- 🎯 Pro Tip - Advanced techniques

---

## Contributing

### Adding a New Pattern

1. Create `patterns/[pattern-name].md` with:
   - Use cases
   - Structure
   - Examples
   - When to use/not use

2. Add to `PATTERNS.md` index

3. Create `examples/[pattern-name]-example.md`

### Adding Code Scaffolding Variants

1. Add variant to `patterns/code-scaffolding-reference.md`
2. Include pros/cons
3. Update selection matrix
4. Add to decision tree

### Improving Conventions

1. Propose changes in `CONVENTIONS.md`
2. Update affected patterns
3. Update examples to match

---

## Pattern Development Status

Based on course usage frequency:

1. **Iterative Build** ✅ Documented (5 sessions)
2. **Code Scaffolding** ✅ Comprehensive reference (9 patterns, 15+ variants)
3. **Annotated Code Example** ✅ Documented (conceptual variant)
4. **Planning/Design** ✅ Documented (bridge pattern)
5. **Integration** 🔄 Needed (3 sessions)
6. **Configuration** 🔄 Needed (2 sessions)
7. **Solo Mission** 🔄 Needed (2 sessions)
8. **Procedural** 🔄 Needed (1 session)

---

## Version History

- **v1.0** (2025) - Initial framework with Iterative Build pattern
- **v1.1** (2025) - Pattern index aligned with course structure
- **v1.2** (2025) - Comprehensive code scaffolding reference added (9 patterns, 15+ variants)
