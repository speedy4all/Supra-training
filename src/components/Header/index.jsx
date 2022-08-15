import React, { memo } from "react";
let renderCount = 1;

function Header({ title = "Supra React course!", children, className }) {
  console.log(`Header re-render count: ${renderCount}`);
  renderCount++;

  return (
    <>
      <h2 style={{ height: 65 }} className={className}>
        {title}
      </h2>
      <div>{typeof children === "function" ? children(title) : children}</div>
    </>
  );
}

export default memo(Header);
