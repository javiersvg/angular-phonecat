'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/add', {
        templateUrl: 'partials/phone-add.html',
        controller: 'PhoneAddCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/signup', {
        templateUrl: 'partials/sign-up.html',
        controller: 'SignUpCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/log-in.html',
        controller: 'LogInCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
