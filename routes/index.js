const express = require("express");
const router = express.Router();
const Affirmation = require("../models/Affirmation");

router.get("/", async function (req, res, next) {
  try {
    const affirmations = await Affirmation.find({});
    res.render("index", { affirmations });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
