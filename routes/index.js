import express from "express";

import controllers from "../controllers/index.js";

const router = express.Router();

router.get("/", controllers.getAllFiles);

// TODO: add here ID of video
router.get("/stream", controllers.stream);

export default router;
