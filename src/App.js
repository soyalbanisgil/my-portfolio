import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import myPortfolio from './pages/my-portfolio/my-portfolio';
import faceDetection from './pages/face-detection/face-detection';
import myweatherApp from './pages/weather-app/weather-app';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import movieSearchApp from './pages/movie-search/movie-search';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/my-portfolio' component={myPortfolio} />
        <Route path='/face-detection' component={faceDetection} />
        <Route path='/weather-app' component={myweatherApp} />
        <Route path='/movie-search' component={movieSearchApp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
