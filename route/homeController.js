/////////////////////////////// COPY PASTE DES EXOS MONGOOSE ///////////////////////////////

const User = require("../model/user");

exports.getIndex = (req, res) => {
    res.render("index");
}