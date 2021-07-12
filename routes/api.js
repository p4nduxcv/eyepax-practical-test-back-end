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

/**
 * @optional this POST method has been created for enter 10 slides quickly using POSTMAN
 */

router.post("/slide", (req, res) => {
  let slide = new Slide(req.body);
  slide
    .save()
    .then(() => {
      res.status(200).send(slide);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

module.exports = router;
