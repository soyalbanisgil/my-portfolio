import React from 'react';
import movieSearch from '../../images/movie-search.jpg';

const movieSearchApp = () => {
  return (
    <div>
      <div data-aos='zoom-in' className='container my-5 pt-5 text-center'>
        <h1 className='display-3'>Movie Search App</h1>
        <p>
          A fun project where I practiced the configuration of Webpack and
          Babel, learned about how to use Enviroment Variables to hide the API
          key.
        </p>
        <p>Builded with Vanilla JavaScript and using Sass to handle the CSS.</p>
        <p className='lead'>
          <em>Stack: HTML5, Sass, JavaScript, Webpack, Babel, OMDB API.</em>
        </p>
        <div className='buttons my-5 d-flex justify-content-around'>
          <a
            href='https://github.com/soyalbanisgil/movie-search'
            target='_blank'
            rel='noopener noreferrer'
            className='btn custom-btn'
          >
            Repository
          </a>
          <a
            href='https://omdb-search.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn custom-btn'
          >
            Live Site
          </a>
        </div>
        <img src={movieSearch} alt='web screnshoot' />
      </div>
    </div>
  );
};

export default movieSearchApp;
