angular
  .module('shopify-feed')
  .factory('Product', Product)

Product.$inject = ['$resource', 'API']
function Product($resource, API){

  return $resource(
    API+'/products/:id', {id: '@id'},
    { 'get':       { method: 'GET' },
      'save':      { method: 'POST' },
      'query':     { method: 'GET', isArray: true},
      'remove':    { method: 'DELETE' },
      'delete':    { method: 'DELETE' },
    }
  );
}