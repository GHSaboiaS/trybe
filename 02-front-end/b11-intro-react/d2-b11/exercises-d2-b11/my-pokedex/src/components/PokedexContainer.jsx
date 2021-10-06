import React from 'react';
import Pokedex from './Pokedex';

class PokedexContainer extends React.Component {
  render() {
    return (
    <div className="pokedex-container">
      <Pokedex />
    </div>
    )
  }
}

export default PokedexContainer