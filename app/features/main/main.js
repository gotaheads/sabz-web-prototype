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
      Users.register(register).then(function(user) {
        $log.info('registered ', user.username);
        $location.path('/dashboards/'+ user.profile.username);
      })
    }


  });
