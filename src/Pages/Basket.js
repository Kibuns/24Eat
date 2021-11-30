import React from 'react';
import Basketlist from '../Components/Basketlist'
import List from '@mui/material/List';

function Basket({items, addToBasket, removeItemOne, removeItem}) {
  return (
   <>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Basketlist items = {items} removeItem = {removeItem} addToBasket = {addToBasket} removeItemOne={removeItemOne}/></List>
   </>
  );
}

export default Basket;
