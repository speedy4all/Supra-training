import React, { memo, useEffect } from "react";
import './style.css';

function Header({ title = "Supra React course!", children, className }) {

  return (
    <>
      <h2 style={{ height: 65 }} className={className}>
        {title}
      </h2>
      <div className="header-content">
        {typeof children === "function" ? children(title) : children}
      </div>
    </>
  );
}

export default memo(Header);
