import express from "express";
import { getTasks, postTask } from "./controllers/tasksController.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/tasks", getTasks);
app.post("/api/tasks", postTask);

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