window.codestrike = angular.module('CodeStrike', ['ui.router']);

codestrike.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url:'/',
    templateUrl: 'template/jumbotron.html',
    controller:'homeCtrl'
  })
  .state('about', {
    url:'/about',
    templateUrl:'template/about.html',
    controller:'aboutCtrl'
  })
  .state('calendar', {
    url:'/calendar',
    templateUrl:'template/calendar.html',
  });
});

codestrike.filter('greaterDate', function() {
  return function(list, base, lessThan) {
    filtered = [];
    if(lessThan === false) {
      for (var j = list.length - 1; j >= 0; j--) {
        if (list[j].date < base) {
          filtered.push(list[j]);
        }
      }
    }
    else {
      for (var i = list.length - 1; i >= 0; i--) {
        if (list[i].date > base) {
          filtered.push(list[i]);
        }
      }
    }
    return filtered;
  };
});

codestrike.controller('homeCtrl', ['$scope', '$filter', function($scope, $filter) {
  $scope.today = (new Date()).getTime();
  $scope.events = [
  {
    'title':'Competitive Programming Seminar',
    'date':(new Date(2014, 3, 1)).getTime()
  }, {
    'title':'Python Workshop',
    'date':(new Date(2014, 7, 25)).getTime()
  }, {
    'title':'Crash Course on C Programming',
    'date':(new Date(2014, 8, 24)).getTime()
  }, {
    'title':'Coding Competition',
    'date':(new Date(2014, 8, 23)).getTime()
  }];
}]);

codestrike.controller('aboutCtrl', ['$scope', function($scope) {
  $scope.members = [
  {
    'name':'Ashish Gaikwad',
    'post':'Founder and President',
    'class':'TE CMPN 2',
    'info':'Ashish likes to analyze world around and make predictions. Along with daily programming, he is also interested in Psychology, Micro Economics, Philosophy and Cosmology.'
  },{
    'name':'Parikshit Hegde',
    'post':'Founder and Vice-President',
    'class':'BE CMPN 1',
    'info':'Parikshit (Pari) is competitive programming lover. Along with programming he also plays guitar everyday. According to him life is "Eat. Sleep. Code. Repeat".'
  }];
}]);

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