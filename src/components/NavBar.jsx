import React, {useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import "./NavBar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <Link className="navbar-brand text-danger fw-bold" to="/">
        Vikram
      </Link>

      <button
        onClick={toggleNavbar}
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {showNavbar ? "" : ""}
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${showNavbar ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" onClick={toggleNavbar} to="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={toggleNavbar} to="education">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={toggleNavbar} to="technology">
              Technologies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={toggleNavbar} to="projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={toggleNavbar} to="aboutme">
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
