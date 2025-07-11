const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("dotenv").config();
require("./Models/db");
const cors = require('cors');
const AuthRouter = require("./Routes/AuthRouter");

const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("pong!");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`sever is running on port ${PORT}`);
});
