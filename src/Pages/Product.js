import React from "react";
import "../Style/menu.css";
import { useParams, withRouter } from "react-router-dom";
import useFetch from "../ApiService/useFetch";
import { render } from "@testing-library/react";

const Product = () => {

    const { id } = useParams();
    const { data, error, isPending } = useFetch("http://localhost:8080/products/category/" + id);

        return (
            <div>
                <p>{id}</p>
                <p>{data.name}</p>
            </div>
        )
}

export default Product;

{/* { isPending && <div>Loading...</div>}
                {error && <div>{ error } </div>}
                <h1>Category {id}</h1>
                {data && (
                    <h1>{data.name}</h1>
                )} */}