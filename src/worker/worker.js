const {getNextJob} = require("../queue/jobQueue");

const processJobs  = ()=>{
    const job = getNextJob();

    if(!job){
        return;
    }

    console.log("Processing job: ", job._id);
    
};

processJobs();