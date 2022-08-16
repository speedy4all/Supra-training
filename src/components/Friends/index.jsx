import React from 'react';

export default function Friends({ friends }) {
  return (
    <div>
        Friends
        {friends?.map(({ name }) => (
          <div key={name}>{name}</div>
        ))}
      </div>
  );
}
