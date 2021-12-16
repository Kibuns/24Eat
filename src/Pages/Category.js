import React from "react";
import APIService from '../ApiService/ProductAPIService'
import CategoryCard from "../Components/CategoryCard";
import { Grid } from '@mui/material';

export default class Category extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             categories: []
        }
    }
    
    componentDidMount(){
        APIService.getCategories().then((data) => {
            this.setState({ categories: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h1>Menu</h1>
                <Grid container spacing={2}>
                 {
                    this.state.categories.map(category =>
                        <CategoryCard category={category}/>
                    )
                 }
                 </Grid>
            </div>
        )
    }
}
