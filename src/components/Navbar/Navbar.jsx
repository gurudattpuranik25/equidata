import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <nav>
        <Link className="links" to="/">
          <div className="logo">EquiData</div>
        </Link>

        {/* <input
          type="text"
          id="searchBar"
          placeholder="Search for latest business news & articles"
        /> */}

        <div className="navLinks">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/about">
            About
          </Link>
          <Link className="links" to="/business">
            Business Data
          </Link>
          <Link className="links" to="/crypto">
            Cryptocurrency
          </Link>
          <Link className="links" to="/chart">
            Contact
          </Link>
        </div>
        <i className="fa-solid fa-bars"></i>
      </nav>
    </div>
  );
}

export default Navbar;
