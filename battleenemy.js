'use strict';

function battle() {
  arrEnemyLeft.forEach((enemyleft) => {
    arrEnemyRight.forEach((enemyright) => {
      if (enemyleft.positionX - 30 > enemyright.positionX - enemyright.width / enemyright.numberOfFrames) {
        if ((enemyleft.type === 'fly1' && (enemyright.type === 'fly1' || enemyright.type === 'fly2')) || (enemyright.type === 'fly1' && (enemyleft.type === 'fly1' || enemyleft.type === 'fly2'))) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          setInterval(() => enemyleft.live -= Math.floor(Math.random() * 5), 1000);
          setInterval(() => enemyright.live -= Math.floor(Math.random() * 5), 1000);
          if (enemyleft.live <= 0) {
            let index = arrEnemyLeft.indexOf(enemyleft);
            arrEnemyLeft.splice(index, 1);
            enemyright.step = Math.ceil(Math.random() * 2);
          } else if (enemyright.live <= 0) {
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            enemyleft.step = Math.ceil(Math.random() * 2);
          }
        } else if (enemyleft.type === 'fly2' && (enemyright.type === 'run1' || enemyright.type === 'run2' || enemyright.type === 'run3')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyright.ticksPerFrame = 10;
          setInterval(() => enemyright.live -= Math.floor(Math.random() * 5), 1000);
          if (enemyright.live <= 0) {
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            enemyleft.step = Math.ceil(Math.random() * 2);
          }
        } else if (enemyright.type === 'fly2' && (enemyleft.type === 'run1' || enemyleft.type === 'run2' || enemyleft.type === 'run3')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyleft.ticksPerFrame = 10;
          setInterval(() => enemyleft.live -= Math.floor(Math.random() * 5), 1000);
          if (enemyleft.live <= 0) {
            let index = arrEnemyLeft.indexOf(enemyleft);
            arrEnemyLeft.splice(index, 1);
            enemyright.step = Math.ceil(Math.random() * 2);
          }
        } else if (enemyleft.type === 'run1' && (enemyright.type === 'run1' || enemyright.type === 'run2' || enemyright.type === 'run3')) {
            enemyleft.step = 0.01;
            enemyright.step = 0.01;
            enemyleft.ticksPerFrame = 10;
            enemyright.ticksPerFrame = 10;
            setInterval(() => enemyright.live -= Math.floor(Math.random() * 5), 1000);
            if (enemyright.live <= 0) {
              let index = arrEnemyRight.indexOf(enemyright);
              arrEnemyRight.splice(index, 1);
              enemyleft.step = Math.ceil(Math.random() * 2);
              enemyleft.ticksPerFrame = 4;
            }
          } else if (enemyright.type === 'run1' && (enemyleft.type === 'run1' || enemyleft.type === 'run2' || enemyleft.type === 'run3')) {
            enemyleft.step = 0.01;
            enemyright.step = 0.01;
            enemyleft.ticksPerFrame = 10;
            enemyright.ticksPerFrame = 10;
            setInterval(() => enemyleft.live -= Math.floor(Math.random() * 5), 1000);
            if (enemyleft.live <= 0) {
              let index = arrEnemyLeft.indexOf(enemyleft);
              arrEnemyLeft.splice(index, 1);
              enemyright.step = Math.ceil(Math.random() * 2);
              enemyright.ticksPerFrame = 4;
            }
          } else if (enemyleft.type === 'run2' && (enemyright.type === 'fly1' || enemyright.type === 'fly2')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyleft.ticksPerFrame = 10;
          setInterval(() => enemyright.live -= Math.floor(Math.random() * 5), 1000);
          if (enemyright.live <= 0) {
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            enemyleft.step = Math.ceil(Math.random() * 2);
            enemyleft.ticksPerFrame = 4;
          }
        } else if (enemyright.type === 'run2' && (enemyleft.type === 'fly1' || enemyleft.type === 'fly2')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyright.ticksPerFrame = 10;
          setInterval(() => enemyleft.live -= Math.floor(Math.random() * 5), 1000);
          if (enemyleft.live <= 0) {
            let index = arrEnemyLeft.indexOf(enemyleft);
            arrEnemyLeft.splice(index, 1);
            enemyright.step = Math.ceil(Math.random() * 2);
            enemyright.ticksPerFrame = 4;
          } 
        } else if (enemyleft.type === 'run3' && (enemyright.type === 'fly1' || enemyright.type === 'fly2' || enemyright.type === 'run1' || enemyright.type === 'run2' || enemyright.type === 'run3')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyleft.ticksPerFrame = 10;
          setInterval(() => enemyright.live -= Math.floor(Math.random() * 20), 1000);
          if (enemyright.live <= 0) {
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            enemyleft.step = Math.ceil(Math.random() * 2);
            enemyleft.ticksPerFrame = 4;
          }
        } else if (enemyright.type === 'run3' && (enemyleft.type === 'fly1' || enemyleft.type === 'fly2' || enemyleft.type === 'run1' || enemyleft.type === 'run2' || enemyleft.type === 'run3')) {
          enemyleft.step = 0.01;
          enemyright.step = 0.01;
          enemyright.ticksPerFrame = 10;
          setInterval(() => enemyleft.live -= Math.floor(Math.random() * 20), 1000);
          if (enemyleft.live <= 0) {
            let index = arrEnemyLeft.indexOf(enemyleft);
            arrEnemyLeft.splice(index, 1);
            enemyright.step = Math.ceil(Math.random() * 2);
            enemyright.ticksPerFrame = 4;
          } 
        } 
      }
    })
  })
}