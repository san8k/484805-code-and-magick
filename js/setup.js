'use strict';

(function () {

  var SETUP_DEFAULT_POSITION = {
    x: '50%',
    y: '80px'
  };

  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var onSuccessLoadWizards = function (data) {

    var renderWizard = function (character) {

      var wizardElement = wizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = character.name;
      wizardElement.querySelector('.wizard-coat').style.fill = character.colorCoat + '';
      wizardElement.querySelector('.wizard-eyes').style.fill = character.colorEyes + '';
      return wizardElement;

    };

    var fragment = document.createDocumentFragment();
    var similarWizardsList = document.querySelector('.setup-similar-list');

    for (var j = 0; j < 4; j++) {

      fragment.appendChild(renderWizard(data[j]));

    }

    similarWizardsList.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');

  };

  var onErrorLoadWizards = function (message) {

    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);

  };

  window.backend.load(onSuccessLoadWizards, onErrorLoadWizards);

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

  window.colorizer(wizardCoat, window.data.COAT_COLORS, coatColor);
  window.colorizer(wizardEyes, window.data.EYES_COLORS, eyesColor);
  window.colorizer(fireball, window.data.FIREBALL_COLORS, fireballColor);

  var form = window.util.setup.querySelector('.setup-wizard-form');

  var onSuccessUpload = function () {
    window.util.setup.classList.add('hidden');
  };

  var onErrorUpload = function (message) {

    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: orange;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = 'Невозможно отправить данные. ' + message;
    document.body.insertAdjacentElement('afterbegin', node);

  };

  form.addEventListener('submit', function (evt) {

    window.backend.save(new FormData(form), onSuccessUpload, onErrorUpload);
    evt.preventDefault();
  });

})();
