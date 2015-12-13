var Product = require("../models/product");

// All functions adapted using Project 3 API setup

// ------------------------

function productsIndex(req, res){
  Product.find(function(err, products) {
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({ products: products });
  });
}

// Original:
//   Product.find({}, function(err, products) {
//     if (err) return res.status(404).send(err);
//     res.status(200).send(products);


// ------------------------

// ATTENTION: No proj 3 API reference for this so get checked

function productsShow(req, res){
  var id = req.params.id;

  Product.findById({ id: id }, function(err, project) { //originally _id: but in Shopify json is id
    if (err) return res.status(500).json({message: "Error loading product."})
    if (!product) return res.status(404).json({message: 'Something went wrong.'}); 

    res.status(200).json({ product: product });
  })
}


// ------------------------


function productsDelete(req, res){
  var id = req.params.id;

  Project.remove({ _id: id }, function(err) {
    if (err) return res.status(500).send(err);
    res.status(200).send('done');
  })
}
//proj 3
// function deleteEvent(req, res) {
//   var id = req.params.id;

//   Event.remove({ _id: id}, function(err){
//     if (err) return res.status(404).json({ message: 'Something went wrong'});
//     res.status(200).json({ event: event});
//   });
// };

// ------------------------


module.exports = {
  productsIndex:  productsIndex,
  productsShow:   productsShow,
  productsDelete: productsDelete
}