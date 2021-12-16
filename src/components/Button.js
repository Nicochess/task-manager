import React from "react";

const Button = ({ onClick, buttonName, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
      className="btn"
    >
      {buttonName}
    </button>
  );
};

export default Button;
