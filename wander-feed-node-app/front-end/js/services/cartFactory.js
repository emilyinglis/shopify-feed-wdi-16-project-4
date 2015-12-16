angular
  .module("shopify-feed")
  .factory("cart", Cart);

function Cart(){
  var items = {};

  items.list = [];

  items.add = function(product, variant){
    console.log(product, variant)
    items.list.push({id: product._id, product: product, variant: variant });
  };

  return items;
}


