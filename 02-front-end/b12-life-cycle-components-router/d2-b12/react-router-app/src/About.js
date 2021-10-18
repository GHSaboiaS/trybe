import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link to="/">
          <button>Voltar à home</button>
        </Link>
      </div>
    );
  }
}

export default About;