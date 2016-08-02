angular
	.module('tooDrunkToAnswer')
	.controller('MainController', ['$scope', 'drunkAnswers', function($scope, drunkAnswers) {
		$scope.questionDiv = false;
		$scope.submitDiv = false;
		$scope.answerDiv = false;
		// initializes list of askers by pulling full list from API
		init();
		function init() {
			return drunkAnswers.getAskers().then(function(data) {
				$scope.askers = data.data.data;
			});
		}
		// pulls list of questions from API by asker selected
		$scope.getQuestionsFromApi = function(askerId) {
			$scope.questionDiv = true;
			$scope.submitDiv = false;
			$scope.answerDiv = false;
			return drunkAnswers.getQuestions(askerId).then(function(data) {
				$scope.questions = data.data.data;
			});
		}
		// pulls list of responses from API to the asker/question combination
		$scope.generateResponse = function(askerId, questionId) {
			$scope.answerDiv = true;
			return drunkAnswers.getAnswer(askerId, questionId).then(function(data) {
				return data.data.data;
			}).then(function(answers) {
				$scope.answer = answers[Math.floor(Math.random() * answers.length)].response;
			});
		}
	}]);
