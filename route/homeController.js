//------------------------------------------------------------------------------------------------------------------------//

const Product = require("../model/product");

exports.getIndex = (req, res) => {
    res.render("new");
}

exports.getSearch = (req, res) => {
    res.render("search");
}

exports.getIndexSlash = (req, res) => {
    res.render("/");
}

exports.redirectIndex = (req, res) => {
    res.redirect("/");
}

//------------------------------------------------------------------------------------------------------------------------//

//Affiche tous les produits dans l'index//

exports.allProducts = (req, res) => {
    Product.find({}).then(product => {
        res.render("index", {
            products: product
        });
    }).catch(error => {
        console.log(error);
    });
}

//------------------------------------------------------------------------------------------------------------------------//

//Save Products dans la liste dans l'index//

exports.saveProduct = (req, res) => {
    console.log(req.body);
    code = req.body.code;
    description = req.body.description;
    prix = req.body.prix;

    const newProduct = new Product({
        code: code,
        description: description,
        prix: prix
    });
    newProduct.save()
        .then(response => {
            req.flash("success_msg", "Product is added to the database !");
            res.redirect("/")
        })
        .catch(error => {
            req.flash("error_msg", "Failed to add your product to the database. Please try again !")
            console.log(error)
        });
}

//------------------------------------------------------------------------------------------------------------------------//

//Filtre pour un item//

exports.FindOneProduct = (req, res) => {

    let searchQuery = {_id : req.params.id};
    Product.findById(searchQuery)
    .then(product => {
        res.send(product);
    })
    .catch(error =>{
        res.redirect("/")
    });
}

//------------------------------------------------------------------------------------------------------------------------//

//Edit and Update un produit//

exports.editProduct = (req, res) => {
    const searchById = {
        _id: req.params.id
    };
    Product.findById(searchById).then(product => {
        res.render("edit", {
            product: product
        })
    }).catch();
}

exports.update = (req, rep) => {
    const searchQuery = {
        _id: req.params.id
    };
    Product.updateOne(searchQuery, {
            $set: {
                code: req.body.code,
                description: req.body.description,
                prix: req.body.prix
            }
        }).then((product) => {
            req.flash("success_msg", "Product is updated from the database !");
            rep.redirect("/");
        })
        .catch(error => {
            req.flash("error_msg", "Failed to update your product from the database. Please try again !")
            rep.redirect("/");
        });
}

//------------------------------------------------------------------------------------------------------------------------//

//Delete un produit//

exports.delete = (req, rep) => {
    const searchQuery = {
        _id: req.params.id
    };
    Product.deleteOne(searchQuery).then(() => {
        req.flash("success_msg", "Product is deleted from the database !");
        rep.redirect("/");
    }).catch(error => {
        req.flash("error_msg", "Failed to delete your product to the database. Please try again !")
        rep.redirect("/");
    });
}

//------------------------------------------------------------------------------------------------------------------------//