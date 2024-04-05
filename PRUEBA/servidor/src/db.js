import mongoose from "mongoose";

export const conexion = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/prueba')
        console.log(">> Database Conected")
    } catch (error) {
        console.log(error)
    }

}