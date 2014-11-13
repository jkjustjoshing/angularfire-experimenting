'use strict';

angular.module('eui-angularfire')
  .controller('ChatCtrl', function (Chatroom) {

    var chatroom = Chatroom('josh-room');

    this.messages = chatroom.getMessages();
console.log(this.messages,'foo')

    this.post = function(message) {
      chatroom.postMessage(message);
    };

    this.changeRoom = function(newRoom) {
      chatroom = Chatroom(newRoom);
      this.messages = chatroom.getMessages();
    };

    this.createRoom = function(newRoom) {
     Chatroom.createRoom(newRoom);
    };

    this.rooms = Chatroom.getRooms();
  });
