'use strict';

(function () {

  window.getRandomElementOfArray = function (feature) {
    var index = window.getRandomInteger(0, feature.length - 1);
    return feature[index];
  };

})();
