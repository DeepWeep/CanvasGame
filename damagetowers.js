'use strict';

function posX1() {
    posTower1 += 379;
}

function posX2() {
    posTower2 += 500;
}

function damageTower() {
    arrEnemyLeft.forEach((enemyleft) => {
        if ((enemyleft.positionX + enemyleft.width / enemyleft.numberOfFrames) >= positionx()) {
            atackTower(tower2, 10);
            posX2();
            let index = arrEnemyLeft.indexOf(enemyleft);
            arrEnemyLeft.splice(index, 1);
            return;
        }
    });
    arrEnemyRight.forEach((enemyright) => {
        if (enemyright.positionX <= 150) {
            atackTower(tower1, 10);
            posX1();
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            return;
        }
    });
}