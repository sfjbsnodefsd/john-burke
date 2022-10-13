const express = require("express");
const Router = require("./routes/detailsRoutes");
const app = express();

app.use(express.json());
app.use(Router);

app.listen(5001, () => {
  console.log("Server is up and running on PORT 5001");
});
