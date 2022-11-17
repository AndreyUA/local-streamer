import express from "express";

import controllers from "../controllers/index.js";

const router = express.Router();

// TODO: add here list of all videos
router.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Server is working",
  });
});

// TODO: add here ID of video
router.get("/stream", controllers.stream);

export default router;
