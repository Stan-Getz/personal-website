import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Mailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

class Footer extends React.Component {
  render() {
    return (
      <Router>
        <div className="footer-container">
          <div className="soc-btn-container">
            <div className="lin-btn">
              <Link
                to={{
                  pathname: 'https://www.linkedin.com/in/stanislavgenunchi/',
                }}
                target="blank"
              >
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  size="3x"
                  color="var(--lightGrey)"
                />
              </Link>
            </div>
            <div className="ghub-btn">
              <Link
                to={{
                  pathname: 'https://github.com/Stan-Getz',
                }}
                target="blank"
              >
                <FontAwesomeIcon
                  icon={['fab', 'github-square']}
                  size="3x"
                  color="var(--lightGrey)"
                />
              </Link>
            </div>
            <div className="email-btn">
              <Mailto
                label={
                  <FontAwesomeIcon
                    icon="envelope-square"
                    size="3x"
                    color="var(--lightGrey)"
                  />
                }
                mailto="mailto:stanislav.genunchi@gmail.com"
              >
                <FontAwesomeIcon
                  icon="envelope-square"
                  size="3x"
                  color="var(--lightGrey)"
                />
              </Mailto>
            </div>
          </div>
          <div className="signature">
            © 2021 SG. All rights reserved. Developed by Stanislav Genunchi
          </div>
          <div className="terms-privacy-container">
            <Link to="/terms">terms & conditions</Link>
            <Link to="/privacy">privacy policy</Link>
          </div>
        </div>
      </Router>
    );
  }
}

export default Footer;
