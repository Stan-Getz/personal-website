import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../logo_round_150.png';

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-left">
              <Link to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>
            <div className="navbar-right">
              <div className="menu-items">
                <Link to="/">home</Link>
                <Link to="/portfolio">portfolio</Link>
                <Link to="/about">about</Link>
                <Link to="/resume">resume</Link>
                <Link to="/contact">contact</Link>
              </div>
            </div>
          </div>
        </nav>
      </Router>
    );
  }
}

export default Navbar;
