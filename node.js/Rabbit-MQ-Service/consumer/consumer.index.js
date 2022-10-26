// const { connect } = require("amqplib");
const express = require("express");
const app = express();
const amqp = require("amqplib");
var channel, connection;

async function connect() {
  try {
    const amqpserver = "amqp://localhost:5672";
    connection = await amqp.connect(amqpserver);
    channel = await connection.createChannel();
    await channel.assertQueue("Rabbit");
    channel.consume("Rabbit", data =>{
      console.log(`Received data from producer :${Buffer.from(data.content)}`)
      channel.ack(data)
    })
  } catch (err) {
    console.log(err);
  }
}



connect();

app.get("/send", async (req, res) => {
  const fakeData ={
    name: "John",
    company :"TCS",
  }
  await channel.sendToQueue("Rabbit", Buffer.from(JSON.stringify(fakeData)))
  await channel.close()
  await connection.close()
  return res.send("done")


});

app.listen(4001, () => {
  console.log("server is running at port 4001");
});
