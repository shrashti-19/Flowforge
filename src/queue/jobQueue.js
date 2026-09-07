const jobQueue = [];

const addJob = (job)=>{
    jobQueue.push(job);
}

const getNextJob = ()=>{
    return jobQueue.shift();
}

module.exports = {
    addJob,
    getNextJob
};