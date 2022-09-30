import React, { useState } from "react";
import "./button.css";

function Button3({ pgRequired }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="buttons">
      <button onClick={pgRequired}>Yes</button>
      <button
        className={isActive ? "no-btn-clicked" : ""}
        onClick={handleClick}
      >
        No
      </button>
    </div>
  );
}

export default Button3;
