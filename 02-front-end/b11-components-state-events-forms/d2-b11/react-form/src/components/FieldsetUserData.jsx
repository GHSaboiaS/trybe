import React from 'react';
import UserTextField from './UserTextField';

class FieldsetUserData extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
    }
  }

  handleChange(e) {    
    const elementInfo = e.target.getAttribute("info");
    if (elementInfo === "Name") {
      e.target.value = e.target.value.toUpperCase()
    } else if (elementInfo === "Address") {
      const address = e.target.value.replace(/[^a-zA-Z ,0-9]+/g, '');
      e.target.value = address;
    }
    this.setState(() => {
      return { [elementInfo.toLowerCase()]: e.target.value }
    })
    console.log(this.state)
  }

  handleBlur(e) {
    const value = e.target.value;
    const elementInfo = e.target.getAttribute("info");
    if (value.length > 0) {
      if (!isNaN(Number(value[0]))) {
        e.target.value = "";
        this.setState(() => {
          return { [elementInfo.toLowerCase()]: "" }
        })
      }
    }
  }
    
  render() {
    return (
      <fieldset>

        <UserTextField info="Name" limit="40" handleChange={ this.handleChange } />
        <UserTextField info="Email" limit="50" handleChange={ this.handleChange } />
        <UserTextField info="CPF" limit="11" handleChange={ this.handleChange } />
        <UserTextField info="Address" limit="200" handleChange={ this.handleChange } />
        <UserTextField info="City" limit="28" handleChange={ this.handleChange } handleBlur={ this.handleBlur } />

        <label>State: 
          <select></select>
        </label>

        <label>Type: 
          <label>House
            <input type="radio" name="living"></input>
          </label>
          <label>Apartment
            <input type="radio" name="living"></input>
          </label>
        </label>

      </fieldset>
    )
  }
}

export default FieldsetUserData;