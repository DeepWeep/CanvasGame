'use strict';

class Enemy extends UpdateEnemy {
  constructor(options) {
    super();
    this.ctx = options.ctx;
    this.image = options.image;
    this.numb = options.frameIndex;
    this.startposition = options.positionX;
    this.type = options.type;
    this.frameIndex = options.frameIndex;
    this.tickCount = 0;
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;
    this.positionX = options.positionX;
    this.positionY = options.positionY;
    this.width = options.width;
    this.height = options.height;
    this.live = options.live;
    this.step = rund();
    this.startId = null;
    this.stopId = null; 

    if (this.positionX === 150) {
      arrEnemyLeft.push(this);
    } else {
      arrEnemyRight.push(this);
    }

    this.start();
    typeEnemyInBattle.add(this.type);
  }
}