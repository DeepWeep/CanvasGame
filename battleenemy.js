'use strict';

let arrAudioHit = ['./audio/mech1.mp3', './audio/mech2.mp3', './audio/mech3.mp3', './audio/mech4.mp3', './audio/mech5.mp3', './audio/hit.mp3']
let newAudio = [];

function rund() {
  return Math.floor(Math.random() * (7 - 3)) + 3;
}

function damage(arr, enemyWin, enemyDead) {
  enemyWin.step = 0.01;
  enemyDead.step = 0.01;
  enemyWin.ticksPerFrame = 10;
  enemyDead.ticksPerFrame = 10;
  setInterval(() => enemyDead.live -= rund(), 100);
  if (enemyDead.live < 0) {
    let index = arr.indexOf(enemyDead);
    arr.splice(index, 1);
    enemyWin.step = rund();
    enemyWin.ticksPerFrame = 4;
    if (arr === arrEnemyRight) {
      leftDamage += 100;
    } else {
      rightDamage += 100;
    }
    let audio = new Audio(arrAudioHit[Math.floor(Math.random() * 6)]);
    newAudio.push(audio);
    audio.play();
  }
}

function damageFly(arr, enemyWin, enemyDead) {
  enemyWin.step = 0.01;
  enemyDead.step = 0.01;
  enemyDead.ticksPerFrame = 10;
  setInterval(() => enemyDead.live -= rund(), 100);
  if (enemyDead.live < 0) {
    let index = arr.indexOf(enemyDead);
    arr.splice(index, 1);
    enemyWin.step = rund();
    if (arr === arrEnemyRight) {
      leftDamage += 100;
      let audio = new Audio('./audio/drak.mp3');
      newAudio.push(audio);
      audio.play();
    } else {
      rightDamage += 100;
      let audio = new Audio('./audio/voron.mp3');
      newAudio.push(audio);
      audio.play();
    }
    let audio = new Audio('./audio/damage2.mp3');
    newAudio.push(audio);
    audio.play();
  }
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
            let audio = new Audio('./audio/drak.mp3');
            newAudio.push(audio);
            audio.play();
            let audio2 = new Audio('./audio/damage2.mp3');
            newAudio.push(audio2);
            audio2.play();
          } else if (enemyright.live < 0) {
            let index = arrEnemyRight.indexOf(enemyright);
            arrEnemyRight.splice(index, 1);
            enemyleft.step = rund();
            leftDamage += 100;
            let audio = new Audio('./audio/voron.mp3');
            newAudio.push(audio);
            audio.play();
            let audio2 = new Audio('./audio/damage2.mp3');
            newAudio.push(audio2);
            audio2.play();
          }
        } else if (enemyleft.type === 'fly2' && (enemyright.type === 'run1' || enemyright.type === 'run2' || enemyright.type === 'run3')) {
          damageFly(arrEnemyRight, enemyleft, enemyright);
        } else if (enemyright.type === 'fly2' && (enemyleft.type === 'run1' || enemyleft.type === 'run2' || enemyleft.type === 'run3')) {
          damageFly(arrEnemyLeft, enemyright, enemyleft);
        } else if (enemyleft.type === 'run1' && (enemyright.type === 'run1' || enemyright.type === 'run2' || enemyright.type === 'run3')) {
          damage(arrEnemyRight, enemyleft, enemyright);
        } else if (enemyright.type === 'run1' && (enemyleft.type === 'run1' || enemyleft.type === 'run2' || enemyleft.type === 'run3')) {
          damage(arrEnemyLeft, enemyright, enemyleft);
        } else if (enemyleft.type === 'run2' && (enemyright.type === 'fly1' || enemyright.type === 'fly2')) {
          damage(arrEnemyRight, enemyleft, enemyright);
        } else if (enemyright.type === 'run2' && (enemyleft.type === 'fly1' || enemyleft.type === 'fly2')) {
          damage(arrEnemyLeft, enemyright, enemyleft);
        } else if (enemyleft.type === 'run3' && (enemyright.type === 'fly1' || enemyright.type === 'fly2' || enemyright.type === 'run1' || enemyright.type === 'run2' || enemyright.type === 'run3')) {
          damage(arrEnemyRight, enemyleft, enemyright);
        } else if (enemyright.type === 'run3' && (enemyleft.type === 'fly1' || enemyleft.type === 'fly2' || enemyleft.type === 'run1' || enemyleft.type === 'run2' || enemyleft.type === 'run3')) {
          damage(arrEnemyLeft, enemyright, enemyleft);
        } 
      }
    })
  })
}