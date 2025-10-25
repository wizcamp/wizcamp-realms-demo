# Session 9 Solo Mission Changes Required

## Current Issues

The "Solo Mission: Complete useAudio Hook" section does NOT follow the refined solo mission pattern from Session 8.

### Missing Components
1. ❌ No "What You're Building" section
2. ❌ No visual placeholder figure
3. ❌ Not organized into phases with clear goals
4. ❌ No horizontal rules separating sections
5. ❌ No "Success Review" checklist (has "Requirements Checklist" instead)
6. ❌ No "Reference Guide" section

### Structural Issues
1. Uses numbered list (1, 2, 3) instead of phase structure
2. Mixes AI-assisted tasks with manual tasks without clear phase separation
3. "Requirements Checklist" is at bottom instead of "Success Review"
4. No clear testing instructions per phase
5. Encouraging callout in middle of mission (should be removed per pattern)

---

## Required Changes

### 1. Add "What You're Building" Section

**Insert after opening paragraph:**

```markdown
### What You're Building

A complete custom audio hook that manages background music playback with play/pause controls, error handling, and proper cleanup. This hook will encapsulate all audio logic, making it reusable across any component that needs music.

<img src="https://placehold.co/600x400?text=useAudio+Hook+with+Play+Pause+Toggle" alt="useAudio hook controlling audio playback with play, pause, and toggle functions, plus isPlaying state" style="max-width: 600px; width: 100%;">
*Figure: Your completed useAudio hook will provide clean audio controls to any component*

---
```

### 2. Restructure into Phases

**Replace current numbered list (1, 2, 3) with:**

```markdown
### Phase 1: Pause Functionality

🎯 **Goal:** Add pause controls to stop audio playback and update state

**Your Tasks:**

1. Update the `pause` function in `src/hooks/useAudio.js`
2. Use `audioRef.current.pause()` to stop playback
3. Set `isPlaying` to `false` when paused

**Test:** Click music toggle while playing → music stops and icon changes to paused state

---

### Phase 2: Error Handling

🎯 **Goal:** Add error handling so audio failures don't crash the app

**Your Tasks:**

1. With `src/hooks/useAudio.js` open, use GitHub Copilot:
   ```
   /fix Add error handling to the play function in the useAudio hook so that 
   if the audio fails to play, it catches the error, logs a warning, and 
   updates isPlaying to false
   ```
2. Review the generated code
3. Apply the changes if they look correct
4. Test error handling by temporarily breaking the audio path:
   - Open `src/context/GameContext.jsx`
   - Find the line `const music = useAudio(getAssetPath("audio/dramatic-action.mp3"));`
   - Change `"audio/dramatic-action.mp3"` to `"audio/nonexistent.mp3"` (keep the `getAssetPath()` wrapper)
   - Click music toggle → check browser console for error message
   - Change the path back to `"audio/dramatic-action.mp3"` when done testing

**Test:** Break audio path → click toggle → console shows error → no app crash → `isPlaying` stays false

---

### Phase 3: Cleanup Function

🎯 **Goal:** Prevent memory leaks by cleaning up audio when component unmounts

**Your Tasks:**

1. With `src/hooks/useAudio.js` open, use GitHub Copilot:
   ```
   /fix Add a useEffect cleanup function to the useAudio hook that stops 
   the audio and clears the reference when the component unmounts
   ```
2. Review the generated useEffect code
3. Apply the changes to prevent memory leaks

**Test:** Navigate between screens (splash → playing → splash) → audio stops when leaving playing screen

---
```

### 3. Replace "Requirements Checklist" with "Success Review"

**Replace current "Requirements Checklist" section with:**

```markdown
### ✅ Success Review

Your completed `useAudio` hook should:

- Export `play`, `pause`, `toggle`, and `isPlaying`
- Successfully toggle audio playback on/off
- Handle errors when attempting to play audio
- Set `isPlaying` to false if an error occurs
- Include a `useEffect` cleanup function for component unmounting
- Prevent memory leaks when navigating between screens
```

### 4. Add "Reference Guide" Section

**Add after Success Review:**

```markdown
### 🔍 Reference Guide

- **src/hooks/useGame.js** – Custom hook structure, exporting functions and state
- **src/components/QuizModal.jsx** – useEffect cleanup pattern
- **src/context/GameContext.jsx** – Error handling with try/catch blocks
```

### 5. Remove Encouraging Callout

**Delete this section:**
```markdown
> 💡 **Building Production-Quality Code**
>
> This challenge combines everything you've learned: custom hooks, browser APIs, error handling, and AI-assisted development. You're building quality code that handles edge cases and prevents memory leaks — exactly what experienced developers do. Error handling ensures your app doesn't crash when things go wrong, and cleanup prevents memory leaks that slow down browsers over time.
```

---

## Summary of Changes

1. **Add** "What You're Building" section with visual placeholder
2. **Restructure** numbered list into 3 phases with goals and tests
3. **Add** horizontal rules (---) between phases
4. **Replace** "Requirements Checklist" with "✅ Success Review"
5. **Add** "🔍 Reference Guide" section
6. **Remove** encouraging callout in middle of mission
7. **Improve** testing instructions to be more specific per phase

---

## Pattern Compliance Checklist

After changes, verify:
- [ ] Has "What You're Building" section
- [ ] Has visual placeholder figure
- [ ] Uses phase structure (not numbered list)
- [ ] Each phase has 🎯 Goal statement
- [ ] Each phase has "Your Tasks" and "Test" sections
- [ ] Has horizontal rules (---) separating phases
- [ ] Has "✅ Success Review" section
- [ ] Has "🔍 Reference Guide" section
- [ ] No encouraging callouts in middle
- [ ] All testing instructions are specific and actionable
