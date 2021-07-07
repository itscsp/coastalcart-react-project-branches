import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import {products} from '../products';
import './css/ProductScreen.css';


function ProductScreen({match}) {
    const product = products.find((p) => p._id == match.params.id)
    return (
        <div>
            <Link to="/" className="btn custom-btn1 my-2 mx-1">Go Back</Link>

            <Row>
                <Col lg={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col lg={3}>
                    <ListGroup variant='flash'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e425'} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price=${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description :{product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                    <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                        
                                        <Button className="btn-block" disabled={product.countInStock === 0} type='button'>Add To Cart</Button>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen       