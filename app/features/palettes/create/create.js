'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:PalletesCtrl
 * @description
 * # PalletesCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('CreatePaletteCtrl', function ($log, $location, Users, Palettes) {
    var ctrl = this;
    $log.info('CreatePaletteCtrl ');

    Users.session.userProfile().then(function(userProfile) {
      $log.info('CreatePaletteCtrl userProrile in session ', userProfile);
      ctrl.userProfile = userProfile;
      ctrl.paletteNew = Palettes.data.japaneseGarden;
      ctrl.paletteNew.owner = userProfile.username;
    }, function () {
      $log.info('CreatePaletteCtrl userProrile NOT in session sending to main');
      $location.path('/');
    })


    ctrl.create = function (palette) {
      Palettes.create(palette).then(function (created) {
        $location.path(Palettes.toPath(created));
      })

    }
    



  });
