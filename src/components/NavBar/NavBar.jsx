import React, { Component } from 'react';
import { Menu } from 'antd';
import "antd/dist/antd.css";
import './NavBar.css';
import Logo from './Logo/Logo.jsx';
import { Row, Col } from 'antd';

class NavBar extends Component {
  render() {
    return (
      <nav id="nav-bar">
        <Row>
          <Col span={12}>
            <Logo className="logo" />
          </Col>
          <Col span={12}>
            <Row type="flex" justify="end">
              <div>
                <Col span={24}>
                  <Menu className="menu" mode="horizontal">
                    <Menu.Item>
                      Home
                    </Menu.Item>
                    <Menu.Item>
                      About
                    </Menu.Item>
                    <Menu.Item>
                      Contact
                    </Menu.Item>
                  </Menu>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </nav>
    );
  }
}

export default NavBar;
