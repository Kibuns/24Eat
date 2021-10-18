import React from 'react'
import Item from './Item'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function Basketlist({items, removeItem, addToBasket, removeItemOne}) {
    
    const BasketItems = () => {
        return (
            <table>
            <tr>
                <th>picture</th>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>add/remove</th>
            </tr>
                {items.map(item => {
                    return <Item key={item.productId} removeItem={removeItem} addToBasket={addToBasket} removeItemOne={removeItemOne} item={item}/>
                })}
            </table> 
        )
    }

    return <BasketItems/>;
}
