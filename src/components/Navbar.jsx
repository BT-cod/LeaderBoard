import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>GILLY'S</h1>
        <span>Koramangala</span>
      </div>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
