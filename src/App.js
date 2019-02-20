import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Footer from './components/footer/footer';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';

class App extends Component {
  constructor() {
    super();
    this.state = { tab: "Home" }
  }

  renderTab() {
    let tab = undefined;
    switch (this.state.tab) {
      case "Home":
        tab = <Home learnMore={() => {
          this.setState({ tab: "About" });
        }} />;
        break;
      case "About":
        tab = <About />;
        break;
      case "Projects":
        tab = <Projects />;
        break;
      case "Contact":
        tab = <Contact />;
        break;
      default:
        break;
    }
    return tab;
  }

  render() {
    return (
      <div className="App bg">
        <NavBar active={this.state.tab} itemSelected={(category) => { this.setState({ tab: category }) }} />
        <div id="nav-placeholder" />
        <div id="content">
          {this.renderTab()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
