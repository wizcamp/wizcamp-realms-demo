# Procedural Pattern Analysis

Research and analysis for developing the Procedural Pattern based on industry best practices.

---

## Current State: Session 0 Analysis

### Section 1: Introducing Yourself

**Current format:**
```markdown
## 👋 Introducing Yourself

**Goal:** Connect with your cohort and share your coding journey.

### Step 1: Log in to the portal
### Step 2: Create your post
### Step 3: Engage with others

💡 **Why this matters:** [explanation]
```

**Observations:**
- Has goal statement (good)
- Uses step subheadings (inconsistent with other patterns)
- Callout uses "Why this matters" (should be "Concept")
- No explicit verification
- Steps are descriptive but could be more action-oriented

---

### Section 2: Planning Your Schedule

**Current format:**
```markdown
## 📅 Planning Your Schedule

Go to the class calendar within the [Wizcamp Portal]... and RSVP for each session...
```

**Observations:**
- Single paragraph instruction
- No goal statement
- No callout
- No verification
- Very minimal (appropriate for simple task)

---

### Section 3: Setting Up Your GitHub Account

**Current format:**
```markdown
## 🐙 Setting Up Your GitHub Account

Go to [github.com]... and create a new account... If you already have an account, verify you can log in.

💡 **Why GitHub matters:** [explanation]
```

**Observations:**
- Single paragraph instruction
- No goal statement
- Callout uses "Why GitHub matters" (should be "Concept")
- No explicit verification
- Handles conditional (create OR verify)

---

### Section 4: Connecting with Your Instructor

**Current format:**
```markdown
## 📨 Connecting with Your Instructor

DM Mr. Colestock in the [Wizcamp Portal]... with your full name, email, and GitHub username...

💡 **Why this matters:** [explanation]
```

**Observations:**
- Single paragraph instruction
- No goal statement
- Callout uses "Why this matters" (should be "Concept")
- Implicit verification (receive confirmation)

---

## Industry Research: Procedural/Onboarding Best Practices

### GitHub Documentation Style

**Onboarding tasks:**
- Clear action verbs
- Numbered steps for multi-step
- "Prerequisites" sections
- "Next steps" navigation
- Minimal callouts (notes, warnings)

**Example pattern:**
```markdown
## Creating an account

1. Navigate to github.com
2. Click Sign up
3. Follow the prompts to create your account
4. Verify your email address

After creating your account, you can create your first repository.
```

---

### Coursera/edX Course Setup

**Onboarding characteristics:**
- Welcome message with context
- Checklist format for multiple tasks
- Progress indicators
- Clear completion criteria
- "What you'll need" sections

**Example pattern:**
```markdown
## Getting Started

Before you begin the course, complete these steps:

- [ ] Create your account
- [ ] Join the discussion forum
- [ ] Download course materials
- [ ] Set your learning schedule

Each step takes about 5 minutes.
```

---

### Stripe Documentation (Setup Tasks)

**Setup task characteristics:**
- Goal-oriented headers
- Numbered steps with bold actions
- Code blocks for specific values
- "What's next" sections
- Inline verification

**Example pattern:**
```markdown
## Set up your account

1. Sign up for a Stripe account
2. Activate your account by verifying your email
3. Complete your business profile

You're ready to accept your first payment.
```

---

### AWS Getting Started Guides

**Onboarding characteristics:**
- Prerequisites clearly stated
- Estimated time to complete
- Step-by-step with screenshots
- "Verify" sections after key steps
- "Clean up" or "Next steps" at end

**Example pattern:**
```markdown
## Prerequisites

Before you begin, you need:
- An AWS account
- Basic familiarity with the AWS Console

Estimated time: 10 minutes

## Step 1: Sign in to the console
## Step 2: Navigate to the service
## Step 3: Complete the setup

Verification: You should see...
```

---

## Pattern Comparison: Configuration vs. Procedural

### Configuration Pattern (Documented)

**Characteristics:**
- Tool/environment setup
- Terminal commands
- Technical configuration
- 3 variants (A: 1-2 steps, B: 3-4 steps, C: 5+ steps)
- Goal statements
- Expected output/results
- Callouts for concepts

**Structure (Variant B):**
```markdown
## [Emoji] Section Title

🎯 **Goal:** [What you'll accomplish]

1. **[Action]** [instruction]
2. **[Action]** [instruction]
3. **[Action]** [instruction]

**Verify:** [Brief check]

> **[Callout Type]:** [Explanation]
```

---

### Procedural Pattern (To Be Developed)

**Characteristics:**
- Administrative/social tasks
- Course logistics
- Communication activities
- No technical setup
- Simpler than Configuration

**Key differences from Configuration:**
- No terminal commands
- No expected output blocks
- Less technical verification
- More social/administrative focus
- Potentially simpler structure

---

## Proposed Procedural Pattern Variants

### Variant A: Minimal (1-2 Steps)

**Use when:** Single action or simple two-step task

