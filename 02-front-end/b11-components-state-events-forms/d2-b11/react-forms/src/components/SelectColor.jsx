import React from 'react';

class SelectLanguage extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <label>Select a color
        <input type="color" name="color" onChange={ handleChange }></input>
      </label>
    )
  }
}

export default SelectLanguage;