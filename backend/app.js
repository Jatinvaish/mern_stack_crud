const express = require("express");
const app = express();
const cors =require('cors');
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.use(express.json())
const User = require("./routes/userRoutes")
app.use("/api/v1", User)

module.exports = app

//routes