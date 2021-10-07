import React from 'react';

class Button extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clickCount: 0,
      green: false,
    }
  }

  async handleClick() {
    await this.setState((previousState, _props) => ({
      clickCount: previousState.clickCount + 1,
    }))
    
    if (this.state.clickCount % 2 === 0) {
      this.setState((_previousState, _props) => ({
        green: true,
      }))
    } else {
      this.setState((_previousState, _props) => ({
        green: false,
      }))
    }
  }
  
  render() {
    let btnClass = this.state.green ? "green" : "";
    
    return (
      <div className='button-container'>
        <button onClick={ this.handleClick } className={ btnClass }>Button { this.props.id }</button>
        <span>{ this.state.clickCount }</span>
      </div>
    )
  }
}

export default Button;