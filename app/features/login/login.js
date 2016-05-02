'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('LoginCtrl', function ($log, $location, Users) {
    var ctrl = this;
    $log.info('LoginCtrl');
    ctrl.user = {email:'gotahiroki@gmail.com'};

    ctrl.login = function(user) {
      Users.login(user).then(function (user) {
        $log.info('Users.login ', user);
        $location.path('/dashboards/'+ user.username);
      })

    }


  });
