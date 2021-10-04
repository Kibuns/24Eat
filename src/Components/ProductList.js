import React from 'react';
import "../Style/product.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from 'reactstrap';
import HeaderBar from "./HeaderBar"


const ProductList = ({ products }) => {

  return (
    <div>  
      <HeaderBar />
      <h1>Products</h1>    
      {products.map(product => (
        <div className="column">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200px"
          image={product.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {product.name}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      </div>
      ))}
    </div>
  )}

export default ProductList;

