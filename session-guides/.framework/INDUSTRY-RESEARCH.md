# Industry Configuration Documentation Research

Analysis of how leading tech companies document configuration and setup tasks.

---

## Research Sources

1. **GitHub Docs** - Account and environment setup
2. **npm Docs** - CLI tool usage and commands
3. **VS Code Docs** - Editor and extension setup

---

## GitHub Docs Analysis

### Example: Creating a GitHub Account
**Source:** https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github

**Structure:**
```markdown
# Creating an account on GitHub

Intro paragraph explaining what you'll do.

## Signing up for a new personal account

1. Navigate to https://github.com/.
2. Click Sign up.
3. Follow the prompts to create your personal account.

During sign up, you'll be asked to verify your email address...

## Next steps

- Paragraph about what to do next
- Links to related documentation
```

**Key Observations:**
- Clear hierarchical headings
- Numbered steps with action verbs
- Context before and after steps
- "Next steps" section
- No explicit "Expected result" statements
- No callouts (uses standard paragraphs)
- Minimal, focused on essentials

---

### Example: Setting up Git
**Source:** https://docs.github.com/en/get-started/getting-started-with-git/set-up-git

**Structure:**
```markdown
# Set up Git

Intro paragraph.

## Setting your username in Git

For every repository on your computer, Git tracks...

$ git config --global user.name "Mona Lisa"

## Setting your commit email address

GitHub uses your commit email address...

$ git config --global user.email "YOUR_EMAIL"

## Next steps

Now that you have set up Git...
```

**Key Observations:**
- Context paragraph before each command
- Commands shown with `$` prompt
- No "Step 1, Step 2" numbering
- Explanation of why before how
- Placeholder values in caps (YOUR_EMAIL)
- "Next steps" section at end

---

## npm Docs Analysis

### Example: npm install command
**Source:** https://docs.npmjs.com/cli/v10/commands/npm-install

**Structure:**
```markdown
# npm install

## Synopsis

```bash
npm install [<package-spec> ...]
```

## Description

This command installs a package and any packages that it depends on...

## Configuration

### `save`
- Default: `true` unless...
- Type: Boolean

Description of configuration option.

## Examples

Install the dependencies in the current project:

```bash
npm install
```

Install a specific package:

```bash
npm install lodash
```
```

**Key Observations:**
- Synopsis shows command syntax
- Description explains what it does
- Configuration options detailed
- Multiple examples with context
- No numbered steps
- Command-first, explanation-second
- Code blocks for all commands

---

### Example: Creating a package.json
**Source:** https://docs.npmjs.com/creating-a-package-json-file

**Structure:**
```markdown
# Creating a package.json file

You can create a package.json file by running a CLI questionnaire...

## Running a CLI questionnaire

To create a package.json file with values that you supply, use the `npm init` command.

1. On the command line, navigate to the root directory...
2. Run the following command:
   ```bash
   npm init
   ```
3. Answer the questions in the command line questionnaire.

## Customizing the package.json questionnaire

If you expect to create many package.json files...
```

**Key Observations:**
- Numbered steps when sequential
- Commands in code blocks
- Context before steps
- Subsections for variations
- No "Expected result" statements
- Assumes command success

---

## VS Code Docs Analysis

### Example: Setting up VS Code
**Source:** https://code.visualstudio.com/docs/setup/setup-overview

**Structure:**
```markdown
# Setting up Visual Studio Code

Getting up and running with Visual Studio Code is quick and easy...

## Cross platform

VS Code is a free code editor, which runs on the macOS, Linux, and Windows...

## Update cadence

VS Code releases a new version each month...

## Insiders nightly build

If you'd like to try our nightly builds to see new features early...

## Portable mode

Visual Studio Code supports Portable mode installation...

## Additional components

VS Code is small by design...
```

**Key Observations:**
- Overview-first approach
- Platform-specific sections
- No numbered steps in overview
- Links to platform-specific guides
- Explains concepts before actions
- Modular structure

---

### Example: Installing an Extension
**Source:** https://code.visualstudio.com/docs/editor/extension-marketplace

**Structure:**
```markdown
# Extension Marketplace

Increase the power of Visual Studio Code through Extensions...

## Browse for extensions

You can browse and install extensions from within VS Code. Bring up the Extensions view by clicking on the Extensions icon...

1. Click the Extensions icon in the Activity Bar...
2. Type the name of the extension...
3. Click Install.

## Install an extension

To install an extension, select the Install button...

## Extension details

On the extension details page, you can read the extension's README...
```

