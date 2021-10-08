// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserProfile />
      </div>
    );
  }
}

export default App;