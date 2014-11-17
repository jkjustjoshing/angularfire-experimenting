'use strict';

angular.module('eui-angularfire')
  .directive('checkerPiece', function () {

    return {
      scope: {
        piece: '=checkerPiece'
      },
      require: '^checkerBoard',
      link: function(scope, element, attrs, checkerBoardCtrl) {
        var dragging = false;
        var initialMouseLocation, initialPieceLocation, diff;

        var mousedownMethod = function(event) {
          dragging = true;
          initialMouseLocation = {
            x: event.clientX,
            y: event.clientY
          };
          initialPieceLocation = {
            x: parseInt(element.attr('cx'), 10),
            y: parseInt(element.attr('cy'), 10)
          };
          element.parent().on('mouseup', mouseupMethod);
          element.parent().on('mousemove', mousemoveMethod);
        };

        var mouseupMethod = function() {
          dragging = false;
          element.parent().off('mouseup', mouseupMethod);
          element.parent().off('mousemove', mousemoveMethod);

          // Find square to drop on
          if(diff) {
            var finalLocation = {
              x: initialPieceLocation.x + diff.x,
              y: initialPieceLocation.y + diff.y,
            };

            var row = Math.floor(finalLocation.y / checkerBoardCtrl.board.SQUARE_WIDTH);
            var col = Math.floor(finalLocation.x / checkerBoardCtrl.board.SQUARE_WIDTH);
            if(checkerBoardCtrl.board.spots[row][col].open()) {
              scope.$apply(function() {
                scope.piece.row(row);
                scope.piece.col(col);
              });
            } else {
              element.attr('cx', initialPieceLocation.x);
              element.attr('cy', initialPieceLocation.y);
            }
          }
        };

        var mousemoveMethod = function(event) {
          if(dragging) {
            diff = {
              x: event.clientX - initialMouseLocation.x,
              y: event.clientY - initialMouseLocation.y
            };
            element.attr('cx', initialPieceLocation.x + diff.x);
            element.attr('cy', initialPieceLocation.y + diff.y);
          }
        };

        element.on('mousedown', mousedownMethod);

        scope.$on('$destroy', function() {
          element.off('mousedown', mousedownMethod);
          element.parent().off('mouseup', mouseupMethod);
          element.parent().off('mousemove', mousemoveMethod);
        });
      }
    };
  });
