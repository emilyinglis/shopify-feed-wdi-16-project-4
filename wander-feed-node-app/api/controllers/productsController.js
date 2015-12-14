var Product = require("../models/product");

// ------------------------

function productsIndex(req, res){
  Product.find(function(err, products) {
    if (err) res.status(404).send(err);
    res.status(200).send(products);
  });
}

// ------------------------

function productsCreate(req, res){
  var product = new Product(req.body);
  product.save(function(err){
    if (err) res.status(500).send(error);
    res.status(201).send(product)
    });
  }

// ------------------------

function productsShow(req, res){
  var id = req.params.id;

  Product.findById({ _id: id }, function(err, product) { 
    if (err) res.status(404).send(err);
    res.status(200).send(product);
  });
}

// ------------------------

function productsDelete(req, res){
  var id = req.params.id;

  Product.remove({ _id: id }, function(err) {
    if (err) res.status(404).send(err);
    res.status(200);
  });
}

// ------------------------


module.exports = {
  productsIndex:  productsIndex,
  productsCreate: productsCreate,
  productsShow:   productsShow,
  productsDelete: productsDelete
}