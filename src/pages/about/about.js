import React from 'react';
import './about.css';
import IdCard from '../../components/id-card/id-card';

class About extends React.Component {
  render() {
    return (
      <div id={"about"} className="d-flex justify-content-center align-items-center">
        <div id="id-card-placeholder" className="container">
          <IdCard />
        </div>
      </div>
    )
  }
}

export default About;
