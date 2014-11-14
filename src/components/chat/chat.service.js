'use strict';

angular.module('eui-angularfire')
  .factory('Chatroom', function ($firebase) {

    var Chatroom = function(chatroom) {

      var ref = new Firebase('https://chat-jkjustjoshing.firebaseio.com/chats/messages/' + chatroom);
      // create an AngularFire reference to the data
      var sync = $firebase(ref);

      this.getMessages = function() {
        // download the data into a local object
        return sync.$asObject();
      };

      this.postMessage = function(message) {
        sync.$push({text: message, username: 'barry'});
      };
    };

    Chatroom.getRooms = function() {
      var ref = new Firebase('https://chat-jkjustjoshing.firebaseio.com/chats/rooms');
      // create an AngularFire reference to the data
      var sync = $firebase(ref);
      return sync.$asObject();
    };
    Chatroom.createRoom = function(roomName) {
      var ref = new Firebase('https://chat-jkjustjoshing.firebaseio.com/chats/rooms');
      // create an AngularFire reference to the data
      var sync = $firebase(ref);
      sync.$set(roomName, {
        test: 1,
        test2: 2
      });

    };



    return Chatroom;

  });
