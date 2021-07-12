// express
const express = require("express");
const router = express.Router();

// mongoose
const mongoose = require("mongoose");

// modles
const Slide = require("../models/slide");

// mongo host
const db =
  "mongodb+srv://panduxcv:qtek9100@parkme.lolik.gcp.mongodb.net/slide?retryWrites=true&w=majority";

// checking mongo connection
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.error(`Error`, error);
    } else {
      console.log("Mongo DB is working as expected");
    }
  }
);

module.exports = router;
