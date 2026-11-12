import { getAllTasks, createTask } from "../services/tasksService.js";

// GET /api/tasks
export function getTasks(req, res, next) {
    try {
        res.status(200).json({
            success: true,
            data: getAllTasks()
        });
    } catch (error) {
        next(error);
    }
}

// POST /api/tasks
export function postTask(req, res, next) {
    try {
        const newTask = createTask(req.body.title);

        res.status(201).json({
            success: true,
            data: newTask
        });
    } catch (error) {
        next(error);
    }
}