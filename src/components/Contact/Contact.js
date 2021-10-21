import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-title">
          <h2>contact me</h2>
        </div>
        <div className="arrow-container">
          <Link to="/contact">
            <FontAwesomeIcon
              icon="angle-double-down"
              size="5x"
              color="var(--mainWhite)"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Contact;
