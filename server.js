import express from "express";

const app = express();
const port = 3000;

const db = [
    {id: "1", title: "Take a shower", status: "false"},
    {id: "2", title: "Get wingstop for dinner", status: "false"},
    {id: "3", title: "Work on the project for 3330", status: "true"},
];

app.use(express.json());

app.get("/api/tasks", (req, res, next) => {
    try{
        const allTasks = db;
        res.status(200).json({
            success: true,
            data: allTasks
        });
    }catch(error){
        next(error);
    }
});

app.post("/api/tasks", (req, res, next) => {
    try{
        const params = req.body;
        const newTask = {
            id: Math.max(...db.map( (user) => user.id )) + 1, 
            title: params.title.trim(),
            completed: false
          };
        db.push(newTask); 

        res.status(201).json({
            success: true,
            data: newTask
        });
    }catch(error){
        next(error);
    }
    return task;
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
