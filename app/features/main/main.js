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
    ctrl
    ctrl.register = function(register) {
      Users.register(register).then(function(userKey) {
        $log.info('registered ', userKey);
        $location.path('/palettes/'+ userKey);
      })
    }


  });
