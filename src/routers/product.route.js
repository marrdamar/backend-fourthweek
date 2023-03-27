const { Router } = require("express");

const productsController = require("../controllers/product.controller");
const { checkToken } = require("../middleware/auth");
// const { checkRole } = require("../middleware/checkRole");
// const memoryUpload = require("../middleware/memoryUpload");

const productsRouter = Router();

productsRouter.get("/", productsController.getProducts);
// productsRouter.get("/:productId", productsController.getProductDetail);
// productsRouter.post("/", checkRole, checkToken, memoryUpload.single("img"), productsController.insertProducts);
// productsRouter.patch("/:productId", checkRole, checkToken, memoryUpload.single("img"), productsController.updateProduct);
// productsRouter.delete("/:productId", checkRole, checkToken, productsController.deleteProduct);

module.exports = productsRouter;
