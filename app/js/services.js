'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phone');
  }]);

phonecatServices.factory('User', ['$resource',
  function($resource){
    return $resource('user',{}, {
      login: {
          method: 'POST',
          url: 'login',
          headers: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},
          transformRequest: function(data){
            return $.param({username: data.email, password: data.password});
          }
      }
    });
  }]);
