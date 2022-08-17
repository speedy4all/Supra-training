import React, { memo } from "react";

function TableBody({ data, columns, onRowClick }) {
  return (
    <tbody>
      {data?.length === 0 ? 'Loading...' : data.map((item, index) => (
        <tr key={item.id} onClick={() => onRowClick(item)}>
          <td scope="th">{index + 1}</td>
          {columns.map((column) => (
            <td key={column.dataIndex}>{item[column.dataIndex]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default memo(TableBody);
