import React, { Component } from 'react';
import { Row, Col, Card, Avatar, Icon } from 'antd';
import IdCard from './IdCard/IdCard.jsx';
import About from './About/About.jsx';

const profilePic = {
  width: 200
}

class PersonalInfoCard extends Component {
  render() {
    return (
      <div>
        <Card
          title="Who is Yahui?"
        >
          <Row type="flex" justify="center">
            <Col>
              <IdCard />
            </Col>
          </Row>
          <Row>
            <Col>
              <Row type="flex" justify="center">
                <Col>
                  <About />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default PersonalInfoCard;
