deviseApp.controller("UserCtrl",

  ['$scope', 'Auth',

  function($scope, Auth) {

    Auth.currentUser()
      .then(function(user) {
        $scope.currentUser = user;
        console.log(user);
      }, function(response) {
        console.log(response);
      });

  }

])
