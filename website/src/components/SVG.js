import React, { forwardRef } from "react";

const SVG = forwardRef(function SVG(
  { title, role = "img", children, ...props },
  ref
) {
  return (
    <svg {...props} ref={ref} role={props["aria-hidden"] ? undefined : role}>
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
});

SVG.displayName = "SVG";

export default SVG;
