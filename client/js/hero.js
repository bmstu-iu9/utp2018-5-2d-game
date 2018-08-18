'use strict';

const canvas_main = document.getElementById("main");
const context_main = canvas_main.getContext("2d");

const speed = 10;

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

    right_pressed: false,
    left_pressed: false,
    up_pressed: false,
    down_pressed: false,

    condition: false,
    interaction: false,

    health_x1: 20,
    health_y: 745,
    health_x2: 330
};

let animate = {};

animate['hero'] = {
    'to_the_left': {
        'el'    : null,
        'src'   : "images/animation-hero-64px.png",
        'currentFrame'  : 0, 
        'frames' : 7,
	'step' : 0,
	'speed' : 8
    },
    'to_the_right': {
                        'el'    : null,
                        'src'   : "images/animation-hero-64px-right.png",
			'currentFrame': 0,
			'frames' : 7,
	    		'step' : 0,
	    		'speed' : 8
    },
	'stand' : {
			'el'    : null,
                        'src'   : "images/hero-64 (1).png",
			'currentFrame': 0,
			'frames' : 0,
			'step' : 0,
			'speed' : 10
	},
	'fight-position' : {
		'el' : null,
		'src' : 'images/fighting-hero.png',
		'currentFrame' : 0,
		'frames' : 1,
		'step' : 0,
		'speed' : 8
	}
};

animate['enemies'] = {
	'fighting-position': {
		'el' : null,
		'src' : 'images/enemies-type-1.png',
		'currentFrame' : 0,
		'frames' : 1,
		'step' : 0,
		'speed' : 8
	}
};


for (let i in animate) {
	for (let j in animate[i]) {                        
		let img = new Image();                        
		img.src = animate[i][j].src;
		animate[i][j].el = img;
	 }
}

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
		context_main.drawImage(animate['hero']['to_the_left'].el, 
						Math.round(hero.radiusW*2*animate['hero']['to_the_left'].currentFrame), 0, 
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
			context_main.drawImage(animate['hero']['to_the_right'].el, 
						Math.round(hero.radiusW*2*animate['hero']['to_the_right'].currentFrame), 0, 
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

		else {
			context_main.drawImage(animate['hero']['stand'].el, 
							0, 0,
							hero.radiusW*2, hero.radiusH*2, 
							hero.x, hero.y,
							hero.radiusW*2, hero.radiusH*2);
		}
	}
	else if (hero.type === 'fight-position') {
		//сделать небольшие движения героя, чтобы оне не рисовался один поверх другого
		context_fighting.drawImage(animate['hero']['fight-position'].el, 
							0, 0,
							hero.FW, hero.FH, 
							hero.fightX, hero.fightY,
							hero.FW, hero.FH);
	}
	else if (hero.type === 'attack') {
		//нарисовать движения героя при атаке
	}
	else if (hero.type === 'defend') {
		//нарисовать движения героя при атаке
	}
	else if (hero.type === 'damaged') {
		//нарисовать движения героя при получении урона
	}
}

let intervalID = setInterval(drawDungeon_1, speed);
