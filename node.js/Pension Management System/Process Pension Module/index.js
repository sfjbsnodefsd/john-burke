const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/processRoutes");
const app = express();

app.use(express.json());
app.use(Router);

mongoose.connect(
  "mongodb://localhost:27017/PenAuthDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(5002, () => {
  console.log("Server is up and running on PORT 5002");
});
