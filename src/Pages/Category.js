import React from "react";
import APIService from '../ApiService/ProductAPIService'
import CategoryCard from "../Components/CategoryCard";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import HeaderBar from "../Components/HeaderBar";

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
                <HeaderBar/>
                <h1>Menu</h1>
                <Container>
                <Row>
                 {
                    this.state.categories.map(category =>
                        <CategoryCard category={category}/>
                    )
                 }
            </Row>
            </Container>
            </div>
        )
    }
}
