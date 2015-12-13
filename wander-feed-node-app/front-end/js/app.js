angular
  .module('shopify-feed', ['ngResource', 'ui.router'])
  // Is this the best format for the API we're using?
  .constant('API', 'http://localhost:3000/api')  
  .config(MainRouter)
  // Don't believe this is required:
  // .config(function($httpProvider){
  //   $httpProvider.interceptors.push('authInterceptor')
  // })


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
        templateUrl: "show.html"
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