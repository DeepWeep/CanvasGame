'use strict';

function setEnemy() {
    for (let type of typeEnemyInBattle) {
      result += type + ', '          
    }
    console.log(result.slice(0, -2,) + '!');
}

function randomTime() {
  return Math.floor(Math.random() * (1000 - 500)) + 500;
}

function pauseSprite() {
  cancelAnimationFrame(runId);
  runId = null;
  clearInterval(clearId);
  clearInterval(rightId);
  clearInterval(leftId);
  arrEnemyLeft.forEach((enemy) => enemy.render());
  arrEnemyRight.forEach((enemy) => enemy.render());
}

function startSprite() {
  clearId = setInterval(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 1);
  leftId = setInterval(() => enemy(arrTypeEnemyLeft[Math.floor(Math.random() * arrTypeEnemyLeft.length)]), randomTime());
  rightId = setInterval(() => enemy(arrTypeEnemyRight[Math.floor(Math.random() * arrTypeEnemyRight.length)]), randomTime());
  runEnemy();
}

function runEnemy() {
  arrEnemyLeft.forEach((enemy) => {
    enemy.start();
  });
  arrEnemyRight.forEach((enemy) => {
    enemy.start();
  });
  battle();
  damageTower();
  runId = requestAnimationFrame(() => {
    runEnemy();
  });
}

function clearEnemy() {
  pauseSprite();
  arrEnemyLeft.length = 0;
  arrEnemyRight.length = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}