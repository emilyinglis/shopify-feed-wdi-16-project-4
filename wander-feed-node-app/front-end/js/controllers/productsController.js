angular
  .module('shopify-feed')
  .controller('ProductsController', ProductsController);

ProductsController.$inject = ["Product", "$http"];

function ProductsController(Product, $http){
  
  var self = this;
  self.all = [];
  self.selectedProduct = {};
  self.getProducts = getProducts;
  self.selectProduct = selectProduct;
  self.selectedItem = {};

  // INDEX / all products

  function getProducts(){
    Product.query(function(data){
      return self.all = data;
    });
  }

  //---> SHOW the selected product

  function selectProduct(product) {
    self.selectedProduct = product;
    console.log("SELECTED PRODUCT TITLE " + self.selectedProduct.shopify.title);
  };

  // function showProduct(id, from) {
  //     self.product = Products.get({ id: product._id }, function(){
  //         console.log($scope.product);
  //     });
  // }

  self.getProducts();

  return self;
}
