import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
