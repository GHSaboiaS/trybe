import React from 'react';

class UserTextField extends React.Component {

  render() {
    const { info, handleChange } = this.props;
    return (
      <label>{ info }: 
        <input onChange={ handleChange }></input>
      </label>
    )
  }
}

export default UserTextField;