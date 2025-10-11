# Procedural Pattern

**Use when:** Guiding students through administrative, social, or logistical tasks that precede or support the learning process.

**Key characteristics:**
- Non-coding sequential tasks
- Course logistics and onboarding
- Administrative and social activities
- Communication and planning
- Clear completion criteria

---

## Pattern Structure

Procedural sections scale based on complexity. Choose the appropriate variant based on step count and task nature.

### Decision Tree

```
How many steps?

├─ 1-2 steps, simple action
│  └─ Variant A (Minimal)
│
├─ 3-4 steps, standard task
│  └─ Variant B (Standard)
│
└─ 5+ steps OR complex requirements
   └─ Variant C (Detailed)
```

---

## Variant A: Minimal (1-2 Steps)

**Use when:** Simple, straightforward tasks with 1-2 actions

**Structure:**
```markdown
## [Emoji] Section Title

[Single instruction paragraph OR 2-step numbered list]

> **💡 Concept:** [Why this matters]
```

**Required elements:**
- Section title with emoji
- Instruction (paragraph or simple numbered list)
- Callout explaining value

**Optional elements:**
- Figure with caption (for visual reinforcement)

---

### Example 1: Single Action

```markdown
## 📅 Planning Your Schedule

Visit the class calendar in the [Wizcamp Portal](https://portal.wizcamp.com) and RSVP for each session you plan to attend.

> **💡 Why this matters:** RSVPing helps us prepare materials and ensures you receive session reminders for each session.
```

---

### Example 2: Two Steps

```markdown
## 📚 Accessing Course Materials

1. **Log in** to the [Wizcamp Portal](https://portal.wizcamp.com)
2. **Navigate** to Resources → Course Materials to download the session guides

> **💡 Why this matters:** Having materials downloaded before each session lets you follow along and take notes directly in the guides.
```

---

### Example 3: With Figure (Sub-Variation)

```markdown
## 📨 Connecting with Your Instructor

DM Mr. Colestock in the [Wizcamp Portal](https://portal.wizcamp.com) with your full name, email, and GitHub username.

<img src="images/portal-dm.png" alt="Portal direct message interface" style="max-width: 500px; width: 100%;">
*Figure: Send a direct message with your information*

You'll receive confirmation that you've been added to the Wizcamp GitHub Organization.

> **💡 Why this matters:** Being added to the organization gives you access to Codespaces and GitHub Copilot Pro—the tools you'll use to build your trivia game.
```

**When to use figure sub-variation:**
- UI navigation is not obvious
- Visual reinforcement aids understanding
- Screenshot clarifies location/action
- Reduces potential confusion

---

## Variant B: Standard (3-4 Steps)

**Use when:** Multi-step administrative or social tasks requiring clear sequence

**Structure:**
```markdown
## [Emoji] Section Title

🎯 **Goal:** [What you'll accomplish]

1. **[Action]** [instruction]
2. **[Action]** [instruction]
3. **[Action]** [instruction]
4. **[Action]** [instruction]

> **💡 Concept:** [Why this matters]
```

**Required elements:**
- Section title with emoji
- Goal statement
- Numbered steps with **bold action verbs**
- Callout explaining value

**Optional elements:**
- Figure with caption
- Brief verification statement

---

### Example 1: Social Onboarding

```markdown
## 👋 Introducing Yourself

🎯 **Goal:** Connect with your cohort and share your coding journey.

1. **Log in** to the [Wizcamp Portal](https://portal.wizcamp.com)
2. **Click** "New Introduction" and share your name, coding experience, and what excites you about learning to code
3. **Read** and respond to at least two other student introductions
4. **Check** back throughout the week to welcome new cohort members

> **💡 Why this matters:** Building connections with your cohort creates a supportive learning community where you can share challenges, celebrate wins, and learn from each other throughout the course.
```

---

### Example 2: Administrative Task

