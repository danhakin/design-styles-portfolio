# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a planning repository for a UI Design Styles Portfolio project - a React application that will showcase the same interface ("DesignSync" - a fictional design collaboration tool) implemented in 15 different UI design styles:

1. Minimalism
2. Flat Design
3. Material Design
4. Neobrutalism
5. Neumorphism
6. Glassmorphism
7. Skeuomorphism
8. Memphis Design
9. Retro/Vintage
10. Cyberpunk/Futurism
11. Claymorphism
12. Organic Design
13. Isometric Design
14. Parametric Design
15. Maximalism

**Current Status**: Phase 3 (Sections & Demo Page) completed and in review as PR #3.

**Latest Commit**: feature/sections-demo-page branch - Section components and complete demo

**What's New in This PR**:
- 4 section components (Hero, Features, CardGrid, NewsletterForm)
- StyleSwitcher meta component for design style selection
- Complete DesignSync demo page using all components
- Enhanced Home page with full style overview and navigation

## Repository Structure

```
design-styles-portfolio/
├── CLAUDE.md                    # This file - guidance for Claude Code
├── README.md                    # Project overview and setup instructions
├── docs/
│   ├── ui-design-styles.md          # Overview of all 15 design styles
│   └── project-plan/
│       ├── baseline-interface.md     # Specification of the common interface
│       ├── project-structure.md      # Planned directory structure
│       ├── implementation-plan.md    # Phased implementation timeline
│       ├── developer-instructions.md # Step-by-step implementation guide
│       ├── quick-start.md           # Quick start guide for developers
│       ├── button-component-spec.md # Detailed button component example
│       └── content-template.md      # Content to be used across all styles
├── src/
│   ├── context/                 # StyleContext ✅ Implemented
│   ├── data/                    # Design styles metadata ✅ Implemented
│   ├── pages/                   # Page components ✅ Basic placeholders
│   ├── components/
│   │   ├── common/              # Base components ✅ Implemented
│   │   ├── meta/                # Meta components (empty)
│   │   └── sections/            # Section components (empty)
│   ├── layouts/                 # Layout components ✅ Implemented
│   ├── styles/                  # 15 style directories created (empty)
│   └── App.jsx                  # Router + StyleProvider ✅ Implemented
├── public/                      # Static assets
└── [config files]               # vite.config.js, package.json, etc.
```

## Key Documentation

### ui-design-styles.md
Reference guide describing characteristics, examples, and best use cases for each of the 15 design styles.

### project-plan/baseline-interface.md
Defines the common interface structure that will be implemented across all styles:
- Header, Navigation, Hero Section
- Features Section, Card Grid, Form Section
- Footer and interactive elements
- All implementations use consistent content about "DesignSync"

### project-plan/button-component-spec.md
Detailed specification showing how a single component (Button) should be adapted across all 15 styles. This serves as a template for how to approach other components.

### project-plan/content-template.md
Consistent content to be used across all implementations, ensuring focus remains on visual design differences.

## Tech Stack

- **React** (v19.1.1): Core UI library ✅ Installed
- **Vite** (v7.1.7): Build tool ✅ Installed
- **React Router** (v7.9.5): Navigation between style implementations ✅ Installed
- **Styled Components** (v6.1.19): CSS-in-JS styling approach ✅ Installed
- **Framer Motion** (v12.23.24): Animations ✅ Installed
- **React Context API**: Style switching state management (To be implemented)

## Planned Project Structure (When Implemented)

```
design-styles-portfolio/
├── src/
│   ├── components/
│   │   ├── common/          # Base unstyled components
│   │   └── meta/            # Style switcher, comparisons
│   ├── styles/
│   │   ├── minimalism/
│   │   ├── flat-design/
│   │   ├── material-design/
│   │   └── [13 more style directories]
│   ├── pages/
│   │   └── StyleImplementations/
│   ├── context/             # Style switching context
│   └── data/                # Design style metadata
```

## Implementation Approach

1. Create unstyled base components with consistent functionality
2. Implement styles progressively, starting with Minimalism as baseline
3. Each style maintains identical structure/functionality, only visual presentation differs
4. All implementations must meet accessibility standards (WCAG AA)
5. All implementations must be fully responsive

## Component States to Implement

All interactive components across all styles must demonstrate:
- Default, Hover, Focus, Active/Pressed states
- Disabled and Loading states
- Error and Success states (for forms)

## Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Implementation Progress

**Phase 1: Core Infrastructure** ✅ (Merged - PR #1)
- ✅ Directory structure created
- ✅ StyleContext with style switching
- ✅ Design styles metadata
- ✅ React Router setup
- ✅ Minimal page placeholders
- ✅ README updated

**Phase 2: Base & Layout Components** ✅ (Merged - PR #2)
- ✅ Base components: Button, Card, Input, Dropdown, Modal
- ✅ Layout components: Header, Footer with DesignSync branding
- ✅ Components follow consistent prop patterns
- ✅ App tested and working

**Phase 3: Sections & Demo Page** ✅ (In Review - PR #3)
- ✅ Section components: Hero, Features, CardGrid, NewsletterForm
- ✅ StyleSwitcher component with style info display
- ✅ Complete DesignSync demo page integrating all components
- ✅ Enhanced Home page with style grid and navigation
- ✅ App tested and working

**Phase 4: Style Implementations** ⏳ (Future)
- Start with Minimalism as baseline
- Progressively implement all 15 design styles

## PR Workflow

This project follows a structured PR-based development workflow to ensure code quality and maintainability.

### Guidelines for Creating PRs

1. **PR Size and Scope**
   - Keep PRs focused and reviewable (typically 5-15 files)
   - Break large phases into multiple PRs if needed
   - Each PR should leave the app in a working state
   - Include minimal placeholders when needed to avoid breaking imports

2. **Branch Naming**
   - Use descriptive branch names: `feature/[feature-name]`
   - Examples: `feature/core-infrastructure`, `feature/base-components`

3. **Before Committing**
   - Update `README.md` to reflect current implementation status
   - Update `CLAUDE.md` with current status and latest changes
   - Test that the app runs successfully (`npm run dev`)
   - Verify no console errors or import issues

4. **Commit Message Format**
   ```
   [Short summary line]

   [Detailed description of changes]

   Changes:
   - Bullet point list of main changes
   - Include file names and purpose

   Technical details:
   - Implementation specifics
   - API details
   - Architecture decisions

   [Testing verification]

   Related: [Phase/PR context]

   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude <noreply@anthropic.com>
   ```

5. **PR Creation Process**
   - Create feature branch from `main`
   - Stage only files relevant to the PR scope
   - Commit with detailed message
   - Push branch and create PR
   - Link PR to relevant issue/phase

6. **Files to Always Update**
   - `README.md` - Project status section
   - `CLAUDE.md` - Current status and implementation progress
   - Any related documentation

### Phase Breakdown Strategy

- **Phase 1**: Core infrastructure (context, routing, minimal pages)
- **Phase 2**: Base components (reusable, unstyled components)
- **Phase 3**: Full page implementations (sections, demo pages)
- **Phase 4+**: Style implementations (one or more styles per PR)

## Design Principles

- **Consistency in Function**: All style implementations have identical functionality, props, and behavior
- **Visual Diversity**: Each style authentically represents its design philosophy
- **Accessibility First**: All styles maintain WCAG AA standards despite visual differences
- **Educational Focus**: Implementations should clearly demonstrate each style's unique characteristics
