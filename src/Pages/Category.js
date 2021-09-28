import React from "react";
import "../Style/menu.css";
import Card from "../Components/Card";
import APIService from '../ApiService/ProductAPIService'


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
                 {
                    this.state.categories.map(categories =>
                        <div className="column">
                        <Card
                        id={categories.id}
                        imageUrl={categories.image}
                        title={categories.name}
                        />
                        </div>
                    )
                 }
            </div>
        )
    }
}
