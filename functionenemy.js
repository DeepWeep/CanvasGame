'use strict';

function pauseSprite() {
  cancelAnimationFrame(runId);
  runId = null;
  clearInterval(clearId);
  clearInterval(rightId);
  clearInterval(leftId);
  arrEnemy.forEach((enemy) => enemy.render());
}

function startSprite() {
  clearId = setInterval(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 1);
  leftId = setInterval(() => enemy(arrTypeEnemyLeft[Math.floor(Math.random() * arrTypeEnemyLeft.length)]), 4000);
  rightId = setInterval(() => enemy(arrTypeEnemyRight[Math.floor(Math.random() * arrTypeEnemyRight.length)]), 4000);
  runEnemy();
}

function runEnemy() {
  arrEnemy.forEach((enemy) => {
    enemy.start();
  });
  runId = requestAnimationFrame(() => {
    runEnemy();
  });
}

function clearEnemy() {
    pauseSprite();
    arrEnemy.length = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}