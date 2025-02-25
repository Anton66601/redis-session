import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://redis-session-redis:6379",
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

try {
  await redisClient.connect();
  console.log("Connected to Redis");
} catch (error) {
  console.error("Error connecting to Redis:", error);
}

export default redisClient;
