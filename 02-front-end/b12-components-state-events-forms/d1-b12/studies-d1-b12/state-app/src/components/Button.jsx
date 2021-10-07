import React from 'react';

class Button extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      clickNumber1: 0,
      clickNumber2: 0,
      clickNumber3: 0,
    }
  }

  // if declared as arrow function, no binding needed, but loses performance
  handleClick1() {
    // only change state like this, never reassign this.state (only for initialization, inside constructor)
    this.setState((previousState, _props) => ({
      clickNumber1: previousState.clickNumber1 + 1,
      clickNumber2: this.state.clickNumber2,
      clickNumber3: this.state.clickNumber3,
    }))

  }

  handleClick2() {
    this.setState((previousState, _props) => ({
      clickNumber1: this.state.clickNumber1,
      clickNumber2: previousState.clickNumber2 + 1,
      clickNumber3: this.state.clickNumber3,
    }))
  }

  handleClick3() {
    this.setState((previousState, _props) => ({
      clickNumber1: this.state.clickNumber1,
      clickNumber2: this.state.clickNumber2,
      clickNumber3: previousState.clickNumber3 + 1,
    }))
  }

  render() {
    return (
      <div className='buttons-container'>
        <button onClick={this.handleClick1}>Button 1: { this.state.clickNumber1 }</button>
        <button onClick={this.handleClick2}>Button 2: { this.state.clickNumber2 }</button>
        <button onClick={this.handleClick3}>Button 3: { this.state.clickNumber3 }</button>
      </div>
    )
  }
}

export default Button;