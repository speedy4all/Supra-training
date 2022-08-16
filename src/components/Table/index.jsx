import React, { memo } from "react";
import "./style.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ data, columns, onRowClick }) {
  return (
    <table>
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} onRowClick={onRowClick} />
    </table>
  );
}

export default memo(Table);
