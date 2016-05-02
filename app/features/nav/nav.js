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
    
    Users.session.userProfile().then(function (userProfile) {
      ctrl.userProfile = userProfile;
    });

    // Users.user().then(function(user) {
    //   $log.info('DashboardCtrl ', user);
    //   ctrl.user = user;
    // })


  });
