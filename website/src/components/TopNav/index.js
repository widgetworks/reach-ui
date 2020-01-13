import React from "react";
import cx from "classnames";
import { NavList, NavItem, NavLink } from "$components/NavList";

export default function TopNav({ className }) {
  return (
    <nav className={cx(className, "TopNav")}>
      <NavList className="TopNav__NavList">
        <NavItem>
          <NavLink href="https://github.com/reach/reach-ui">GitHub</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://spectrum.chat/reach">Spectrum</NavLink>
        </NavItem>
      </NavList>
    </nav>
  );
}
