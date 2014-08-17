window.codestrike = angular.module('CodeStrike', []);

codestrike.controller('formCtrl', ['$scope', function($scope) {
  $scope.isFormSubmitted = false;
  $scope.submit = function() {
    if ($scope.form.$valid) {
      $scope.isFormSubmitted = true;
    } else {
      $scope.isFormSubmitted = false;
    }
  };
}]);