angular.module('wpApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "main.html",
      controller : "photosCtrl",
      controllerAs : 'vm'
    })
    .when("/login", {
      templateUrl : "login.html",
    })
    .when("/contacts", {
      templateUrl : "contacts.html"
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);