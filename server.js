import express from "express";

const app = express();
const port = 3000;

const db = [
    { id: 1, title: "Take a shower", completed: false },
    { id: 2, title: "Get wingstop for dinner", completed: false },
    { id: 3, title: "Work on the project for 3330", completed: true },
];

app.use(express.json());

app.get("/api/tasks", (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: db
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
            id: db.length > 0 ? Math.max(...db.map((task) => task.id)) + 1 : 1,
            title: title.trim(),
            completed: false
        };
        db.push(newTask);

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