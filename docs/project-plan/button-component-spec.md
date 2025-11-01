# Button Component Specification

This document details the Button component specification which will be implemented across all 15 design styles in the UI Design Styles Portfolio project.

## Overview

The Button component is one of the most fundamental UI elements and will be implemented in each design style to showcase the core interactive characteristics of that style. Each implementation will maintain the same functionality while adapting the visual presentation.

## Component Properties

```jsx
<Button 
  variant="primary" // primary, secondary, tertiary, text
  size="medium"     // small, medium, large
  icon={null}       // optional icon component
  iconPosition="left" // left, right
  disabled={false}  // boolean
  loading={false}   // boolean
  onClick={() => {}} // function
  fullWidth={false} // boolean
  type="button"     // button, submit, reset
>
  Button Text
</Button>
```

## States

Each button implementation should demonstrate the following states:

1. **Default**: Normal, resting state
2. **Hover**: When the user hovers over the button
3. **Focus**: When the button receives keyboard focus
4. **Active/Pressed**: When the button is being clicked/pressed
5. **Disabled**: When the button is not interactive
6. **Loading**: When an action is being processed

## Button Variants

### Primary Button

The primary button is used for the main call-to-action on a page. It should be the most visually prominent button in each design style.

### Secondary Button

The secondary button is used for secondary actions. It should be less visually prominent than the primary button but still easily identifiable as a clickable element.

### Tertiary Button

The tertiary button is used for less important actions. It should be more subtle than the secondary button.

### Text Button

The text button is the least visually prominent and is typically used for the least important actions or in space-constrained environments.

## Implementation Across Design Styles

Below are guidelines for how the button component should be adapted for each design style:

### 1. Minimalism

- Clean, simple shapes with minimal decoration
- Limited color palette (primary action color plus grayscale)
- Subtle or no hover effects
- Clear, simple typography
- Generous whitespace within and around buttons

### 2. Flat Design

- Completely flat appearance with no shadows
- Vibrant, bold colors
- Simple geometric shapes
- Clear hover state through color change
- Clean, sans-serif typography

### 3. Material Design

- Subtle elevation (shadow) effect
- Ink ripple effect on click
- Floating action button (FAB) variant
- Consistent height and padding
- Text and icons follow material design specs

### 4. Neobrutalism

- Bold, contrasting colors
- Thick, visible borders
- Chunky appearance
- Offset shadows
- Unconventional alignment
- Bold, quirky typography

### 5. Neumorphism

- Soft, extruded appearance
- Subtle shadows creating pressed/depressed states
- Monochromatic color scheme
- Rounded corners
- Inset appearance when pressed

### 6. Glassmorphism

- Semi-transparent background
- Subtle blur effect
- Light border
- Works against varied backgrounds
- Glowing effect on hover/focus

### 7. Skeuomorphism

- Realistic appearance resembling physical buttons
- 3D effect with highlights and shadows
- Texture or material simulation
- Physical feedback appearance when pressed

### 8. Memphis Design

- Geometric patterns as backgrounds or borders
- Bold, contrasting colors
- Asymmetric elements
- Playful typography
- Unconventional shapes

### 9. Retro/Vintage

- Period-specific styling (e.g., 80s, 90s)
- Pixel-perfect borders
- Beveled edges
- Retro color schemes
- Era-appropriate typography

### 10. Cyberpunk/Futurism

- Neon glow effects
- Dark backgrounds with bright accents
- Glitch animations on hover/click
- Tech-inspired borders or patterns
- Futuristic typography
- Animated transitions

### 11. Claymorphism

- Soft, puffy appearance
- Multiple soft shadows
- Pastel or muted colors
- Very rounded corners
- Pressed-in effect on click

### 12. Organic Design

- Asymmetric, natural shapes
- Gentle, flowing lines
- Nature-inspired colors
- Subtle organic textures
- Fluid animations

### 13. Isometric Design

- 3D isometric perspective
- Consistent 30-degree angles
- Dimensional appearance
- Click effect showing different perspective
- Shadow follows isometric rules

### 14. Parametric Design

- Generated patterns or backgrounds
- Mathematical precision in layout
- Potentially interactive/reactive to cursor
- Animated geometric elements
- Algorithm-based design elements

### 15. Maximalism

- Rich, complex decoration
- Multiple colors and patterns
- Layered effects and textures
- Bold typography with decorative elements
- Elaborate hover and click animations

## Accessibility Considerations

All button implementations, regardless of design style, must maintain:

- Sufficient color contrast (WCAG AA minimum)
- Clear focus states for keyboard navigation
- Appropriate text size for readability
- Proper semantic markup
- ARIA attributes when necessary

## Responsive Considerations

- Button dimensions should adapt to viewport size
- Touch targets should be sufficient for mobile interaction (minimum 44×44px)
- Full-width buttons may be used on smaller screens

## Example Usage

```jsx
// Primary button in a form
<Button variant="primary" size="large" type="submit">
  Submit Form
</Button>

// Secondary button with icon
<Button 
  variant="secondary" 
  size="medium" 
  icon={<ArrowIcon />} 
  iconPosition="right"
>
  Learn More
</Button>

// Disabled text button
<Button variant="text" disabled>
  Unavailable Option
</Button>

// Loading button
<Button variant="primary" loading>
  Processing...
</Button>
```

This specification serves as a guide for implementing the Button component across all design styles in the portfolio. Each implementation should adhere to these functional requirements while visually expressing the unique characteristics of its respective design style.