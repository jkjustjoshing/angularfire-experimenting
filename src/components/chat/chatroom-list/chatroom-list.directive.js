'use strict';

angular.module('eui-angularfire')
  .directive('chatroomList', function () {

    return {
      scope: {
        selected: '=',
      },
      controller: 'ChatroomListCtrl',
      controllerAs: 'chatroomlist',
      bindToController: true,
      templateUrl: 'components/chat/chatroom-list/chatroom-list.html'
    };
  });
