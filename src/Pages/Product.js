import React from "react";
import "../Style/menu.css";
import Card from "../Components/Card";

import APIService from '../ApiService/ProductAPIService'

export default class Product extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             products: []
        }
    }
    
    componentDidMount({id}){
        APIService.getProductsByCategoryId({id}).then((data) => {
            this.setState({ products: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
                 {
                    this.state.products.map(products =>
                        <div className="column">
                        <Card
                        imageUrl={products.image}
                        title={products.name}
                        />
                        </div>
                    )
                 }
            </div>
        )
    }
}
