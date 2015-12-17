angular
  .module('shopify-feed', ['ngResource', 'ui.router'])
  .config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: "/",
      templateUrl: "home.html"
    })
    .state('products', {
      url: "/products",
      templateUrl: "products.html",
      controller: "ProductsController as products"
    })
    // PRODUCT CATEGORIES
    .state('tops', {
      url: "/products/category/tops",
      templateUrl: "product_tops.html"
    })
    .state('bottoms', {
      url: "/products/category/bottoms",
      templateUrl: "product_bottoms.html"
    })
    .state('dresses', {
      url: "/products/category/dresses",
      templateUrl: "product_dresses.html"
    })
    .state('accessories', {
      url: "/products/category/accessories",
      templateUrl: "product_accessories.html"
    })
    .state('loungewear', {
      url: "/products/category/loungewear",
      templateUrl: "product_loungewear.html"
    })
    .state('coatsjackets', {
      url: "/products/category/coats-jackets",
      templateUrl: "product_coats_jackets.html"
    })
    // CATEGORIES ENDS
    .state('show', {
      url: "/products/:id",
      templateUrl: "show.html",
      controller: "ProductsController as products"
    })
    .state('about', {
      url: "/about",
      templateUrl: "about.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "contact.html"
    })
    .state('cart', {
      url: "/cart/add",
      templateUrl: "cart.html",
      controller: "ProductsController as products"
    })

  $urlRouterProvider.otherwise("/");
}


