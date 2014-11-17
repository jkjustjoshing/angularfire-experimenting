'use strict';

angular.module('eui-angularfire')
  .directive('checkerPiece', function () {

    return {
      scope: {
        piece: '='
      },
      link: function(scope, element, attrs) {
        var dragging = false;
        var initialLocation;
        element.on('mousedown', function(event) {
          dragging = true;
          initialLocation = {
            x: event.clientX,
            y: event.clientY
          };
        });


        element.on('mousemove', function(event) {
          if(dragging) {
            var diff = {
              x: event.clientX - initialLocation.x,
              y: event.clientY - initialLocation.y
            };


          }
        });
      }
    };
  });
