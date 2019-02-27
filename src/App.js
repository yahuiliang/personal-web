import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './pages/Main/Main.jsx';
import { Affix } from 'antd';
import { Row, Col } from 'antd';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App" style={{maxWidth: 1000, marginLeft: "auto", marginRight: "auto"}}>
        <div style={{ height: 60 }}>
          <Affix offsetTop={0}>
            <NavBar />
          </Affix>
        </div>

        <div>
          <Main></Main>
        </div>

        <div>
          <Affix offsetBottom={10}>
            <Footer />
          </Affix>
        </div>
      </div>
    );
  }
}

export default App;
