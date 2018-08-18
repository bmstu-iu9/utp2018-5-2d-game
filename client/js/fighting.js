'use strict';

const canvas_fighting = document.getElementById("fighting");
const context_fighting = canvas_fighting.getContext("2d");

const bg = new Image();
bg.src = ".../design/fight/fighting-back.png";
//размер героя в файтинге 189х292

let battle = false;
let was_attack_bool = false;
let was_defend_bool = false;
let enemyHealth = 100;
let damageToEnemy = 0;
let damageToHero = 0;

function drawFighting() {

	battle = true;
	drawFightingBg();
	historyLine();
	drawFightingEnemy();
	enemyStep();

}

function drawFightingBg() {
	
	context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
	context_fighting.drawImage(bg, 0, 0);
}

function historyLine(damageToEnemy, isHeroDefend) {
	let historyLineX = 308;
	let historyLineY = 750;
	context_fighting.fillStyle = "#ffffff";
    context_fighting.font = '15px Arial';
    context_fighting.fillText("Начало боя.", historyLineX, historyLineY, 344);
}

function heroStep() {
	if (enemyHealth <= 0) {
		hero.type = 'usual';
		currentEnemy.status = 0;
		enemyHealth = 100;
		battle = false;
		context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
	}
	
	else if (hero.health <= 0) {
		const youLoseImg = new Image('images/youLoseImg.png');
		battle = false;
		context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
		context_pop_up_window.drawImage(youLoseImg, 234, 309);
	}
	
	else {
		hero.type = 'fight-position';
		damageToHero = Math.floor(Math.random() * (hero.max - hero.min + 1)) + hero.min;
		
		if (was_attack_bool) {
			hero.type = 'damaged';
			hero.health -= damageToHero;
			console.log('прошлый ход героя был атакой, жизнь героя: ' + hero.health);
			was_attack_bool = false;
		}
		else if (was_defend_bool) {
			hero.type = 'defend';
			damageToHero -= hero.skillDefense;
			hero.health -= damageToHero;
			console.log('прошлый ход героя был защитой, жизнь героя: ' + hero.health);
			was_defend_bool = false;
		}
	}
}

function enemyStep() {
	if (enemyHealth <= 0) {
			hero.type = 'usual';
			currentEnemy.status = 0;
			enemyHealth = 100;
			battle = false;
			context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
		}
		
	else if (hero.health <= 0) {
		const youLoseImg = new Image('images/youLoseImg.png');
		battle = false;
		context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
		context_pop_up_window.drawImage(youLoseImg, 234, 309);
	}
	
	else {
		if (was_attack_bool) {
		damageToEnemy = Math.floor(Math.random() * (currentEnemy.max - currentEnemy.min + 1)) + currentEnemy.min; //определение урона
		enemyHealth -= damageToEnemy;
		console.log('Произошла атака, жизнь врага: ' + enemyHealth);
		}
		else if (was_defend_bool) {
		console.log('Атаки не было, жизнь врага: ' + enemyHealth);
		}
		heroStep();
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

let currentEnemy = {};

function curEnemy(enemy) {
	currentEnemy = enemy;
	currentEnemy.type = 'fighting-position';
}

function drawFightingEnemy() {
	if (currentEnemy.type === 'fighting-position') {
		console.log('нарисовал обычного врага');
	context_fighting.drawImage(animate['enemies']['fighting-position'].el, 
							0, 0,
							currentEnemy.FW, currentEnemy.FH, 
							currentEnemy.fightX, currentEnemy.fightY,
							currentEnemy.FW, currentEnemy.FH);
	}
	else if (currentEnemy.type === 'defend') {
		console.log('нарисовал защищающегося врага');
	context_fighting.drawImage(animate['enemies']['fighting-position'].el, 
							0, 0,
							currentEnemy.FW, currentEnemy.FH, 
							currentEnemy.fightX, currentEnemy.fightY,
							currentEnemy.FW, currentEnemy.FH);
	}
}
