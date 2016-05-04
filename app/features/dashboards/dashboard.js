'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:PalletesCtrl
 * @description
 * # PalletesCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('DashboardCtrl', function ($log, $location, $routeParams, Users) {
    var ctrl = this;
    var username= $routeParams.username;

    Users.session.userProfile().then(function(userProfile) {
      $log.info('DashboardCtrl ', userProfile);
      ctrl.userProfile = userProfile;
    }, function () {
      $location.path('/');
    })


    $log.info('DashboardCtrl ', username);


    //Palletes.loadAll().then(function (palettes) {
    //  $log.info('Palletes.load() ', palettes);
    //  ctrl.palettes = palettes;
    //})
    //
    //ctrl.register = function(register) {
    //  Palletes.register(register).then(function(user) {
    //    $log.info('registered ', user)
    //  })
    //}


  });
