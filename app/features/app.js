'use strict';

/**
 * @ngdoc overview
 * @name sabzPrototypeApp
 * @description
 * # sabzPrototypeApp
 *
 * Main module of the application.
 */
angular
  .module('sabzPrototypeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'sabzPrototypeApp.messages',
    'sabzPrototypeApp.validations',
    'uuid4'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'features/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/register', {
        templateUrl: 'features/register/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/palettes/:userKey', {
        templateUrl: 'features/palettes/palettes.html',
        controller: 'PalletesCtrl',
        controllerAs: 'palettes'
      })
      .when('/plants', {
        templateUrl: 'features/plants/plants.html',
        controller: 'PlantsCtrl',
        controllerAs: 'plants'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function () {

  });
