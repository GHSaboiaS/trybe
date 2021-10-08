import React from 'react';
import Pokedex from './Pokedex';
import Header from './Header';

class PokedexContainer extends React.Component {
  render() {
    return (
      <div className="pokedex-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="pokemons-container">
          <Pokedex />
        </div>
      </div>
    )
  }
}

export default PokedexContainer