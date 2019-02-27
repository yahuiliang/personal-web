import React, { Component } from 'react';
import { Card, List, Collapse, Button, Statistic, Row, Col } from 'antd';
import EducationInfoPanel from './EducationInfoPanel/EducationInfoPanel.jsx';

class EducationCard extends Component {
  render() {
    return (
      <div>
        <Card title="Undergraduate Education">
          <Row type="flex" justify="center">
            <Col>
              <EducationInfoPanel />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default EducationCard;
