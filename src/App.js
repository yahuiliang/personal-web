import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/nav-bar/nav-bar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Footer from "./components/footer/footer";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

class App extends Component {
  constructor() {
    super();
    this.state = {tab: "home"}
  }

  renderTab() {
    let tab = undefined;
    switch (this.state.tab) {
      case "home":
        tab = <Home start={() => {
          this.setState({tab: "about"});
        }}/>;
        break;
      case "about":
        tab = <About/>;
        break;
      case "projects":
        tab = <Projects/>;
        break;
      case "contact":
        tab = <Contact/>;
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
        <Footer/>
      </div>
    );
  }
}

export default App;
