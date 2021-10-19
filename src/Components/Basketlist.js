import React from 'react'
import Item from './Item'
import { Button, ListItem, List, ListItemText, IconButton } from '@mui/material';


export default function Basketlist({items, removeItem, addToBasket, removeItemOne}) {
    
    const BasketItems = () => {

        var totalPrice = 0;

        return (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {items.map(item => {
                    totalPrice += item.price * item.quantity;
                   return (
                    <Item key={item.productId} removeItem={removeItem} addToBasket={addToBasket} removeItemOne={removeItemOne} item={item}/>
                   );
                })}
            <ListItem
                secondaryAction={
                    <Button edge="start" variant="outlined">order</Button>   
                }
            >
                <ListItemText primary={"Total: €" + totalPrice} />
            </ListItem>
            </List>
        )
    }

    return <BasketItems/>;
}
