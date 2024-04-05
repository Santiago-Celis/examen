import Product from "../models/Product.js"



export const createProduct = async (req, res) => {
    const { name, description, price } = req.body
    try {
        
        const newProduct = new Product({
            name,
            description,
            price
        })

        const savedProduct = await newProduct.save();

        console.log(savedProduct)
        res.status(200).json({ message: "El producto se ha creado correctamente" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "No se pudo crear el Producto" })
    }

}

export const getProducts = async (req, res) => {

    const products = await Product.find();

    if(!products) return res.status(404).json({ message: "No se ha encontrao ningun producto" })

    res.status(200).json(products)

}

export const updateProduct = async (req, res) => {
    const { name, description, price } = req.body
    const { id } = req._id
    try {
        
        const productFound = Product.findById(id)

        const editProduct = await Product.findByIdAndUpdate({
            name,
            description,
            price
        }, {where: {id}})

        const updatedProduct = editProduct.save() 

        console.log(updatedProduct)
        res.status(200).json({ message: "El producto se ha actualizado correctamente" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "No se pudo actualizar el Producto" })
    }

}

export const deleteProduct = async (req, res) => {
    const { id } = req._id
    try {
    
    const product = Product.findByIdAndDelete(id);

    if(!product) return res.status(404).json({ message: "no se ha encontrado el producto o no existe" })

        console.log("Se ha eliminado el producto con exito")
        res.status(200).json({ message: "Se ha eliminado el producto con exito" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Ha surgido un error al eliminar el productos" })
    }
}