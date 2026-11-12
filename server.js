import express from "express";
import { findAll, nextId, insert } from "./data/tasks.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/tasks", (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: findAll()
        });
    } catch (error) {
        next(error);
    }
});

app.post("/api/tasks", (req, res, next) => {
    try {
        const { title } = req.body;

        if (typeof title !== "string" || title.trim() === "") {
            const error = new Error("Title is required.");
            error.status = 400;
            throw error;
        }

        const newTask = {
            id: nextId(),
            title: title.trim(),
            completed: false
        };
        insert(newTask);

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