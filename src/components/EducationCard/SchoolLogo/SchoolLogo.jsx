import React, { Component } from 'react';
import { Row, Col } from 'antd';

class SchoolLogo extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col>
            <img style={{ width: 100 }} src={require('../../../assets/msoe (high-resolution).png')} alt="MSOE"></img>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <p>Milwaukee School of Engineering</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SchoolLogo;
