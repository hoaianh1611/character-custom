import React from "react";

function Header({ title, subtitle }) {
  return (
    <>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="divider"></div>
    </>
  );
}

export default Header;
