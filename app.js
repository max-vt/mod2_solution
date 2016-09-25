(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  	$scope.check = function() { 
  		var menu = $scope.lunch_menu;
  		if (!menu) {
  			$scope.message = {text: "Please enter data first", color: "red"};
  		} else if (countItems(menu) <= 3) {
  			$scope.message = {text: "Enjoy!", color: "green"};
  		} else {
  			$scope.message = {text: "Too much!", color: "green"};
  		}
  	};
  	/* we are not consider empty items */
  	function countItems(menu) {
  		var list = menu.split(',');
  		var number = 0;
  		for (var i in list) {
  			if (list[i].trim() !== '') {
  				++number;
  			}
  		}
  		return number;
  	}
}


})();