```markdown
## 📝 Completing the Pre-Course Survey

🎯 **Goal:** Help us understand your background and learning goals.

1. **Navigate** to the [Wizcamp Portal](https://portal.wizcamp.com) → Surveys
2. **Complete** the "Pre-Course Survey" (takes about 5 minutes)
3. **Review** your responses before submitting
4. **Submit** the survey

> **💡 Why this matters:** Your survey responses help us tailor the course content and pacing to match your cohort's experience level and learning objectives.
```

---

### Example 3: With Figure

```markdown
## 🎥 Joining the Live Session

🎯 **Goal:** Connect to your first live coding session.

1. **Open** the session link from your calendar invite
2. **Allow** camera and microphone access when prompted
3. **Test** your audio and video in the preview screen
4. **Click** "Join Session" to enter the virtual classroom

<img src="images/session-join.png" alt="Session join interface" style="max-width: 600px; width: 100%;">
*Figure: Test your audio and video before joining*

> **💡 Why this matters:** Testing your setup before joining ensures you can fully participate in live coding exercises and ask questions in real-time.
```

---

## Variant C: Detailed (5+ Steps or Complex)

**Use when:** Complex administrative tasks requiring detailed guidance or multiple stages

**Structure:**
```markdown
## [Emoji] Section Title

🎯 **Goal:** [What you'll accomplish]

### Step 1: [Action Name]

[Detailed instruction with context]

### Step 2: [Action Name]

[Detailed instruction with context]

[Continue for all steps...]

**Verify:** [How to confirm completion]

> **💡 Concept:** [Why this matters]
```

