const express = require("express");

const app = express();

// Define the root route
app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

// Define the cart route with validation for id
app.get("/cart/:id", (req, res) => {
  const { id } = req.params;

  // Check if id is a number
  if (!isNaN(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send("Cart not found");
  }
});

// Start the server on port 7865
app.listen(7865, () => {
  console.log("API available on localhost port 7865");
});

module.exports = app;
