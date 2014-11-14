'use strict';

angular.module('eui-angularfire')
  .factory('Chatroom', function ($firebase, firebaseAuth) {

    var Chatroom = function(chatroom) {

      var ref = new Firebase('https://chat-jkjustjoshing.firebaseio.com/chats/messages/' + chatroom);
      // create an AngularFire reference to the data
      var sync = $firebase(ref);

      this.getMessages = function() {
        // download the data into a local object
        return sync.$asObject();
      };

      this.postMessage = function(message) {
        if(firebaseAuth.user) {
          sync.$push({text: message, uid: firebaseAuth.user.uid});
        } else {
          throw new Error('Not logged in');
        }
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
      if(firebaseAuth.user) {
        sync.$set(roomName, {
          creator: firebaseAuth.user.uid
        });
      } else {
        throw new Error('Not logged in');
      }
    };



    return Chatroom;

  });
