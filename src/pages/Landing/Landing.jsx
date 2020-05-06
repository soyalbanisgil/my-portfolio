import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from '../../components/Header/Header'
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Portfolio from '../../components/Portfolio/Portfolio';

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Portfolio />
      </div>
    );
  }
}

export default Landing;
