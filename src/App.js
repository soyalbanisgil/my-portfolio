import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import myPortfolio from './pages/my-portfolio/my-portfolio';
import faceDetection from './pages/face-detection/face-detection';
import myweatherApp from './pages/weather-app/weather-app';
import Footer from './components/Footer/Footer';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/my-portfolio' component={myPortfolio} />
          <Route path='/face-detection' component={faceDetection} />
          <Route path='/weather-app' component={myweatherApp} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
};

export default App;
