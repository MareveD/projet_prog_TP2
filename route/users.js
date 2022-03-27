/////////////////////////////// COPY PASTE DES EXOS MONGOOSE ///////////////////////////////

const express = require("express");
const router = express.Router();

const User = require("../model/user");
const homeController = require("./homeController")

router.get("/", homeController.getIndex);

module.exports = router;

///////////////////////////////////////////////////////////////////////////////////////////