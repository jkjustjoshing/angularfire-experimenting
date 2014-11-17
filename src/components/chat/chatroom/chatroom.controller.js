'use strict';

angular.module('eui-angularfire')
  .controller('ChatroomCtrl', function ($scope, Chat) {

    var chatroom;

    $scope.$watch(angular.bind(this, function() {
      return this.room;
    }), angular.bind(this, function(newRoom) {
      if(newRoom) {
        chatroom = Chat.getRoom(newRoom);

        this.messages = chatroom.getMessages();
      }
    }));

    this.post = function() {
      try {
        chatroom.postMessage(this.message);
        this.message = '';
      } catch (e) {
        window.alert('Not logged in');
      }
    };
  });
