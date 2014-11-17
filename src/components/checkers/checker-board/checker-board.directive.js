'use strict';

angular.module('eui-angularfire')
  .directive('checkerBoard', function () {

    return {
      scope: {
        board: '=checkerBoard'
      },
      controller: angular.noop,
      controllerAs: 'checkerBoard',
      bindToController: true
    };
  });
