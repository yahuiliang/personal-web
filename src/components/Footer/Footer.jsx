import React, { Component } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import "antd/dist/antd.css";

const border = {
  border: "solid red 2px"
}

const black = {
  border: "solid black 2px"
}

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <Row type="flex" justify="center">
          <Col>
            <div style={{ width: "90px" }}>
              <Row type="flex" justify="center" align="middle">
                <Col span={12}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Button shape="circle" size={"lg"} icon="linkedin" />
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Button shape="circle" size={"lg"} icon="github" />
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
