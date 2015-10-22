'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

phonecatControllers.controller('SignUpCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.user = new User();
    
    $scope.signup = function() {
      $scope.user.$save();
    };
  }]);

phonecatControllers.controller('LogInCtrl', ['$scope', 'User', '$location',
  function($scope, User, $location) {
    $scope.user = new User();
    
    $scope.login = function() {
      $scope.user.$login($scope.user,
      function(){
        $location.path("/");
      },
      function(){
        $location.path("/login");
      });
    };
  }]);

phonecatControllers.controller('PhoneAddCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    var phones = [];
    $scope.loadPhones = function() {
      var files = document.getElementById('files').files;
      var reader = new FileReader();
      for (var i = 0; i < files.length; i++) {
        reader.readAsText(files[i], "UTF-8");
      }
      reader.onload = loaded;
    };
    
    $scope.selectFiles = function(){
      document.getElementById('files').click();
    };

    function loaded(evt) {
      var obj = JSON.parse(evt.target.result);
      if (obj instanceof Array) {
        obj.forEach(function(item){
          var phone = new Phone(item);
          phone.$save();
        });
      } else {
        var phone = new Phone(obj);
          phone.$save();
      }
    }
  }]);