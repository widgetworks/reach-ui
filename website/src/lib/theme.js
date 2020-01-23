import { canUseDOM } from "$lib/utils";

export const FONT_SIZE_BASE = 16;

const baseTheme = {
  "font-size-base": `16px`, // must be in pixels
  "line-height-base": "1.6",
  rhythm: `calc(1rem * var(--line-height-base))`,

  "border-color-base": "#bbc5ca",
  "border-radius-base": "0.5rem",

  "color-background": "#fff",
  "color-code-background": "#edf2f5",
  "color-code-border": "var(--border-color-base)",
  "color-code-font": "#282a2c",
  "color-error": "#bf4a3f",
  "color-focus-outline": "#1eaedb",
  "color-font": "#222",
  "color-primary": "#1159a6",
  "color-primary-bright": "#007bff",
  "color-primary-light": "#3f94bf",
  "color-warning": "#e2c503",
  "color-selected-background": "var(--color-primary)",
  "color-selected-font": "var(--color-background)",

  "font-family-base":
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  "font-family-code":
    '"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace',
  "font-weight-base": "400",

  "width-main-sidebar": "calc(var(--rhythm) * 12)",

  // Component variables
  "link-color": "var(--color-primary)",
  "link-color-hover": "var(--color-primary-bright)",
  "link-color-text-decoration": "var(--color-primary-light)",
  "link-style-text-decoration": "dotted",

  "input-line-height": "1.15",
  "input-padding": "calc(var(--rhythm) * 0.5)",
  "input-color-background": "#f2f5f7",
  "input-color-background-active": "var(--input-color-background)",
  "input-color-border": "var(--border-color-base)",
  "input-color-border-active": "var(--color-font)",
  "input-color-font": "var(--color-font)",
  "input-border-radius": "var(--border-radius-base)",

  "button-border-radius": "var(--border-radius-base)",
  "button-color-border": "var(--border-color-base)",
  "button-color-background": "#d5dbdf",
  "button-color-background-hover": "#c0c9ce",
  "button-color-font": "var(--color-font)",
  "button-font-weight": "var(--font-weight-base)"
};

const dark = {
  "border-color-base": "#666",
  "color-background": "#222",
  "color-code-background": "#edf2f5",
  "color-code-font": "#ddd",
  "color-error": "#ff948a",
  "color-focus-outline": "#1eaedb",
  "color-font": "#fff",
  "color-primary": "#afe4ff",
  "color-primary-bright": "#77d1ff",
  "color-primary-light": "#60a2c4",
  "color-warning": "#fff29c",

  // Component variables
  "input-color-background": "#444",
  "input-color-border": "#666",
  "button-color-background": "#595e60",
  "button-color-background-hover": "#3f4142"
};

const twitterDark = {
  "color-background": "#000",
  "color-font": "#fff",
  "color-primary": "rgb(29, 161, 242)",
  "color-primary-bright": "rgb(26, 145, 218)",

  // Component variables
  "link-color-text-decoration": "transparent",
  "link-style-text-decoration": "none",

  "input-color-background": "rgb(32, 35, 39)",
  "input-color-background-active": "rgba(0, 0, 0, 0)",
  "input-color-border": "var(--input-color-background)",
  "input-color-border-active": "var(--color-primary)",
  "input-border-radius": "99999px",

  "border-color-base": "rgb(47, 51, 54)",
  "button-border-radius": "99999px",
  "button-color-background": "rgb(29, 161, 242)",
  "button-color-background-hover": "rgb(26, 145, 218)",
  "button-font-weight": "800",
  "color-selected-font": "var(--color-font)"
};

export default {
  base: "Reach Light",
  default: prefersDarkMode() ? "Reach Dark" : "Reach Light",
  "Reach Light": baseTheme,
  "Reach Dark": dark,
  "Twitter Dark": twitterDark
};

function prefersDarkMode() {
  return !!(
    canUseDOM() &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}
