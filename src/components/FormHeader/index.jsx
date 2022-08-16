import React from "react";

export default function FormHeader({ goBackHandler, readonly, editHandler}) {
  return (
    <div className="form-header">
      <button onClick={goBackHandler}>Go back</button>
      {readonly && (
        <button onClick={editHandler}>Edit form</button>
      )}
    </div>
  );
}
