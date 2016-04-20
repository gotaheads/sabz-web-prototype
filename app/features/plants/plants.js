'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:PlantsCtrl
 * @description
 * # PlantsCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('PlantsCtrl', function ($log, Plants) {
    var ctrl = this;
    $log.info('PlantsCtrl');

    ctrl.create = function() {

    }
    Plants.loadAll().then(function (plants) {
      $log.info('Plants.load() ', plants);
      ctrl.plants = plants;
    })


  });
