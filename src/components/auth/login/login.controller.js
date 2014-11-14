'use strict';

angular.module('eui-angularfire')
  .controller('LoginCtrl', function ($rootScope, firebaseAuth) {

    this.getUser = function() {
      return firebaseAuth.user;
    };

    this.login = function(email, password) {
      firebaseAuth.$login(email, password);
    };

  });
