'use strict';

const canvas_main = document.getElementById("main");
const context_main = canvas_main.getContext("2d");

const speed = 10;

const animateImg = new Image();
animateImg.src = "../design/hero/animation-hero-64px.png";

let hero = {

    x: 256,
    y: 640,
    radiusW: 21.5,
    radiusH: 32,
    dx: 1,
    dy: 1,
	fightX: 54,
	fightY: 245,
	FW: 221,
	FH: 300,
	health: 100,
	max: 20,
	min: 10,
	skillDefense: 10,
	gold: 0,
	type: 'usual',
	name: 'Имя пользователя',

    right_pressed: false,
    left_pressed: false,
    up_pressed: false,
    down_pressed: false,

    condition: false,
    interaction: false,
    isQuest: false,

    health_x1: 20,
    health_y: 745,
    health_x2: 330
};
let animate = {};

animate['hero'] = {
    'to_the_left': {
		'sy': 0,
		'width': 43,
		'height': 64,
		'currentFrame'  : 0, 
		'frames' : 7,
		'step' : 0,
		'speed' : 8
    },
    'to_the_right': {
		'sy': 64,
		'width': 43,
		'height': 64,
		'currentFrame': 0,
		'frames' : 7,
		'step' : 0,
		'speed' : 8
    },
	'down' : {
		'sy': 128,
		'width': 43,
		'height': 64,
		'currentFrame': 0,
		'frames' : 3,
		'step' : 0,
		'speed' : 8
	},
	'stand' : {
		'sy': 256,
		'width': 48,
		'height': 64,
		'currentFrame': 0,
		'frames' : 1,
		'step' : 0,
		'speed' : 8
	},
	'fight-position' : {
		'x': 54,
		'y': 245,
		'sy': 320,
		'width': 221,
		'height': 300,
		'currentFrame' : 0,
		'frames' : 1,
		'step' : 0,
		'speed' : 8
	}
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
let cond_bool = false;

function keyDownHandler(e) {

    //movement
    if ((e.keyCode === 39) || (e.keyCode === 68)) {
        hero.right_pressed = true;
    }

    if ((e.keyCode === 37) || (e.keyCode === 65)) {
        hero.left_pressed = true;
    }

    if ((e.keyCode === 38) || (e.keyCode === 87)) {
        hero.up_pressed = true;
    }

    if ((e.keyCode === 40) || (e.keyCode === 83)) {
        hero.down_pressed = true;
    }


    //condition
    if ((e.keyCode === 90) && cond_bool) {

        hero.condition = false;
        cond_bool = false;
    } else if (e.keyCode === 90) {
        
        hero.condition = true;
        cond_bool = true;
    }

    if (e.keyCode === 70) {
        hero.interaction = true;
    }

    if (e.keyCode === 73) {
        if (hero.isQuest == false)
        	hero.isQuest = true;
        else
        	hero.isQuest = false;
    }
}

function keyUpHandler(e) {

    //movement
    if ((e.keyCode === 39) || (e.keyCode === 68)) {
        hero.right_pressed = false;
    }

    if ((e.keyCode === 37) || (e.keyCode === 65)) {
        hero.left_pressed = false;
    }

    if ((e.keyCode === 38) || (e.keyCode === 87)) {
        hero.up_pressed = false;
    }

    if ((e.keyCode === 40) || (e.keyCode === 83)) {
        hero.down_pressed = false;
    }

    if (e.keyCode === 70) {
        hero.interaction = false;
    }
}

function drawHero() {

    if (hero.left_pressed &&
        (hero.x > 0)) {

        hero.x -= hero.dx;
    } else if (hero.right_pressed &&
        (hero.x + 2 * hero.radiusW < canvas_main.width)) {

        hero.x += hero.dx;
    } else if (hero.up_pressed &&
        (hero.y > 0)) {

        hero.y -= hero.dy;
    } else if (hero.down_pressed &&
        (hero.y + 2 * hero.radiusH < canvas_main.height)) {

        hero.y += hero.dy;
    }
	
	if (hero.type === 'usual') {
		if (hero.left_pressed) {
		context_main.drawImage(animateImg, 
						Math.round(hero.radiusW*2*animate['hero']['to_the_left'].currentFrame), animate['hero']['to_the_left'].sy, 
						hero.radiusW*2, hero.radiusH*2, 
						hero.x, hero.y,
						hero.radiusW*2, hero.radiusH*2);
		if (animate['hero']['to_the_left'].step >= animate['hero']['to_the_left'].speed) {
			if (animate['hero']['to_the_left'].currentFrame == animate['hero']['to_the_left'].frames) {
				animate['hero']['to_the_left'].currentFrame = 0;
			 } else {
				animate['hero']['to_the_left'].currentFrame++;
				animate['hero']['to_the_left'].step = 0;
			 }
			}
			else animate['hero']['to_the_left'].step++;
		}
		else if (hero.right_pressed) {
			context_main.drawImage(animateImg, 
						Math.round(hero.radiusW*2*animate['hero']['to_the_right'].currentFrame), animate['hero']['to_the_right'].sy, 
						hero.radiusW*2, hero.radiusH*2, 
						hero.x, hero.y,
						hero.radiusW*2, hero.radiusH*2);
		if (animate['hero']['to_the_right'].step >= animate['hero']['to_the_right'].speed) {				
			if (animate['hero']['to_the_right'].currentFrame == animate['hero']['to_the_right'].frames) {
				animate['hero']['to_the_right'].currentFrame = 0;
			 } else {
				animate['hero']['to_the_right'].currentFrame++;
				animate['hero']['to_the_right'].step = 0;
			 }
			}
			else animate['hero']['to_the_right'].step++;
		}
		else if (hero.down_pressed) {
			context_main.drawImage(animateImg, 
						Math.round(hero.radiusW*2*animate['hero']['down'].currentFrame), animate['hero']['down'].sy, 
						hero.radiusW*2, hero.radiusH*2, 
						hero.x, hero.y,
						hero.radiusW*2, hero.radiusH*2);
		if (animate['hero']['down'].step >= animate['hero']['down'].speed) {				
			if (animate['hero']['down'].currentFrame == animate['hero']['down'].frames) {
				animate['hero']['down'].currentFrame = 0;
			 } else {
				animate['hero']['down'].currentFrame++;
				animate['hero']['down'].step = 0;
			 }
			}
			else animate['hero']['down'].step++;
		}
		
		else {
			context_main.drawImage(animateImg, 
							0, animate['hero']['stand'].sy,
							animate['hero']['stand'].width, animate['hero']['stand'].height, 
							hero.x, hero.y,
							animate['hero']['stand'].width, animate['hero']['stand'].height);
		}
	}
	
	else if (hero.type === 'fight-position') {
		//сделать небольшие движения героя, чтобы оне не рисовался один поверх другого
		context_fighting.drawImage(animateImg, 
							0, animate['hero']['fight-position'].sy,
							hero.FW, hero.FH, 
							hero.fightX, hero.fightY,
							hero.FW, hero.FH);
	}
	else if (hero.type === 'attack') {
		//нарисовать движения героя при атаке
	}
	else if (hero.type === 'defend') {
		//нарисовать движения героя при защите
	}
	else if (hero.type === 'damaged') {
		//нарисовать движения героя при получении урона
	}
}

let intervalID = setInterval(drawDungeon_1, speed);
