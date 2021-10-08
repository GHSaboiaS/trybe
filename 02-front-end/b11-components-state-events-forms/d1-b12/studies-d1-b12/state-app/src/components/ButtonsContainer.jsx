import React from 'react';
import Button from './Button';

class ButtonsContainer extends React.Component {
  render() {
    return (
      <div className='buttons-container'>
        <Button id={1} />
        <Button id={2} />
        <Button id={3} />
      </div>
    )
  }
}

export default ButtonsContainer;