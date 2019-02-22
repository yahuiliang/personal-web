import React, { Component } from 'react';
import { Menu } from 'antd';
import "antd/dist/antd.css";
import Logo from './Logo/Logo.jsx';
import { Row, Col } from 'antd';

class NavBar extends Component {
  render() {
    return (
      <nav id="nav-bar" style={this.props.style}>
        <Row>
          <Col offset={1} span={11}>
            <Logo style={{marginTop: 3, marginBottom: 3}} />
          </Col>
          <Col offset={-1} span={11}>
            <Row type="flex" justify="end">
              <Col>
                <Menu style={{background: "transparent", marginTop: 3, marginBottom: 3}} className="menu" mode="horizontal">
                  <Menu.Item>
                    Home
                  </Menu.Item>
                  <Menu.Item>
                    Contact
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Col>
        </Row>
      </nav>
    );
  }
}

export default NavBar;
