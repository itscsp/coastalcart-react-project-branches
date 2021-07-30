import React from 'react';
import './css/Loader.css'
import { Container, Row, Col } from 'react-bootstrap';

const Loader = () => {
   

    return (
        <Container>
            <Row className="justify-content-around align-items-end">
                <Col>
                <div className="pageloader gray-bg">
                    <div className="loader">
                        <div className="sp-hydrogen">
                            
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Loader
