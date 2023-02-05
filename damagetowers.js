'use strict';

function damageTower() {
    arrEnemyLeft.forEach((enemyleft) => {
        if ((enemyleft.positionX + enemyleft.width / enemyleft.numberOfFrames) >= positionx()) {
            atackTower(tower2, 10);
            let index = arrEnemyLeft.indexOf(enemyleft);
            arrEnemyLeft.splice(index, 1);
            return;
        }
    });
    arrEnemyRight.forEach((enemyright) => {
        if (enemyright.positionX <= 150) {
            atackTower(tower1, 10);
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            return;
        }
    });
}