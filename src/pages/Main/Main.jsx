import React, { Component } from 'react';
import HelloMsg from '../../components/HelloMsg/HelloMsg.jsx';
import { Row, Col } from 'antd';
import SkillCard from '../../components/SkillCard/SkillCard.jsx';
import EducationCard from '../../components/EducationCard/EducationCard.jsx';

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
        <Row>
          <Col>
            <EducationCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <SkillCard />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
