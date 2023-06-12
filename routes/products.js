const express = require('express');
const { addProducts, deleteProduct, updateProduct, patchProduct, getProducts, getProductsById } = require("../controller/products")

const productRoutes = express.Router()


productRoutes.post("/addproducts", addProducts)
    .get("/products", getProducts)
    .get("/products/:id", getProductsById)
    .put("/replaceProducts/:id", updateProduct)
    .patch("/updateProducts/:id", patchProduct)
    .delete("/deleteProducts/:id", deleteProduct)
    
    // .use((req, res) => { res.status(404).sendFile("D:/myfiles/CS stuffs/Programming/nodejs/playground/restAPI/404.html") })

module.exports = { productRoutes }