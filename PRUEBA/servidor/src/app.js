import express from 'express'
import productRoutes from './routes/Product.routes.js'
import taskRoutes from './routes/Task.routes.js'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors())

app.use('/product', productRoutes);
app.use('/task', taskRoutes)



export default app