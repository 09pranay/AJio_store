// used for the things to get organised and for seperation

import { red } from 'colors';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js'

const getProducts = asyncHandler( async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getProductById = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})


const deleteProduct = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id)
    
    if(product) {
        await Product.remove()
        res.json({message:'product remove'})
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

const createProduct = asyncHandler( async (req, res) => {
    const product = newProduct({
        name:"Sample Name",
        price:0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand:"sample brand",
        category:0,
        numReviews:'Sample Description'
    })

    const createProduct= await Product.save()
                         red.status(201).json(createProduct)
})

const updateProduct = asyncHandler( async (req, res) => {
    const {name,price,description,image,category,countInStock} = req.body

    const product =await Product.findById(req.params.id)

    if(product){
        product.name = name,
        product.price = price,
        product.description = description,
        product.image = image,
        product.category = category,
        product.countInStock = countInStock

        const updateProduct = await product.save()
            res.json(updateProduct)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }

})

export { getProducts, getProductById,deleteProduct ,createProduct,updateProduct}