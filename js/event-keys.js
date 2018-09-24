'use strict';

window.eventKeys = (function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {
    isEscEvent: function (evt, action, inactiveElement) {
      if (evt.keyCode === ESC_KEYCODE && inactiveElement !== document.activeElement) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };

})();
