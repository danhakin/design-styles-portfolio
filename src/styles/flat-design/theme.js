// Flat Design System
// Bold colors, 2D elements, no shadows or gradients

export const flatDesignTheme = {
  // Colors - Bold and vibrant with better harmony
  colors: {
    // Primary palette - modern flat design
    primary: {
      main: '#4A90E2',      // Modern blue
      light: '#6BA3E8',
      dark: '#357ABD',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#26C281',      // Fresh green
      light: '#4FD19C',
      dark: '#1E9968',
      contrast: '#FFFFFF',
    },
    accent: {
      orange: '#FF8B60',    // Soft coral
      red: '#FF6B6B',       // Soft red
      purple: '#A78BFA',    // Soft purple
      yellow: '#FECA57',    // Warm yellow
      turquoise: '#48DBB4', // Aqua
      pink: '#FF7EB6',      // Soft pink
    },

    // Base colors
    white: '#FFFFFF',
    black: '#2C3E50',     // Dark blue-gray instead of pure black

    // Grays - limited use in flat design
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#2C3E50',
    },

    // Semantic colors - bright and clear
    background: '#F7FAFC',
    surface: '#FFFFFF',
    text: {
      primary: '#2D3748',
      secondary: '#718096',
      disabled: '#CBD5E0',
      contrast: '#FFFFFF',
    },
    border: '#E2E8F0',
    divider: '#EDF2F7',

    // States - color changes, no shadows
    hover: {
      primary: '#6BA3E8',
      secondary: '#4FD19C',
    },
    active: {
      primary: '#357ABD',
      secondary: '#1E9968',
    },
    focus: '#4A90E2',
    disabled: '#CBD5E0',
    error: '#FF6B6B',
    success: '#26C281',
    warning: '#FECA57',
    info: '#4A90E2',
  },

  // Typography - Clean sans-serif
  typography: {
    fontFamily: {
      primary: "'Lato', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      heading: "'Montserrat', 'Lato', 'Roboto', sans-serif",
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '2rem',      // 32px
      '4xl': '2.5rem',    // 40px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
    letterSpacing: {
      tight: '-0.01em',
      normal: '0',
      wide: '0.025em',
    },
  },

  // Spacing - Regular, not too generous
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
  },

  // Border radius - Subtle to moderate
  borderRadius: {
    none: '0',
    sm: '3px',
    md: '5px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  },

  // Borders - Simple, solid
  borderWidth: {
    none: '0',
    thin: '1px',
    default: '2px',
    thick: '3px',
  },

  // Shadows - NONE (flat design principle)
  shadows: {
    none: 'none',
  },

  // Transitions - Snappy and responsive
  transitions: {
    fast: '150ms ease',
    base: '200ms ease',
    slow: '300ms ease',
  },

  // Layout
  layout: {
    maxWidth: '1200px',
    containerPadding: '2rem',
    sectionSpacing: '5rem',
  },

  // Z-index layers
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

export default flatDesignTheme;
