import React, { Component } from 'react';
import { Row, Col, Card, Avatar, Icon } from 'antd';

class IdCard extends Component {
  render() {
    return (
      <div style={{ width: 350 }}>
        <Row type="flex" align="middle">
          <Col span={12}>
            <Row type="flex" justify="center">
              <Col>
                <Avatar size={150} icon="user" src={require('../../../assets/yahui.png')} />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row type="flex" justify="center" align="middle">
              <Col>
                <div>
                  <p>Name: Yahui Liang</p>
                  <p>Age: 23</p>
                  <p>Race: Asian</p>
                  <p>Nationality: China</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default IdCard;
