'use strict';

angular.module('eui-angularfire', ['ngAnimate', 'ngSanitize', 'ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('checkers', {
        url: '/checkers',
        templateUrl: 'app/checkers/checkers.html',
        controller: 'CheckersCtrl',
        controllerAs: 'checkers'
      })
      ;

    $urlRouterProvider.otherwise('/');
  })
;
