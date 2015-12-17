angular
.module('shopify-feed')
.controller('ProductsController', ProductsController);

ProductsController.$inject = ["Product", "$http", '$stateParams', '$state', 'cart'];

// DataService
function ProductsController(Product, $http, $stateParams, $state, cart){

  console.log("$stateParams ", $stateParams);
  console.log($state)



  var self              = this;
  self.all              = [];
  self.selectedProduct  = {};
  self.getProducts      = getProducts;
  self.loadImage        = loadImage;
  self.addToBag         = addToBag;
  var retrievedObject   = localStorage.getItem('items');
  // items.list.push({title: JSON.parse(retrievedObject).shopify.title, image: JSON.parse(retrievedObject).shopify.image});
  self.shoppingCart     = JSON.parse(retrievedObject)
  self.getTotal = getTotal;

  console.log(self.shoppingCart)



function getShoppingCart(){

}

// ADD TO BAG 

// function addToBag(product, variant){
//   console.log("Add to bag clicked")
//   cart.add(product, variant);
//   $state.go("cart");
// }

function addToBag(variant){
  console.log("Add to bag clicked")
  self.selectedProduct.variant = variant
  cart.add(self.selectedProduct);
  $state.go("cart");
}


function getTotal(){
    var total = 0;
    for(var i = 0; i < self.shoppingCart.length; i++){
        var product = self.shoppingCart[i];
        total += (product.shopify.variants[product.variant].price * 1);
    }
    return total;
}


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


