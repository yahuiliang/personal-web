import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';

const iconStyle = {
    height: "100%",
}

class SkillIcon extends Component {
    render() {
        return (
            <div style={{height: "100%"}}>
                <Row style={{ height: "100%" }} type="flex" justify="center">
                    <Col style={{ height: "100%" }}>
                        <img style={iconStyle} src={this.props.src}></img>
                        <p>{this.props.skillName}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SkillIcon;

