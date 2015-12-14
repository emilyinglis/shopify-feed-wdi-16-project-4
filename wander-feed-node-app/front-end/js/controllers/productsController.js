angular
  .module('shopify-feed')
  .controller('ProductsController', ProductsController);

ProductsController.$inject = ["Product", "$http"];

function ProductsController(Product, $http){
  
  var self = this;
  self.all = [];

  self.getProducts = getProducts;

  // INDEX
  function getProducts(){
    Product.query(function(data){
      return self.all = data;
    });
  }

  // SHOW

  self.getProducts();

  return self;
}
