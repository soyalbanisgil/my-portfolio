import React from 'react';
import weatherApp from '../../images/weather-app.jpg';

const myweatherApp = () => {
    return (
        <div>
            <div data-aos="zoom-in" className="container my-5 pt-5 text-center">
            <h1 className='display-3'>Weather App</h1>
            <p>This app is pretty simple. After learning how to use API's with JavaScript I practiced a lot, including this project.</p>
            <p>The user just have to type the name of the city and it shows the current weather.</p>
            <p className="lead"><em>Stack: HTML5, CSS3, JavaScript, OpenWeatherMap API.</em></p>
            <div className="buttons my-5 d-flex justify-content-around">
                <a href="https://github.com/soyalbanisgil/weather-app-js" target="_blank" rel='noopener noreferrer' className="btn custom-btn">Repository</a>
                <a href="https://soyalbanisgil.github.io/weather-app-js/" target="_blank" rel='noopener noreferrer' className="btn custom-btn">Live Site</a>
            </div>
            <img src={weatherApp} alt="web screnshoot"/>
        </div>
        </div>
    )
}

export default myweatherApp
