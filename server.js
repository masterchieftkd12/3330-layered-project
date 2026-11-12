import express from "express";
import { getAllTasks, createTask } from "./services/tasksService.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/tasks", (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: getAllTasks()
        });
    } catch (error) {
        next(error);
    }
});

app.post("/api/tasks", (req, res, next) => {
    try {
        const newTask = createTask(req.body.title);

        res.status(201).json({
            success: true,
            data: newTask
        });
    } catch (error) {
        next(error);
    }
});

const errorHandler = (err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || "Internal Server Error."
    });
};

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});