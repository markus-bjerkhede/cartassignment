const express = require('express')
const router = express.Router()
const db = require('../dbConnector')

router.get('/', async (req, res) => {
    // get products from database
    // return array of products to client as JSON
    let data = await db.get('products');
    res.send(data)

})

router.get('/:id', async (req, res) => {    
    const productId = parseInt(req.params.id)
    const product = db.get('products').find({ id: productId }).value() 
    if (product === undefined) {
        res.status(400).send('Product does not exist')
    }
    else {
        res.json(product)
    } 
})

module.exports = router
