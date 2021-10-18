import React from 'react'

export default function Item({item, removeItem, addToBasket, removeItemOne}) {
    function handleItemClickAdd(e) {
        addToBasket(item)
    }
    function handleItemClickRemove(e) {        
        removeItem(item.productId)
    }
    function handleItemClickRemoveOne(e) {        
        removeItemOne(item)
    }
    return (
        <tr>
            <td>placeholder img</td>
            <td>{item.name}</td>
            <td>{item.price * item.quantity}</td>
            <td>{item.quantity}</td>
            <td>            
                <button onClick = {handleItemClickAdd}>+</button>
                <button onClick = {handleItemClickRemoveOne}>-</button>
                <button onClick = {handleItemClickRemove}>remove</button>
            </td>
        </tr>
    )
}
