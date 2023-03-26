const route = require("express").Router();
const database = require("..//configs/postgre");
const authProduct = require('../controllers/product');
const { Router } = require("express");
const productsRouter = Router();

productsRouter.get('/product', authProduct.product)
productsRouter.post('/addProduct', authProduct.addProduct)
productsRouter.post('/addPromo', authProduct.addPromo)
productsRouter.get('/promo/id=:id', authProduct.promo)
productsRouter.get('/historyProduct', authProduct.historyProduct)
productsRouter.delete('/deleteHistory/id=:id', authProduct.deleteHistory)


module.exports = productsRouter