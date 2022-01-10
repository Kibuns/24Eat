import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";

function CategoryCard({ category }) {
  return (
    <Grid item md={4} sm={4} xs={4}>
      <div key={category.id}>
        <Link
          style={{ textDecoration: "none" }}
          to={`/category/${category.id}`}
        >
          <Card sx={{}}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={category.image} />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {category.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    </Grid>
  );
}

export default CategoryCard;
