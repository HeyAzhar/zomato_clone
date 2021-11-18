const express = require("express");
const app = express();
const router = require("./routes");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/zomato_clone")
  .then((res) => console.log("===>> Connected to DB"))
  .catch((error) => console.log("Unable to connect DB"));

const PORT = 2000;

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log("===>> Server is connected");
});
