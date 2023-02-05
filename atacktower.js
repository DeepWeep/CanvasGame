'use strict';

function atackTower(tower, damage) {
    if (tower.current_hp >= damage) {
        tower.current_hp = tower.current_hp - damage;
        if (tower.name === 'Tower Green') {
            inputTower1.value = tower.current_hp;
            spantower1Ch.textContent = tower.current_hp;
        } else {
            inputTower2.value = tower.current_hp;
            spantower2Ch.textContent = tower.current_hp;
        }
    } else {
        tower.die = true;
        tower.current_hp = 0;
        if (tower.name === 'Tower Grey') {
            inputTower1.value = tower.current_hp;
            spantower1Ch.textContent = tower.current_hp;
        } else {
            inputTower2.value = tower.current_hp;
            spantower2Ch.textContent = tower.current_hp;
        }
    }
}