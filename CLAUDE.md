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

**Current Status**: Project initialized with Vite + React. Dependencies installed. Ready to begin Phase 1: Base Application Setup.

**Latest Commit**: bc10bfd - Initial project setup with planning documentation

## Repository Structure

```
design-styles-portfolio/
├── CLAUDE.md                    # This file - guidance for Claude Code
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
├── src/                         # React source files (default Vite template)
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

## Next Implementation Steps

According to `docs/project-plan/implementation-plan.md`, the next phase is:

**Phase 1: Base Application Setup (Week 1)**
1. Create directory structure for components, styles, pages, context
2. Create unstyled base components (Header, Navigation, Button, Card, etc.)
3. Set up React Router with routes
4. Implement style context for switching between design styles
5. Create the baseline "DesignSync" interface layout

## Design Principles

- **Consistency in Function**: All style implementations have identical functionality, props, and behavior
- **Visual Diversity**: Each style authentically represents its design philosophy
- **Accessibility First**: All styles maintain WCAG AA standards despite visual differences
- **Educational Focus**: Implementations should clearly demonstrate each style's unique characteristics
