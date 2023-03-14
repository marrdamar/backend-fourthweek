const route = require("express").Router();
const database = require("..//configs/postgre")
const authProduct = require('../controllers/product')

route.get('/product', authProduct.product)
route.post('/addProduct', authProduct.addProduct)
route.post('/addPromo', authProduct.addPromo)
route.get('/promo/id=:id', authProduct.promo)
route.get('/historyProduct', authProduct.historyProduct)
route.delete('/deleteHistory/id=:id', authProduct.deleteHistory)


module.exports = route