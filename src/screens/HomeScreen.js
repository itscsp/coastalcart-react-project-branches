 import React, {useState, useEffect} from 'react'
import "../components/css/HomeScreen.css";
import { Row, Col } from 'react-bootstrap';
import  Product from  '../components/Product';
import axios from 'axios';



function HomeScreen() {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        async function fetchProducts(){
            const { data } = await axios.get('/api/products/')
            setProducts(data)
        }

        fetchProducts()
    }, [])
    
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

export default HomeScreen
