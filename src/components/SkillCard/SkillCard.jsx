import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import { Collapse } from 'antd';
import SkillIcon from './SkillIcon/SkillIcon.jsx';

const Panel = Collapse.Panel;

const gridStyle = {
  textAlign: 'center',
  height: 150
};

class SkillCard extends Component {
  render() {
    return (
      <div>
        <Card title="Skills">
          <Collapse accordion defaultActiveKey={['1']}>
            <Panel header="Computer Languages" key="1">
              <Row>
                <Col>
                  <Card.Grid style={gridStyle}>
                    <SkillIcon src={require("../../assets/c++.svg")} skillName="C++" />
                  </Card.Grid>
                </Col>
                <Col>
                  <Card.Grid style={gridStyle}>
                    <SkillIcon src={require("../../assets/java.svg")} skillName="Java" />
                  </Card.Grid>
                </Col>
                <Col>
                  <Card.Grid style={gridStyle}>
                    <SkillIcon src={require("../../assets/python.svg")} skillName="Python" />
                  </Card.Grid>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Grid style={gridStyle}>
                    <SkillIcon src={require("../../assets/html.svg")} skillName="HTML5" />
                  </Card.Grid>
                </Col>
                <Col>
                  <Card.Grid style={gridStyle}>
                    <SkillIcon src={require("../../assets/css.svg")} skillName="CSS3" />
                  </Card.Grid>
                </Col>
                <Col>
                  <Card.Grid style={gridStyle}>
                    <SkillIcon src={require("../../assets/javascript.svg")} skillName="JavaScript" />
                  </Card.Grid>
                </Col>
              </Row>
            </Panel>
            <Panel header="Frameworks" key="2">
              {/* <Row>
                <Col>
                  <Card.Grid style={gridStyle}>
                    TensorFlow
                  </Card.Grid>
                </Col>
                <Col>
                  <Card.Grid style={gridStyle}>
                    Cocoa Touch
                  </Card.Grid>
                </Col>
                <Col>
                  <Card.Grid style={gridStyle}>
                    Jersey
                  </Card.Grid>
                </Col>
              </Row> */}
              <p>Coming Soon!</p>
            </Panel>
            <Panel header="Databases" key="3">
              <p>Coming Soon!</p>
            </Panel>
          </Collapse>
        </Card>
      </div>
    );
  };
}

export default SkillCard;
