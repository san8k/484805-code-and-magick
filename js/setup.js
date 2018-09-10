'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_CHARACTERS = 4;

document.querySelector('.setup').classList.remove('hidden');

var getRandomInt = function (min, max) {

  return Math.floor(min + Math.random() * (max - min + 1));

};

var characters = [];
var wizard = {};

var getRandomElement = function (feature) {

  var index = getRandomInt(0, feature.length - 1);
  return feature[index];

};

for (var i = 0; i < NUMBER_OF_CHARACTERS; i++) {

  wizard = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  };

  characters.push(wizard);

}

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
