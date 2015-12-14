angular
  .module('shopify-feed')
  .factory('Product', Product);

Product.$inject = ['$resource']

function Product($resource){

  var ProductResource = $resource('http://localhost:3000/products/:id',
    {id: '@_id'},
    { 'update': { method:'PUT' },
      'get':    { method: 'GET' }
    }
  );
  
  return ProductResource;
}