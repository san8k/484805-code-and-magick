'use strict';

(function () {

  window.getMaxElement = function (array) {
    var maxElement = array[0];

    for (var i = 0; i < array.length; i++) {
      if (array[i] > maxElement) {
        maxElement = array[i];
      }
    }

    return maxElement;
  };

})();
