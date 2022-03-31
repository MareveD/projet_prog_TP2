/////////////////////////////// COPY PASTE DES EXOS MONGOOSE ///////////////////////////////

const mongoose = require ("mongoose");

//Schema
const productSchema = mongoose.Schema({
    code : String,
    description : String,
    prix : Number,
}
);

module.exports = mongoose.model("Product", productSchema);

///////////////////////////////////////////////////////////////////////////////////////////