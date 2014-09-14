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
  $scope.immortals = [
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
    
  },{
    'name':'Amit Menon',
    'post':'Awareness Head',
    'class':'T.E CMPN 1',
    'info':'Amit is an avid reader basically devours books. Extremely curious about working of things, and computers fascinated him since he was a kid. Also loves football,arts and music'
  },{
    'name':'Akshen Doke',
    'post':'Technical Head',
    'class':'T.E CMPN 2',
    'info':'A versatile person who wants to do many things in lfe. Likes to question how and why.Wants to leave a mark on the world with his thoughts and ideas.'
  },{
    'name':'Vishmita Shetty',
    'post':'C.E.O',
    'class':'TE CMPN 2'
  }];
}]);

codestrike.controller('aboutCtrl', ['$scope', function($sec) {
  $sec.members = [
  {
    'name':'Ankit Champaneri',
    'info':'Ankit is complety new to programming. Likes to play cricket and is a die hard follower. Keen to learn coding.'
  },{
    'name':'Pratik Gupta',
    'info':'Pratik has a hobby to play videogames like Assassins Creed series hence found his way to Programming. Before code strike he has learned VB.Net, ASP.Net, JavaScript and also some introduction to C++'
  },{
    'name':'Shaishav Oza',
    'info':'I am not exactly new to this programming genre, basic knowledge is known to me... Passionate, skillful, manager, fun loving, fun making are few out of the many qualities that define me. Android geek, Android enthusiast, not a follower, Atheist for life...'
  },{
    'name':'Atharva Joglekar',
    'info':'New to programming.....loves to play cricket,football!Helpful,skillful manager,loves playing fifa, a good public speaker and man manager!'
  },{
    'name':'Tejas Nanaware',
    'info':'I have good programming skills and I learnt basics in my 9th grade i.e. when I came to know basics of Java. Apart from that, I also know C++, Visual Basic, Instruction Set of 8085 and also DOS'
  },{
    'name':'Ravi Chandak',
    'info':'not completely new to programming knows c++ and basics of HTML always curious to know how the things work and this curiosity is the reason for my die hard interest in programming '
  },{
    'name':'Ashraf Khan',
    'info':'shraf is New to programming, a cricket , football player, starting to build up basics of C language. Hard working, passionate about gadgets and OS.curious to learn new and challenging things. Main focus is to build up a strong base in C++ in the next 6 months.'
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