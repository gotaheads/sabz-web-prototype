'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('MainCtrl', function ($log, $location, Users, Firebases, $firebaseArray) {
    var ctrl = this;
    $log.info('MainCtrl');

    Firebases.paletteKeyRef().then(function (entities) {
      ctrl.palleteKeys = $firebaseArray(entities);
    })

    ctrl.register = function(register) {
      $log.info('register');
      Users.register(register).then(function(userProfile) {
        $log.info('registered ', userProfile.username);
        $location.path('/dashboards/'+ userProfile.username);
      })
    }

    ctrl.toSummary = function (key) {
      var summary = {owner: key.$id};
      angular.forEach(key, function (v, k) {
        //name of the palette
        if(k.indexOf('$') === -1) summary.name = k;
      })
      return summary;
    }



  });
