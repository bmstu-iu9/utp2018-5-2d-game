'use strict';

const canvas_fighting = document.getElementById("fighting");
const context_fighting = canvas_fighting.getContext("2d");

const bg = new Image();
bg.src = "../design/fight/fighting-back.png";
//размер героя в файтинге 189х292

let battle = false;
let was_attack_bool = false;
let was_defend_bool = false;
let enemyHealth = 100;
let damageToEnemy = 0;
let damageToHero = 0;

function drawFighting() {

	battle = true;
	was_attack_bool = false;
	was_defend_bool = false;
	drawFightingBg();
	historyLine();
	drawFightingEnemy();
	heroStep();

}

function drawFightingBg() {
	if (currentEnemy.isBoss) {
		context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
		context_fighting.drawImage(boss_bg, 0, 0);
	}
	else if (!currentEnemy.isBoss) {
		context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
		context_fighting.drawImage(bg, 0, 0);
	}
}

function historyLine(damageToEnemy, isHeroDefend) {
	let historyLineX = 308;
	let historyLineY = 750;
	context_fighting.fillStyle = "#ffffff";
        context_fighting.font = '15px Arial';
        context_fighting.fillText("Начало боя.", historyLineX, historyLineY, 344);
	
	if (was_attack_bool) {
		
		context_fighting.fillText(hero.name + "нанёс " + damageToEnemy + " урона.", historyLineX, historyLineY, 344);
	}
	else if (was_defend_bool) {
		
		context_fighting.fillText(hero.name + "принял защитную стойку.", historyLineX, historyLineY, 344);
	}
}

function heroStep() {

	if ((enemyHealth <= 0) || (hero.health <= 0)) {
		finish();
	}
	
	else {
		hero.type = 'fight-position';
		damageToHero = Math.floor(Math.random() * (currentEnemy.max - currentEnemy.min + 1)) + currentEnemy.min;
		historyLine();
		
		if (was_attack_bool) {
			was_attack_bool = false;
			hero.type = 'damaged';
			hero.health -= damageToHero;
			console.log('прошлый ход героя был атакой, жизнь героя: ' + hero.health);
		}
		else if (was_defend_bool) {
			was_defend_bool = false;
			hero.type = 'defend';
			damageToHero -= hero.skillDefense;
			hero.health -= damageToHero;
			console.log('прошлый ход героя был защитой, жизнь героя: ' + hero.health);
		}
		hero.type = 'fight-position';
	}
	
	if ((enemyHealth <= 0) || (hero.health <= 0)) {
		finish();
	}
}

function enemyStep() {
	if ((enemyHealth <= 0) || (hero.health <= 0)) {
		finish();
	}
	
	else {
		if (was_attack_bool) {
		damageToEnemy = Math.floor(Math.random() * (hero.max - hero.min + 1)) + hero.min; //определение урона
		enemyHealth -= damageToEnemy;
		console.log('Произошла атака, жизнь врага: ' + enemyHealth);
		}
		else if (was_defend_bool) {
		console.log('Атаки не было, жизнь врага: ' + enemyHealth);
		}
		heroStep();
	}
		if ((enemyHealth <= 0) || (hero.health <= 0)) {
		finish();
	}
	
}


function attack() {
	
	hero.type = 'attack';
	currentEnemy.type = 'defend';
	was_attack_bool = true; 
	enemyStep();
}

function defend() {
	
	hero.type = 'defend';
	was_defend_bool = true;
	enemyStep();
}

function escape() {
	hero.health /= 5;
	battle = false;
	hero.type = 'usual';
	context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
}

function finish() {
	if (enemyHealth <= 0) {
		if(currentEnemy.isBoss){
			setInterval(drawWin, 10);
		}
		else if (!currentEnemy.isBoss) {
			hero.type = 'usual';
			currentEnemy.status = 0;
			battle = false;
			context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
			enemyHealth = 100;
		}
	}
		
	else if (hero.health <= 0) {
		hero.type = 'dead';
		battle = false;
		context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
		drawYouLose();
	}
}

let currentEnemy = {};

function curEnemy(enemy) {
	currentEnemy = enemy;
	if (currentEnemy.isBoss) {
		currentEnemy.type = 'boss';
	}
	else {
		currentEnemy.type = 'fighting-position';
	}
}

function drawFightingEnemy() {
	if (currentEnemy.type === 'fighting-position') {
		context_fighting.drawImage(enemiesImg, 
								0, animate['enemies']['fighting-position'].sy,
								currentEnemy.FW, currentEnemy.FH, 
								currentEnemy.fightX, currentEnemy.fightY,
								currentEnemy.FW, currentEnemy.FH);
	}
	else if (currentEnemy.type === 'defend') {
		context_fighting.drawImage(enemiesImg, 
								0, animate['enemies']['fighting-position'].sy,
								currentEnemy.FW, currentEnemy.FH, 
								currentEnemy.fightX, currentEnemy.fightY,
								currentEnemy.FW, currentEnemy.FH);
	}
	else if (currentEnemy.type === 'boss') {
		context_fighting.drawImage(enemiesImg, 
								0, animate['enemies']['boss'].sy,
								currentEnemy.FW, currentEnemy.FH, 
								currentEnemy.fightX, currentEnemy.fightY,
								currentEnemy.FW, currentEnemy.FH);
	}
}

function drawWin() {
	clearInterval(intervalID);
	const winImg = new Image();
	winImg.src = '../design/fighting/winImg.png';
	context_statistic.clearRect(0, 0, canvas_statistic.width, canvas_statistic.height);
	context_statistic.drawImage(winImg, 0, 0);
}

function drawLose() {
	clearInterval(intervalID);
	const loseImg = new Image();
	loseImg.src = '../design/fighting/loseImg.png';
	context_statistic.clearRect(0, 0, canvas_statistic.width, canvas_statistic.height);
	context_statistic.drawImage(loseImg, 0, 0);
}
