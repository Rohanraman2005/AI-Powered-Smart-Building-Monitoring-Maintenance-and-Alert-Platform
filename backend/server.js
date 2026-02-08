const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/sensor", require("../backend/routes/sensorRoutes"));
app.use("/api/feedback", require("../backend/routes/feedbackRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
