import React, {useState, useEffect} from 'react';
import Basketlist from '../Components/Basketlist'
import HeaderBar from "../Components/HeaderBar";
import List from '@mui/material/List';
import { useProduct, useProductClear } from '../Components/ProductContext';

const LOCAL_STORAGE_KEY = 'Basket.items'

//TODO make basket rerender when productcontext changes from outside basket OR let productcontext pass a list
//TODO get images from productdetail and send them with extproduct

function Basket() {
  const [items, setItems] = useState([])
  const [Initialised, setInitialised] = useState(false)
  const extProducts = useProduct()
  const clearExtProduct = useProductClear()

  useEffect(() =>{
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedItems) setItems(storedItems)
    setInitialised(true)
  }, [])

  useEffect(() =>{
    console.log(items)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() =>{
    if(Initialised){
      console.log(extProducts.length)
      for(const element of extProducts){
        addToBasket(element)
      }
      clearExtProduct()
    } 
    // eslint-disable-next-line
  }, [Initialised])

  function addToBasket(product) {
    console.log(product)
    if(!product) return console.log("Product undefined")
    const foundItem = items.find(element => element.productId === product.productId)
    if(foundItem){
      setItems(items.map(element => element.productId === product.productId ? {...foundItem, quantity: foundItem.quantity +1} : element))
      console.log("Incrementing item by 1")
    }
    else{
      setItems([...items, {...product, quantity: 1}])
      console.log("Item not found, adding to list")
    }
  }
  
  function removeItemOne(product) {
    if(!product) return console.log("Product undefined")
    const foundItem = items.find(element => element.productId === product.productId)
    if(foundItem.quantity === 1) return removeItem(foundItem.productId)
    setItems(items.map(element => element.productId === product.productId ? {...foundItem, quantity: foundItem.quantity -1} : element))
    console.log("Item found, removing 1 from quantity")
  }

  function removeItem(productId) {
    const newItems = items.filter(item => item.productId !== productId)
    setItems(newItems)
    console.log("Removing all items with productId: " + productId)
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
