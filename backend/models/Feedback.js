const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  message: String,
  rating: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
