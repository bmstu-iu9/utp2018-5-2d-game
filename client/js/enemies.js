'use strict';

const enemiesImg = new Image();
enemiesImg.src = "..design/enemies/enemiesImg.png";

let enemies = {};
 

enemies['dungeon-1'] = {
	'enemy-1': { 
				'name': 'Злыдень',
				'max': 25,
				'min': 10,
				'x': 512,
				'y': 640,
				'width': 38,
				'height': 64,
				'fightX': 520,
				'fightY': 250,
				'FW': 175,
				'FH': 292,
				'status': 1,
				'type': 'enemy-on-map'
	},
	'enemy-2': { 
				'name': 'Злыдень',
				'max': 25,
				'min': 10,
				'x': 650,
				'y': 64,
				'width': 38,
				'height': 64,
				'fightX': 520,
				'fightY': 250,
				'FW': 175,
				'FH': 292,
				'status': 1,
				'type': 'enemy-on-map'
	}
}

enemies['dungeon-2'] = {
	'enemy-1': { 
				'name': 'Злыдень',
				'max': 25,
				'min': 10,
				'x': 270,
				'y': 145,
				'width': 38,
				'height': 64,
				'fightX': 520,
				'fightY': 250,
				'FW': 175,
				'FH': 292,
				'status': 1,
				'type': 'enemy-on-map'
	},
	'enemy-2': { 
				'name': 'Злыдень',
				'max': 25,
				'min': 10,
				'x': 50,
				'y': 640,
				'width': 38,
				'height': 64,
				'fightX': 520,
				'fightY': 250,
				'FW': 175,
				'FH': 292,
				'status': 1,
				'type': 'enemy-on-map'
	}
}

enemies['dungeon-3'] = {
	'enemy-1': { 
				'name': 'Злыдень',
				'max': 25,
				'min': 10,
				'x': 505,
				'y': 375,
				'width': 38,
				'height': 64,
				'fightX': 520,
				'fightY': 250,
				'FW': 175,
				'FH': 292,
				'status': 1,
				'type': 'enemy-on-map'
	},
	'enemy-2': { 
				'name': 'Злыдень',
				'max': 25,
				'min': 10,
				'x': 125,
				'y': 445,
				'width': 38,
				'height': 64,
				'fightX': 520,
				'fightY': 250,
				'FW': 175,
				'FH': 292,
				'status': 1,
				'type': 'enemy-on-map'
	}
}

enemies['dungeon-4'] = {
	'enemy-1': { 
				'name': 'Злыдень',
				'max': 25,
				'min': 10,
				'x': 200,
				'y': 395,
				'width': 38,
				'height': 64,
				'fightX': 520,
				'fightY': 250,
				'FW': 175,
				'FH': 292,
				'status': 1,
				'type': 'enemy-on-map'
	},
	'enemy-2': { 
				'name': 'Злыдень',
				'max': 25,
				'min': 10,
				'x': 64,
				'y': 340,
				'width': 38,
				'height': 64,
				'fightX': 520,
				'fightY': 250,
				'FW': 175,
				'FH': 292,
				'status': 1,
				'type': 'enemy-on-map'
	}
}

enemies['town'] = {
	'enemy-1': { 
				'name': 'Злыдень',
				'max': 25,
				'min': 10,
				'x': 448,
				'y': 510,
				'width': 38,
				'height': 64,
				'fightX': 520,
				'fightY': 250,
				'FW': 175,
				'FH': 292,
				'status': 1,
				'type': 'enemy-on-map'
	},
	'enemy-2': { 
				'name': 'Злыдень',
				'max': 25,
				'min': 10,
				'x': 128,
				'y': 315,
				'width': 38,
				'height': 64,
				'fightX': 520,
				'fightY': 250,
				'FW': 175,
				'FH': 292,
				'status': 1,
				'type': 'enemy-on-map'
	}
}

animate['enemies'] = {
	'map': {
		'sy': 0,
		'currentFrame' : 0,
		'frames' : 1,
		'step' : 0,
		'speed' : 10
		
	},
	'fighting-position': {
		'sy': 64,
		'currentFrame' : 0,
		'frames' : 1,
		'step' : 0,
		'speed' : 10
	}
};


function drawEnemies() {
	for (let i in enemies) {
		if (locInitialization == i) {
			for (let j in enemies[i]) {
				if (enemies[i][j].status === 1) {
					context_main.drawImage(enemiesImg, 
					0, animate['enemies']['map'].sy,
					enemies[i][j].width, enemies[i][j].height,
					enemies[i][j].x, enemies[i][j].y,
					enemies[i][j].width, enemies[i][j].height);
				}
			}
		}
	}
}
