'use strict';

(function () {

  var dialogHandler = window.util.setup.querySelector('.upload');

  var onUserPicMouseDown = function (evt) {

    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;

    var onMouseMove = function (moveEvt) {

      moveEvt.preventDefault();
      isDragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.util.setup.style.top = (window.util.setup.offsetTop - shift.y) + 'px';
      window.util.setup.style.left = (window.util.setup.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {

      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isDragged) {

        var onClickPreventDefault = function (clickEvt) {

          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);

        };

        dialogHandler.addEventListener('click', onClickPreventDefault);

      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  };

  dialogHandler.addEventListener('mousedown', onUserPicMouseDown);

})();
