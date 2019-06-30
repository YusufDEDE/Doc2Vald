import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Doc2Vald" subtitle="The sum of algorithms that have undergone evolution!" />
        <div className="container">
          <div class="alert alert-success" role="alert">
            <center><h4 class="alert-heading">What is Doc2Vald?</h4>
            <p>Word2Vec > Doc2Vec > Doc2Vald : Evolution...</p>
            <p class="mb-0">The sum of algorithms that have undergone evolution!</p>
            </center>
          </div>
         
          <center>
          <h4>The Word2Vec & FastText algorithm structure in Doc2Vald allows testing on texts and words.</h4>
          <br></br>
          <div class="alert alert-info" role="alert">
            <strong>Word2Vec</strong> Start testing with the Word2vec feature.&nbsp;<hr></hr>
            <Link class="btn btn-primary" to="/Word2Vec">Word2Vec Start</Link>
          </div>
          <div class="alert alert-info" role="alert">
            <strong>FastText</strong> Start testing with the FastText feature.&nbsp;<hr></hr>
            <Link class="btn btn-primary" to="/FastText">FastText Start</Link>
          </div>
          </center>
            
          <br></br><br></br><br></br>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home