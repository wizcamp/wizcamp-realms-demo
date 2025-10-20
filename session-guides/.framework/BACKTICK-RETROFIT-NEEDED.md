# Backtick Retrofitting Needed

Based on the new convention that props, attributes, and code elements should be backticked in Understanding callouts, here are the instances that need updating:

## SESSION-07.md

### Understanding Conditional Rendering
- "modal visibility state" → "modal `visibility` state" or keep as is (generic reference)
- "setter function" → keep as is (generic reference)

### Understanding Array Mapping
- "The key prop" → "The `key` prop"

### Understanding Dynamic Styling
- "dynamic className" → "dynamic `className`"

### Understanding Preventing Multiple Clicks
- Already has backticks for `disabled` and `chosenAnswer` ✓

## Decision Needed

Should we backtick:
1. **Generic references** like "the prop", "the state", "the function" → NO (per convention)
2. **Specific named elements** like "key prop", "className", "onClick" → YES (per convention)
3. **Descriptive phrases** like "modal visibility state", "setter function" → NO (these are descriptions, not code element names)

## Recommended Changes

### SESSION-07.md - Understanding Array Mapping
```markdown
BEFORE:
> Array mapping is everywhere in React — any time you have a list of data that becomes a list of components, you use `map()`. The key prop helps React optimize updates...

AFTER:
> Array mapping is everywhere in React — any time you have a list of data that becomes a list of components, you use `map()`. The `key` prop helps React optimize updates...
```

### SESSION-07.md - Understanding Dynamic Styling
```markdown
BEFORE:
> 2. **Apply dynamic className**: Each button calls the function with its index to get the appropriate styling

AFTER:
> 2. **Apply dynamic `className`**: Each button calls the function with its `index` to get the appropriate styling
```

## Summary

Most guides are already following the convention well. Only a few minor updates needed in SESSION-07 for consistency.
