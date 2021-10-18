import React from 'react';
import { Link } from 'react-router-dom';

class Legal extends React.Component {
  render() {
    return (
      <div>
        <h1>Legal</h1>
        <Link to="/">
          <button>Voltar à home</button>
        </Link>
      </div>
    );
  }
}

export default Legal;