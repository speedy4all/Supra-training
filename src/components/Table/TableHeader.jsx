import React, { memo } from 'react'
import PropTypes from 'prop-types'

function TableHeader({ columns }) {
  return (
    <thead>
        <tr>
          <th>#</th>
          {columns.map((column) => (
            <th key={column.dataIndex}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
  );
}

export default memo(TableHeader);
