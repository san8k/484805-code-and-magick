'use strict';

(function () {

  var SETUP_DEFAULT_POSITION = {
    x: '50%',
    y: '80px'
  };

  window.renderRandomWizards();

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.util.setup.querySelector('.setup-close');
  var userName = window.util.setup.querySelector('input[name="username"]');

  var onPopupEscPress = function (evt) {

    window.eventKeys.isEscEvent(evt, closePopup, userName);

  };

  var openPopup = function () {

    window.util.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.util.setup.style.top = SETUP_DEFAULT_POSITION.y;
    window.util.setup.style.left = SETUP_DEFAULT_POSITION.x;

  };

  var closePopup = function () {

    window.util.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);

  };

  setupOpen.addEventListener('click', function () {

    openPopup();

  });

  setupOpen.addEventListener('keydown', function (evt) {

    window.eventKeys.isEnterEvent(evt, openPopup);

  });

  setupClose.addEventListener('click', function () {

    closePopup();

  });

  setupClose.addEventListener('keydown', function (evt) {

    window.eventKeys.isEnterEvent(evt, closePopup);

  });

  var wizardCoat = window.util.setup.querySelector('.wizard-coat');
  var wizardEyes = window.util.setup.querySelector('.wizard-eyes');
  var fireball = window.util.setup.querySelector('.setup-fireball-wrap');
  var eyesColor = window.util.setup.querySelector('input[name="eyes-color"]');
  var coatColor = window.util.setup.querySelector('input[name="coat-color"]');
  var fireballColor = window.util.setup.querySelector('input[name="fireball-color"]');

  window.colorize(wizardCoat, window.util.COAT_COLORS, coatColor);
  window.colorize(wizardEyes, window.util.EYES_COLORS, eyesColor);
  window.colorize(fireball, window.util.FIREBALL_COLORS, fireballColor);

})();
