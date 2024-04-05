import { Router } from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/Products.js";

const route = Router();


route.post('/createProduct', createProduct)
route.get('/Products', getProducts)
route.put('/editProduct', updateProduct)
route.delete('/deleteProduct', deleteProduct)

export default route