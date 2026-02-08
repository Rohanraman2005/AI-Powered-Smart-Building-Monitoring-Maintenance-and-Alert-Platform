const express = require("express");
const Feedback = require("../models/Feedback");

const router = express.Router();

router.post("/add", async (req, res) => {
  const fb = new Feedback(req.body);
  await fb.save();
  res.json(fb);
});

router.get("/all", async (req, res) => {
  res.json(await Feedback.find());
});

module.exports = router;
