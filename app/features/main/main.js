'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('MainCtrl', function ($log, $location, Users) {
    var ctrl = this;
    $log.info('MainCtrl');

    ctrl.register = function(register) {
      $log.info('register');
      Users.register(register).then(function(user) {
        $log.info('registered ', user.profile.username);
        $location.path('/dashboards/'+ user.profile.username);
      })
    }


  });
