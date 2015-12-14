angular
  .module('shopify-feed')
  .controller('ProductsController', ProductsController);

ProductsController.$inject = ["Product", "$http"];

function ProductsController(Product, $http){
  
  var self = this;
  self.all = [];
  self.product = {};

  self.getProducts = getProducts;

  // INDEX
  function getProducts(){
    Product.query(function(data){
      return self.all = data;
    });
  }

  // SHOW
  // function showProduct(){
  //   Product
  // }

  // Fetch the clicked todo
  this.selectProduct = function(product) {
    self.selectedProduct = Product.get({ id: product._id });
  };


  self.getProducts();

  return self;
}
