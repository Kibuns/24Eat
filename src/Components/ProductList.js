import React from 'react';
import "../Style/product.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Col from 'react-bootstrap/Col'



const ProductList = ({ products }) => {

    let history = useHistory();

  return (
    <div>   
    <Col md={1}>
        <ArrowBackIosIcon fontSize="large" onClick={() => history.goBack()}/>
    </Col>
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

