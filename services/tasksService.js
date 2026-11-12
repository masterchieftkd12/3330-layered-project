
import { findAll, nextId, insert } from "../data/tasks.js";

// ===== Helper functions =====
function isGoodStringParam(param) {
    return typeof param === "string" && param.trim().length > 0;
}

// Get every task
export function getAllTasks() {
    return findAll();
}

// Validate the title, build the task, and save it
export function createTask(title) {
    if (!isGoodStringParam(title)) {
        const error = new Error("Title is required.");
        error.status = 400;
        throw error;
    }

    const newTask = {
        id: nextId(),
        title: title.trim(),
        completed: false
    };

    return insert(newTask);
}