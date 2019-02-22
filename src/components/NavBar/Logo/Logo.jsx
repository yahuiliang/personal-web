import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div id="logo" style={this.props.style}>
        <img src={require("../../../assets/logo.png")} />
        <p>Yahui.com</p>
      </div>
    );
  }
}

export default Logo;
