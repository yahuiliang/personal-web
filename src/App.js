import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/nav-bar/nav-bar';
import Home from './pages/home/home';

class App extends Component {
  constructor() {
    super();
    this.state = {tab: "home"}
  }

  renderTab() {
    let tab = undefined;
    switch (this.state.tab) {
      case "home":
        tab = <Home/>;
        break;
      case "about":
        tab = <div>about</div>;
        break;
      case "contact":
        tab = <div>contact</div>;
        break;
      default:
        break;
    }
    return tab;
  }

  render() {
    return (
      <div className="App">
        <MenuBar itemSelected={(category) => {this.setState({tab: category})}}/>
        {this.renderTab()}
      </div>
    );
  }
}

export default App;
