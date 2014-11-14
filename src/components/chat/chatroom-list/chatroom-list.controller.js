'use strict';

angular.module('eui-angularfire')
  .controller('ChatroomListCtrl', function (Chat) {

    this.createRoom = function(newRoom) {
      Chat.createRoom(newRoom);
      this.selectRoom(newRoom);
    };

    this.selectRoom = function(selectedRoom) {
      this.selected = selectedRoom;
    };

    this.rooms = Chat.getRooms();
  });
