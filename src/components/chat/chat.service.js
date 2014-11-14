'use strict';

angular.module('eui-angularfire')
  .factory('Chat', function ($firebase, firebaseAuth) {

    var Chatroom = function(chatroom) {

      var ref = new Firebase('https://chat-jkjustjoshing.firebaseio.com/chats/messages/' + chatroom);
      // create an AngularFire reference to the data
      var sync = $firebase(ref.limit(10));

      this.getMessages = function() {
        // download the data into a local object
        console.log(sync)
        return sync.$asObject();
      };

      this.postMessage = function(message) {
        console.log(message, firebaseAuth.user, chatroom)
        if(firebaseAuth.user) {
          sync.$push({text: message, uid: firebaseAuth.user.uid});
        } else {
          throw new Error('Not logged in');
        }
      };
    };

    return {
      getRoom: function(chatroom) {
        return new Chatroom(chatroom);
      },
      getRooms: function() {
        var ref = new Firebase('https://chat-jkjustjoshing.firebaseio.com/chats/rooms');
        // create an AngularFire reference to the data
        var sync = $firebase(ref);
        return sync.$asObject();
      },
      createRoom: function(roomName) {
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
      }
    };



    return Chatroom;

  });
