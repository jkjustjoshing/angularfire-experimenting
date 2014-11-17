'use strict';

angular.module('eui-angularfire')
  .controller('ChatroomListCtrl', function (Chat) {

    this.createRoom = function() {
      try {
        Chat.createRoom(this.roomName);
        this.selectRoom(this.roomName);
        this.roomName = '';
      } catch (e) {
        window.alert('Not logged in')
      }
    };

    this.selectRoom = function(selectedRoom) {
      this.selected = selectedRoom;
    };

    this.rooms = Chat.getRooms();
  });
