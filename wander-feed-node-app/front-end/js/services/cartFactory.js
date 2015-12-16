// Original CART code

angular
  .module("shopify-feed")
  .factory("cart", Cart);

function Cart(){
  var items = {};

  items.list = [];

  items.add = function(product){
    items.list = JSON.parse(localStorage.getItem('items')) || [];
    items.list.push(product)
    localStorage.setItem('items', JSON.stringify(items.list))
    // var retrievedObject = localStorage.getItem('items');
  };

  items.get = function(){
    return items.list;
  }

  return items;
}


