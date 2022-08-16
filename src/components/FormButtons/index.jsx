import React from "react";

export default function FormButtons({ saveHandler, cancelHandler, readonly }) {
  if (readonly) {
    return null;
  }

  return (
    <div className="form-footer">
      <button onClick={saveHandler}>Save</button>
      <button onClick={cancelHandler}>Cancel</button>
    </div>
  );
}
