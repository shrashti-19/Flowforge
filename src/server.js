require("dotenv").config();

const express = require("express");
const crypto = require("crypto");
const connectDB = require("./config/db");
const Job = require("./models/Job");

const app = express();

app.use(express.json());

app.post("/jobs", async (req, res) => {
  const { type, payload } = req.body;

  const job = new Job({
    _id: crypto.randomUUID(),
    type,
    payload
  });

  await job.save();

  res.status(201).json(job);
});

connectDB();

app.listen(4000, () => {
  console.log("FlowForge server running on port 4000");
});