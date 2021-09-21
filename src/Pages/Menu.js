import React from "react";
import "../Style/menu.css";

import APIService from '../ApiService/ProductAPIService'

export default class Menu extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             categories: []
        }
    }
    
    componentDidMount(){
        APIService.getProducts().then((data) => {
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
                <h2 className="text-center">Menu</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map(categories =>
                                    <tr key={categories.id}>
                                        <td>{categories.id}</td>
                                        <td>{categories.name}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
