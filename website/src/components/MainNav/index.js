import React, { useRef } from "react";
import cx from "classnames";
import { NavList, NavItem, NavLink } from "$components/NavList";
import "./styles.scss";

export default function MainNav({ className }) {
  const navNode = useRef(null);
  return (
    <nav className={cx(className, "MainNav")}>
      <NavList className="MainNav__NavList">
        <NavItem>
          <NavLink to="/" ref={navNode}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/philosophy">Philosophy & Concepts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/styling">Styling</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/animation">Animation</NavLink>
        </NavItem>
      </NavList>
      <h3>Components</h3>
      <NavList>
        <NavItem>
          <NavLink to="/alert">Alert</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/alert-dialog">Alert Dialog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/combobox">Combobox</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dialog">Dialog (Modal)</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/menu-button">Menu Button</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/portal">Portal</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/skip-nav">Skip Nav</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/slider">Slider</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tabs">Tabs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tooltip">Tooltip</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/visually-hidden">Visually Hidden</NavLink>
        </NavItem>
      </NavList>
      <h3>Tools</h3>
      <NavList>
        <NavItem>
          <NavLink to="/auto-id">Auto ID</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/rect">Rect</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/window-size">Window Size</NavLink>
        </NavItem>
      </NavList>
    </nav>
  );
}
