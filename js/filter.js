var myModule = angular.module('myApp', []);

myModule.controller("stringController",function ($scope){
		$scope.inputString = "Hello";
	}
);
myModule.filter('tokenize', function(){
	return function(value, param1){
		//Check if the text and the delimiter are string and not empty
		if(angular.isString(value) && (angular.isString(param1)) && param1!=""){
			var str = value.split("");
			return str.toString().replace(/\,/g,param1);
		}
		//If any of the conditions above is not satisfied, then use comma to split the string
		else {
			return value.split("").toString();
		}			
	}
});