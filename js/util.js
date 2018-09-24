'use strict';

(function () {

  var setupSelector = document.querySelector('.setup');

  window.util = {
    setup: setupSelector,
    getMaxElement: function (array) {
      var maxElement = array[0];

      for (var i = 0; i < array.length; i++) {
        if (array[i] > maxElement) {
          maxElement = array[i];
        }
      }

      return maxElement;
    },
    getRandomInteger: function (min, max) {

      return Math.floor(min + Math.random() * (max - min + 1));

    },
    getRandomElementOfArray: function (feature) {
      var index = this.getRandomInteger(0, feature.length - 1);
      return feature[index];
    }
  };

})();
