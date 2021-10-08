import React from 'react';
import UserTextField from './UserTextField';

class FieldsetUserData extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
    }
  }

  handleChange({ target }) {
    // Problem: get data (info) from element, to update state
    const { info } = target
    console.log(info)
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // console.log(value)
  }
    
  render() {
    return (
      <fieldset>

        <UserTextField info="Name" limit="40" handleChange={ this.handleChange } />
        {/* <UserTextField info="Email" limit="50" />
        <UserTextField info="CPF" limit="11" />
        <UserTextField info="Address" limit="200" />
        <UserTextField info="City" limit="28" /> */}

        <label>State: 
          <select></select>
        </label>

        <label>Type: 
          <input type="radio"></input>
        </label>

      </fieldset>
    )
  }
}

export default FieldsetUserData;