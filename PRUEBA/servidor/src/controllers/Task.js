import Task from "../models/Task.js";




export const createTask = async (req, res) => {
    const { Title, Description } = req.body
    try {
        
        const newTask = new Task({
            Title,
            Description
        })

        const savedTask = await newTask.save();

        console.log(savedTask);
        res.status(200).json({ message: "La tarea se ha creado correctamente" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "No se pudo crear La Tarea" })
    }

}

export const getTasks = async (req, res) => {

    const tasks = await Task.find();

    if(!tasks) return res.status(404).json({ message: "No se ha encontrao ninguna Tarea" })

    res.status(200).json(tasks)

}

export const updateTask = async (req, res) => {
    const { Title, Description } = req.body
    const { id } = req.id
    try {
        
        const editTask = await Task.findByIdAndUpdate({
            Title,
            Description,
        }, {where: {id}})

        const updatedTask = editTask.save() 

        console.log(updatedTask)
        res.status(200).json({ message: "La Tarea se ha actualizado correctamente" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "No se pudo actualizar La Tarea" })
    }

}

export const deleteTask = async (req, res) => {
    const { id } = req.id
    try {
    
    const task = Task.findByIdAndDelete(id);

    if(!task) return res.status(404).json({ message: "no se ha encontrado la tarea o no existe" })

        console.log("Se ha eliminado la tarea con exito")
        res.status(200).json({ message: "Se ha eliminado el producto con exito" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Ha surgido un error al eliminar la tarea" })
    }
}