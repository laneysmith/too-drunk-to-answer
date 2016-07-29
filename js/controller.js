angular
	.module('tooDrunkToAnswer')
	.controller('MainController', ['$scope', function($scope) {
		$scope.answers = answers;
    $scope.responseDiv = false;
    $scope.generateResponse = function() {
      console.log('clicked');
      $scope.responseDiv = true;
    }
  }]);
