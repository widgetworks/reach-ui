import React, { createContext, useLayoutEffect, useState } from "react";
import themeSettings from "$lib/theme";

const CACHE_KEY = "__reach_ui_theme";

let { themes } = themeSettings;
let themeValues = Object.entries(themes).reduce((values, [, { value }]) => {
  return [...values, value];
}, []);

export const ThemeContext = createContext({
  current: themeSettings.default.value,
  themes,
  setTheme: () => void null
});

function ThemeProvider({ children }) {
  let [currentTheme, setCurrentTheme] = useState(themeSettings.default.value);

  useLayoutEffect(() => {
    let localTheme = window.localStorage.getItem(CACHE_KEY);
    if (localTheme && themeValues.includes(localTheme)) {
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
  document
    .getElementsByTagName("html")[0]
    .setAttribute("data-theme", themeName);
}
