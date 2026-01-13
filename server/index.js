const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config;
const connectDB = require("./src/config/db");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(PORT, (req, res) => {
  console.log(`server is running on ${PORT}`);
});
