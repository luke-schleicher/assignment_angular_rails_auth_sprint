var deviseApp = angular.module('deviseApp', ['ui.router', 'restangular', 'Devise']);

deviseApp.factory('_', ['$window', function($window) {
  return $window._;
}]);

deviseApp.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);

deviseApp.config(

  ['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/test')

    $stateProvider
    .state('test', {
      url: '/test',
      templateUrl: '/templates/test.html',
      controller: 'UserCtrl'
    })

  }

])
