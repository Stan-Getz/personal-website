import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="background-img"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(8, 8, 8, 1), rgba(28, 28, 28, 0.7), rgba(50, 50, 50, 0.5)), url(/img/banner.jpg)',
          }}
        >
          <Router>
            <Navbar />
            <Hero />
            <Portfolio />
            <About />
            <Resume />
            <Contact />
            <Footer />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
