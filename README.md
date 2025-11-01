# UI Design Styles Portfolio

A React application showcasing the same interface ("DesignSync" - a fictional design collaboration tool) implemented in 15 different UI design styles, from Minimalism to Maximalism.

## Project Overview

This project demonstrates how visual design choices dramatically change the look and feel of an interface while maintaining identical functionality. Each style authentically represents its design philosophy, providing an educational resource for designers and developers.

## Design Styles

The portfolio will showcase these 15 design styles:

1. **Minimalism** - Clean, simple design with emphasis on essential elements
2. **Flat Design** - Two-dimensional design with bold colors and simple shapes
3. **Material Design** - Google's design language with elevation and responsive animations
4. **Neobrutalism** - Bold, raw aesthetic with heavy borders and stark contrast
5. **Neumorphism** - Soft UI with subtle shadows creating extruded appearance
6. **Glassmorphism** - Frosted glass effect with transparency and blur
7. **Skeuomorphism** - Realistic design mimicking real-world materials
8. **Memphis Design** - Bold geometric shapes with vibrant colors and patterns
9. **Retro/Vintage** - Nostalgic design inspired by past decades
10. **Cyberpunk/Futurism** - High-tech aesthetic with neon colors
11. **Claymorphism** - Soft, inflated 3D objects with smooth gradients
12. **Organic Design** - Natural, flowing shapes inspired by nature
13. **Isometric Design** - 3D perspective with geometric precision
14. **Parametric Design** - Algorithmic patterns and data-driven aesthetics
15. **Maximalism** - Bold, abundant design with rich details and colors

## Current Status

**Phase 1: Core Infrastructure** ✅ (In Review - PR #1)
- Style switching system with React Context
- Design styles metadata
- Basic routing structure
- Minimal page placeholders

**Phase 2: Base & Layout Components** 🔄 (Coming next)
- Unstyled base components (Button, Card, Input, Dropdown, Modal)
- Layout components (Header, Footer)

**Phase 3: Sections & Demo Page** ⏳ (Planned)
- Section components (Hero, Features, CardGrid, Form)
- Complete DesignSync demo interface
- Style switcher component

**Phase 4: Style Implementations** ⏳ (Planned)
- Individual style implementations for all 15 design styles
- Starting with Minimalism as baseline

## Tech Stack

- **React** (v19.1.1) - UI library
- **Vite** (v7.1.7) - Build tool and dev server
- **React Router** (v7.9.5) - Client-side routing
- **Styled Components** (v6.1.19) - CSS-in-JS styling
- **Framer Motion** (v12.23.24) - Animation library

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## Project Structure

```
design-styles-portfolio/
├── docs/                    # Project planning documentation
│   ├── ui-design-styles.md
│   └── project-plan/
├── src/
│   ├── components/
│   │   ├── common/         # Base reusable components
│   │   ├── meta/           # Meta components (style switcher, etc.)
│   │   └── sections/       # Page sections
│   ├── context/            # React context (StyleContext)
│   ├── data/               # Static data (design styles metadata)
│   ├── layouts/            # Layout components
│   ├── pages/              # Page components
│   ├── styles/             # Style implementations (15 directories)
│   ├── App.jsx
│   └── main.jsx
└── public/                 # Static assets
```

## Documentation

- [CLAUDE.md](CLAUDE.md) - Project guidance for AI assistants
- [docs/ui-design-styles.md](docs/ui-design-styles.md) - Detailed descriptions of all 15 design styles
- [docs/project-plan/](docs/project-plan/) - Complete implementation plan and specifications

## Development Approach

1. All style implementations maintain **identical functionality**
2. Only visual presentation differs between styles
3. Components meet **WCAG AA accessibility standards**
4. All implementations are fully **responsive**
5. Development follows a **phased approach** with PR-based reviews

## Contributing

This project follows a structured PR workflow:
- Each phase is broken into reviewable PRs
- All changes are tested before merge
- Documentation is kept up-to-date

## License

This project is for educational purposes.

## Acknowledgments

Built with React, Vite, and modern web technologies to demonstrate the diversity and power of UI design approaches.
