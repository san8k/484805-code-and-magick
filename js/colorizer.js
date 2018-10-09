'use strict';

(function () {

  window.colorizer = function (element, colorsArray, associateInput) {

    element.addEventListener('click', function () {

      var color = window.util.getRandomElementOfArray(colorsArray);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      associateInput.value = color;

    });

  };

})();
