'use strict';

(function () {

  window.getRandomInteger = function (min, max) {

    return Math.floor(min + Math.random() * (max - min + 1));

  };

})();
