import React from 'react';
import './Hero.css';

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">
            Web Developer <br />
            <span className="cs-hide-on-mobile">& Coffee Enthusiast</span>
          </h1>

          <div className="hero-btn-container">
            <button className="portfolio-btn">Check out my projects</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
