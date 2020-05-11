import React from 'react'
import portfolio from '../../images/portfolio.jpg';

const myPortfolio = () => {
    return (
        <div  data-aos="zoom-in" className="container my-5 pt-5 text-center">
            <h1 className='display-3'>My Portfolio</h1>
            <p>When I decided to learn React.js, the main project that I planed to build was this, my personal portfolio.</p>
            <p>Whith this project, I was capable to fpcus on divide my site in small components. Still have a lot of things to refine in this site butm is an advance.</p>
            <p className="lead"><em>Stack: React.js, Bootstrap 4, Sass, AOS, React-Router</em></p>
            <div className="buttons my-5 d-flex justify-content-around">
                <a href="https://github.com/soyalbanisgil/my-portfolio" target="_blank" rel='noopener noreferrer' className="btn custom-btn">Repository</a>
                <a href="/" className="btn custom-btn">Live Site</a>
            </div>
            <img src={portfolio} alt="web screnshoot"/>
        </div>
    )
}

export default myPortfolio
