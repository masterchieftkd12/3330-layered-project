const tasks = [
    { id: 1, title: "Take a shower", completed: false },
    { id: 2, title: "Get wingstop for dinner", completed: false },
    { id: 3, title: "Work on the project for 3330", completed: true },
];

// Return every task
export function findAll() {
    return tasks;
}

// Work out the next id (1 if the list is empty)
export function nextId() {
    return tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
}

// Save a new task and return it
export function insert(task) {
    tasks.push(task);
    return task;
}