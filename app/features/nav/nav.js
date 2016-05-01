'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('NavCtrl', function ($log, $location, Users) {
    var ctrl = this;
    $log.info('NavCtrl');
    var username;
    Users.session.user().then(function (user) {
      
    });

    Users.user().then(function(user) {
      $log.info('DashboardCtrl ', user);
      ctrl.user = user;
    })


  });
