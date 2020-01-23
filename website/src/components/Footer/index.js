import React from "react";
import cx from "classnames";
import "./styles.scss";

export default function Footer({ className }) {
  return (
    <footer className={cx(className, "Footer")}>
      © {new Date().getFullYear()} React Training
    </footer>
  );
}
