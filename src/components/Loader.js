import React from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';

const Loader = () => {
    return (

        <Container>
            <Row className="justify-content-around align-items-end">
                <Col>
                    <Spinner 
                    animation = 'grow'
                    role='status'
                    style={{
                        backgroundColor: '#e16208',
                        height:'50px',
                        width:'50px',
                        margin:'auto',
                        display:'block',
                        padding:'10px'
                    }} >
                    
                    <span className='sr-only'>Loading...</span>
                    
                    </Spinner>
                </Col>
                <Col>
                    <Spinner 
                    animation = 'grow' 
                    role='status'
                    style={{
                        height:'50px',
                        backgroundColor:'#89bc83',
                        width:'50px',
                        margin:'auto',
                        display:'block',
                        padding:'10px'
                    }} >
                    
                    <span className='sr-only'>Loading...</span>
                    </Spinner>
                </Col>
                <Col>  
                    <Spinner 
                    animation = 'grow'
                    role='status'
                    style={{
                        backgroundColor:'#1b4e11',
                        height:'50px',
                        width:'50px',
                        margin:'auto',
                        display:'block',
                        padding:'10px'
                    }} >
                    
                    <span className='sr-only'>Loading...</span>
                    
                    </Spinner>
                </Col>
            </Row>
        </Container>
    )
}

export default Loader