**Structure:**
```markdown
## [Emoji] Section Title

[Single instruction paragraph OR 2-step numbered list]

> **💡 Concept:** [Why this matters]
```

**Example:**
```markdown
## 📅 Planning Your Schedule

Visit the class calendar in the [Wizcamp Portal](https://portal.wizcamp.com) and RSVP for each session you plan to attend.

> **💡 Concept:** RSVPing helps us prepare materials and ensures you receive session reminders.
```

---

### Variant B: Standard (3-4 Steps)

**Use when:** Multi-step administrative or social task

**Structure:**
```markdown
## [Emoji] Section Title

🎯 **Goal:** [What you'll accomplish]

1. **[Action]** [instruction]
2. **[Action]** [instruction]
3. **[Action]** [instruction]

> **💡 Concept:** [Why this matters]
```

**Example:**
```markdown
## 👋 Introducing Yourself

🎯 **Goal:** Connect with your cohort and share your coding journey.

1. **Log in** to the [Wizcamp Portal](https://portal.wizcamp.com)
2. **Click** "New Introduction" and share your name, coding experience, and what excites you about learning to code
3. **Read** and respond to other student introductions

> **💡 Concept:** Building connections with your cohort creates a supportive learning community where you can share challenges and celebrate wins throughout the course.
```

---

### Variant C: Detailed (5+ Steps or Complex)

**Use when:** Complex administrative task requiring detailed guidance

**Structure:**
```markdown
## [Emoji] Section Title

🎯 **Goal:** [What you'll accomplish]

### Step 1: [Action Name]

[Detailed instruction]

### Step 2: [Action Name]

[Detailed instruction]

[Continue...]

**Verify:** [How to confirm completion]

> **💡 Concept:** [Why this matters]
```

**Example:**
```markdown
## 📝 Submitting Your Final Project

🎯 **Goal:** Submit your completed trivia game for evaluation.

### Step 1: Verify your game works

Test all features and ensure there are no console errors.

### Step 2: Create a project summary

Write a brief description (200-300 words) covering:
- What you built
- Challenges you overcame
- Features you're most proud of

### Step 3: Record a demo video

Create a 2-3 minute screen recording showing your game in action.

### Step 4: Submit via portal

Upload your summary and video link to the [Wizcamp Portal](https://portal.wizcamp.com) under "Final Project Submission."

**Verify:** You receive a confirmation email within 24 hours.

> **💡 Concept:** Your project submission showcases your learning journey and becomes part of your developer portfolio.
```

---

## Decision Tree: Which Variant?

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

## Key Differences: Procedural vs. Configuration

| Aspect | Procedural | Configuration |
|--------|-----------|---------------|
| **Purpose** | Administrative/social tasks | Technical tool setup |
| **Commands** | None | Terminal commands common |
| **Verification** | Implicit or simple | Expected output blocks |
| **Complexity** | Generally simpler | Can be very technical |
| **Callouts** | Why it matters (social/admin) | How it works (technical) |
| **Examples** | Introductions, scheduling, submissions | Dev server, Git config, deployment |

---

## Formatting Conventions (Aligned with Framework)

### Action Verbs
- **Bold** at start of instructions: **Log in**, **Click**, **Navigate**, **Submit**, **Read**, **Share**

### Links
- Fully-qualified URLs: `[portal.wizcamp.com](https://portal.wizcamp.com)`
- Exception: Complex URLs can use descriptive text

### Callouts
- **💡 Concept:** Why this matters (primary for Procedural)
- **ℹ️ Note:** Additional context
- **⚠️ Warning:** Prevent mistakes
- **🎯 Pro Tip:** Advanced techniques

### Verification
- **Variant A:** Implicit (no explicit verification)
- **Variant B:** Implicit or brief statement
- **Variant C:** Explicit "Verify:" statement

---

## Recommendations for Session 0 Enhancement

### Section 1: Introducing Yourself
- **Current:** Uses step subheadings (inconsistent)
- **Recommendation:** Use Variant B (Standard) with numbered list
- **Changes:** Remove step subheadings, use numbered list, fix callout format

### Section 2: Planning Your Schedule
- **Current:** Minimal paragraph
- **Recommendation:** Use Variant A (Minimal)
- **Changes:** Add callout explaining value

### Section 3: Setting Up Your GitHub Account
- **Current:** Minimal paragraph
- **Recommendation:** Keep as Configuration Pattern (it's tool setup)
- **Changes:** Move to Configuration section or clarify it's different from Procedural

### Section 4: Connecting with Your Instructor
- **Current:** Minimal paragraph
- **Recommendation:** Use Variant A (Minimal)
- **Changes:** Fix callout format

---

## Next Steps

1. Create `patterns/procedural.md` with comprehensive documentation
2. Create `examples/procedural-example.md` with Session 0 enhanced examples
3. Update Session 0 to use proper Procedural pattern formatting
4. Update PATTERNS.md to mark Procedural as documented

---

**Analysis Date:** 2025
**Framework Version:** 1.2
