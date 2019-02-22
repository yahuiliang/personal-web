import React, { Component } from 'react';
import '../../index.css'
import './HelloMsg.css';

class HelloMsg extends Component {
  render() {
    return (
      <div id="hello-msg" style={this.props.style}>
        <h5 id="job">I am a software engineer,</h5>
        <h1 id="name">
          <b>Yahui Liang</b>
        </h1>
        <div id="meaningful-words">
          <p id="text">“If I have seen further than others, it is by standing upon the shoulders of giants.”</p>
          <p id="author">-Sir Isaac Newton</p>
        </div>
      </div>
    );
  }
}

export default HelloMsg;
