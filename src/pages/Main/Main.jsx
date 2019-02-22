import React, { Component } from 'react';
import HelloMsg from '../../components/HelloMsg/HelloMsg.jsx';
import { Row, Col } from 'antd';

const helloMsgStyle = {
  marginTop: "20px",
}

class Main extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <Row type="flex" justify="center">
          <Col span={12}>
            <HelloMsg style={helloMsgStyle} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
