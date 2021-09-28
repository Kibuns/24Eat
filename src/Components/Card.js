import React from "react"
import "../Style/card.css";
import {
  BrowserRouter as Router,

  Link,
} from "react-router-dom";


function Card ({id, title, imageUrl, body}) {
    return (
        <Link to={`/category/${id}`}>
        <div>
            <div className="card">
                <div><img className="cardimg" src={imageUrl} alt=""/></div>
                <h6>{title}</h6>
                <p>{body}</p>
            </div> 
        </div>   
        </Link>
    )
}

export default Card;

