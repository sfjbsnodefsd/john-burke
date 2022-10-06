const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const Product = require("./Product");
const isAuthenticated = require("../isAuthenticated");
const { json } = require("express");
app.use(express.json());
var channel, connection;

mongoose.connect(
  "mongodb://localhost:/product-service",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`Product service db connected`);
  }
);

async function connect() {
  const amqpServer = "amqp://localhost:15672";
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("PRODUCT");
}

connect();
//create a new product
//buy a new product

app.post("/product/create", isAuthenticated, async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = new Product({
    name,
    description,
    price,
  });
  return res.json(newProduct);
});

//user will send a list of the products
app.post("/product/buy", isAuthenticated, async (req, res) => {
  const {ids} = req.body;
  const products = await Product.find(_id, { $in: ids });

  channel.sendToQueue(
    "ORDER",
    Buffer.from(
      JSON.stringify({
        products,
        userEmail: req.user.email,
      })
    )
  );
});

app.listen(PORT, () => {
  console.log(`product service is running at 5001`);
});
