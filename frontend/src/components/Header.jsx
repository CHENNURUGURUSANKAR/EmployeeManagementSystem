import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h2 style={titleStyle}>Employee Management System</h2>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: ".5rem",
};

const titleStyle = {
  fontSize: "2rem",
  textAlign: "left",
};

export default Header;
