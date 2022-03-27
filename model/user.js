/////////////////////////////// COPY PASTE DES EXOS MONGOOSE ///////////////////////////////

const mongoose = require ("mongoose");

//Schema
const userSchema = mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    place : String
}
);

module.exports = mongoose.model("User", userSchema);