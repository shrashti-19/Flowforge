const {createClient} = require('redis')
const redisClient = createClient()

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Redis connected");
  } catch (error) {
    console.error("Redis connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = {
  redisClient,
  connectRedis
}