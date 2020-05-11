import React from 'react'
import myWeb from '../../images/portfolio.jpg';
import faceDetect from '../../images/face-detection.jpg';
import weatherApp from '../../images/weather-app.jpg';
import { Link } from 'react-router-dom';
import './Projects.styles.sass';

const Projects = () => {
    return (
        <section className="projects">
            <div className="row">
            <article className="project col-sm-12 col-md-6 my-5" data-aos="zoom-in">
                <img src={myWeb} alt=""/>
                <h4 className="mt-4">My Portfolio</h4>
                <p>As you can tell, I build this website. Created with React.js and some cool libraries.</p>
                <div>
                    <Link className="btn custom-btn" to='/my-portfolio'>View Project</Link>
                </div>
            </article>
            <article className="project col-sm-12 col-md-6 my-5" data-aos="zoom-in">
                <img src={faceDetect} alt=""/>
                <h4 className="mt-4">Face Recognition App</h4>
                <p>A full stack app using the React, Firebase and Clarifai's artificial intelligence API.</p>
                <div>
                <Link className="btn custom-btn" to='/face-detection'>View Project</Link>
                </div>
            </article>
            </div>
            <div className="row">
            <article className="project col-sm-12 col-md-6 my-5" data-aos="zoom-in">
                <img src={weatherApp} alt=""/>
                <h4 className="mt-4">Mobile Weather App</h4>
                <p>Using the OpenWeatherMap API, I buil this app applying modern concepts of JavaScript as Async/Await.</p>
                <div>
                <Link className="btn custom-btn" to='/weather-app'>View Project</Link>
                </div>
            </article>
            </div>
        </section>
    )
}

export default Projects
