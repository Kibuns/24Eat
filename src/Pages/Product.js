import React from "react";
import "../Style/menu.css";
import { useParams } from "react-router-dom";
import useFetch from "../ApiService/useFetch";
import ProductList from "../Components/ProductList";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import HeaderBar from "../Components/HeaderBar"


const Product = () => {

    const { id } = useParams();
    const { data: products, error, isPending } = useFetch("http://localhost:8080/products/category/" + id);

        return (
            <div>
                <HeaderBar />
                <Container>
                    <Row>
                        <h1>Products</h1>   
                        { error && <div>{ error }</div> }
                        { isPending && <div>Loading...</div> }
                        { products && <ProductList products={products} /> }
                    </Row>
                </Container>
            </div>
        )
}

export default Product;