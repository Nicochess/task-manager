import React from "react";
import Button from "./Button";

const Header = ({ title, onToggle, buttonName, color }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onToggle} buttonName={buttonName} color={color} />
    </header>
  );
};

export default Header;
