import React, { Component } from 'react';
import { Card, List, Collapse, Button, Statistic, Row, Col } from 'antd';
import { Tabs, Icon } from 'antd';
import ProjectPanel from './ProjectPanel/ProjectPanel.jsx';


class ProjectCard extends Component {
  render() {
    return (
      <div>
        <Card
          title="Projects"
        >
          <Row type="flex" justify="center">
            <Col>
              <ProjectPanel />
            </Col>
          </Row>

        </Card>
      </div>
    );
  }
}

export default ProjectCard;
