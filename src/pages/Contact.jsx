import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Contact" subtitle="Give requests and suggestions about the application"/>
        <div className="container">
        <section class="resume-section p-4 p-lg-5 text-center" id="contact">
        <div class="my-auto">
          <h2 class="mb-4">Contact Information </h2>

          <ul class="fa-ul mb-4 ml-0">
            <li id="mail-address">

                <i class="fas fa-envelope-open mr-2 contact-icons"></i><a>yusufdede95@hotmail.com</a>
            </li>
            
            <li>
              <i class="fas fa-map-marker-alt mr-2 contact-icons"></i>Manisa, Turkey
            </li>
          </ul>

          <p>
            Give requests and suggestions about the application.
          </p>

          <form
            class="contact-form d-flex flex-column align-items-center"
            action="https://formspree.io/yusufdede95@hotmail.com"
            method="POST"
          >
            <div class="form-group w-75">
              <input
                type="name"
                class="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div class="form-group w-75">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                name="name"
                required
              />
            </div>

            <div class="form-group w-75">
              <textarea
                class="form-control"
                type="text"
                placeholder="Message"
                rows="7"
                name="name"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-submit btn-info w-75">Submit</button>
          </form>
        </div>
      </section>
        </div>
        <hr></hr>
        <Footer />
      </div>
    );
  }
}

export default About