**Key Observations:**
- Numbered steps for actions
- Screenshots/visuals (not shown here)
- Multiple ways to accomplish task
- Details section after instructions
- Action verbs in steps
- No explicit verification

---

## Pattern Comparison Matrix

| Element | GitHub | npm | VS Code | Our Current |
|---------|--------|-----|---------|-------------|
| **Goal/Intro** | Intro paragraph | Description section | Overview | Goal statement |
| **Step format** | Numbered | Numbered (when sequential) | Numbered | Numbered with subheadings |
| **Commands** | With `$` prompt | Code blocks | UI actions | Code blocks |
| **Placeholders** | CAPS (YOUR_EMAIL) | angle brackets `<package>` | Descriptive | Varies |
| **Verification** | Implicit | Implicit | Implicit | Explicit "Expected result" |
| **Context** | Before steps | Before and after | Before steps | Goal + callout |
| **Next steps** | ✓ | ✗ | ✓ | ✗ |
| **Callouts** | ✗ (paragraphs) | ✗ (paragraphs) | ✗ (paragraphs) | ✓ (emoji callouts) |
| **Examples** | ✗ | ✓ (multiple) | ✓ (variations) | ✗ |

---

## Key Insights

### What Industry Does Well

1. **Context before action** - All explain "why" before "how"
2. **Implicit verification** - Assumes success, no explicit "Expected result"
3. **Command-first for CLI** - Show command, then explain
4. **Numbered steps only when sequential** - Not for every instruction
5. **Platform-specific sections** - Tables or separate sections
6. **Next steps** - Links to related tasks
7. **Multiple examples** - Show variations and use cases

### What We Do Differently

1. **Explicit verification** - "Expected result" statements
2. **Goal statements** - Upfront learning objective
3. **Emoji callouts** - Visual "why this matters"
4. **Step subheadings** - More structure than industry
5. **Bonus challenges** - Extension activities
6. **Expected output** - Show terminal output

### What We Should Consider

**Keep (unique value):**
- Explicit verification (helps beginners)
- Goal statements (learning-focused)
- Emoji callouts (engaging, scannable)
- Expected output (reduces confusion)

**Adopt from industry:**
- "Next steps" section (connects tasks)
- Multiple examples (shows variations)
- Implicit verification for simple tasks
- Less structure for 1-2 step tasks

**Refine:**
- Step subheadings (only for 4+ steps?)
- Numbered steps (only when truly sequential?)
- Callout placement (integrate better?)

---

## Recommended Hybrid Approach

### For Simple Configs (1-2 steps)
**Industry style:** Minimal, paragraph format
```markdown
## Section Title

Navigate to [service] and create an account. If you already have one, verify you can log in.

💡 **Why this matters:** Brief explanation.
```

### For Medium Configs (3-4 steps)
**Hybrid:** Numbered steps + our enhancements
```markdown
## Section Title

🎯 **Goal:** What you'll accomplish.

1. **Action** with context
2. **Action** with context
3. **Action** with context

**Verify:** Brief check.

💡 **Why this matters:** Brief explanation.
```

### For Complex Configs (5+ steps)
**Our current style:** Full structure
```markdown
## Section Title

🎯 **Goal:** What you'll accomplish.

### Step 1: Action Name
Context and instruction.
```bash
command
```
**Expected result:** What you should see.

### Step 2: Action Name
[Continue...]

💡 **Why this matters:** Brief explanation.

🏆 **Bonus Challenge:** Extension activity.
```

---

## Decision Framework

```
How many steps?

├─ 1-2 steps
│  └─ Use: Minimal format (industry style)
│     - Paragraph instruction
│     - Callout only
│
├─ 3-4 steps
│  └─ Use: Hybrid format
│     - Goal statement
│     - Numbered steps (no subheadings)
│     - Brief verification
│     - Callout
│
└─ 5+ steps
   └─ Use: Full format (current style)
      - Goal statement
      - Step subheadings
      - Expected results
      - Callout
      - Optional bonus challenge
```

---

## Next Steps

1. Draft 3 pattern variants based on insights
2. Test variants on real sections
3. Evaluate clarity and completeness
4. Choose optimal structure
5. Document final pattern
