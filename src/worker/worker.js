//.env variables access
require("dotenv").config();

const { redisClient, connectRedis } = require("../config/redis");
const connectDB = require("../config/db");
const Job = require("../models/Job");

const startWorker = async () => {
  await connectRedis();
//   console.log("Trying MongoDB...");
  await connectDB();

  while (true) {
    const result = await redisClient.blPop("jobs", 0);

    console.log("Received job:", result);

    const job = await Job.findById(result.element);

    console.log("Job fetched:", job);
  }
};

startWorker();