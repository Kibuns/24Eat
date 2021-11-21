import React from 'react';
import "../Style/product.css";
import { Button } from '@mui/material';
import { useProductUpdate } from './ProductContext';

const ProductDetails = ({ details }) => {

  const updateProduct = useProductUpdate(details)


  return (
    <div>
        <h1>Product details</h1>
        <div>
            <img className="image" src={details.image}/>
            <div className="info">
                <h2>{details.name}</h2>
                <h6>${details.price}</h6>
                <h6 className="description">{details.description}</h6>
                <Button variant="outlined" onClick = {() => updateProduct(details)}>Add to card</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails;
