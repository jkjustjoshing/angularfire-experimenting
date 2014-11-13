'use strict';

angular.module('eui-angularfire')
  .controller('ChatCtrl', function ($firebase) {
    var ref = new Firebase('https://chat-jkjustjoshing.firebaseio.com/messages');
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    this.messages = sync.$asObject();


    this.post = function(message) {
      sync.$push({text: message, username: 'barry'});
    };
  });
