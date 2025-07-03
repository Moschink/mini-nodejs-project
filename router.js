const express = require("express");
const router = express.Router();
const shopController = require("./controller/shopController");

router.get("/", shopController.getAllProduct);
router.post("/shop", shopController.addNewProduct);
router.get("/single/:id", shopController.viewSingleProduct);
router.patch("/:id", shopController.updateProductStatus);
router.delete("/:id", shopController.deleteProduct);

module.exports = router;