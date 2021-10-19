import React, {useState, useEffect} from 'react';
import Basketlist from '../Components/Basketlist'
import HeaderBar from "../Components/HeaderBar";
import update from 'immutability-helper'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

const LOCAL_STORAGE_KEY = 'Basket.items'

function Basket() {
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() =>{
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedItems) setItems(storedItems)
  }, [])

  useEffect(() =>{
    console.log('list changed');
    console.log(items);
    calcTotalPrice();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function updateArrayElementByProduct(array, product, value) {
    var foundItem = false;
    var position = 0;
    var deleted = false;
    
    array.find((element) => {
      if (element.productId === product.productId) {
        element.quantity += value;

        if (element.quantity < 1) {
          console.log('im here');
          removeItem(element.productId)
          deleted = true
        }else{
          console.log('im here too');
          var newItems = update(items, {
            $splice: [[position, 1, element]]
          });
  
          setItems(newItems);
          foundItem = true;
        }
      }else {
        position++
      }
    })
    if (foundItem === false && deleted === false) {
      console.log('item found in list: '+foundItem);
      product.quantity = 1;
      setItems(prevItems => {
        return [...prevItems, product]
      })
    }
  }

  function addToBasket(product) {
    updateArrayElementByProduct(items, product, 1)
  }

  function removeItem(productId) {
    const newItems = items.filter(item => item.productId !== productId)
    setItems(newItems)
  }
  function removeItemOne(product) {
    updateArrayElementByProduct(items, product, -1)
  }

  function calcTotalPrice(){
      setTotalPrice(items.reduce((sum, i) =>(
        sum += i.quantity * i.price
    ), 0))
    console.log(totalPrice)
  }

  return (
   <>
        <div><HeaderBar/></div>

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Basketlist items = {items} removeItem = {removeItem} addToBasket = {addToBasket} removeItemOne={removeItemOne}/></List>

   </>
  );
}

export default Basket;
