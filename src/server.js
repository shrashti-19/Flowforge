require("dotenv").config();

const express = require("express");
const crypto = require("crypto");
const connectDB = require("./config/db");
const Job = require("./models/Job");
//const {addJob} = require("./queue/jobQueue");
const {connectRedis, redisClient} = require("./config/redis")

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
  // First make sure the Job exists persistently → then put it into the queue for processing.
  
  await redisClient.rPush("jobs", job._id);

  res.status(201).json(job);
});

connectDB();
connectRedis();

app.listen(4000, () => {
  console.log("FlowForge server running on port 4000");
});