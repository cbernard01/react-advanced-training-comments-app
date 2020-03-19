import React from "react";

const TextArea = props => {
  const {id, name, rows, textClass, value, onTextChange} = props;

  return (
    <textarea
      id={`${id}`}
      name={`${name}`}
      rows={`${rows}` || "10"}
      className={`field ${textClass}`}
      onChange={onTextChange}
      value={value}
    />
  );
};

export default TextArea;
