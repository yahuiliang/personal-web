import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';

const gridStyle = {
    textAlign: 'center',
};

class SkillCard extends Component {
    render() {
        return (
            <Card title="Skills" style={{ background: "transparent" }}>
                <Row>
                    <Col>
                        <Card.Grid style={gridStyle}>
                            C++
                        </Card.Grid>
                    </Col>
                    <Col>
                        <Card.Grid style={gridStyle}>
                            Java
                        </Card.Grid>
                    </Col>
                    <Col>
                        <Card.Grid style={gridStyle}>Python</Card.Grid>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card.Grid style={gridStyle}>HTML5</Card.Grid>
                    </Col>
                    <Col>
                        <Card.Grid style={gridStyle}>CSS3</Card.Grid>
                    </Col>
                    <Col>
                        <Card.Grid style={gridStyle}>JavaScript</Card.Grid>
                    </Col>
                </Row>

            </Card>
        );
    };
}

export default SkillCard;
