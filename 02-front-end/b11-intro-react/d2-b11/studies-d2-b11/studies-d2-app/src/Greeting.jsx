import React from 'react';
import cat from './cat.png';

class Greeting extends React.Component {
  render() {
    return <img src={cat} alt='Cute cat staring'></img>
  };
}

export default Greeting;