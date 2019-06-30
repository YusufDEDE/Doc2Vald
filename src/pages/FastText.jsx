import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import TabContent from '../FtTab/TabContent';
class FastText extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="FastText" subtitle="Library for efficient text classification and representation learning"/>
        <div className="container">
          <center><h2>FastText test challenge</h2></center>
          <TabContent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default FastText