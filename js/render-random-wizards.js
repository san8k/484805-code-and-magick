'use strict';

(function () {

  window.renderRandomWizards = function () {

    var getWizardsArray = function (names, surnames, coatColors, eyesColors, number) {

      var charactersArr = [];
      var wizard = {};

      for (var i = 0; i < number; i++) {

        wizard = {
          name: window.getRandomElementOfArray(names) + ' ' + window.getRandomElementOfArray(surnames),
          coatColor: window.getRandomElementOfArray(coatColors),
          eyesColor: window.getRandomElementOfArray(eyesColors)
        };

        charactersArr.push(wizard);

      }
      return charactersArr;

    };

    var characters = getWizardsArray(window.util.WIZARDS_NAMES, window.util.WIZARDS_SURNAMES, window.util.COAT_COLORS, window.util.EYES_COLORS, 4);

    var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

    var renderWizard = function (character) {

      var wizardElement = wizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = character.name;
      wizardElement.querySelector('.wizard-coat').style.fill = character.coatColor.toString();
      wizardElement.querySelector('.wizard-eyes').style.fill = character.eyesColor.toString();
      return wizardElement;

    };

    var fragment = document.createDocumentFragment();
    var similarWizardsList = document.querySelector('.setup-similar-list');

    for (var j = 0; j < characters.length; j++) {

      fragment.appendChild(renderWizard(characters[j]));

    }

    similarWizardsList.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

})();
