import React from 'react'
import "../components/css/HomeScreen.css";
import { products } from '../products';
import { Row, Col } from 'react-bootstrap';
import  Product from  '../components/Product';



function h1() {
    return (
        <div>
            <h2 class="leatest-product mt-4">Latest Prodcuts</h2>
            <Row>
                {products.map(product => (
                    <Col key={product.id} sm={6} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div> 
    )
}

export default h1
