import React from 'react';
import './Navbar.styles.sass';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-2 bg-light sticky-top">
  <div className="container">
  <a className="navbar-brand" href="/">Karen Gil</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-5">
      <a className="nav-item nav-link" href="#about">About</a>
      <a className="nav-item nav-link" href="#skills">My Skills</a>
      <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
      <a className="nav-item nav-link" href="#contact">Contact</a>
    </div>
  </div>
  </div>
</nav>
    )
}

export default Navbar
