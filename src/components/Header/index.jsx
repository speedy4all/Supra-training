import React, { memo, useEffect } from "react";
import "./style.css";

function Header({ title = "Supra React course!", children, className }) {
  return (
    <div className="header-content">
      {title}
      {children}
    </div>
  );
}

export default memo(Header);
