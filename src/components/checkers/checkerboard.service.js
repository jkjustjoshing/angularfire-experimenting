'use strict';

angular.module('eui-angularfire')
  .factory('CheckerBoard', function () {

    var BOARD_WIDTH = 8;
    var BOARD_HEIGHT = 8;
    var ROWS_OF_PIECES = 3;
    var RED = 'red';
    var BLACK = 'black';

    function CheckerPiece(player, row, col) {
      this.king = false;
      this.player = player;
      this.row = row;
      this.col = col;
    }

    function CheckerSpotPieceBinder(pieces) {
      function CheckerSpot(row, col) {
        this.row = row;
        this.col = col;
        this.open = function() {
          return (col+row)%2 && !this.piece();
        };
        this.piece = function() {
          for(var index = 0; index < pieces.length; ++index) {
            if(pieces[index].col === this.col &&
               pieces[index].row === this.row) {
              return pieces[index];
            }
          }
          return null;
        }
      }
      return CheckerSpot;
    };

    function CheckerBoard() {
      this.pieces = [];
      this.spots = [];

      var CheckerSpot = CheckerSpotPieceBinder(this.pieces);

      for(var row = 0; row < BOARD_HEIGHT; ++row) {
        var thisRow = [];
        for(var col = 0; col < BOARD_WIDTH; ++col) {
          thisRow[col] = new CheckerSpot(row, col);

          if((row+col)%2) {
            if(row < ROWS_OF_PIECES) {
              this.pieces.push(new CheckerPiece(RED, row, col));
            } else if(row >= BOARD_HEIGHT-ROWS_OF_PIECES ) {
              this.pieces.push(new CheckerPiece(BLACK, row, col));
            }
          }
        }
        this.spots[row] = thisRow;
      }
    }

    CheckerBoard.prototype.BOARD_WIDTH = BOARD_WIDTH;
    CheckerBoard.prototype.BOARD_HEIGHT = BOARD_HEIGHT;

    return CheckerBoard;
  });
