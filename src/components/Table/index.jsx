import React, { memo } from "react";
import "./style.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ data, columns, onRowClick, title }) {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <table aria-label={title}>
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} onRowClick={onRowClick} />
      </table>
    </div>
  );
}

export default memo(Table);
