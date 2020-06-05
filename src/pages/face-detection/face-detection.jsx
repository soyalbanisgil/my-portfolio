import React from 'react';
import faceDetect from '../../images/face-detection.jpg';

const faceDetection = () => {
  return (
    <div>
      <div data-aos='zoom-in' className='container my-5 pt-5 text-center'>
        <h1 className='display-3'>Face Detection</h1>
        <p>
          This project is part of a coding course/bootcamp from Zero To Mastery.
          Is a full stack app that allows you to register, login and identify
          the detection of faced in a image.
        </p>
        <p>
          Decided to change the UI a little bit, and to handle the backend used
          Firebase.
        </p>
        <p className='lead'>
          <em>
            Stack: React.js, Firebase, Clarifai's Artificial intelligence API
          </em>
        </p>
        <div className='buttons my-5 d-flex justify-content-around'>
          <a
            href='https://github.com/soyalbanisgil/face-recognition'
            target='_blank'
            rel='noopener noreferrer'
            className='btn custom-btn'
          >
            Repository
          </a>
          <a
            href='https://face-recognition-gules.now.sh/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn custom-btn'
          >
            Live Site
          </a>
        </div>
        <img src={faceDetect} alt='web screnshoot' />
      </div>
    </div>
  );
};

export default faceDetection;
