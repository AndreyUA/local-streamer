import express from "express";

import controllers from "../controllers/index.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Server is working",
  });
});

router.get("/stream", controllers.stream);

export default router;
