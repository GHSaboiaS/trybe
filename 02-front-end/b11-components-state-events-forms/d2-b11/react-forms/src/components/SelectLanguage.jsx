import React from 'react';

/* Source: https://stackoverflow.com/a/30525521  */
class SelectLanguage extends React.Component {
  render() {

    const { value, handleChange } = this.props;

    let error = undefined;
    if (value === "English") {
      error = "English is good"
    }
    
    return (
      <div className="select-container">
        <select name="language" onChange={ handleChange }>
          <option defaultValue hidden>Select a language</option>
          <option>English</option>
          <option>Italian</option>
          <option>Portuguese</option>
        </select>
        <span>{ error ? error : "" }</span>
      </div>
    )
  }
}

export default SelectLanguage;