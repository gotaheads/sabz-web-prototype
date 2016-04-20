'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('LogoutCtrl', function ($log, $location, Users) {
    var ctrl = this;
    $log.info('LogoutCtrl');

    Users.logout().then(function () {
      $location.path('/');
    })


  });
