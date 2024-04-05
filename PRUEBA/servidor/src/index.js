import app from "./app.js";
import { conexion } from "./db.js";

const PORT = 3000


conexion();
app.listen(PORT, () => console.log(`Server running un port ${PORT}`))