var deviseApp = angular.module('deviseApp', ['ui.router', 'restangular']);

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

