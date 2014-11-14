'use strict';

angular.module('eui-angularfire')
  .factory('firebaseAuth', function ($firebaseSimpleLogin) {

    var ref = new Firebase('https://chat-jkjustjoshing.firebaseio.com/');

    var firebaseAuth = $firebaseSimpleLogin(ref);

    // Use password auth provider by default
    var $login = firebaseAuth.$login;
    firebaseAuth.$login = function(email, password) {
      return $login.call(firebaseAuth, 'password', {email: email, password: password});
    };

    return firebaseAuth;
  });
