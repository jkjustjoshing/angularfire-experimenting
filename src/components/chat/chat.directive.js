'use strict';

angular.module('eui-angularfire')
  .directive('chat', function () {

    return {
      scope: {
        room: '@'
      },
      controller: 'ChatCtrl',
      controllerAs: 'chat',
      bindToController: true,
      templateUrl: 'components/chat/chat.html'
    };
  });
