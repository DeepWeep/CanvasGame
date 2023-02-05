'use strict';

class MoovEnemy {
  start = () => {
    if (this.numb !== 0) {
      this.updateRotete();
    } else {
      this.update();
    }
    this.render();
  }
}