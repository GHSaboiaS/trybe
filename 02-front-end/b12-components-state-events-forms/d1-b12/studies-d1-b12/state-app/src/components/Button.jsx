import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super()

    this.handleClick = this.handleClick.bind(this);

    console.log(props)
  }

  // if declared as arrow function, no binding needed, but loses performance
  handleClick() {
    console.log(this)
    console.log('clicked');
  }

  render() {
    return <button onClick={this.handleClick}>Clique</button>
  }
}

export default Button;