/////////////////////////////// COPY PASTE DES EXOS MONGOOSE ///////////////////////////////

const mongoose = require ("mongoose");

//Schema
const userSchema = mongoose.Schema({
    code : String,
    description : String,
    price : Number,
}
);

module.exports = mongoose.model("User", userSchema);