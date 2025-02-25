import session from "express-session";
import RedisStore from "connect-redis";
import redisClient from "./redisClient.js";

const sessionMiddleware = session({
  store: new RedisStore({ client: redisClient }),
  secret: "supersecretkey",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
});

export default sessionMiddleware;
