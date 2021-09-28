import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "../Style/App.css";
import Menu from "../Pages/Menu";
import Product from "../Pages/Product";
import { Container } from 'reactstrap';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/menu' component={Menu} />
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
          <Nav.Link href="/Menu">Menu</Nav.Link>
          <Nav.Link href="#Card">Card</Nav.Link>
        </Nav>
        </Container>
    </Navbar>

    <h1>Home</h1>

  </div>
   
);


export default App;
