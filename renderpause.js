'use strict';

class RenderPause extends MoovEnemy {
  renderstop() {
    this.ctx.drawImage(
      this.image,
      this.frameIndex * this.width / this.numberOfFrames,
      0,
      this.width / this.numberOfFrames,
      this.height,
      this.positionX,
      this.positionY,
      this.width / this.numberOfFrames,
      this.height
    )
    this.stopId = requestAnimationFrame(() => {
      this.renderstop();
    });
  }
}