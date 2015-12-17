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
  var retrievedObject   = localStorage.getItem('items');
  self.shoppingCart     = JSON.parse(retrievedObject)
  self.getTotal = getTotal;
  self.updateShopifyInventory = updateShopifyInventory

  console.log(self.shoppingCart)



function getShoppingCart(){

}

function updateShopifyInventory(){
  console.log("Hello")
  console.log(self.shoppingCart)
  for (var i = 0; i < self.shoppingCart.length; i++) {
    var variantId = self.shoppingCart[i].shopify.variants[self.shoppingCart[i].variant].id
    var oldInventoryQuantity = self.shoppingCart[i].shopify.variants[self.shoppingCart[i].variant].old_inventory_quantity
    var newData = {
      "variant": {
          "id": variantId,
          "inventory_quantity": oldInventoryQuantity-1,
          "old_inventory_quantity": oldInventoryQuantity
        }
    }
    Product.updateShopify({id:variantId}, newData, function(data){
      console.log(data);
    } ) 
  };
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


