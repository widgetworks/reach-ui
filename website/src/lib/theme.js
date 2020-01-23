import { canUseDOM } from "$lib/utils";

let themes = {
  reachLight: {
    value: "reach-light",
    name: "Reach Light"
  },
  reachDark: {
    value: "reach-dark",
    name: "Reach Dark"
  },
  twitterDark: {
    value: "twitter-dark",
    name: "Twitter Dark"
  }
};

export default {
  default: prefersDarkMode() ? themes.reachDark : themes.reachLight,
  themes
};

function prefersDarkMode() {
  return !!(
    canUseDOM() &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}
