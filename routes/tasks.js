import express from "express";
import { getTasks, postTask } from "../controllers/tasksController.js";

// Create a router (a "mini app" that only handles task routes)
const router = express.Router();


router.get("/tasks", getTasks);


router.post("/tasks", postTask);

export default router;