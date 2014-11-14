'use strict';

angular.module('eui-angularfire')
  .controller('ChatroomListCtrl', function (Chat) {

    this.createRoom = function(newRoom) {
      Chat.createRoom(newRoom);
    };

    this.rooms = Chat.getRooms();
  });
