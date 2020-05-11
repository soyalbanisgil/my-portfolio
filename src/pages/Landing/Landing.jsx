import React, { Component } from "react";
import Header from '../../components/Header/Header'
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Portfolio from '../../components/Portfolio/Portfolio';
// import SmallProjects from '../../components/SmallProjects/SmallProjects';
import Contact from '../../components/Contact/Contact';
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
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default Landing;
