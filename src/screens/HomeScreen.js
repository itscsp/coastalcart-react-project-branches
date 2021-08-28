 import React, {useState, useEffect} from 'react';
 import { useDispatch, useSelector } from 'react-redux';
import "../components/css/HomeScreen.css";
import { Row, Col } from 'react-bootstrap';
import  Product from  '../components/Product';
import  Loader from  '../components/Loader';
import  Message from  '../components/Message';
import { listProducts } from '../actions/productActions';




function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    useEffect(() =>{
        dispatch(listProducts())

    }, [dispatch])
    
    return (
        <div>
            <h2 class="border-style mt-4">Latest Prodcuts</h2>
            {loading ? <Loader />
                :error ? <Message variant='danger'>{error}</Message>
                    : 
                    <Row>
                        {products.map(product => (
                            <Col key={product.id} sm={6} md={6} lg={4} xl={3}>
                                <Product product={product}/>
                            </Col>
                        ))}
                    </Row>
            }
        </div> 
    )
}

export default HomeScreen
