import React from "react";

const footerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="text-center p-3">
        © 2023 Copyright:
        <a style={linkStyle} href="/">
          Guru
        </a>
      </div>
    </footer>
  );
};

export default Footer;
