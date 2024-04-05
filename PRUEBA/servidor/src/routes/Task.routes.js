import { Router } from "express";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/Task.js";


const route = Router();


route.post('/createTask', createTask)
route.get('/Tasks', getTasks)
route.put('/editTasks', updateTask)
route.delete('/deleteTasks', deleteTask)

export default route