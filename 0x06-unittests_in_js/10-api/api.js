const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 7865;

// Use bodyParser to parse JSON bodies
app.use(bodyParser.json());

// Define the root route
app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

// Define the cart route with validation for id
app.get("/cart/:id", (req, res) => {
  const { id } = req.params;

  if (!isNaN(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send("Cart not found");
  }
});

// New endpoint to return available payments
app.get("/available_payments", (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// New endpoint for login
app.post("/login", (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send("Bad Request");
  }
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
