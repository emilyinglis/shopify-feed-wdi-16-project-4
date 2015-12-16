angular
  .module('shopify-feed')
  .controller('ProductsController', ProductsController);

ProductsController.$inject = ["Product", "$http", '$stateParams', '$state', 'cart'];

function ProductsController(Product, $http, $stateParams, $state, cart){

  console.log("$stateParams ", $stateParams);
  console.log($state)

  var self              = this;
  self.all              = [];
  self.selectedProduct  = {};
  self.getProducts      = getProducts;
  self.loadImage        = loadImage;
  self.addToBag         = addToBag;
  self.shoppingCart     = cart.list;


// ________________________________________________________________________________________  


// ADD TO BAG 

  function addToBag(product, variant){
    console.log("Add to bag clicked")
    cart.add(product, variant);
    $state.go("cart");
  }
 
  // 15/12/15 - console logging and adding into the array the size variant title


// ________________________________________________________________________________________  

// ---> SHOW

  if ($stateParams.id) getProduct();

   function getProduct(){
         Product.get({ id: $stateParams.id }, function(data){
           self.selectedProduct = data;
         })
       }



// ________________________________________________________________________________________  


// ---> INDEX

  function getProducts(){
    Product.query(function(data){
      return self.all = data;
    });
  }


// ________________________________________________________________________________________  

 
// ---> IMG THUMBNAIL CLICK EVENT (NOT WORKING)

  function loadImage(){
    console.log("Image clicked one")
    // self.img.path = self.image.src;
    // console.log("Image clicked two");
  }

  // $scope.loadimage = function(material) {
  //   $scope.image.path = $scope.material.preview;
  // }


// ________________________________________________________________________________________  


  self.getProducts();

  return self;
}
