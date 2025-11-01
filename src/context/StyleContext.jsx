import { createContext, useContext, useState, useEffect } from 'react';
import { designStyles } from '../data/designStyles';

const StyleContext = createContext();

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
};

export const StyleProvider = ({ children }) => {
  const [currentStyle, setCurrentStyle] = useState(designStyles[0]);

  const changeStyle = (styleId) => {
    const style = designStyles.find((s) => s.id === styleId);
    if (style) {
      setCurrentStyle(style);
      localStorage.setItem('selectedStyle', styleId);
    }
  };

  // Load saved style preference on mount
  useEffect(() => {
    const savedStyleId = localStorage.getItem('selectedStyle');
    if (savedStyleId) {
      const style = designStyles.find((s) => s.id === savedStyleId);
      if (style) {
        setCurrentStyle(style);
      }
    }
  }, []);

  const value = {
    currentStyle,
    changeStyle,
    availableStyles: designStyles,
  };

  return (
    <StyleContext.Provider value={value}>
      {children}
    </StyleContext.Provider>
  );
};
