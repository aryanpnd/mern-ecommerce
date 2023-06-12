const fs = require('fs');
const { productSchema, Product } = require('../model/products');

// add a product
const addProducts = async (req, res, next) => {
    const product = new Product(req.body)
    //we can define in this way as well (hard coded)------
    // product.title = "OledTv";
    // product.price = 999; 
    // product.rating = 4.5;//----------------------------

    await product.save()
        .then((docs) => { res.status(200).send(`Query has been saved `) })
        .catch((err) => { res.status(400).send(`Some error occured <br/> ${err}`) })

}

// get all the products
const getProducts = async (req, res) => {
    await Product.find()
        .then((docs) => { res.status(200).json(docs) })
        .catch((err) => { res.status(400).send(`Some error occured <br/> ${err}`) })
    // or
    // await Product.find({price:{$gte:req.body.price}}).then((s)=>res.json(s))
}


const getProductsById = async (req, res) => {
    await Product.findById(req.params.id)
        .then((docs) => { res.status(200).json(docs) })
        .catch((err) => { res.status(400).send(`Some error occured <br/> ${err}`) })
}

//update and overwrite 
const updateProduct = async (req, res) => {
    await Product.findOneAndReplace({ _id: req.params.id }, req.body, { new: true })
        .then((docs) => { res.status(200).send(`product at id no:${req.params.id} has been replaced by <br/> ${docs}`) })
        .catch((err) => { res.status(400).send(`Some error occured <br/> ${err}`) })

}


//update not overwrite
const patchProduct = async (req, res) => {
    await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((docs) => { res.status(200).send(`Update in products list at product Id:${req.params.id}  from ${[...Object.keys(req.body)]} to ${[...Object.values(req.body)]}`) })
        .catch((err) => { res.status(400).send(`Some error occured <br/> ${err}`) })


}


const deleteProduct = async (req, res) => {
    const reqId = req.params.id
    await Product.findByIdAndRemove(reqId) 
    .then((docs) => { res.status(200).send(`Deleted in products list at product Id:${reqId}`) })
    .catch((err) => { res.status(400).send(`Some error occured <br/> ${err}`) })

}

module.exports = { addProducts, deleteProduct, updateProduct, patchProduct, getProducts, getProductsById }