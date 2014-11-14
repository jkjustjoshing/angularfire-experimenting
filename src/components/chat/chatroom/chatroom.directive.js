'use strict';

angular.module('eui-angularfire')
  .directive('chatroom', function () {

    return {
      scope: {
        room: '@'
      },
      controller: 'ChatroomCtrl',
      controllerAs: 'chat',
      bindToController: true,
      templateUrl: 'components/chat/chatroom/chatroom.html'
    };
  });
