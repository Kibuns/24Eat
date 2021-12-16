import React from 'react';
import "../Style/product.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Col from 'react-bootstrap/Col';

const ProductList = ({ products }) => {

    let history = useHistory();

  return (
    <div>   
    <Col xs sm md={1}>
        <ArrowBackIosIcon fontSize="large" onClick={() => history.goBack()}/>
    </Col>
    <Col xs sm md="auto"/>

      {products.map(product => (
        <div className="column">
      <Link style={{ textDecoration: 'none' }} to={`/product/${product.id}`}>
        <Card sx={{ maxWidth: 345 }}>
        {product.inStock
          ?        
          <div style={{ position: "relative" }}>      
            <CardMedia style={{ height: "250px", paddingTop: "2%", opacity:1 }}   component="img" image={product.image} title="Product image" alt="Product image"/>
          </div>
          :
          <div style={{ position: "relative" }}>      
            <CardMedia style={{ height: "250px", paddingTop: "2%", opacity:0.3 }}   component="img" image={product.image} title="Product image" alt="Product image"/> 
            <div style={{position: "absolute", color: "red",top: 10,left: "50%",transform: "translateX(-50%)",fontSize:25}}> Out of Stock</div>  
          </div>
        }

        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {product.name}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      </Link>
      </div>
      ))}
    </div>
  )}

export default ProductList;

