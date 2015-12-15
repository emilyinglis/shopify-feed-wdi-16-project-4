angular
  .module('shopify-feed')
  .controller('ProductsController', ProductsController);

ProductsController.$inject = ["Product", "$http", '$stateParams'];

function ProductsController(Product, $http, $stateParams){
  
  console.log($stateParams);

  var self = this;
  self.all = [];
  self.selectedProduct = {};
  self.getProducts = getProducts;
  // self.selectProduct = selectProduct;
  // self.selectedItem = {};


  if ($stateParams.id) getProduct();

   function getProduct(){
         Product.get({ id: $stateParams.id }, function(data){
           self.selectedProduct = data;
         })
       }


  // INDEX / all products

  function getProducts(){
    Product.query(function(data){
      return self.all = data;
    });
  }

  //---> SHOW the selected product

  // function selectProduct(product) {
  //   self.selectedProduct = product;
  //   console.log(product)
  //   console.log("SELECTED PRODUCT TITLE " + self.selectedProduct.shopify.title);
  // };


  self.getProducts();

  return self;
}
