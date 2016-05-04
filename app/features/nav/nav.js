'use strict';

/**
 * @ngdoc function
 * @name sabzPrototypeApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the sabzPrototypeApp
 */
angular.module('sabzPrototypeApp')
  .controller('NavCtrl', function ($scope, $log, $location, Users) {
    var ctrl = this;
    $log.info('NavCtrl');
    var initUserProfile = function (userProfile) {
      ctrl.userProfile = userProfile;
    }
    Users.session.userProfile().then(function (userProfile) {
      initUserProfile(userProfile);
    });
    $scope.$on(Users.session.EVENTS.SESSION_START, function(event, args) {
      $log.info('NavCtrl SESSION_START')
      initUserProfile(args.userProfile);
    });
    $scope.$on(Users.session.EVENTS.SESSION_END, function(event, args) {
      $log.info('NavCtrl SESSION_END')
      initUserProfile(undefined);
    });

    // Users.user().then(function(user) {
    //   $log.info('DashboardCtrl ', user);
    //   ctrl.user = user;
    // })


  });
