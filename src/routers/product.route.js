const authProduct = require('../controllers/product.controller');
const { Router } = require("express");
const productsRouter = Router();

productsRouter.get('/', authProduct.product)
productsRouter.post('/addProduct', authProduct.addProduct)
productsRouter.post('/addPromo', authProduct.addPromo)
productsRouter.get('/promo/id=:id', authProduct.promo)
productsRouter.get('/historyProduct', authProduct.historyProduct)
productsRouter.delete('/deleteHistory/id=:id', authProduct.deleteHistory)


module.exports = productsRouter