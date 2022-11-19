import express from "express";

import controllers from "../controllers/index.js";

const router = express.Router();

router.get("/", controllers.getAllFiles);
router.get("/stream/:id", controllers.stream);

export default router;
