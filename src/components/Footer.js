import React from 'react';
import './css/Footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-bootstrap";

function Footer() {
    return (
        <footer>
            <Container fluid className="footer" >
                <Container>
                    <Row>
                        <Col md={4}>
                            <div>
                                <h6 className="Logo fs-3 text-center">About Coastal<span>Cart</span></h6>
                                <br />
                                <p>CoastalCart is a team 19 project developed using ReactJS and Django(Python) we did this project with help of youtube and Udemy from there we watched many e-commerce web apps then we created our version out of it.<br /> To be honest, the logic is no we created but we gather from video and StackOverflow such website then we modify the logic to our need</p>
                            </div>
                        </Col>
                        <Col md={4}>
                        <div>
                            <h6 className="Logo fs-3 text-center">Quick <span>Links</span></h6>
                            <ul class="list-unstyled text-center my-3 footer-links">
                                <li>Cart</li>
                                <li>Products</li>
                                <li>Cart</li>
                                <li>Profile</li>
                                <li>Login</li>
                            </ul>
                        </div>
                        </Col>
                        <Col md={4}>
                            <div>
                                <h6 className="Logo fs-3 text-center">Contact <span>Us</span></h6>
                                <div className="d-flex align-items-start">
                                    <i class="far fa-address-card fa-2x text-primary m-2"></i>
                                    <p className="fs-6 pt-1"> Dr. P. Dayananda Pai Sathish Pai Government First Grade College <br /> Car Street, near Sharada press, Road, Mangalore, Karnataka 575001</p>
                                </div>
                                <div className="d-flex">
                                    <i class="fas fa-phone-square-alt fa-2x text-primary m-2"></i>
                                    <p className="fs-6 pt-2">Phone : +91 9483527972</p>
                                </div>
                                <div className="d-flex">
                                    <i class="fas fa-at fa-2x text-primary m-2"></i>
                                    <p className="fs-6 pt-2">Email : help@CoastalCart.com</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="footer-bottom pb-4">
                <h6 className="text-center text-white pt-4 ">Copyright © 2021 coastalcart | Powered by Team 19</h6>
            </Container>
        </footer>
    )
}

export default Footer
