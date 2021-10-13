import React from 'react';

class UserTextField extends React.Component {

  render() {
    const { info, limit, handleChange, handleBlur } = this.props;
    return (
      <label>{ info }: 
        <input onChange={ handleChange } onBlur={ handleBlur } maxLength={limit} info={info}></input>
      </label>
    )
  }
}

export default UserTextField;