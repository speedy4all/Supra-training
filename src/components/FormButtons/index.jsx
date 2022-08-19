import React from "react";

export default function FormButtons({
  saveHandler,
  cancelHandler,
  readonly,
  loading,
}) {
  if (readonly) {
    return null;
  }

  return (
    <div className="form-footer">
      <button disabled={loading} onClick={saveHandler}>
        Save
      </button>
      <button onClick={cancelHandler}>Cancel</button>
    </div>
  );
}
