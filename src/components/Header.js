import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openPopup = () => {
    // This will be handled by the Popup component
    document.getElementById('popup').style.display = 'flex';
  };

  return (
    <header className="tl-header kb-header-13">
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="row align-items-center">
              <div className="col-lg-12 col-6">
                <div className="logo">
                  <a href="/">
                    <img src="/NLTI _ National Law Training Institute_files/logonlti.png" alt="NLTI" />
                  </a>
                </div>
              </div>
              <div className="d-lg-none d-flex justify-content-end col-6">
                <button className="tl-hamburger navbar-toggler" onClick={toggleMenu}>
                  <i className="icofont-navigation-menu"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-7">
            <div className={`tl-nav-menu ${isMenuOpen ? 'show' : ''}`} aria-label="Main Navigation">
              <ul className="justify-content-start">
                <li className="tl-nav-item">
                  <a href="/">Home</a>
                </li>
                <li className="tl-nav-item tl-dropdown">
                  <button className="nav-link-btn" onClick={toggleDropdown}>
                    Courses <i className="fa-regular fa-angle-down"></i>
                  </button>
                  <ul className={`tl-submenu ${isDropdownOpen ? 'show' : ''}`}>
                    <li>
                      <Link to="/courses">Course Details</Link>
                    </li>
                    <li>
                      <a href="/course/2/law-pg">LAW PG</a>
                    </li>
                    <li>
                      <a href="/course/1/law-ug">LAW UG</a>
                    </li>
                  </ul>
                </li>
                <li className="tl-nav-item">
                  <a href="https://landing.clatnlti.com/nltixle/" target="_blank" rel="noreferrer">CLAT</a>
                </li>
                <li className="tl-nav-item">
                  <a href="https://landing.clatnlti.com/" target="_blank" rel="noreferrer">NLSAT</a>
                </li>
                <li className="tl-nav-item">
                  <a href="https://cuetpgllb.clatnlti.com/" target="_blank" rel="noreferrer">CUET-PG LLB</a>
                </li>
                <li className="tl-nav-item">
                  <a href="https://chatbot.clatnlti.com/" target="_blank" rel="noreferrer">NEETI-AI</a>
                </li>
                <li className="tl-nav-item">
                  <a href="/blog">Blog</a>
                </li>
                <li className="tl-nav-item">
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li className="tl-nav-item buy-course-wrap" onClick={openPopup}>
                  <button className="nav-link-btn">Buy Course</button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-3 d-lg-block d-none">
            <div className="tl-header-actions d-flex justify-content-end align-items-center">
              <a href="/user" className="sign-in">
                <i className="fa-regular fa-user"></i> Sign In
              </a>
              <div className="buy-course" onClick={openPopup}>Buy Course</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 