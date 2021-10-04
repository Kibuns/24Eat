import React from "react";
import "../Style/menu.css";
import { useParams, withRouter } from "react-router-dom";
import useFetch from "../ApiService/useFetch";
import ProductList from "../Components/ProductList";

const Product = () => {

    const { id } = useParams();
    const { data: products, error, isPending } = useFetch("http://localhost:8080/products/category/" + id);

        return (
            <div>
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { products && <ProductList products={products} /> }
            </div>
        )
}

export default Product;