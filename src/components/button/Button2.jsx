import React, { useState } from "react";
import "./button.css";

function Button2({ noCLicked }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="buttons">
      <button
        className={isActive ? "no-btn-clicked" : ""}
        onClick={handleClick}
      >
        Yes
      </button>
      <button onClick={noCLicked}>No</button>
    </div>
  );
}

export default Button2;
