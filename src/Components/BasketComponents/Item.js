import React from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import placeholderImage from "../../Media/placeholder-image.png";

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
        <ListItem        
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick = {handleItemClickRemove}>
                    <DeleteIcon/>
                </IconButton>
            }
        >
            <ListItemAvatar>
            <Avatar 
                src={item.image 
                        ?item.image 
                        :placeholderImage                        
                    }
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src=placeholderImage;
                  }}
            />
            </ListItemAvatar>
                <ListItemText primary={item.name} secondary={"€" + item.price * item.quantity} />

            <IconButton edge="start" aria-label="modify">
                <RemoveIcon onClick = {handleItemClickRemoveOne}/>                  
                {item.quantity}
                <AddIcon variant="contained" onClick = {handleItemClickAdd}/>       
            </IconButton>

            
                
        </ListItem>
    );
}
