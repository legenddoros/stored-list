const mongoose = require("mongoose");

const AffirmationSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

module.exports = mongoose.model("Affirmation", AffirmationSchema);
