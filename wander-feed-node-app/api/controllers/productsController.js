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
  }).select('-__v');
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


// function productsUpdate(req, res){
//   var id = req.params.id;

//   Project.findByIdAndUpdate({ _id: id }, req.body.inventory_quantity_adjustment, function(err, inventory_quantity_adjustment){
//     if (err) return res.status(500).send(err);
//     if (!inventory_quantity_adjustment) return res.status(404).send(err);

//     res.status(200).send(inventory_quantity_adjustment);
//   })
// }




module.exports = {
  productsIndex:  productsIndex,
  productsCreate: productsCreate,
  productsShow:   productsShow,
  productsDelete: productsDelete
}