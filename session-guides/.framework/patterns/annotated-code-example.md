# Annotated Code Example Pattern

**Use when:** Teaching data structures, syntax, or code organization through visual examples without requiring student action.

**Key characteristics:**
- Pure teaching section (no procedural steps)
- Shows actual code from the project
- Inline comments provide wayfinding
- Visual diagram shows structure hierarchy
- Concept explanations follow examples
- Callout reinforces larger pattern/principle

---

## Pattern Structure

### Section Header

```markdown
## 🔍 Section Title

Brief intro paragraph explaining what will be taught and why it matters.

**File:** `path/to/file.js`
```

### Annotated Code Block

```markdown
Introductory sentence about the code example:

```javascript
export const DATA = [              // ← Array: ordered list using []
  {                                // ← Object: properties for one item
    id: 0,                         // ← Item identifier
    name: "Item Name",             // ← Display name
    property: "value",             // ← Semantic meaning from context
    nested: {                      // ← Nested object: related properties
      x: 100,                      // ← Horizontal position
      y: 200,                      // ← Vertical position
    },
  },
  // Additional items go here
];
```
```

### Visual Diagram (Optional but Recommended)

```markdown
### Structure Overview

Here's how the data is organized:

```
DATA Array [...]
│
├─ Item Object {...}
│   ├─ id: 0                    (item identifier)
│   ├─ name: "..."              (display name)
│   ├─ property: "..."          (semantic meaning)
│   └─ nested: {...}            (nested object: related properties)
│       ├─ x: 100               (horizontal position)
│       └─ y: 200               (vertical position)
│
├─ Item Object {...}            (Item 1 - to be added)
│
└─ Item Object {...}            (Item 2 - to be added)
```
```

### Concept Explanations

```markdown
### Key Concepts

**Arrays** (`[]`) explanation with context to the example.

**Objects** (`{}`) explanation with context to the example.

**Nesting** explanation with context to the example.

**Data Types** explanation:
- **Strings** (in quotes): Examples from the code
- **Numbers** (no quotes): Examples from the code
```

### Callout at End

```markdown
> 💡 **Larger Pattern or Principle**
>
> Explanation of why this pattern matters, how it's used in real development, and what students are learning beyond just this specific example.
```

---

## Annotation Guidelines

### Inline Comment Format

Use arrow notation (`←`) for wayfinding comments:

```javascript
property: "value",  // ← Terse semantic meaning
```

**Good annotations:**
- Terse and focused on semantic meaning
- Explain WHAT the property does, not just its type
- Use context from file documentation/comments
- Keep consistent with project terminology

**Examples:**

```javascript
// Good - semantic meaning
categoryId: 18,     // ← Question type from API

// Avoid - just type information
categoryId: 18,     // ← Number
```

### Visual Diagram Format

**Tree structure using box-drawing characters:**

```
Root
│
├─ Child 1
│   ├─ Property: value    (explanation)
│   └─ Property: value    (explanation)
│
└─ Child 2
```

**Guidelines:**
- Use `│` for vertical lines
- Use `├─` for branches
- Use `└─` for last branch
- Include semantic explanations in parentheses
- Show "to be added" items for incomplete structures

---

## When to Use This Pattern

✅ **Good for:**
- Teaching data structures (arrays, objects, nesting)
- Explaining configuration file structure
- Showing syntax patterns before students write code
- Introducing complex data organization
- Preparing students for upcoming modification tasks

❌ **Not ideal for:**
- When students need to write or modify code (use Iterative Build or Configuration patterns)
- When exploring code interactively (use Procedural pattern)
- When explaining concepts without code (use pure Conceptual pattern)
- When showing component code (use Component Anatomy pattern if available)

---

## Complete Example

