import React from "react";
import CategoryCard from "../Components/Category/CategoryCard";
import { Grid } from "@mui/material";
import useFetch from "../ApiService/useFetch";

const Category = () => {
  const { data: categories } = useFetch(
    "https://db01-4-menuservice.herokuapp.com/api/public/categories"
  );

  return (
    <div>
      <h1>Menu</h1>
      <Grid container spacing={2}>
        {categories &&
          categories.map((category) => <CategoryCard category={category} />)}
      </Grid>
    </div>
  );
};

export default Category;
