import React, {useState, useEffect} from 'react';
import Basketlist from '../Components/Basketlist'
import HeaderBar from "../Components/HeaderBar";
import update from 'immutability-helper'
import List from '@mui/material/List';
import { useProduct } from '../Components/ProductContext';

const LOCAL_STORAGE_KEY = 'Basket.items'

//TODO rerender basket on productcontext
//TODO rewrite updatearrayelement to do proper checks with extproduct
//TODO stop readding of extproduct on rerender of basket

function Basket() {
  const [items, setItems] = useState([])
  const extProduct = useProduct()

  useEffect(() =>{
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedItems) setItems(storedItems)
  }, [])

  useEffect(() =>{
    console.log('list changed');
    console.log(items);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() =>{
   addToBasket(extProduct)
  console.log("adding ext product")
  }, [extProduct])

  // function updateArrayElementByProduct(array, product, value) {
  //   var foundItem = false;
  //   var position = 0;
  //   var deleted = false;
    
  //   array.find((element) => {
  //       console.log(element.productId)
  //       console.log(product.productId)
    
  //       if (element.productId === product.productId) {
  //         element.quantity += value;
    
  //         if (element.quantity < 1) {
  //           console.log('im here');
  //           removeItem(element.productId)
  //             deleted = true
  //           }else{
  //             console.log('im here too');
  //             var newItems = update(items, {
  //               $splice: [[position, 1, element]]
  //             });
      
  //             setItems(newItems);
  //             foundItem = true;
  //           }
  //         }else {
  //           position++
  //         }
  //   })
    
  //   if (foundItem === false && deleted === false) {
  //     console.log('item found in list: '+foundItem);
  //     product.quantity = 1;
  //     setItems(prevItems => {
  //       return [...prevItems, product]
  //     })
  //   }
  // }

  function CartController(product, value) {
    //if the product already exists, increase/decrease quantity
    if(items.some(element => element.productId != product.productId)) return
      items.element.quantity += value
    
  }

  function addToBasket(product) {
    if(product === undefined) return
    //if productid is found in array, +1 the quantity. else add product
    if(items.some(element => element.productId === product.productId)){
      items.element.quantity += 1
    } else{
      items.push(product)
    }
  }

  function removeItemOne(product) {
    if(product === undefined) return
    //if productid is found in array, check if value is 1 if >1, -1
    if(items.some(element => element.productId === product.productId)){
      items.element.quantity += 1
    }
  }

  function removeItem(productId) {
    const newItems = items.filter(item => item.productId !== productId)
    setItems(newItems)
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
