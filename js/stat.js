'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
var COLUMN_MAX_HEIGHT = 150;
var NAME_Y = 260;
var COLUMN_Y = 80;
var LEFT_MARGIN = (CLOUD_WIDTH - COLUMN_WIDTH * 4 - COLUMN_GAP * 3) / 2;

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

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

    var getCurrentColumnHeight = function (currentPlayerTime, maxPlayerTime) {
      return COLUMN_MAX_HEIGHT * currentPlayerTime / maxPlayerTime;
    };

    var getCurrentTimeY = function (currentPlayerTime, maxPlayerTime) {
      return CLOUD_Y + COLUMN_Y + COLUMN_MAX_HEIGHT - 20 - getCurrentColumnHeight(currentPlayerTime, maxPlayerTime);
    };

    var randomBlue = Math.floor(Math.random() * 256);

    var getColumnColor = function (name) {

      if (name === 'Вы') {
        return 'rgba(255, 0, 0, 1)';
      }

      return 'rgba(0, 0, ' + randomBlue + ', 1)';

    };

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + LEFT_MARGIN + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_Y + getCurrentTimeY(times[i], maxTime));
    ctx.fillStyle = getColumnColor(names[i]);
    ctx.fillRect(CLOUD_X + LEFT_MARGIN + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_Y + COLUMN_Y + COLUMN_MAX_HEIGHT - getCurrentColumnHeight(times[i], maxTime), COLUMN_WIDTH, getCurrentColumnHeight(times[i], maxTime));
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + LEFT_MARGIN + (COLUMN_GAP + COLUMN_WIDTH) * i, NAME_Y);
  }

};
