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
    .state('show', {
      url: "/products/:id",
      templateUrl: "show.html",
      controller: "ProductsController as products"
    })
    .state('homewares', {
      url: "/homewares",
      templateUrl: "homewares.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "about.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "contact.html"
    })

  $urlRouterProvider.otherwise("/");
}