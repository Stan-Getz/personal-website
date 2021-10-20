import React from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="background-img"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(8, 8, 8, 1), rgba(28, 28, 28, 0.7), rgba(195, 195, 195, 0.25)), url(/img/banner.jpg)',
          }}
        >
          <Navbar />
          <Hero />
        </div>
        <div className="footer">
          <h1>Footer</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
