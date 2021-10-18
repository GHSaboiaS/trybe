import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/legal">Legal</Link>
      </div>
    );
  }
}

export default About;