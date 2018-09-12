'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];

var NUMBER_OF_CHARACTERS = 4;

var getRandomInt = function (min, max) {

  return Math.floor(min + Math.random() * (max - min + 1));

};

var getRandomElement = function (feature) {

  var index = getRandomInt(0, feature.length - 1);
  return feature[index];

};

var getWizardsArray = function (names, surnames, coatColors, eyesColors) {

  var charactersArr = [];
  var wizard = {};

  for (var i = 0; i < NUMBER_OF_CHARACTERS; i++) {

    wizard = {
      name: getRandomElement(names) + ' ' + getRandomElement(surnames),
      coatColor: getRandomElement(coatColors),
      eyesColor: getRandomElement(eyesColors)
    };

    charactersArr.push(wizard);

  }
  return charactersArr;

};

var characters = getWizardsArray(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS);

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

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('input[name="username"]');

var onPopupEscPress = function (evt) {

  if (evt.keyCode === ESC_KEYCODE && userName !== document.activeElement) {
    closePopup();
  }

};

var openPopup = function () {

  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);

};

var closePopup = function () {

  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);

};

setupOpen.addEventListener('click', function () {

  openPopup();

});

setupOpen.addEventListener('keydown', function (evt) {

  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }

});

setupClose.addEventListener('click', function () {

  setup.classList.add('hidden');

});

setupClose.addEventListener('keydown', function (evt) {

  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }

});

var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');


wizardEyes.addEventListener('click', function () {

  var color = getRandomElement(EYES_COLORS);
  wizardEyes.style.fill = color;
  setup.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;

});

wizardCoat.addEventListener('click', function () {

  var color = getRandomElement(COAT_COLORS);
  wizardCoat.style.fill = color;
  setup.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;

});

fireball.addEventListener('click', function () {

  var color = getRandomElement(FIREBALL_COLORS);
  fireball.style.backgroundColor = color;
  setup.querySelector('input[name="fireball-color"]').value = color;

});
