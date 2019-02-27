import React, { Component } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import "antd/dist/antd.css";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" style={this.props.style}>
        <Row type="flex" justify="center">
          <Col>
            <div style={{ width: "200px" }}>
              <Row gutter={60} type="flex" justify="center" align="middle">
                <Col span={6}>
                  <Row type="flex" justify="center">
                    <Col>
                      <a href="https://www.linkedin.com/in/yahui-liang/">
                        <Button shape="circle" size={"large"} icon="linkedin" />
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row type="flex" justify="center">
                    <Col>
                      <a href="https://github.com/yahuiliang">
                        <Button shape="circle" size={"large"} icon="github" />
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Button shape="circle" size={"large"} icon="wechat" />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Button shape="circle" size={"large"} icon="mail" />
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
