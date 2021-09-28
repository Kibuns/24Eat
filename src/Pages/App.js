import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "../Style/App.css";
import Product from "../Pages/Product";
import { Container } from 'reactstrap';
import {Nav, Navbar} from 'react-bootstrap';
import Category from "./Category";

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/category' component={Category} />
              <Route path='/category/:id'>
                <Product/>
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

//Home page from here 

const Home = () => (

  <div>
     <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/category">Menu</Nav.Link>
        </Nav>
        </Container>
    </Navbar>

    <h1>Home</h1>

  </div>
   
);


export default App;
