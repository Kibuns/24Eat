import React from 'react';
import Basketlist from '../Components/BasketComponents/Basketlist'
import List from '@mui/material/List';

function Basket({items, addToBasket, removeItemOne, removeItem, clearItems}) {
  return (
   <>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Basketlist items = {items} removeItem = {removeItem} addToBasket = {addToBasket} removeItemOne={removeItemOne} clearItems={clearItems}/></List>
   </>
  );
}

export default Basket;
