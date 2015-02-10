'use strict';

/* App Module */
var yourAppName = angular.module('yourAppName', [
    'ngRoute',
    'yourAppDep'
]);

angular.module('yourAppDep', []);

angular.module('yourAppName').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/home', {
          templateUrl: 'views/main.html',
          controller: 'MyCtrl'
        }).
        otherwise({
          redirectTo: '/home'
        });
  }]);