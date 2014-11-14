'use strict';

angular.module('eui-angularfire')
  .directive('chatroomList', function () {

    return {
      scope: true,
      controller: 'ChatroomListCtrl',
      controllerAs: 'chatroomlist',
      bindToController: true,
      templateUrl: 'components/chat/chatroom-list/chatroom-list.html'
    };
  });
