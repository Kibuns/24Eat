import React, {useState, useEffect}from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "../Style/App.css";
import Product from "../Pages/Product";
import Category from "./Category";
import Basket from "./Basket";
import HeaderBar from "../Components/HeaderBar";
import Details from "../Pages/Details";

function App() {
  const [extProduct, setExtProduct] = useState({})

  function Test(item){
    if(extProduct) setExtProduct(item)
    console.log(extProduct)
    return console.log("product set")
  }

  
  // function Test(product){

  //   return console.log("test end")
  // }

  return (
    <Router>
        <div className="App">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/category' component={Category} />
              <Route exact path='/basket' component={Basket} />
              <Route exact path='/basket' render={ () => <Basket extProduct = {extProduct}/>}/>
              <Route path='/category/:id'>
                <Product/>
              </Route>
              <Route path='/product/:id'>
                <Details Test={Test}/>
              </Route>
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
