import React from "react";
import Item from "./Item";
import { Button, ListItem, List, ListItemText } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

export default function Basketlist({
  items,
  removeItem,
  addToBasket,
  removeItemOne,
  clearItems,
}) {
  const BasketItems = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    function DecreaseItemQuantity(name, value) {
      axios
        .put("http://localhost:8084/api/decrease/" + name + "/" + value)
        .then(console.log("Removed " + value + " " + name))
        .then(handleSuccessfulOrder())
        .catch(function (error) {
          console.log(error);
          console.log(
            "something went wrong while trying to reduce quantity of: " + name
          );
        });
    }

    function handleSuccessfulOrder() {
      handleSnackbarOpen();
      //   clearItems();
    }

    const handleSnackbarOpen = () => {
      setSnackbarOpen(true);
    };

    const handleSnackbarClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setSnackbarOpen(false);
    };

    function handleOrderClick() {
      // clearItems()

      // update ims

      console.log("Updating IMS");
      items.map((item) => {
        DecreaseItemQuantity(item.name, item.quantity);
      });
    }

    var totalPrice = 0;

    return (
      <div>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {items.map((item) => {
            totalPrice += item.price * item.quantity;
            return (
              <Item
                key={item.productId}
                removeItem={removeItem}
                addToBasket={addToBasket}
                removeItemOne={removeItemOne}
                item={item}
              />
            );
          })}
          <ListItem
            secondaryAction={
              <Button
                edge="start"
                variant="outlined"
                onClick={handleOrderClick}
              >
                order
              </Button>
            }
          >
            <ListItemText primary={"Total: €" + totalPrice} />
          </ListItem>
        </List>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            YOU ORDERED YAY!!!
          </Alert>
        </Snackbar>
      </div>
    );
  };

  return <BasketItems />;
}
