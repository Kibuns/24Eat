import React from 'react';
import "../Style/product.css";
import { Button } from '@mui/material';

const ProductDetails = ({ details, addToBasket }) => {

  function handleAddClick() {
    addToBasket({
      productId: details.id,
      name: details.name,
      price: details.price,
      image: details.image ? details.image : null
    })
  }

  if  (details.inStock === false)
  {
    return (
      <div>
          <h1>Product details</h1>
          <div>
              <img className="image" src={details.image} alt ="Dish"/>
              <div className="info">
                  <h2>{details.name}</h2>
                  <h6>${details.price}</h6>
                  <h6 className="description">{details.description}</h6>
                  <h6 className="description">{details.instock}</h6>
                  <h2>out of stock</h2>
              </div>
          </div>
      </div>
    )
  } else {
    return (
      <div>
          <h1>Product details</h1>
          <div>
              <img className="image" src={details.image} alt ="Dish"/>
              <div className="info">
                  <h2>{details.name}</h2>
                  <h6>${details.price}</h6>
                  <h6 className="description">{details.description}</h6>
                  <h6 className="description">{details.instock}</h6>
                  <Button variant="outlined" onClick = {handleAddClick}>Add to cart</Button>
              </div>
          </div>
      </div>
    )
  }
}

export default ProductDetails;
