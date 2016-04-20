'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('RegisterCtrl', function ($log, Plants) {
    var ctrl = this;
    $log.info('RegisterCtrl');

    ctrl.create = function() {

    }
    Plants.loadAll().then(function (plants) {
      $log.info('Plants.load() ', plants);
      ctrl.plants = plants;
    })


  });
