'use strict';

angular.module('eui-angularfire')
  .directive('login', function () {

    return {
      scope: true,
      controller: 'LoginCtrl',
      controllerAs: 'login',
      bindToController: true,
      templateUrl: 'components/auth/login/login.html'
    };
  });
