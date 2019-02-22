import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
