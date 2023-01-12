import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Hero.css';

class Hero extends React.Component {
  render() {
    return (
      <Router>
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Web Developer
              <span className="cs-hide-on-mobile">
                <br />& Coffee Enthusiast
              </span>
            </h1>
            <div className="text-container">
              <p>
                I'm passionate about software and technologies and I think that
                everyone should learn to code in order to get the most out of
                the things that surround us and simply because coding is a lot
                of fun. As my next career step, I'd love to be a part of a
                company which brings state-of-the-art technologies in web
                development to more and more customers, and thus to contribute
                with my own experience and newly gained knowledge to making the
                Internet a more user-friendly place.
              </p>
            </div>
            <div className="hero-btn-container">
              <Link to="portfolio">
                <button className="portfolio-btn">Check out my projects</button>
              </Link>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Hero;
