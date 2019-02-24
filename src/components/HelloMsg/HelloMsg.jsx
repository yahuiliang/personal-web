import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../index.css'

class HelloMsg extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <Row>
          <Col>
            <h3>I am a software engineer,</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row style={{ marginTop: 20 }} type="flex" justify="center">
              <Col>
                <h1 style={{ fontSize: 60 }}>
                  <b>Yahui Liang</b>
                </h1>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <div>
            <Row>
              <Col>
                <h4>“If I have seen further than others, it is by standing upon the shoulders of giants.”</h4>
              </Col>
            </Row>
            <Row type="flex" justify="end">
              <Col>
                <h4>-Sir Isaac Newton</h4>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
    );
  }
}

export default HelloMsg;
