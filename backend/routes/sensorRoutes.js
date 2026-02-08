const express = require("express");
const Sensor = require("../models/SensorData");

const router = express.Router();

router.post("/add", async (req, res) => {
  let status = "Normal";

  if (req.body.voltage > 240 || req.body.temperature > 30) {
    status = "Fault";
  }

  const data = new Sensor({ ...req.body, status });
  await data.save();
  res.json(data);
});

router.get("/all", async (req, res) => {
  const data = await Sensor.find();
  res.json(data);
});

module.exports = router;
