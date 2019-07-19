import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__logo">
          <a href="#landing" className="link-plain">
            <span className="logo">Jordan Walker</span>
          </a>
        </div>

        <div className="nav__menu">
          <div className="nav__item">
            <a href="#about" className="link link--light">
              About
            </a>
          </div>
          <div className="nav__item">
            <a href="#projects" className="link link--light">
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
