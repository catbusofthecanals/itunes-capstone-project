// create a route to handle requests from the front end
const express = require("express");
const router = express.Router();

// create empty array for favourited items
let favourites = [];

// GET - displays all the items within the favourites array
router.get("/", async (req, res) => {
  // if favourites has no items then display message
  if (favourites.length === 0) {
    res.send("You have no favourites to display");
  }
  // else display favourited items
  else {
    res.send({
      favourites,
    });
  }
});

// POST method to add an item to the favourites array
router.post("/add", async (req, res) => {
  // create a new item from post data
  const newItem = Object.assign(req.body);
  // add the new item to the existing items
  favourites.push(newItem);

  // display message and list of items in favourites
  return res.send({
    message: "Item added successfully",
    favourites,
  });
});

// DELETE method to remove a specific item from favourites
router.delete("/delete/:id", async (req, res) => {
  // Find id in URL
  const id = parseInt(req.params.id);
  // loop through the items and splice the item specified
  for (let i = 0; i < favourites.length; i++) {
    if (favourites[i].id === id) {
      favourites.splice(i, 1);
    }
  }

  // display message and list of items in favourites
  res.send({
    message: "Item successfully deleted",
    favourites,
  });
});

module.exports = router;
