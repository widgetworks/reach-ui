import React, { createContext, useLayoutEffect, useState } from "react";
import theme from "$lib/theme";

const CACHE_KEY = "__reach_ui_theme";

let themes = Object.keys(theme).filter(key => key !== "default");

export const ThemeContext = createContext({
  current: theme.default,
  themes,
  setTheme: () => void null
});

function ThemeProvider({ children }) {
  let [currentTheme, setCurrentTheme] = useState(theme.default);

  useLayoutEffect(() => {
    let localTheme = window.localStorage.getItem(CACHE_KEY);
    if (localTheme && themes.includes(localTheme)) {
      setCurrentTheme(localTheme);
    }
  }, []);

  useLayoutEffect(() => {
    applyTheme(currentTheme);
    window.localStorage.setItem(CACHE_KEY, currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        current: currentTheme,
        themes,
        setTheme: setCurrentTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

function applyTheme(themeName) {
  const nextTheme = {
    ...theme[theme.base],
    ...theme[themeName]
  };
  console.log({ nextTheme });
  for (let key of Object.keys(nextTheme)) {
    const value = nextTheme[key];
    document.documentElement.style.setProperty(`--${key}`, value);
  }
}
