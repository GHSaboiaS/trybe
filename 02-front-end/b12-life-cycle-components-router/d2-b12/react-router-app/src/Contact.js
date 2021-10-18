import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <Link to="/">
          <button>Voltar à home</button>
        </Link>
      </div>
    );
  }
}

export default Contact;