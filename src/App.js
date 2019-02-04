import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/nav-bar/nav-bar';
import Home from './pages/home/home';
import About from './pages/about/about';

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
        tab = <About/>;
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
      <div className="App bg">
        <MenuBar itemSelected={(category) => {this.setState({tab: category})}}/>
        {this.renderTab()}
      </div>
    );
  }
}

export default App;
