angular
  .module('shopify-feed')
  .controller('ProductsController', ProductsController);

ProductsController.$inject = ["Product"]

function ProductsController(Product){
  
  var self = this;

  self.all     = [];
  self.product = {}; 

  self.getProducts = function(){
    Product.query(function(data){
      return self.all = data;
    })
  }

  self.getProducts();

}


// Unrequired
// self.add = function(){
//   var product = { product: self.product }
//   Product.save(product, function(data){
//     self.all.push(data);
//     self.product = {};
//   })
// }
