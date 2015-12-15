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
  self.loadImage = loadImage;


// ADD PRODUCT TO BAG


  self.shoppingCart = [];
  self.total = 0;
  self.addToBag = addToBag;


  function addToBag(title, variant, price, vendor, newItem){

    console.log("addToBag function entered")
         
         title = parseInt(title);
         variant = parseInt(variant);
         price = parseInt(price);
         vendor = parseInt(vendor);

          self.shoppingCart.push(newItem);

          console.log(self.shoppingCart);

         };



// ---> SHOW

  if ($stateParams.id) getProduct();

   function getProduct(){
         Product.get({ id: $stateParams.id }, function(data){
           self.selectedProduct = data;
         })
       }


// ---> INDEX

  function getProducts(){
    Product.query(function(data){
      return self.all = data;
    });
  }

 
// ---> IMG THUMBNAIL CLICK EVENT (NOT WORKING)

  function loadImage(){
    console.log("Image clicked one")
    // self.img.path = self.image.src;
    // console.log("Image clicked two");
  }

  // $scope.loadimage = function(material) {
  //   $scope.image.path = $scope.material.preview;
  // }



  self.getProducts();

  return self;
}
