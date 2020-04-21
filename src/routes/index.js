const express = require('express')
const router = express.Router()

const productRouter = require('./product.js')
const cartRouter = require('./cart.js')
router.use('/products', productRouter)
router.use('/cart', cartRouter)

module.exports = router
