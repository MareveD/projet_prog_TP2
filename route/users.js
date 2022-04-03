const express = require("express");
const router = express.Router();

const Product = require("../model/product");
const homeController = require("./homeController")

router.get("/product/new", homeController.getIndex);
router.post("/product/new", homeController.saveProduct);

router.get("/search", homeController.getSearch);

router.get("/:id", homeController.FindOneProduct);
router.get("/", homeController.allProducts);
router.get("/", homeController.getIndexSlash);
router.get("/index", homeController.redirectIndex);

router.get("/edit/:id", homeController.editProduct);

router.put("/edit/:id", homeController.update);

router.delete("/delete/:id", homeController.delete);

module.exports = router;