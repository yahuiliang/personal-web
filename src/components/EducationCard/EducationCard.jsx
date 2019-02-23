import React, { Component } from 'react';
import { Card, List, Collapse, Button, Statistic, Row, Col } from 'antd';
import SchoolLogo from './SchoolLogo/SchoolLogo.jsx';

const Panel = Collapse.Panel;

const data = [
  'Software Development',
  'Data Structure',
  'Agile Development Process',
  'Operating System',
  'Algorithms',
];

class EducationCard extends Component {
  render() {
    return (
      <Card title="Undergraduate Education">
        <Row>
          <Col span={10}>
            <SchoolLogo />
          </Col>
          <Col span={14}>
            <p>
              About:
            </p>
            <p>
              The Milwaukee School of Engineering (MSOE) is a private university in Milwaukee, Wisconsin.
              The university has one of the smallest campuses in Milwaukee, at only 22 acres (0.089 km2).
              The school's enrollment of 2,846 includes 204 graduate students.
              As of Fall 2016 the university has a total of 135 faculty, of which roughly half are full-time.
            </p>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Row type="flex" justify="center">
              <Col>
                <Statistic title="GPA" value={3.75} />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row type="flex" justify="center">
              <Col>
                <Statistic title="Double Major" value={"SE / CE"} precision={2} />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row type="flex" justify="center">
              <Col>
                <Statistic title="Rank" value={"High Honor"} precision={2} />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row type="flex" justify="center">
              <Col>
                <Statistic title="Rank" value={"High Honor"} precision={2} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              title="Courses Completed:"
            >
              <div>
                <Collapse>
                  <Panel header="Software Related" key="1">
                    <List
                      size="large"
                      dataSource={data}
                      renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                  </Panel>
                  <Panel header="Hardware Related" key="2">
                    <List
                      size="large"
                      dataSource={data}
                      renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                  </Panel>
                </Collapse>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default EducationCard;