**Required elements:**
- Section title with emoji
- Goal statement
- Step subheadings (### Step X: Name)
- Detailed instructions with context
- Verification statement
- Callout explaining value

**Optional elements:**
- Figures with captions
- Checklists for complex requirements
- Multiple verification points

---

### Example 1: Multi-Stage Submission

```markdown
## 📤 Submitting Your Final Project

🎯 **Goal:** Submit your completed trivia game for evaluation and add it to your portfolio.

### Step 1: Test your game thoroughly

Open your deployed game and verify all features work correctly:
- All zones are clickable and load questions
- Questions display without encoding issues
- Scoring updates correctly
- Game over screen appears after completing all zones
- No console errors appear

### Step 2: Create your project summary

Write a brief description (200-300 words) covering:
- What you built and key features
- Technical challenges you overcame
- Features you're most proud of
- What you learned during the course

### Step 3: Record a demo video

Create a 2-3 minute screen recording showing:
- Your game's splash screen and navigation
- Playing through at least one complete zone
- Any custom features you added
- Your final score screen

### Step 4: Gather your links

Collect the following URLs:
- Your deployed game (GitHub Pages URL)
- Your GitHub repository
- Your demo video (YouTube, Loom, or similar)

### Step 5: Submit via portal

1. **Log in** to the [Wizcamp Portal](https://portal.wizcamp.com)
2. **Navigate** to Assignments → Final Project
3. **Paste** your three URLs in the submission form
4. **Upload** your project summary as a PDF or paste as text
5. **Click** "Submit Project"

**Verify:** You receive a confirmation email within 24 hours with next steps for the showcase session.

> **💡 Why this matters:** Your project submission showcases your learning journey and becomes a portfolio piece you can share with future employers or college admissions officers.
```

---

### Example 2: Account Setup with Prerequisites

```markdown
## 🔐 Setting Up Your Development Accounts

🎯 **Goal:** Create all accounts needed for the course before Session 1.

### Prerequisites

Before you begin, have ready:
- A personal email address you check regularly
- A phone number for two-factor authentication
- About 20 minutes of uninterrupted time

### Step 1: Create your GitHub account

1. **Go** to [github.com/signup](https://github.com/signup)
2. **Enter** your email, create a password, and choose a username
3. **Complete** the verification puzzle
4. **Verify** your email address by clicking the link sent to your inbox

**Verify:** You can log in to [github.com](https://github.com) and see your profile.

### Step 2: Enable two-factor authentication

1. **Click** your profile icon → Settings → Password and authentication
2. **Click** "Enable two-factor authentication"
3. **Choose** authentication method (authenticator app recommended)
4. **Save** your recovery codes in a safe place

**Verify:** You see a green checkmark next to "Two-factor authentication."

### Step 3: Join the Wizcamp organization

1. **Check** your email for an invitation from "Wizcamp GitHub Organization"
2. **Click** "Join Wizcamp" in the email
3. **Accept** the organization invitation

**Verify:** You see "Wizcamp" listed under Organizations in your GitHub profile.

### Step 4: Verify Copilot access

1. **Navigate** to [github.com/settings/copilot](https://github.com/settings/copilot)
2. **Confirm** you see "GitHub Copilot is active"
3. **Review** the Copilot usage guidelines

**Verify:** The Copilot settings page shows your organization provides access.

### Step 5: Test Codespaces access

1. **Go** to [github.com/codespaces](https://github.com/codespaces)
2. **Confirm** you can see the Codespaces dashboard
3. **Note** your monthly included hours (60 hours for organization members)

**Verify:** You see "You have access to GitHub Codespaces" on the dashboard.

> **✅ Success Check:**
>
> - [ ] GitHub account created and verified
> - [ ] Two-factor authentication enabled
> - [ ] Wizcamp organization membership confirmed
> - [ ] GitHub Copilot access verified
> - [ ] Codespaces dashboard accessible

> **💡 Why this matters:** These accounts form your complete development environment. GitHub hosts your code, Copilot assists your coding, and Codespaces provides a cloud-based workspace—no local installation required.
```

---

## Formatting Conventions

### Action Verbs

Always **bold** action verbs at the start of instructions:

- **Log in**, **Click**, **Navigate**, **Submit**, **Read**, **Share**, **Complete**, **Review**, **Check**, **Open**, **Allow**, **Test**, **Join**, **Create**, **Enter**, **Verify**, **Go**, **Enable**, **Save**, **Accept**, **Confirm**, **Note**

### Links

For branded services, use the brand name:
- ✅ `[Wizcamp Portal](https://portal.wizcamp.com)`

For domain-only sites (where domain = brand), use domain format:
- ✅ `[github.com](https://github.com)`
- ❌ `[GitHub](https://github.com)` (use domain format)

For complex URLs or specific paths, use descriptive text:
- ✅ `[signup guide](https://docs.github.com/en/get-started/...)`
- ✅ `[github.com/settings/copilot](https://github.com/settings/copilot)`

### Code Elements

Use `backticks` for:
- UI elements that are technical: `Settings`, `Components` tab
- Keyboard shortcuts: `F12`, `Ctrl+C`
- File names: `project-summary.pdf`
- Technical terms: `two-factor authentication`

### UI Navigation

Use arrow notation without backticks:
- Navigate to Resources → Course Materials
- Click your profile icon → Settings → Password and authentication
- Go to Assignments → Final Project

### Figures

Use HTML img tags with responsive styling:
```html
<img src="images/filename.png" alt="Descriptive alt text" style="max-width: 600px; width: 100%;">
*Figure: Caption describing what the image shows*
```

---

## Callout Usage

### Callout Types for Procedural

**💡 Why this matters** - Explain why the task matters (primary for Procedural)
```markdown
> **💡 Why this matters:** Building connections with your cohort creates a supportive learning community.
```

**Alternative:** Use **💡 Concept** for technical/configuration tasks

**ℹ️ Note** - Additional context or tips
```markdown
> **ℹ️ Note:** Your survey responses are confidential and used only for course planning.
```

**⚠️ Warning** - Prevent mistakes or highlight important considerations
```markdown
> **⚠️ Warning:** Save your recovery codes in a safe place. You'll need them if you lose access to your authentication device.
```

**✅ Success Check** - Comprehensive verification checklist (Variant C only)
```markdown
> **✅ Success Check:**
>
> - [ ] Account created and verified
> - [ ] Profile information complete
> - [ ] Access confirmed
```

**🎯 Pro Tip** - Advanced techniques or shortcuts
```markdown
> **🎯 Pro Tip:** Use a password manager to generate and store strong passwords for all your development accounts.
```

### Callout Placement

- Always at end of section
- After all steps and verification
- Before any bonus content

### Callout Content

- Explain social/administrative value
- Connect to course goals
- Provide context for why task matters
- Keep concise (1-2 sentences for Concept)

---

## Verification Patterns

### Implicit Verification (Variant A)

No explicit verification statement. Success assumed if student can proceed.

```markdown
Visit the class calendar and RSVP for each session you plan to attend.
```

---

### Brief Verification (Variant B)

Optional single statement after steps:

```markdown
**Verify:** Your introduction post is visible in the portal.
```

Or implicit through final step:

```markdown
4. **Check** back throughout the week to welcome new cohort members
```

---

### Detailed Verification (Variant C)

After individual steps or at end:

```markdown
**Verify:** You receive a confirmation email within 24 hours.
```

Or with multiple points:

```markdown
**Verify:** The Copilot settings page shows your organization provides access.
```

Or comprehensive checklist:

```markdown
> **✅ Success Check:**
>
> - [ ] Account created and verified
> - [ ] Two-factor authentication enabled
> - [ ] Organization membership confirmed
```

---

## When to Use This Pattern

✅ **Good for:**
- Course onboarding and introductions
- Administrative tasks (scheduling, surveys, submissions)
- Social activities (introductions, discussions)
- Account creation and access requests
- Communication tasks (messaging, posting)
- Planning and organization
- Non-technical setup tasks

❌ **Not ideal for:**
- Technical tool configuration (use Configuration pattern)
- Code modifications (use Iterative Build pattern)
- Multi-file coordination (use Integration pattern)
- Independent practice (use Solo Mission pattern)

---

## Procedural vs. Configuration

| Aspect | Procedural | Configuration |
|--------|-----------|---------------|
| **Purpose** | Administrative/social tasks | Technical tool setup |
| **Commands** | None | Terminal commands common |
| **Verification** | Implicit or simple | Expected output blocks |
| **Complexity** | Generally simpler | Can be very technical |
| **Callouts** | Why this matters (value) | Concept (technical) |
| **Examples** | Introductions, scheduling | Dev server, Git config |

**Key distinction:** If the task involves terminal commands, file modifications, or technical configuration, use Configuration pattern. If it's administrative, social, or logistical, use Procedural pattern.

---

## Pattern Selection Guide

| Steps | Nature | Verification | Variant | Example |
|-------|--------|--------------|---------|---------|
| 1-2 | Simple | Implicit | A (Minimal) | RSVP to calendar |
| 2 | Simple | Implicit | A (Minimal) | Download materials |
| 1-2 | Needs visual | Implicit | A with figure | Send DM with screenshot |
| 3-4 | Standard | Brief | B (Standard) | Post introduction |
| 3-4 | Standard | Brief | B (Standard) | Complete survey |
| 3-4 | Needs visual | Brief | B with figure | Join live session |
| 5+ | Complex | Detailed | C (Detailed) | Submit final project |
| 5+ | Multi-stage | Checklist | C (Detailed) | Account setup |

---

## Complete Examples

See `../examples/procedural-example.md` for complete working examples of all three variants.

---

## Quick Reference

**Variant A (Minimal):**
- 1-2 steps
- Paragraph or simple list
- Callout only
- Optional figure

**Variant B (Standard):**
- 3-4 steps
- Goal + numbered list
- Optional brief verification
- Callout

**Variant C (Detailed):**
- 5+ steps
- Goal + step subheadings
- Detailed verification
- Optional checklist
- Callout
