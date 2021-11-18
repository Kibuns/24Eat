import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "../Style/App.css";
import Product from "../Pages/Product";
import Category from "./Category";
import Basket from "./Basket";
import HeaderBar from "../Components/HeaderBar";
import Details from "../Pages/Details";
import {ProductProvider} from '../Components/ProductContext'

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <ProductProvider>
              <Route exact path='/' component={Home} />
              <Route exact path='/category' component={Category} />
              <Route exact path='/basket' component={Basket} />
              <Route path='/category/:id' component={Product}/>
              <Route path='/product/:id' component={Details}/>
            </ProductProvider>
          </Switch>
        </div>
      </Router>
  );
}

//Home page from here 

const Home = () => (

  <div>
     <HeaderBar/>

    <h1>Home</h1>

  </div>
   
);


export default App;
