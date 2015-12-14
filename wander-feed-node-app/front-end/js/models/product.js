angular
  .module('shopify-feed')
  .factory('Product', Product);

Product.$inject = ['$resource']

function Product($resource){

  var ProductResource = $resource('http://localhost:3000/products/:id',
    {id: '@_id'},
    {'update': { method:'PUT' }}
    );
  
  return ProductResource;
}


// --------------------------------
//MOVE API
// angular
//   .module("OMDbApp")
//   .factory("Movie", Movie);
// Movie.$inject = ['$resource']
// function Movie($resource){
//   var MovieResource = $resource('http://localhost:3000/movies/:id',
//   {id: '@_id'},
//   {'update': { method:'PUT' }}
//   );
//   return MovieResource;
// }


// --------------------------------
// Old products code:
// return $resource(
//   API+'/products/:id', {id: '@id'},
//   { 'get':       { method: 'GET' },
//     'save':      { method: 'POST' },
//     'query':     { method: 'GET', isArray: true},
//     'remove':    { method: 'DELETE' },
//     'delete':    { method: 'DELETE' },
//   }
// );