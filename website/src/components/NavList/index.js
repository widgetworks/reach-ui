/* eslint-disable jsx-a11y/anchor-has-content */
import React, { forwardRef } from "react";
import cx from "classnames";
import Link from "gatsby-link";

export const NavList = forwardRef(function NavList(
  { className, ...props },
  ref
) {
  return <ul {...props} ref={ref} className={cx(className, "NavList")} />;
});

export const NavItem = forwardRef(function NavItem(
  { className, ...props },
  ref
) {
  return <li {...props} ref={ref} className={cx(className, "NavItem")} />;
});

export const NavLink = forwardRef(function NavLink(
  { className, ...props },
  ref
) {
  let target = props.target || props.href !== "#" ? "_blank" : undefined;
  return props.href ? (
    <a
      {...props}
      ref={ref}
      className={cx(className, "NavLink")}
      target={target}
      rel={
        props.rel || (target && target !== "_blank")
          ? undefined
          : "noopener noreferrer"
      }
    />
  ) : (
    <Link {...props} ref={ref} className={cx(className, "NavLink")} />
  );
});
