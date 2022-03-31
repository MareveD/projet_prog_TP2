/////////////////////////////// COPY PASTE DES EXOS MONGOOSE ///////////////////////////////

const express = require("express");
const router = express.Router();

const Product = require("../model/product");
const homeController = require("./homeController")

router.get("/product/new", homeController.getIndex);
/* router.get("/index", homeController.getRedirect); */
/* router.get("/new", homeController.getNew); */

router.post("/product/new", homeController.saveProduct);
router.get("/", homeController.allProducts);


module.exports = router;

///////////////////////////////////////////////////////////////////////////////////////////