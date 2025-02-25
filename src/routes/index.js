import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.send(`You have visited this page ${req.session.views} times`);
});

export default router;
