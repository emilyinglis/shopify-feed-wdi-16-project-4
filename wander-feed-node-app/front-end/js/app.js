angular
  .module('logging', ['ngResource', 'angular-jwt', 'ui.router', 'satellizer'])
  .constant('API', 'https://804c38c7e20539c1d5c856675950afae:50e1fc6bd3d62890b1522441599bd42f@wander-feed.myshopify.com/admin/products.json')
  .config(MainRouter)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor')
  })
  .config(function($authProvider) {
    $authProvider.facebook({ clientId: '1535877196647406'})
  });

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home.html"
      })
      .state('login', {
        url: "/login",
        templateUrl: "login.html"
      })
      .state('register', {
        url: "/register",
        templateUrl: "register.html"
      })
      .state('profile', {
        url: "/profile",
        templateUrl: "profile.html"
      })
      .state('users', {
        url: "/users",
        templateUrl: "users.html"
      })
      .state('projects', {
        url: "/projects",
        templateUrl: "projects.html",
        controller: "ProjectsController as projects"
      })

    $urlRouterProvider.otherwise("/");
  }