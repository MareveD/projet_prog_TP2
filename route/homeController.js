/////////////////////////////// COPY PASTE DES EXOS MONGOOSE ///////////////////////////////

const Product = require("../model/product");

exports.getIndex = (req, res) => {
    res.render("new");
}

/* exports.getIndex = (req, res) => {
    res.render("index");
}
exports.getRedirect = (req, rep) => {
    rep.redirect("/");
} */
/* exports.getNew = (req, res) => {
    res.render("new");
} */
exports.saveProduct = (req, res) => {
    console.log(req.body)
        code = req.body.code,
        description = req.body.description,
        prix = req.body.prix
    const newProduct = new Product({
        code: code,
        description: description,
        prix: prix
    });
    newProduct.save()
        .then(result => {
            req.flash("success_msg", "User account is added to my db");
            res.redirect("index")       
            res.render("new")
        })
        .catch(error => {
            req.flash ("error_msg", "Failed to add user to my db")
            console.log(error)
        });
}


exports.allProducts = (req, res) => {
    Product.find({}).then(product=> {
        res.render("index", {
            products : product
        });
    }).catch(error => {
        console.log(error);
    });
}
///////////////////////////////////////////////////////////////////////////////////////////