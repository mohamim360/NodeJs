const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products",shopController.addProducts);

router.get("/products/:productId",shopController.getProduct);


router.get("/cart",shopController.getCart);

router.get("/orders",shopController.getOrders);

router.get("/checkout",shopController.getCheckout);

module.exports = router;
