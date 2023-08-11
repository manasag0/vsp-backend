
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userRoute=require('./routes/auth')
const videoRoute=require('./routes/video')
require("dotenv").config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(express.json());
app.use(cors());
app.use('/api/auth',userRoute)
app.use('/api/videos',videoRoute)

app.listen(4000, () => {
  console.log(`Server is running on port ${PORT}`);
});

