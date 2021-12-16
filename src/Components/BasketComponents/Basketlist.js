import React from 'react'
import Item from './Item'
import { Button, ListItem, List, ListItemText } from '@mui/material';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import axios from 'axios';

const client = new W3CWebSocket('ws://127.0.0.1:8000');


export default function Basketlist({items, removeItem, addToBasket, removeItemOne, clearItems}) {
    
    const apiUrl = "http://localhost:8080/api";
    const tableNr = localStorage.getItem("TableNr");


    const Order = async (dishes) => {

        const emptyOrder = {
            tableId: tableNr? tableNr : 0,
            status: 0
        }
        console.log(emptyOrder);
        
        axios
        .post(`${apiUrl}/public/orders`, emptyOrder)
        .then((response) => {
            console.log(response);
            var orderId = response.data.id;
            dishes.forEach(dish => {
                dish["orderId"] = orderId;
            });
            axios
            .post(`${apiUrl}/public/orderitems`, dishes)
            .then((response) => {
                console.log(JSON.stringify(orderId));
                client.send(JSON.stringify(orderId));
            })
        })
        .catch(function () {
        });
    }


    const BasketItems = () => {

        function handleOrderClick(){
            clearItems()
        }

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
                    <Button edge="start" variant="outlined" onClick= {() => Order(items)} >order</Button>   
                }
            >
                <ListItemText primary={"Total: €" + totalPrice} />
            </ListItem>
            </List>
        )
    }

    return <BasketItems/>;
}
