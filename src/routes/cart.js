const express = require('express')
const router = express.Router()
const db = require('../dbConnector')

router.get('/', async (req, res) => {
    const data = await db.get('cart');
    res.send(data)
})

router.post('/add', async (req, res) => {

    const productId = parseInt(req.body.product)
    const product = db.get('products').find({ id: productId }).value()
    console.log('product', product)
    if (product === undefined) {
        res.status(400).send('Product does not exist')
        return
    }
    const cart = await db.get('cart');
    const productIds = cart.value().map((product) => {
        return product.id;
    })
    if (productIds.includes(product.id)) {
        res.status(400).send('Product already exists in cart')
        return
    }     
    const result = await cart
        .push(product)
        .write()

    res.json(result);  
})

router.post('/remove', async (req, res) => {
    const cart = await db.get('cart');
    const productIds = cart.value().map((product) => {
        return product.id;
    })
    if (!productIds.includes(req.body.product)) {
        res.status(400).send('Product does not exist in cart')
        return
    }     
    await cart.remove({ id: req.body.product }).write()
    res.json(cart)
})

module.exports = router
