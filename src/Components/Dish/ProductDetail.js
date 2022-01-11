import React from "react";
import "../Dish/product.css";
import { Button } from "@mui/material";

const ProductDetails = ({ details, addToBasket }) => {
  function handleAddClick() {
    addToBasket({
      productId: details.id,
      name: details.name,
      price: details.price,
      image: details.image ? details.image : null,
    });
  }

  if (details.inStock === false) {
    return (
      <div>
        <h1>Product details</h1>
        <div>
          <img className="image" src={details.image} alt="Dish" />
          <div className="info">
            <h2>{details.name}</h2>
            <h6>${details.price}</h6>
            <h6 className="description">{details.description}</h6>
            <h6 className="description">{details.nutrition}</h6>
            <h6 className="description">{details.in_stock}</h6>
            <h2>out of stock</h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Product details</h1>
          <img className="image" src={details.image} alt="Dish" />
        </div>
        <div className="info">
          <h2>{details.name}</h2>
          <hr className="line" />
        </div>
        <div className="info">
          <h4>Description</h4>
          <p>{details.description}</p>
          <hr className="line" />
        </div>
        <div className="info">
          <h4>Nutrition</h4>
          <p>{details.nutrition}</p>
          <hr className="line" />
        </div>
        <div className="info">
          <h4>Allergies</h4>
          <p>{details.allergies}</p>
          <hr className="line" />
        </div>
        <div className="info">
          <div className="left">
            <p>${details.price}</p>
          </div>
          <div className="right">
            <Button variant="outlined" onClick={handleAddClick}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
