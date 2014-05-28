'use strict';

/* Controllers */

var ascControllers = angular.module('ascControllers', []);
 
ascControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/staff.json').success(function(data) {
    $scope.staff = data;
	$scope.ascOrder = 'name';
	$scope.query = {};
	$scope.queryOrder = '$';
  });
}]);

ascControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/staff.json').success(function(data) {
    $scope.staff = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.staff.length-1;
    }

    if ($routeParams.itemId < $scope.staff.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);