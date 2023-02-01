'use strist';

class UpdateEnemy extends RenderMoov {
  update() {
    this.tickCount++;

    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.numberOfFrames - 1) {
        this.frameIndex++;
      } else {
        this.frameIndex = 0;
      }
    }
  }

  updateRotete() {
    this.tickCount++;

    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex > 0) {
        this.frameIndex--;
      } else {
        this.frameIndex = this.numb - 1;
      }
    }
  }
}