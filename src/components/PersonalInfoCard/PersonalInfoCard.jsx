import React, { Component } from 'react';
import { Row, Col, Card, Avatar, Icon } from 'antd';

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
          <Row type="flex" align="middle">
            <Col span={24}>
              <Row type="flex" justify="center">
                <Col>
                  <div style={{ width: 500 }}>
                    <Row type="flex" align="middle">
                      <Col span={12}>
                        <Row type="flex" justify="center">
                          <Col>
                            <Avatar size={150} icon="user" src={require('../../assets/yahui.png')} />
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
