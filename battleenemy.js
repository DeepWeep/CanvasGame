'use strict';

function rund() {
  return Math.floor(Math.random() * (7 - 3)) + 3;
}

function battle() {
  arrEnemyLeft.forEach((enemyleft) => {
    arrEnemyRight.forEach((enemyright) => {
      if (enemyleft.positionX - 30 > enemyright.positionX - enemyright.width / enemyright.numberOfFrames) {
        if ((enemyleft.type === 'fly1' && (enemyright.type === 'fly1' || enemyright.type === 'fly2')) || (enemyright.type === 'fly1' && (enemyleft.type === 'fly1' || enemyleft.type === 'fly2'))) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          setInterval(() => enemyleft.live -= rund(), 100);
          setInterval(() => enemyright.live -= rund(), 100);
          if (enemyleft.live < 0) {
            let index = arrEnemyLeft.indexOf(enemyleft);
            arrEnemyLeft.splice(index, 1);
            enemyright.step = rund();
            rightDamage += 100;
          } else if (enemyright.live < 0) {
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            enemyleft.step = rund();
            leftDamage += 100;
          }
        } else if (enemyleft.type === 'fly2' && (enemyright.type === 'run1' || enemyright.type === 'run2' || enemyright.type === 'run3')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyright.ticksPerFrame = 10;
          setInterval(() => enemyright.live -= rund(), 100);
          if (enemyright.live < 0) {
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            enemyleft.step = rund();
            leftDamage += 100;
          }
        } else if (enemyright.type === 'fly2' && (enemyleft.type === 'run1' || enemyleft.type === 'run2' || enemyleft.type === 'run3')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyleft.ticksPerFrame = 10;
          setInterval(() => enemyleft.live -= rund(), 100);
          if (enemyleft.live < 0) {
            let index = arrEnemyLeft.indexOf(enemyleft);
            arrEnemyLeft.splice(index, 1);
            enemyright.step = rund();
            rightDamage += 100;
          }
        } else if (enemyleft.type === 'run1' && (enemyright.type === 'run1' || enemyright.type === 'run2' || enemyright.type === 'run3')) {
            enemyleft.step = 0.01;
            enemyright.step = 0.01;
            enemyleft.ticksPerFrame = 10;
            enemyright.ticksPerFrame = 10;
            setInterval(() => enemyright.live -= rund(), 100);
            if (enemyright.live < 0) {
              let index = arrEnemyRight.indexOf(enemyright);
              arrEnemyRight.splice(index, 1);
              enemyleft.step = rund();
              enemyleft.ticksPerFrame = 4;
              leftDamage += 100;
            }
          } else if (enemyright.type === 'run1' && (enemyleft.type === 'run1' || enemyleft.type === 'run2' || enemyleft.type === 'run3')) {
            enemyleft.step = 0.01;
            enemyright.step = 0.01;
            enemyleft.ticksPerFrame = 10;
            enemyright.ticksPerFrame = 10;
            setInterval(() => enemyleft.live -= rund(), 100);
            if (enemyleft.live < 0) {
              let index = arrEnemyLeft.indexOf(enemyleft);
              arrEnemyLeft.splice(index, 1);
              enemyright.step = rund();
              enemyright.ticksPerFrame = 4;
              rightDamage += 100;
            }
          } else if (enemyleft.type === 'run2' && (enemyright.type === 'fly1' || enemyright.type === 'fly2')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyleft.ticksPerFrame = 10;
          setInterval(() => enemyright.live -= rund());
          if (enemyright.live < 0) {
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            enemyleft.step = rund();
            enemyleft.ticksPerFrame = 4;
            leftDamage += 100;
          }
        } else if (enemyright.type === 'run2' && (enemyleft.type === 'fly1' || enemyleft.type === 'fly2')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyright.ticksPerFrame = 10;
          setInterval(() => enemyleft.live -= rund(), 100);
          if (enemyleft.live < 0) {
            let index = arrEnemyLeft.indexOf(enemyleft);
            arrEnemyLeft.splice(index, 1);
            enemyright.step = rund();
            enemyright.ticksPerFrame = 4;
            rightDamage += 100;
          } 
        } else if (enemyleft.type === 'run3' && (enemyright.type === 'fly1' || enemyright.type === 'fly2' || enemyright.type === 'run1' || enemyright.type === 'run2' || enemyright.type === 'run3')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyleft.ticksPerFrame = 10;
          setInterval(() => enemyright.live -= rund(), 100);
          if (enemyright.live < 0) {
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            enemyleft.step = rund();
            enemyleft.ticksPerFrame = 4;
            leftDamage += 100;
          }
        } else if (enemyright.type === 'run3' && (enemyleft.type === 'fly1' || enemyleft.type === 'fly2' || enemyleft.type === 'run1' || enemyleft.type === 'run2' || enemyleft.type === 'run3')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyright.ticksPerFrame = 10;
          setInterval(() => enemyleft.live -= rund(), 100);
          if (enemyleft.live < 0) {
            let index = arrEnemyLeft.indexOf(enemyleft);
            arrEnemyLeft.splice(index, 1);
            enemyright.step = rund();
            enemyright.ticksPerFrame = 4;
            rightDamage += 100;
          } 
        } 
      }
    })
  })
}