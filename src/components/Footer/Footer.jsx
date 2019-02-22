import React, { Component } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import "antd/dist/antd.css";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" style={this.props.style}>
        <Row type="flex" justify="center">
          <Col>
            <div style={{ width: "150px" }}>
              <Row type="flex" justify="center" align="middle">
                <Col span={6}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Button shape="circle" size={"lg"} icon="linkedin" />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Button shape="circle" size={"lg"} icon="github" />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Button shape="circle" size={"lg"} icon="wechat" />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Button shape="circle" size={"lg"} icon="mail" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
