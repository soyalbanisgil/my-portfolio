import React from "react";
import './Skills.styles.sass';

const Skills = () => {
  return (
    <section id="skills" className="py-5 my-5">
      <div className="container w-50 text-center">
        <h4>My current <span>stack of languages/technologies</span> is:</h4>
        <p className="py-4">
          HTML5 - CSS3 - JAVASCRIPT - SASS - REACT.JS - FIREBASE - BABEL -
          BOOTSTRAP - JQUERY - PHP - MYSQL - NODE.JS - EXPRESS - NPM - YARN - 
          GIT - GITHUB
        </p>
        <button className="btn custom-btn">My Resume</button>
      </div>
    </section>
  );
};

export default Skills;
