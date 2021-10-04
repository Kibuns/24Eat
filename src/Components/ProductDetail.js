import React from 'react';
import "../Style/product.css";
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProductDetails = ({ details }) => {

  return (
    <div>
        <h1>Product details</h1>
        <div>
            <img className="image" src={details.image}/>
            <div className="info">
                <h2>{details.name}</h2>
                <h6>${details.price}</h6>
                <h6 className="description">{details.description}</h6>
                <Button variant="outlined">Add to card</Button>
            </div>
        </div>
    </div>
  )}

export default ProductDetails;
