'use strict';

let enemies = {};
 

enemies['dungeon-1'] = {
	'enemy-1': { 
				'el': null,
				'src': "../design/enemies/enemies-type-1-64px.png" ,
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
				'el': null,
				'src': "../design/enemies/enemies-type-1-64px.png" ,
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
				'el': null,
				'src': "../design/enemies/enemies-type-1-64px.png" ,
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
				'el': null,
				'src': "../design/enemies/enemies-type-1-64px.png" ,
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
				'el': null,
				'src': "../design/enemies/enemies-type-1-64px.png" ,
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
				'el': null,
				'src': "../design/enemies/enemies-type-1-64px.png" ,
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
				'el': null,
				'src': "../design/enemies/enemies-type-1-64px.png" ,
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
				'el': null,
				'src': "../design/enemies/enemies-type-1-64px.png" ,
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
				'el': null,
				'src': "../design/enemies/enemies-type-1-64px.png" ,
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
				'el': null,
				'src': "../design/enemies/enemies-type-1-64px.png" ,
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

for (let i in enemies) {
	for (let j in enemies[i]) {                        
							let img = new Image();                        
							img.src = enemies[i][j].src;
							enemies[i][j].el = img;
	}
 }
 
 function drawEnemies() {
	for (let i in enemies) {
		if (locInitialization == i) {
			for (let j in enemies[i]) {
				if (enemies[i][j].status === 1) {
					context_main.drawImage(enemies[i][j].el, enemies[i][j].x, enemies[i][j].y);
				}
			}
		}
	}
}
