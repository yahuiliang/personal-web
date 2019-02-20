import React, { Component } from 'react';
import './id-card.css';

class IdCard extends Component {
  render() {
    return (
      <div id="id-card">
        <div className="row part">
          <div className="d-flex info col align-items-center justify-content-center part">
            <img src={require("../../materials/DSC07303.png")} alt="nothing" className="rounded-circle" />
          </div>
          <div className="d-flex info col-6 align-items-center justify-content-center">
            <div id="info-rows" className="container">
              <div className="row">
                <p>Name: Yahui Liang</p>
              </div>
              <div className="row">
                <p>Academic Year: Senior</p>
              </div>
              <div className="row">
                <p>Age: 23</p>
              </div>
              <div className="row">
                <p>School: Milwaukee School of Engineering</p>
              </div>
              <div className="row">
                <p>Major: Software Engineering &amp; Computer Engineering</p>
              </div>
              <div className="row">
                <p>GPA: 3.75</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IdCard;
