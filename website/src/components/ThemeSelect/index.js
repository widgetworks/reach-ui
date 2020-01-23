import React, { useContext } from "react";
import { ThemeContext } from "$components/ThemeProvider";
import cx from "classnames";
import "./styles.scss";

function ThemeSelect({ className }) {
  let { current: currentTheme, themes, setTheme } = useContext(ThemeContext);
  return (
    <div aria-hidden className={cx(className, "ThemeSelect")}>
      <label className="ThemeSelect__label-wrapper">
        <span className="ThemeSelect__label">Select a Theme</span>
        <select
          className="ThemeSelect__field"
          value={currentTheme}
          onChange={event => {
            setTheme(event.target.value);
          }}
        >
          {themes.map(themeName => (
            <option key={themeName}>{themeName}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default ThemeSelect;
