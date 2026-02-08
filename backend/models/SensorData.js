const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
  voltage: Number,
  temperature: Number,
  status: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SensorData", sensorSchema);
