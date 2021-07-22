import React from 'react';
import {Alert, Container, Col, Row} from 'react-bootstrap'

function Message({variant, children}) {
    return (
    <Container>
        <Row>
            <Col lg={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }}>
                <Alert variant={variant} style={{
                        textAlign: 'center',
                    }} > 
                    {children}
                </Alert>
            </Col>
        </Row>
    </Container>
    )
}

export default Message
