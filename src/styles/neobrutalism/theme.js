// Neobrutalism Design System
// Bold, raw, high-contrast design with thick borders and brutal aesthetics

export const neobrutalismTheme = {
  // Colors - High contrast, bold, almost garish combinations
  colors: {
    // Primary palette - harsh, bold colors
    primary: {
      main: '#000000',        // Pure black
      light: '#333333',
      dark: '#000000',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#FFFF00',        // Bright yellow
      light: '#FFFF66',
      dark: '#CCCC00',
      contrast: '#000000',
    },
    accent: {
      red: '#FF0000',         // Pure red
      blue: '#0000FF',        // Pure blue
      green: '#00FF00',       // Lime green
      pink: '#FF00FF',        // Magenta
      cyan: '#00FFFF',        // Cyan
      orange: '#FF6600',      // Bright orange
      purple: '#9900FF',      // Electric purple
    },

    // Base colors - stark contrast
    white: '#FFFFFF',
    black: '#000000',

    // Grays - limited use, keep it harsh
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },

    // Semantic colors - bold and obvious
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: {
      primary: '#000000',
      secondary: '#404040',
      disabled: '#A3A3A3',
      contrast: '#FFFFFF',
    },
    border: '#000000',        // Always visible, thick black borders
    divider: '#000000',

    // States - dramatic color shifts
    hover: {
      primary: '#333333',
      secondary: '#FFFF66',
    },
    active: {
      primary: '#000000',
      secondary: '#CCCC00',
    },
    focus: '#0000FF',         // Bright blue focus
    disabled: '#D4D4D4',
    error: '#FF0000',
    success: '#00FF00',
    warning: '#FFFF00',
    info: '#00FFFF',
  },

  // Typography - Bold, chunky, brutal
  typography: {
    fontFamily: {
      primary: "'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      heading: "'Space Grotesk', 'Arial Black', 'Impact', sans-serif",
      mono: "'Space Mono', 'Courier New', monospace",
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
      '5xl': '3.5rem',    // 56px - larger, bolder
      '6xl': '4.5rem',    // 72px - huge
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,         // Maximum boldness
    },
    lineHeight: {
      tight: 1.1,         // Tighter for impact
      normal: 1.4,
      relaxed: 1.6,
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.05em',     // Wider spacing for brutalist effect
    },
  },

  // Spacing - Irregular, asymmetric spacing
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.5rem',    // 24px - irregular jump
    6: '2rem',      // 32px
    8: '2.5rem',    // 40px
    10: '3rem',     // 48px
    12: '4rem',     // 64px
    16: '5rem',     // 80px
    20: '6rem',     // 96px
    24: '8rem',     // 128px
  },

  // Border radius - Minimal to none (brutal = sharp edges)
  borderRadius: {
    none: '0',
    sm: '2px',
    md: '4px',        // Very subtle if used
    lg: '6px',
    xl: '8px',
    full: '9999px',   // For specific elements only
  },

  // Borders - THICK, VISIBLE, BRUTAL
  borderWidth: {
    none: '0',
    thin: '2px',      // Even "thin" is thick
    default: '3px',   // Standard is very visible
    thick: '5px',     // Extra thick
    brutal: '8px',    // Maximum brutalism
  },

  // Shadows - Hard, offset shadows (not soft blur)
  shadows: {
    none: 'none',
    sm: '2px 2px 0px #000000',       // Small hard shadow
    DEFAULT: '4px 4px 0px #000000',  // Standard brutal shadow
    md: '6px 6px 0px #000000',       // Medium
    lg: '8px 8px 0px #000000',       // Large
    xl: '12px 12px 0px #000000',     // Extra large
    brutal: '16px 16px 0px #000000', // Maximum offset
    // Colored shadows for emphasis
    yellow: '6px 6px 0px #FFFF00',
    red: '6px 6px 0px #FF0000',
    blue: '6px 6px 0px #0000FF',
    green: '6px 6px 0px #00FF00',
  },

  // Transitions - Snappy, no easing (brutal = mechanical)
  transitions: {
    none: 'none',
    fast: '100ms linear',     // Linear, no ease
    base: '150ms linear',
    slow: '200ms linear',
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

  // Special brutal effects
  effects: {
    // Offset patterns for layering
    offset: {
      sm: { x: '2px', y: '2px' },
      md: { x: '4px', y: '4px' },
      lg: { x: '8px', y: '8px' },
    },
    // Rotation for deliberate imperfection
    skew: {
      slight: '1deg',
      medium: '2deg',
      heavy: '3deg',
    },
  },
};

export default neobrutalismTheme;
