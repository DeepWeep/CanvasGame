'use strict';

let left1 = new Image();
left1.src = './img/left1.png';

let left2 = new Image();
left2.src = './img/left2.png';

let left3 = new Image();
left3.src = './img/left3.png';

let left4 = new Image();
left4.src = './img/drag.png';

let left5 = new Image();
left5.src = './img/left5.png';

let right1 = new Image();
right1.src = './img/right1.png';

let right2 = new Image();
right2.src = './img/right2.png';

let right3 = new Image();
right3.src = './img/right3.png';

let right4 = new Image();
right4.src = './img/right4.png';

let right5 = new Image();
right5.src = './img/right5.png';

let arrTypeEnemyLeft = ['left1', 'left2', 'left3', 'left4', 'left5'];
let arrTypeEnemyRight = ['right1', 'right2', 'right3', 'right4', 'right5'];
let arrEnemyLeft = [];
let arrEnemyRight = [];
let typeEnemyInBattle = new Set();
let canvas;
let ctx;
let tower1;
let tower2;
let inputTower1;
let spantower1Ch;
let inputTower2;
let spantower2Ch;
let leftId;
let rightId;
let clearId;
let audioId;
let runId = null;
let countNewEnemy = 0;
let leftDamage = 0;
let rightDamage = 0;
let posTower1 = 0;
let posTower2 = 0;
let body = document.getElementsByClassName('body')[0];