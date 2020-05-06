import React, { Component } from "react";
import Github from '../../images/github-icon.svg';
import Linkedin from '../../images/linkedin-icon.svg';
import './Header.styles.sass';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="container animated bounceInLeft delay-1s">
              <h1 className="hero-text">Hi there!</h1>
              <h1 className="hero-text">I'm <span>Karen</span></h1>
              <span className="line"></span>
              <p className="hero-description">A self-taught fron-end developer.</p>
              <div className="social">
                <a href="/"><img className="icon" src={Github} alt="github icon"/></a>
                <a href="/"><img className="icon" src={Linkedin} alt="linkedin icon"/></a>
              </div>
            </div>
        </header>
    )
  }
}

export default Header;
