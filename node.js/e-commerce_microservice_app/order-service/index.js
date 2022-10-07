const express = require("express");
const app = express();
const mongoose = require("mongoose");
const amqp = require("amqplib");
//const Product = require("./Product");
const isAuthenticated = require("../isAuthenticated");
const Order = require("./Order")
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/order-service",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`order service DB  Connected`);
    // console.log(pro);
  }
);
async function connect() {
  const amqpServer = "amqp://localhost:5672";
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("ORDER");
}

//create order
function createOrder(products,userEmail){
  let total = 0
  for(t=0; t<products.length; ++t) {
    total += products[t].price
  }
  const newOrder = new Order({
    products,
    user: userEmail,
    total_price: total
  })
  newOrder.save()
}

connect().then(()=>{
    channel.consume("ORDER", data =>{
        const{products, userEmail} = JSON.parse(data.content)
        const newOrder = createOrder(products, userEmail)
        console.log("consming order queue")
        console.log(products)
        channel.ack(data)
        channel.sendToQueue("PRODUCT", Buffer.from(JSON.stringify({newOrder})))
    })
});

app.listen(5002, () => {
  console.log(`Order service is working at port 5002`);
});
