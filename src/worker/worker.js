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
    let job;
    try{
      job = await Job.findById(result.element);

      //if job doesn't exist
      if(!job){
        continue;
      }
      job.status = "RUNNING";
      await job.save();

      const generateReport = {
        reportId: job.payload.reportId,
        message: "Report generated successfully"
      }
      if (job.payload.reportId === "FAIL") {
        throw new Error("Report ID failed");
      }
      job.result = generateReport;
      job.status = "COMPLETED";
      await job.save();
      console.log("Job fetched:", job);
    }catch(error){
      job.status = 'FAILED';
      job.result = {
        status: "FAILED",
        message: error.message
      }
      await job.save();
    }
    
  }
};

startWorker();