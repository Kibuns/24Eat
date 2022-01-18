import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../Style/App.css";
import Product from "../Pages/Product";
import Category from "./Category";
import Basket from "./Basket";
import HeaderBar from "../Components/Main/HeaderBar";
import Details from "../Pages/Details";
import { TableCodeContext } from "../USECONTEXT/TableCodeContext";

function App() {
  const [items, setItems] = useState([]);
  const [code, setCode] = useState("Helllooo");

  const LOCAL_STORAGE_KEY = "Basket.items";

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) setItems(storedItems);
    console.log("Page loaded");
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    console.log(items);
  }, [items]);

  function addToBasket(product) {
    console.log(product);
    if (!product) return console.log("Product undefined");
    const foundItem = items.find(
      (element) => element.productId === product.productId
    );
    if (foundItem) {
      setItems(
        items.map((element) =>
          element.productId === product.productId
            ? { ...foundItem, quantity: foundItem.quantity + 1 }
            : element
        )
      );
      console.log("Incrementing item by 1");
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
      console.log("Item not found, adding to list");
    }
  }

  function removeItemOne(product) {
    if (!product) return console.log("Product undefined");
    const foundItem = items.find(
      (element) => element.productId === product.productId
    );
    if (foundItem.quantity === 1) return removeItem(foundItem.productId);
    setItems(
      items.map((element) =>
        element.productId === product.productId
          ? { ...foundItem, quantity: foundItem.quantity - 1 }
          : element
      )
    );
    console.log("Item found, removing 1 from quantity");
  }

  function removeItem(productId) {
    const newItems = items.filter((item) => item.productId !== productId);
    setItems(newItems);
    console.log("Removing all items with productId: " + productId);
  }

  //function for when order button was pressed
  function clearItems() {
    setItems([]);
    console.log("Clearing all items");
  }

  return (
    <Router>
      <div className="App">
        <HeaderBar />
        <Switch>
          <Route exact path="/" component={Category} />
          <TableCodeContext.Provider value="hello">
            <Route
              exact
              path="/basket"
              render={() => (
                <Basket
                  addToBasket={addToBasket}
                  items={items}
                  removeItemOne={removeItemOne}
                  removeItem={removeItem}
                  clearItems={clearItems}
                />
              )}
            />
          </TableCodeContext.Provider>
          <Route path="/category/:id" component={Product} />
          <Route
            path="/product/:id"
            render={() => <Details addToBasket={addToBasket} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
