import React from "react"
import Product from "../Pages/Product";
import "../Style/card.css";

const Id = null;

function Card ({id, title, imageUrl, body}) {
     Id = id
    return (
            <div className="card">
                <div><img className="cardimg" src={imageUrl} alt=""/></div>
                <h6>{title}</h6>
                <p>{body}</p>
                <div><button onClick={this.ready} className="button"><p>View more</p></button></div>
            </div>       

    )
    

}
var ready = function() {
    //calculate your data here
    //then redirect:
    this.context.router.push({ //browserHistory.push should also work here
    pathname: {Product},
      state: {Id: Id}
    }); 
}


export default Card;