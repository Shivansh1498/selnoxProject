import React from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo.png";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo-section">
        <img src={logo} alt="" />
      </div>
      <div className="menu-section">
        <ul>
          <NavLink to="/">
            <li>Registration Form</li>
          </NavLink>
          <NavLink to="/employee-list">
            <li>Employee List</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
