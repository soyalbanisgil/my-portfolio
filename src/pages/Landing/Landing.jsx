import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from '../../components/Header/Header'
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Portfolio from '../../components/Portfolio/Portfolio';
import SmallProjects from '../../components/SmallProjects/SmallProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Landing extends Component {

  componentDidMount(){
    AOS.init({
      duration : 1000
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <SmallProjects />
      </div>
    );
  }
}

export default Landing;
