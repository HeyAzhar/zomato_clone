const express = require("express");
const app = express();

const router = require("./routes");

const PORT = 2000;

app.get("/user/delete", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("===>> Server is connected");
});
