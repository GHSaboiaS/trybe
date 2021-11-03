import React from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      inputEmail: '',
      screenEmail: '',
    }
  }

  changeEmail(value) {
    this.setState({ inputEmail: value });
  }

  onSendClick(value) {
    this.setState({ screenEmail: value, inputEmail: '' });
  }

  render() {
    const { inputEmail, screenEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            type="email"
            value={ this.state.inputEmail }
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-send"
          type="button"
          data-testid="id-send"
          value="Send"
          onClick={ () => this.onSendClick(inputEmail) }
        />
        <input
          id="btn-back"
          type="button"
          data-testid="id-back"
          value="Return"
        />
        <ValidEmail email={ screenEmail } />
      </div>
    );
  }
};

export default App;
