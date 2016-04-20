'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:PalletesCtrl
 * @description
 * # PalletesCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('PalletesCtrl', function ($log, $routeParams, Palletes) {
    var ctrl = this;
    var userKey= $routeParams.userKey;

    $log.info('PalletesCtrl ', userKey);


    Palletes.loadAll().then(function (palettes) {
      $log.info('Palletes.load() ', palettes);
      ctrl.palettes = palettes;
    })

    ctrl.register = function(register) {
      Palletes.register(register).then(function(user) {
        $log.info('registered ', user)
      })
    }


  });
