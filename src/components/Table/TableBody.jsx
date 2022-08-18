import React, { memo } from "react";

function TableBody({ data, columns, onRowClick }) {
  return (
    <tbody>
      {data?.length === 0 ? (
        <tr>
          <td colSpan={columns.length}>"Loading..."</td>
        </tr>
      ) : (
        data.map((item, index) => (
          <tr key={item.id} onClick={() => onRowClick(item)}>
            <td scope="th">{index + 1}</td>
            {columns.map((column) => (
              <td key={`${column.dataIndex}_${column.label}`}>
                {(column.render && column.render(item)) ||
                  item[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
}

export default memo(TableBody);
