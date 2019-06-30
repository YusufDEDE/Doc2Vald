import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Wor2Vec from './pages/Word2Vec.jsx';
import FastText from './pages/FastText.jsx';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/Word2Vec" component={Wor2Vec}/>
          <Route path="/FastText" component={FastText}/>
        </div>
      </Router>
    );
  }
}

export default App;