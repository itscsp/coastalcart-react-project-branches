import React from 'react';
import {Alert, Container, Col, Row} from 'react-bootstrap'

function Message({variant, children}) {
    return (
    <Container>
        <Row>
            <Col>
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
