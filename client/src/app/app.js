angular.module('app', ['ngRoute']);

angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo:'/projectsinfo'});
}]);

angular.module('app').run([function() {
    console.log('I was called');
}]);

angular.module('app').controller('AppCtrl', [function($scope) {
}]);