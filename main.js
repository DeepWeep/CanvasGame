'use strict';

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
let runId = null;
let countNewEnemy = 0;
let leftDamage = 0;
let rightDamage = 0;

function start() {
    document.querySelector('.info').remove();
    document.querySelector('.discription').remove();
    document.querySelector('.btn').remove();
    const wrapper = document.querySelector('.game');
    let audioStart = new Audio();
    audioStart.src = './audio/start.mp3';
    audioStart.play();
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    let width;
    let height;
    startSprite();
    let imgTower1 = new Image();
    imgTower1.src = './img/tower1.png';
    let imgTower2 = new Image();
    imgTower2.src = './img/tower2.png';
    let pause = false;
    let pausebtn = document.createElement('button');
    let audioBtn = document.createElement('button')
    audioBtn.classList.add('audioBtn')
    pausebtn.classList.add('pausebtn');
    pausebtn.innerHTML = `<img src="./img/Pause-Button.png" alt="pause">`;
    let audioCondition = true;
    audioBtn.addEventListener('click', () => {
        switch (audioCondition) {
            case true:
                audioStart.volume = 0;
                audioBtn.style = 'background-image: url(img/109-1095591_no-audio-icon-free-download-png-and-vector.png);'
                audioCondition = false;
                break;
            case false:
                audioStart.volume = 0.5
                audioBtn.style = 'background-image: url(img/Speaker_Icon.svg.png)';
                audioCondition = true;
                break;
        }
    })
    pausebtn.addEventListener('click', () => {
        createPause();
    });
    wrapper.appendChild(pausebtn);
    wrapper.appendChild(audioBtn);

    function createPause() {
        if (pause) {
            pause = false;
            document.querySelector('.bg_pause').style.display = 'none';
            audioStart.play();
            window.requestAnimationFrame(loop);
            startSprite();
        } else {
            pause = true;
            audioStart.pause();
            document.querySelector('.bg_pause').style.display = 'flex';
            pauseSprite();
        }
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.onresize = resize;
    resize();

    wrapper.appendChild(canvas);

    tower1 = {
        name: 'Tower Grey',
        x: 0,
        y: canvas.height,
        hp: 100,
        current_hp: 100,
        die: false,

    }

    tower2 = {
        name: 'Tower Pink',
        x: canvas.width,
        y: canvas.height,
        hp: 100,
        current_hp: 100,
        die: false,
    }

    let divTower1 = document.createElement('div');
    divTower1.classList.add('tower-indicator');
    divTower1.classList.add('tower1');
    inputTower1 = document.createElement('progress');
    inputTower1.max = tower1.hp;
    inputTower1.value = tower1.current_hp;
    divTower1.appendChild(inputTower1);
    let pTower1 = document.createElement('p');
    spantower1Ch = document.createElement('span');
    spantower1Ch.textContent = tower1.current_hp;
    pTower1.append(spantower1Ch);
    divTower1.append(pTower1);
    wrapper.append(divTower1);


    let divTower2 = document.createElement('div');
    divTower2.classList.add('tower-indicator');
    divTower2.classList.add('tower2');
    inputTower2 = document.createElement('progress');
    inputTower2.max = tower2.hp;
    inputTower2.value = tower2.current_hp;
    divTower2.appendChild(inputTower2);
    let pTower2 = document.createElement('p');
    spantower2Ch = document.createElement('span');
    spantower2Ch.textContent = tower2.current_hp;
    pTower2.append(spantower2Ch);
    divTower2.append(pTower2);
    wrapper.append(divTower2);

    function drawTowers() {
        ctx.drawImage(imgTower1, tower1.x - 150, tower1.y - 500, 400, 500);
        ctx.drawImage(imgTower2, tower2.x - 250, tower2.y - 580, 400, 600);
    }

    function loop(timestamp) {

        drawTowers();
    

        if (tower1.current_hp !== 0 && tower2.current_hp !== 0) {
            if (!pause) {
                lastRender = timestamp;
                window.requestAnimationFrame(loop);
            }
        } else {
            audioStart.pause();
            pausebtn.remove();
            audioBtn.remove();
            let lossBlock = document.createElement('div');
            lossBlock.classList.add('game-over');
            let p = document.createElement('p');
            p.textContent = `${tower2.die ? tower1.name : tower2.name} win: total damage ${leftDamage + rightDamage}, ${tower1.name} damage - ${leftDamage}, ${tower2.name} damage - ${rightDamage}, created units - ${countNewEnemy}, dead units - ${(leftDamage + rightDamage) / 100}`;
            lossBlock.appendChild(p);
            let span = document.createElement('span');
            span.textContent = 'GAME OVER';
            lossBlock.appendChild(span);
            wrapper.appendChild(lossBlock);
            let btnRestart = document.createElement('button');
            btnRestart.addEventListener('click', () => location.reload());
            wrapper.appendChild(btnRestart);
            btnRestart.textContent = 'Restart';
            btnRestart.setAttribute('class', 'btn_restart');
            let audioLoss = new Audio();
            audioLoss.src = './audio/loss.mp3';
            audioLoss.play();
            clearEnemy();
            console.log(typeEnemyInBattle);
        }
    }

    let lastRender = 0;
    window.requestAnimationFrame(loop);
}


