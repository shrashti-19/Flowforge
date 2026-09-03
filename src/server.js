const express = require("express");
const crypto = require("crypto");

const app = express();

app.use(express.json());

app.post("/jobs", (req, res) => {
  const { type, payload } = req.body;

  const job = {
    id: crypto.randomUUID(),
    type,
    payload,
    status: "PENDING"
  };

  res.status(201).json(job);
});

app.listen(4000, () => {
  console.log("FlowForge server running on port 4000");
});