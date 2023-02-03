'use strict';

function enemyFactory(type) {
  if (type === 'left1') {
    return new Enemy({ ctx: canvas.getContext('2d'), image: left1, width: 1200, height: 86, positionX: 50, positionY: positiony(96), type: 'run1', frameIndex: 0, numberOfFrames: 12, ticksPerFrame: 4,})
  } else if (type === 'left2') {
    return new Enemy({ ctx: canvas.getContext('2d'), image: left2, width: 1180, height: 88, positionX: 50, positionY: positiony(98), type: 'run2', frameIndex: 0, numberOfFrames: 12, ticksPerFrame: 5,})
  } else if (type === 'left3') {
    return new Enemy({ ctx: canvas.getContext('2d'), image: left3, width: 1092, height: 84, positionX: 50, positionY: positiony(94), type: 'run3', frameIndex: 0, numberOfFrames: 14, ticksPerFrame: 4,})
  } else if (type === 'left4') {
    return new Enemy({ ctx: canvas.getContext('2d'), image: left4, width: 1308, height: 90, positionX: 50, positionY: positiony(290), type: 'fly1', frameIndex: 0, numberOfFrames: 12, ticksPerFrame: 4,})
  } else if (type === 'left5') {
    return new Enemy({ ctx: canvas.getContext('2d'), image: left4, width: 1308, height: 90, positionX: 50, positionY: positiony(290), type: 'fly2', frameIndex: 0, numberOfFrames: 12, ticksPerFrame: 4, })
  } else if (type === 'right1') {
    return new Enemy({ ctx: canvas.getContext('2d'), image: right1, width: 1200, height: 100, positionX: positionx(), positionY: positiony(110), type: 'run1', frameIndex: 10, numberOfFrames: 10, ticksPerFrame: 4,})
  } else if (type === 'right2') {
    return new Enemy({ ctx: canvas.getContext('2d'), image: right2, width: 600, height: 100, positionX: positionx(), positionY: positiony(110), type: 'run2', frameIndex: 5, numberOfFrames: 5, ticksPerFrame: 5,})
  } else if (type === 'right3') {
    return new Enemy({ ctx: canvas.getContext('2d'), image: right3, width: 900, height: 90, positionX: positionx(), positionY: positiony(100), type: 'run3', frameIndex: 0, numberOfFrames: 10, ticksPerFrame: 4,})
  } else if (type === 'right4') {
    return new Enemy({ ctx: canvas.getContext('2d'), image: right4, width: 844, height: 95, positionX: positionx(), positionY: positiony(295), type: 'fly1', frameIndex: 10, numberOfFrames: 10, ticksPerFrame: 4,})
  } else if (type === 'right5') {
    return new Enemy({ ctx: canvas.getContext('2d'), image: right4, width: 844, height: 95, positionX: positionx(), positionY: positiony(295), type: 'fly2', frameIndex: 10, numberOfFrames: 10, ticksPerFrame: 4, })
  }
}

const enemy = enemyFactory;

function positionx() {
    let x = innerWidth - 50;
    return x;
}

function positiony(height) {
    let y = innerHeight - height - Math.floor(Math.random() * 150);
    return y;
}
