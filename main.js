'use strict';



function posX1() {
    posTower1 += 379;
}

function posX2() {
    posTower2 += 500;
}

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
    imgTower1.src = './img/tower11.png';
    let imgTower2 = new Image();
    imgTower2.src = './img/tower33.png';
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
                audioId = setInterval(() => newAudio.forEach((elem) => elem.volume = 0), 0);
                break;
            case false:
                audioStart.volume = 0.5
                audioBtn.style = 'background-image: url(img/Speaker_Icon.svg.png)';
                audioCondition = true;
                clearInterval(audioId);
                //newAudio.forEach((elem) => elem.volume = 0.5);
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
        name: 'Tower Green',
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

    function drawTowerGreen() {
        ctx.drawImage(imgTower1, posTower1, 0, 379, 812, 0, window.innerHeight - 550, 300, 550)
    }

    function drawTowerPink() {
        ctx.drawImage(imgTower2, posTower2, 0, 500, 1003, window.innerWidth - 300, window.innerHeight - 600, 300, 600)
    }

    function loop(timestamp) {

        drawTowerGreen();
        drawTowerPink();


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
            p.textContent = `${tower2.die ? tower1.name : tower2.name} Won`
            p.classList.add('p')
            let p2 = document.createElement('p');
            p2.textContent = `Total damage: ${leftDamage + rightDamage}`
            let p3 = document.createElement('p');
            p3.textContent = `${tower1.name} damage: ${leftDamage}`
            let p4 = document.createElement('p')
            p4.textContent = `${tower2.name} damage: ${rightDamage}`
            let p5 = document.createElement('p');
            p5.textContent = `Created units: ${countNewEnemy}`
            let p6 = document.createElement('p');
            p6.textContent = `Dead units:  ${(leftDamage + rightDamage) / 100}`
            lossBlock.append(p);
            lossBlock.append(p2);
            lossBlock.append(p3);
            lossBlock.append(p4);
            lossBlock.append(p5);
            lossBlock.append(p6);
            wrapper.appendChild(lossBlock);
            let btnRestart = document.createElement('button');
            btnRestart.addEventListener('click', () => location.reload());
            wrapper.appendChild(btnRestart);
            btnRestart.textContent = 'Restart';
            btnRestart.setAttribute('class', 'btn_restart');
            if (audioCondition === true) {
                let audioLoss = new Audio();
                audioLoss.src = './audio/loss.mp3';
                audioLoss.play();
            }
            clearEnemy();
            console.log(typeEnemyInBattle);
        }
    }

    let lastRender = 0;
    window.requestAnimationFrame(loop);
}


