import React, { useCallback, useRef } from "react";

export default function Tags({ tags = [], readonly, onChange }) {
  const inputRef = useRef(null);

  const onKeyUp = ({ target: { value }, keyCode }) => {
    if (keyCode === 13 && value) {
      onChange({ target: { name: "tags", value: [...tags, value] } });
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const onTagChange = useCallback(
    ({ target: { value } }) => {
      if (value) {
        onChange({ target: { name: "tags", value: [...tags, value] } });
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    },
    [tags]
  );

  const onDeleteTag = (tag) => {
    const index = tags.indexOf(tag);
    const newTags = [...tags];
    newTags.splice(index, 1);
    onChange({ target: { name: "tags", value: newTags } });
  };

  return (
    <div className="tags">
      Tags:
      {!readonly && (
        <input
          name="tag"
          ref={inputRef}
          onKeyUp={onKeyUp}
          onBlur={onTagChange}
        />
      )}
      {tags?.map((tag, index) => (
        <div className="tag" key={`${tag}_${index}`}>
          {tag}
          {!readonly && <span onClick={() => onDeleteTag(tag)}>x</span>}
        </div>
      ))}
    </div>
  );
}
