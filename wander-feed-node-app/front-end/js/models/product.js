angular
  .module('shopify-feed')
  .factory('Product', Product);

Product.$inject = ['$resource']

function Product($resource){

  var ProductResource = $resource('http://localhost:3000/products/:id',
    {id: '@_id'},
    { 'update': { method:'PUT' },
      'get':    { method: 'GET' },
      'updateShopify': {
        url:'https://804c38c7e20539c1d5c856675950afae:50e1fc6bd3d62890b1522441599bd42f@wander-feed.myshopify.com/admin/variants/:id.json',
        method: "PUT"
      }
    }
  );
  
  return ProductResource;
}