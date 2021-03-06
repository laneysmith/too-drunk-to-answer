angular
	.module('tooDrunkToAnswer')
	.service('drunkAnswers', ['$http', function($http) {
		this.getAskers = function() {
			var promise = $http.get('https://too-drunk-to-answer-server.herokuapp.com/api/askers').success(function(data, status, headers, config) {
				var askers = data.data;
				return askers;
			});
			return promise;
		};
		this.getQuestions = function(askerId) {
			var promise = $http.get('https://too-drunk-to-answer-server.herokuapp.com/api/askers/' + askerId).success(function(data, status, headers, config) {
				var questions = data;
				return questions;
			});
			return promise;
		};
		this.getAnswer = function(askerId, questionId) {
			var promise = $http.get('https://too-drunk-to-answer-server.herokuapp.com/api/askers/' + askerId + '/questions/' + questionId).success(function(data, status, headers, config) {
				var answers = data;
				return answers;
			});
			return promise;
		};
	}])
