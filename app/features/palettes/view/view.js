'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:PalletesCtrl
 * @description
 * # PalletesCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('ViewPaletteCtrl', function ($log, $routeParams, $location, Users, Palettes) {
    var ctrl = this;
    var owner = $routeParams.owner, name = $routeParams.name;
    $log.info('ViewPaletteCtrl ', owner, name);

    Users.session.userProfile().then(function(userProfile) {
      $log.info('ViewPaletteCtrl ', userProfile);
      ctrl.userProfile = userProfile;
    }, function () {
    })

    Palettes.load(owner, name).then(function(palette) {
      $log.info('ViewPaletteCtrl palette loaded ', palette);
      ctrl.palette = palette;
    }, function () {
      $log.info('ViewPaletteCtrl palette NOT found to main');
      $location.path('/');
    })



  });
