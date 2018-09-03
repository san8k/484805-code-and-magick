'use strict';

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
var COLUMN_MAX_HEIGHT = 150;
var NAME_Y = 260;
var SCORE_Y = 70;
var COLUMN_Y = 80;
var LEFT_MARGIN = (CLOUD_WIDTH - COLUMN_WIDTH * 4 - COLUMN_GAP * 3) / 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 230, 35);
  ctx.fillText('Список результатов:', 220, 55);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    var currentColumnHeight = (COLUMN_MAX_HEIGHT * times[i]) / maxTime;
    var randomBlue = Math.floor(Math.random() * 256);
    var columnColor = 'rgba(0, 0, ' + randomBlue + '' + ', 1)';

    if (names[i] === 'Вы') {
      columnColor = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + LEFT_MARGIN + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_Y + SCORE_Y);
    ctx.fillStyle = columnColor;
    ctx.fillRect(CLOUD_X + LEFT_MARGIN + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_Y + COLUMN_Y + COLUMN_MAX_HEIGHT - currentColumnHeight, COLUMN_WIDTH, currentColumnHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + LEFT_MARGIN + (COLUMN_GAP + COLUMN_WIDTH) * i, NAME_Y);
  }

};
