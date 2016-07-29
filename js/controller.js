angular
	.module('tooDrunkToAnswer')
	.controller('MainController', ['$scope', function($scope) {
		$scope.answers = answers;
		$scope.responseDiv = false;
		$scope.answer;
		$scope.generateResponse = function(answers) {
			var filtered = answers.filter(function(arrayItem) {
				return arrayItem.asker === $scope.form.asker && arrayItem.question === $scope.form.question
			});
			var random = filtered[Math.floor(Math.random() * filtered.length)].response;
			$scope.responseDiv = true;
			$scope.answer = random
		}
	}]);
