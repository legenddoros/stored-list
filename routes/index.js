const express = require("express");
const router = express.Router();
const Affirmation = require("../models/Affirmation");

router.get("/", async (req, res, next) => {
  try {
    const affirmations = await Affirmation.find({});
    res.render("index", { affirmations });
  } catch (err) {
    next(err);
  }
});

router.post("/item", async (req, res, next) => {
  try {
    const { text } = req.body;
    await Affirmation.create({ text });
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.put("/item/:id", async (req, res, next) => {
  try {
    const { text } = req.body;
    await Affirmation.findByIdAndUpdate(req.params.id, { text });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

router.delete("/item/:id", async (req, res, next) => {
  try {
    await Affirmation.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
