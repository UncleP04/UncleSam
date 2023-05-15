import React, { useRef } from "react";
import "../Styles/nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <nav ref={navRef}>
          <a
            href="/"
            exact
            onClick={showNavbar}
            className="linkUnderline active"
            id="links"
          >Home</a>
          <a
            href="/experience"
            onClick={showNavbar}
            className="linkUnderline active"
            id="links"
          >
            Experience
          </a>
          <a
            href="/content"
            onClick={showNavbar}
            className="linkUnderline active"
            id="links"
          >
            Content
          </a>
          <a
            href="/education"
            onClick={showNavbar}
            className="linkUnderline active"
            id="links"
          >
            Education
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            X
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <button className="btn">
            <span className="icon">
              <svg viewBox="0 0 175 80" width="40" height="40">
                <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                <rect
                  y="30"
                  width="80"
                  height="15"
                  fill="#f0f0f0"
                  rx="10"
                ></rect>
                <rect
                  y="60"
                  width="80"
                  height="15"
                  fill="#f0f0f0"
                  rx="10"
                ></rect>
              </svg>
            </span>
            <span className="text">MENU</span>
          </button>
        </button>
      </header>
    </div>
  );
};

export default Navbar;
