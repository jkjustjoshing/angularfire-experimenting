'use strict';

angular.module('eui-angularfire')
  .controller('CheckersCtrl', function (CheckerBoard) {

    this.board = new CheckerBoard();
console.log(this.board);

  });
