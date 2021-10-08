import React from 'react';

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      language: "",
      color: "",
      userName: "",
      country: "",
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.value : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="form-container">
        <h1>Form</h1>
        <select name="language" onChange={ this.handleChange }>
          {/* Source: https://stackoverflow.com/a/30525521  */}
          <option defaultValue hidden>Select a language</option>
          <option>English</option>
          <option>Italian</option>
          <option>Portuguese</option>
        </select>
        <label>Select a color
          <input type="color" name="color" onChange={ this.handleChange }></input>
        </label>
        <label>Enter your name
          <input type="text" name="userName" onChange={ this.handleChange } value={ this.state.userName }></input>
        </label>
        <div className="countries-container">
          <label>Brazil
            <input type="checkbox" name="country" value="brazil" onChange={ this.handleChange }></input>
          </label>
          <label>Argentina
            <input type="checkbox" name="country" value="argentina" onChange={ this.handleChange }></input>
          </label>
          <label>Peru
            <input type="checkbox" name="country" value="peru" onChange={ this.handleChange }></input>
          </label>
        </div>
      </div>
    )  
  }
}

export default Form