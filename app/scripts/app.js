'use strict';

/**
 * @ngdoc overview
 * @name vienvongApp
 * @description
 * # vienvongApp
 *
 * Main module of the application.
 */
angular
  .module('vienvongApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    // Enable mod rewirte
    $locationProvider.html5Mode(true);

    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/main.html",
        controller: 'MainCtrl'
      })
      .state('about', {
        url: "/about",
        templateUrl: "views/about.html",
        controller: function($scope) {
          $scope.items = ["A", "List", "Of", "Items"];
        }
      });
  });
