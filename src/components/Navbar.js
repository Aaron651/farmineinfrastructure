import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/green.jpg.png";

import {
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar({ setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [investorOpen, setInvestorOpen] = useState(false);

  const changePage = (page) => {
    setPage(page);
    setMenuOpen(false);
    setProductOpen(false);
    setInvestorOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo" onClick={() => changePage("home")}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li onClick={() => changePage("home")}>HOME</li>

          <li onClick={() => changePage("about")}>ABOUT US</li>

          <li className="dropdown">
            <button className="drop-btn">
              OUR PRODUCTS
              <FaChevronDown className="arrow" />
            </button>

            <ul className="dropdown-menu">
              <li onClick={() => changePage("flyash")}>Fly Ash Bricks</li>
              <li onClick={() => changePage("paver")}>Paver Blocks</li>
              <li onClick={() => changePage("stone")}>Stone Aggregate</li>
              <li onClick={() => changePage("aac")}>AAC Blocks</li>
            </ul>
          </li>

          <li onClick={() => changePage("group")}>OUR GROUP</li>

          <li className="dropdown">
            <button className="drop-btn">
              INVESTORS
              <FaChevronDown className="arrow" />
            </button>

            <ul className="dropdown-menu">
              <li onClick={() => changePage("announcement")}>
                Corporate Announcement
              </li>

              <li onClick={() => changePage("financial")}>
                Financial Information
              </li>

              <li onClick={() => changePage("shareholding")}>
                Shareholding Pattern
              </li>

              <li onClick={() => changePage("governance")}>
                Corporate Governance
              </li>

              <li onClick={() => changePage("policies")}>
                Policies
              </li>
            </ul>
          </li>

          <li onClick={() => changePage("media")}>MEDIA</li>

          <li onClick={() => changePage("contact")}>CONTACT US</li>
        </ul>

        {/* Hamburger */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mobile-header">
          <FaTimes
            className="close-icon"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul>

          <li onClick={() => changePage("home")}>
            HOME
          </li>

          <li onClick={() => changePage("about")}>
            ABOUT US
          </li>

          {/* Products */}

          <li
            className="mobile-dropdown-title"
            onClick={() => setProductOpen(!productOpen)}
          >
            OUR PRODUCTS

            <FaChevronDown
              className={`mobile-arrow ${
                productOpen ? "rotate" : ""
              }`}
            />
          </li>

          {productOpen && (
            <ul className="mobile-submenu">

              <li onClick={() => changePage("flyash")}>
                Fly Ash Bricks
              </li>

              <li onClick={() => changePage("paver")}>
                Paver Blocks
              </li>

              <li onClick={() => changePage("stone")}>
                Stone Aggregate
              </li>

              <li onClick={() => changePage("aac")}>
                AAC Blocks
              </li>

            </ul>
          )}

          <li onClick={() => changePage("group")}>
            OUR GROUP
          </li>

          {/* Investors */}

          <li
            className="mobile-dropdown-title"
            onClick={() => setInvestorOpen(!investorOpen)}
          >
            INVESTORS

            <FaChevronDown
              className={`mobile-arrow ${
                investorOpen ? "rotate" : ""
              }`}
            />
          </li>

          {investorOpen && (
            <ul className="mobile-submenu">

              <li onClick={() => changePage("announcement")}>
                Corporate Announcement
              </li>

              <li onClick={() => changePage("financial")}>
                Financial Information
              </li>

              <li onClick={() => changePage("shareholding")}>
                Shareholding Pattern
              </li>

              <li onClick={() => changePage("governance")}>
                Corporate Governance
              </li>

              <li onClick={() => changePage("policies")}>
                Policies
              </li>

            </ul>
          )}

          <li onClick={() => changePage("media")}>
            MEDIA
          </li>

          <li onClick={() => changePage("contact")}>
            CONTACT US
          </li>

        </ul>
      </div>
    </>
  );
}

export default Navbar;