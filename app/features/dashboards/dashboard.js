'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:PalletesCtrl
 * @description
 * # PalletesCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('DashboardCtrl', function ($log, $routeParams, Users, Palletes) {
    var ctrl = this;
    var username= $routeParams.username;

    Users.user().then(function(user) {
      $log.info('DashboardCtrl ', user);
      ctrl.user = user;
    })

    ctrl.paletteNew = Palletes.data.japaneseGarden;

    ctrl.create = function (palette) {
      

    }

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