```markdown
## 🏗️ Understanding Zone Configuration

Before configuring your zones, let's understand the **data structure** that organizes your game configuration — **arrays** and **objects** working together to represent complex information.

**File:** `src/data/zones.js`

Here's what the ZONES array looks like with one zone configured:

```javascript
export const ZONES = [              // ← Array: ordered list using []
  {                                 // ← Object: properties for one zone
    id: 0,                          // ← Zone number (0, 1, 2)
    name: "Your Zone Name",         // ← Creative zone title
    subtitle: "Your Zone Subtitle", // ← Zone tagline/description
    categoryId: 18,                 // ← Question type from API
    difficulty: "easy",             // ← "easy", "medium", or "hard"
    questionCount: 4,               // ← How many questions (max 50)
    mapLabel: {                     // ← Nested object: position and styling
      x: 225,                       // ← Horizontal position
      y: 140,                       // ← Vertical position
      fontSize: "35",               // ← Text size
    },
  },
  // Zone 1 and Zone 2 will go here
];
```

### Structure Overview

Here's how the data is organized:

```
ZONES Array [...]
│
├─ Zone Object {...}
│   ├─ id: 0                    (zone number)
│   ├─ name: "..."              (zone title)
│   ├─ subtitle: "..."          (zone description)
│   ├─ categoryId: 18           (API question type)
│   ├─ difficulty: "easy"       (question difficulty)
│   ├─ questionCount: 4         (number of questions)
│   └─ mapLabel: {...}          (nested object: map display styling)
│       ├─ x: 225               (horizontal position)
│       ├─ y: 140               (vertical position)
│       └─ fontSize: "35"       (text size)
│
├─ Zone Object {...}            (Zone 1 - to be added)
│
└─ Zone Object {...}            (Zone 2 - to be added)
```

### Key Concepts

**Arrays** (`[]`) are ordered lists that keep items in sequence. Your `ZONES` array will hold three zone objects in order (Zone 0, Zone 1, Zone 2), matching your game progression.

**Objects** (`{}`) are collections of key-value pairs that describe one thing. Each zone object has properties like `name`, `difficulty`, and `categoryId` that define its characteristics.

**Nesting** means putting objects inside objects. The `mapLabel` property contains another object with positioning and styling properties, creating a hierarchy of related data.

**Data Types** determine how JavaScript treats values:
- **Strings** (in quotes): Text like `"Your Zone Name"` or `"easy"`
- **Numbers** (no quotes): Values like `18` or `225` used for calculations and positioning

> 💡 **Data Structures Organize Complex Information**
>
> This "array of objects" pattern is everywhere in web development — user lists, product catalogs, game levels. Each object in the array represents one item (a zone, a user, a product), and the array keeps them organized. This structure makes it easy to loop through items, add new ones, or modify existing ones without changing your component code. You're learning a fundamental pattern that powers modern web applications.
```

---

## Variations

### Minimal Version (No Diagram)

Use when structure is simple or space is limited:

```markdown
## Section Title

Brief intro.

**File:** `path/to/file.js`

```javascript
// Annotated code only
```

### Key Concepts

Explanations.

> 💡 **Callout**
```

### Extended Version (Multiple Examples)

Use when comparing different structures or showing evolution:

```markdown
## Section Title

**Example 1: Basic Structure**

```javascript
// First example with annotations
```

**Example 2: Extended Structure**

```javascript
// Second example with annotations
```

### Key Concepts

Explanations covering both examples.

> 💡 **Callout**
```

---

## Integration with Other Patterns

**Flows well into:**
- Configuration Pattern (students modify the structure they just learned)
- Iterative Build Pattern (students build upon the structure)
- Planning Pattern (students plan data before implementing)

**Flows well from:**
- Conceptual Pattern (abstract concepts → concrete examples)
- Procedural Pattern (exploration → understanding)

---

## Tips for Effective Use

1. **Use actual project code** - Don't create hypothetical examples
2. **Keep annotations terse** - Focus on semantic meaning, not just types
3. **Include visual diagrams** - They make structure immediately clear
4. **Explain before showing** - Brief intro sets context
5. **Reinforce with callout** - Connect to larger patterns/principles
6. **Match project terminology** - Use terms from file comments/docs
7. **Show incomplete structures** - Indicate what students will add

---

## Common Mistakes to Avoid

❌ **Too many annotations** - Clutters the code
❌ **Type-only annotations** - "Number" doesn't help understanding
❌ **Missing diagram** - Complex structures need visual representation
❌ **Hypothetical examples** - Use actual project code
❌ **No callout** - Miss opportunity to reinforce larger concept
❌ **Procedural steps** - This is teaching, not doing
❌ **Inaccurate examples** - Must match actual file content

---

## Pattern Classification

**Category:** Conceptual (Teaching variant)  
**Complexity:** Medium  
**Student Action:** None (pure learning)  
**Best For:** Data structures, syntax, configuration files
