import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import TabContent from '../w2vTab/TabContent';



class Word2Vec extends Component {
    render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Word2Vec" subtitle="Skilled word vector structure"/>
        <div className="container">
            <center><h2>Word2Vec test challenge</h2></center>
            <TabContent />
        </div>
        <Footer />
      </div>
    );
  }
}


export default Word2Vec