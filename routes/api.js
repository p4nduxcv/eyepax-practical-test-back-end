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

router.post("/slide", async (req, res) => {
  const slide = new Slide(req.body);
  try {
    await slide.save();
    res.status(200).send(slide);
  } catch (error) {
    res.status(500).send(error);
  }
});

//  GET API to fetch carousel data
router.get("/carousel", async (req, res) => {
  try {
    const selectedSlide = await Slide.find().limit(Number(req.query.slides));
    res.status(200).send(selectedSlide);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

module.exports = router;
