import React from "react";
import "./index.css";

function Box({ id, width, height, backgroundColor, removeBox }) {
  const handleRemove = () => removeBox(id);

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor,
  };

  return (
    <div className="box" style={style}>
      <button onClick={handleRemove} className="box-remove-btn">
        X
      </button>
    </div>
  );
}

export default Box;
