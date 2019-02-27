import React, { Component } from 'react';
import { Card, List, Collapse, Button, Statistic, Row, Col } from 'antd';

const { Meta } = Card;

class ProjectPanel extends Component {
  render() {
    return (
      <div>
        <div style={{ maxWidth: 900 }}>
          <Row gutter={30}>
            <Col span={8}>
              <a href="https://github.com/yahuiliang/Clee">
                <Card
                  style={{ width: "100%" }}
                  hoverable
                  cover={<img style={{ width: "100%" }} alt="none" src={require("../../../assets/clee.png")} />}
                >
                  <Meta
                    title="Clee Student Exchange Program"
                    description="https://github.com/yahuiliang/Clee"
                  />
                </Card>
              </a>
            </Col>
            <Col span={8}>
              <a href="https://github.com/xiaopanliang/brushstroke-style-recognition">
                <Card
                  style={{ width: "100%" }}
                  hoverable
                  cover={<img alt="none" src={require("../../../assets/canny.png")} />}
                >
                  <Meta
                    title="Brushstroke Style Classification Research"
                    description="https://github.com/xiaopanliang/brushstroke-style-recognition"
                  />
                </Card>
              </a>
            </Col>
            <Col span={8}>
              <a href="https://github.com/xiaopanliang/brushstroke-style-recognition">
                <Card
                  style={{ width: "100%" }}
                  hoverable
                  cover={<img alt="none" src={require("../../../assets/Astarsearch.png")} />}
                >
                  <Meta
                    title="A* Search Demo"
                    description="https://github.com/xiaopanliang/brushstroke-style-recognition"
                  />
                </Card>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ProjectPanel;
