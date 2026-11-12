import express from "express";
import tasksRouter from "./routes/tasks.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const port = 3000;

// Parse JSON request bodies
app.use(express.json());

// Mount the tasks router at /api
// All task routes are now handled in routes/tasks.js
app.use("/api", tasksRouter);

// Error handler goes last so it catches errors from every route
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});