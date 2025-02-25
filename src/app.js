import express from "express";
import sessionMiddleware from "./config/sessionMiddleware.js";
import router from "./routes/index.js";

const app = express();

app.use(sessionMiddleware);
app.use("/", router);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
