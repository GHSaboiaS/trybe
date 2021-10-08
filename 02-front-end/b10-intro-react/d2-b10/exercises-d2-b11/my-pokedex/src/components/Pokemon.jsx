import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const props = this.props.pokeProps;
    return (
      <div className="pokemon-container">
        <section className="pokemon-info">
          <span className="pokemon-info-item">{ props.name }</span>
          <span className="pokemon-info-item">{ props.type }</span>
          <span className="pokemon-info-item">{ `${props.averageWeight.value}${props.averageWeight.measurementUnit}` }</span>
        </section>
        <section className="image-container">
          <img src={ props.image } alt='pokeimage'></img>
        </section>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokeObj: PropTypes.object,
}

export default Pokemon
