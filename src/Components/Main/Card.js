import React from "react";
import { Link } from 'react-router-dom';
import "../Style/card.css";

function Card ({id, title, imageUrl, body}) {
    return (
        <Link to={`/category/${id}`}>
            <div className="card">
                <div><img className="cardimg" src={imageUrl} alt=""/></div>
                <h6>{title}</h6>
                <p>{body}</p>
            </div>
        </Link>
    )
}


export default Card;