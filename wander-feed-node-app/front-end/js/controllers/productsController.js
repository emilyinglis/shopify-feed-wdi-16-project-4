angular
  .module('shopify-feed')
  .controller('ProductsController', ProductsController);

ProductsController.$inject = ["Product", "$http"];

function ProductsController(Product, $http){
  
  var self = this;
  self.newProduct = {};
  self.products = Product.query();

  self.getProduct = function(){
    var id = self.newProduct.id;
    $http
    .get('https://wander-feed.myshopify.com/admin/products/' + id + '.json') //https://wander-feed.myshopify.com/admin/products/3697025351.json
    .then(function(res){
      var productData = res.data
      self.addProduct(productData);
    });
    self.newProduct = '';
  }

  self.addProduct = function(productData){
    var newProductObject = {
      title: productData['title'],
      description: productData['body_html'],
      product_type: productData['product_type'],
      vendor: productData['vendor'],
      updated_at: productData['updated_at'],
      images; productData['images'],                 
      variant: productData['variants'],   // ???                
      variant_inventory: productData['inventory_quantity'],
      variant_price: productData['price']     
    }
    self.products.push(newProductObject);
    var newProd = new Product(newProductObject);
    newProd.$save(function(){
      newProductObject = {};
    });
  }

  self.deleteProduct = function(product){
    Product.delete({id: product._id});
    var index = self.products.indexOf(product);
    self.products.splice(index, 1);
  }

  return self;

}
