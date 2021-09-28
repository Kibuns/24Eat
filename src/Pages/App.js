import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "../Style/App.css";
import Product from "../Pages/Product"
import Category from "./Category";

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
              <Route exact path='/' component={Category} />
              <Route path="/category/:id">
                <Product/>
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
