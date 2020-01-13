import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import ReachUILogo from "$components/ReachUILogo";

function Header({ siteTitle, children, ...props }) {
  return (
    <header {...props} className="Header">
      <div className="Header__inner">
        <div className="Header__logo-wrapper">
          <Link className="Header__logo-link" to="/">
            <ReachUILogo className="Header__logo" />
          </Link>
        </div>
        <div className="Header__inner-wrapper">{children}</div>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

export default Header;
