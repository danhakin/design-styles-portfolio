# UI Design Styles Portfolio - Quick Start Guide

This quick start guide will help you get the UI Design Styles Portfolio project up and running as quickly as possible.

## 1. Project Setup

### Clone the repository

```bash
git clone https://github.com/yourusername/design-styles-portfolio.git
cd design-styles-portfolio
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application should now be running at http://localhost:5173

## 2. Project Structure Overview

The key directories you'll be working with:

```
design-styles-portfolio/
├── src/
│   ├── components/        # Shared UI components
│   ├── styles/            # Style implementations
│   ├── pages/             # Page components
│   └── context/           # React context for style switching
```

## 3. Implementing Your First Style

1. Choose a style from the style guide (we recommend starting with Minimalism)
2. Navigate to `src/styles/[style-name]/`
3. Create the style system files:
   - `theme.js` - Define colors, typography, spacing
   - `components/` - Style the base components

Example of styling a button component:

```jsx
// src/styles/minimalism/components/Button.jsx
import styled from 'styled-components';
import { BaseButton } from '../../../components/common/Button';

export const MinimalistButton = styled(BaseButton)`
  background: ${props => props.variant === 'primary' ? '#000' : 'transparent'};
  color: ${props => props.variant === 'primary' ? '#fff' : '#000'};
  border: ${props => props.variant === 'primary' ? 'none' : '1px solid #000'};
  border-radius: 4px;
  padding: ${props => props.size === 'large' ? '16px 32px' : '8px 16px'};
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.variant === 'primary' ? '#333' : '#f5f5f5'};
  }
`;
```

4. Register your style in `src/data/designStyles.js`
5. Create a style implementation page in `src/pages/StyleImplementations/[StyleName].jsx`

## 4. Testing Your Implementation

For each style implementation, verify:

- All components render correctly
- Responsive behavior works across devices
- All interactive states function properly
- The style accurately represents the design principles

Use the browser's device emulation mode to test various screen sizes.

## 5. Adding More Styles

Once your first style is working:

1. Follow the implementation plan to add additional styles
2. Maintain component consistency between implementations
3. Document key aspects of each style

## 6. Useful Commands

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

## 7. Additional Resources

- Review the full documentation in `project-plan/`
- Refer to `button-component-spec.md` for a detailed example of implementing a component across styles
- Check `implementation-plan.md` for the suggested order of work

## 8. Getting Help

If you encounter issues:

1. Review the troubleshooting section in `developer-instructions.md`
2. Check the style-specific resources for implementation guidance
3. Join our Discord community for real-time assistance

Happy coding!