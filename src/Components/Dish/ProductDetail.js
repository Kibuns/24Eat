import React, { useState } from "react";
import "../Dish/product.css";
import { Button, Snackbar, Alert } from "@mui/material";
import placeholderImage from "../../Media/placeholder-image.png";

const ProductDetails = ({ details, addToBasket }) => {
  const [open, setOpen] = useState(false)

  function handleAddClick() {
    handleSnackbarOpen()
    addToBasket({
      productId: details.id,
      name: details.name,
      price: details.price,
      image: details.image ? details.image : null,
    });
    
  }

  const handleSnackbarOpen = () => {
    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  

  console.log(details.inStock);
  if (details.inStock === false || details.inStock === null) {
    return (
      <div>
        <h1>Product details</h1>
        <div>
          <img 
            className="image" 
            src={details.image 
                  ?details.image 
                  :placeholderImage                        
                }
            alt="Dish" 
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src=placeholderImage;
            }}
            />
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
          <img 
            className="image" 
            src={details.image 
                  ?details.image 
                  :placeholderImage                        
                }
            alt="Dish" 
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src=placeholderImage;
            }}
            />
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
            <Snackbar
              open={open}
              autoHideDuration={2000}
              onClose={handleSnackbarClose}
            >
              <Alert
                onClose={handleSnackbarClose}
                severity="success"
              >
                {details.name} has been added to the basket
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
