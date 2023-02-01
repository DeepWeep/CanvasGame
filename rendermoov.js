'use strict';

class RenderMoov extends RenderPause {
  render() {
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
    if (this.startposition > 500) {
      this.positionX -= this.step;
    } else {
      this.positionX += this.step;
    }
  }
}