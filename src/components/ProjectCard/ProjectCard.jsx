import React, { Component } from 'react';
import { Card, List, Collapse, Button, Statistic, Row, Col } from 'antd';
import { Tabs, Icon } from 'antd';

const { Meta } = Card;


class ProjectCard extends Component {
  render() {
    return (
      <div>
        <Card
          title="Projects"
        >
          <Row gutter={30}>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={<img alt="none" src={require("../../assets/clee.png")} />}
              >
                <Meta
                  title="Clee Student Exchange Program"
                  description="https://github.com/yahuiliang/Clee"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={<img alt="none" src={require("../../assets/clee.png")} />}
              >
                <Meta
                  title="Clee Student Exchange Program"
                  description="https://github.com/yahuiliang/Clee"
                />
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
