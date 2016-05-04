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
    'uuid4',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'features/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dashboards/:username', {
        templateUrl: 'features/dashboards/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/login', {
        templateUrl: 'features/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/logout', {
        templateUrl: 'features/logout/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .when('/new/palette', {
        templateUrl: 'features/palettes/create/create.html',
        controller: 'CreatePaletteCtrl',
        controllerAs: 'create'
      })
      .when('/palettes/:owner/:name', {
        templateUrl: 'features/palettes/view/view.html',
        controller: 'ViewPaletteCtrl',
        controllerAs: 'view'
      })

      // .when('/palettes/:palette', {
      //   templateUrl: 'features/palettes/palettes.html',
      //   controller: 'PalletesCtrl',
      //   controllerAs: 'palettes'
      // })
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
