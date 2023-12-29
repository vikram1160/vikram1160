import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import './NavBar.css'

const Navbar = () => {
  
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light " >
      <a className="navbar-brand text-danger fw-bold" href="/">Vikram</a>

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
        {showNavbar ? '' : ''}<span  se className="navbar-toggler-icon" ></span>
      </button>
       <div className={`collapse navbar-collapse ${showNavbar ? 'show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-5 mb-lg-0 ">
          <li className="nav-item">
            <Link className="nav-link active" onClick={toggleNavbar}aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className=" nav-link" onClick={toggleNavbar}to="/education">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={toggleNavbar}to="/technology">
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={toggleNavbar} to="/projects">
              Projects
            </Link>
            <li className="nav-item1">
            <Link className="nav-link" onClick={toggleNavbar} to="/aboutme">
              AboutMe
            </Link>
          </li>
          </li>
        </ul>
      </div>
    </nav>
  );
};



export default Navbar;




