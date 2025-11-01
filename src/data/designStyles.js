export const designStyles = [
  {
    id: 'minimalism',
    name: 'Minimalism',
    description: 'Clean, simple design with emphasis on space and essential elements only.',
    characteristics: ['Simple', 'Clean', 'Spacious', 'Monochromatic'],
    implemented: true,
  },
  {
    id: 'flat-design',
    name: 'Flat Design',
    description: 'Two-dimensional design with bold colors and simple shapes.',
    characteristics: ['2D', 'Bright Colors', 'Simple Shapes', 'No Shadows'],
    implemented: true,
  },
  {
    id: 'material-design',
    name: 'Material Design',
    description: 'Google\'s design language with subtle shadows and responsive animations.',
    characteristics: ['Elevation', 'Bold Colors', 'Grid-based', 'Responsive'],
    implemented: false,
  },
  {
    id: 'neobrutalism',
    name: 'Neobrutalism',
    description: 'Bold, raw aesthetic with heavy borders and stark contrast.',
    characteristics: ['Bold Borders', 'High Contrast', 'Raw', 'Playful'],
    implemented: false,
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    description: 'Soft UI with subtle shadows creating extruded appearance.',
    characteristics: ['Soft Shadows', 'Subtle', 'Extruded', 'Monochromatic'],
    implemented: false,
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    description: 'Frosted glass effect with transparency and blur.',
    characteristics: ['Transparent', 'Blurred', 'Layered', 'Modern'],
    implemented: false,
  },
  {
    id: 'skeuomorphism',
    name: 'Skeuomorphism',
    description: 'Realistic design mimicking real-world materials and textures.',
    characteristics: ['Realistic', 'Textured', 'Detailed', '3D Effects'],
    implemented: false,
  },
  {
    id: 'memphis-design',
    name: 'Memphis Design',
    description: 'Bold geometric shapes with vibrant colors and patterns.',
    characteristics: ['Geometric', 'Colorful', 'Patterns', 'Playful'],
    implemented: false,
  },
  {
    id: 'retro-vintage',
    name: 'Retro/Vintage',
    description: 'Nostalgic design inspired by past decades.',
    characteristics: ['Nostalgic', 'Warm Colors', 'Classic Typography', 'Textured'],
    implemented: false,
  },
  {
    id: 'cyberpunk-futurism',
    name: 'Cyberpunk/Futurism',
    description: 'High-tech aesthetic with neon colors and digital elements.',
    characteristics: ['Neon', 'Dark', 'Glowing', 'High-tech'],
    implemented: false,
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    description: 'Soft, inflated 3D objects with smooth gradients.',
    characteristics: ['3D', 'Soft', 'Inflated', 'Playful'],
    implemented: false,
  },
  {
    id: 'organic-design',
    name: 'Organic Design',
    description: 'Natural, flowing shapes inspired by nature.',
    characteristics: ['Natural', 'Flowing', 'Curved', 'Asymmetric'],
    implemented: false,
  },
  {
    id: 'isometric-design',
    name: 'Isometric Design',
    description: '3D perspective with geometric precision.',
    characteristics: ['3D', 'Geometric', 'Precise', 'Dimensional'],
    implemented: false,
  },
  {
    id: 'parametric-design',
    name: 'Parametric Design',
    description: 'Algorithmic patterns and data-driven aesthetics.',
    characteristics: ['Algorithmic', 'Patterns', 'Mathematical', 'Complex'],
    implemented: false,
  },
  {
    id: 'maximalism',
    name: 'Maximalism',
    description: 'Bold, abundant design with rich details and colors.',
    characteristics: ['Abundant', 'Colorful', 'Detailed', 'Expressive'],
    implemented: false,
  },
];

export const getStyleById = (id) => {
  return designStyles.find((style) => style.id === id);
};

export const getImplementedStyles = () => {
  return designStyles.filter((style) => style.implemented);
};
