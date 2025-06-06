import ThemeContext from './ThemeContext';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// PUBLIC_INTERFACE
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false); // false = light, true = dark

  useEffect(() => {
    const root = document.documentElement;

    if (theme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeContextProvider;
