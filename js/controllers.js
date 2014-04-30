'use strict';

/* Controllers */

var ascControllers = angular.module('ascControllers', []);
 
ascControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/staff.json').success(function(data) {
    $scope.staff = data;
	$scope.ascOrder = 'name';
  });
}]);
