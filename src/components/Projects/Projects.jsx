import React from 'react'
import myWeb from '../../images/portfolio.png';
import faceDetect from '../../images/face-detection.png';
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
                    <button className="btn custom-btn">View Project</button>
                </div>
            </article>
            <article className="project col-sm-12 col-md-6 my-5" data-aos="zoom-in">
                <img src={faceDetect} alt=""/>
                <h4 className="mt-4">Face Recognition App</h4>
                <p>A full stack app using the React, Firebase and Clarifai's artificial intelligence API.</p>
                <div>
                    <button className="btn custom-btn">View Project</button>
                </div>
            </article>
            </div>
        </section>
    )
}

export default Projects
