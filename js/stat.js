'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var DISTANATION = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, DISTANATION);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, DISTANATION + GAP + FONT_GAP);
  ctx.font = 'PT Mono 16px';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + DISTANATION + (BAR_WIDTH + DISTANATION) * i, DISTANATION * 2 + GAP + FONT_GAP + BAR_HEIGHT);

    if (names[i] !== 'Вы') {
      ctx.fillStyle = 'rgba(43, 85, 150,' + Math.random() + ')';
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + DISTANATION + (BAR_WIDTH + DISTANATION) * i, CLOUD_HEIGHT - DISTANATION / 2, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  }
};

