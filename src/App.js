import React, { Component } from 'react';
import './App.css';
import HelloMsg from './components/HelloMsg/HelloMsg.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = { tab: "Home" }
  }

  render() {
    return (
      <div className="App">
        <HelloMsg />
      </div>
    );
  }
}

export default App;
