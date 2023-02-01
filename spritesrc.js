'use strict';

let left1 = new Image();
left1.src = './img/left1.png';

let left2 = new Image();
left2.src = './img/left2.png';

let left3 = new Image();
left3.src = './img/left3.png';

let left4 = new Image();
left4.src = './img/drag.png';

let right1 = new Image();
right1.src = './img/right1.png';

let right2 = new Image();
right2.src = './img/right2.png';

let right3 = new Image();
right3.src = './img/right3.png';

let right4 = new Image();
right4.src = './img/right4.png';

let arrEnemy = [];
let arrTypeEnemyLeft = ['left1', 'left2', 'left3', 'left4'];
let arrTypeEnemyRight = ['right1', 'right2', 'right3', 'right4'];
let arrEnemyLeft = [];
let arrEnemyRight = [];

let leftId;
let rightId;
let clearId;
let runId = null;
