'use strict';

// Setting up route
angular.module('calculator').config(['$stateProvider',
  function ($stateProvider) {
    // Users state routing
    $stateProvider
      .state('calculator', {
        abstract: true,
        url: '/calculator',
        templateUrl: 'modules/calculator/client/views/calculator/calculator.client.view.html'
      })
      .state('calculator.simple', {
        url: '/simple',
        templateUrl: 'modules/calculator/client/views/calculator/simple.client.view.html'
      })
      .state('calculator.compound', {
        url: '/compound',
        templateUrl: 'modules/calculator/client/views/calculator/compound.client.view.html'
      });
  }
]);
