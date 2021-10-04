import React from "react";
import "../Style/menu.css";
import { useParams, withRouter } from "react-router-dom";
import useFetch from "../ApiService/useFetch";
import ProductDetails from "../Components/ProductDetail";
import HeaderBar from "../Components/HeaderBar";


const Details = () => {

    const { id } = useParams();
    const { data: details, error, isPending } = useFetch("http://localhost:8080/products/" + id);

        return (
            <div>
                <HeaderBar />
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { details && <ProductDetails details={details} /> }
            </div>
        )
}

export default Details;