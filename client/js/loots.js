'use strict';

let loots = {};

const lootsImg = new Image();
lootsImg.src = "../design/loots/loots.png";

loots['dungeon-1'] = {
	'gold': { 
		x: [274, 338, 402, 576, 576],
		y: [732, 732, 732, 49, 155],
		sx: [0, 0, 0, 0, 0],
		sy: 91,
		sWidth: 64,
		sHeight: 37,
		status: [1, 1, 1, 1, 1],
		width: 64,
		height: 37,
		value: 0
		
	},
	'chests': {
		x: [332],
		y: [640],
		sx: [0],
		sy: 128,
		sWidth: 64,
		sHeight: 64,
		status: [1],
		width: 64,
		height: 64,
		value: 0
		
	},
	'artifacts': {
		x: [582],
		y: [90],
		sx: [0],
		sy: 0,
		sWidth: 44,
		sHeight: 44,
		status: [1],
		type: ["artifact"],
		width: 44,
		height: 44,
		skill: ["skillLuck"],
		points: [30]
	},
	'armors': {
		x: [396, 640],
		y: [640, 256],
		sx: [0, 64],
		sy: 256,
		sWidth: 44,
		sHeight: 44,
		status: [1, 1],
		type: ["armor_on_chest", "weapon"],
		width: 44,
		height: 44,
		points: [9, 7]
		},
	'health-drinks': {
		x: [596],
		y: [656],
		sx: [64],
		sy: 228,
		sWidth: 32,
		sHeight: 32,
		status: [1],
		width: 32,
		height: 32
	}
}

loots['dungeon-2'] = {
	'gold': { 
		x: [128, 128, 128, 192, 256],
		y: [0, 64, 128, 0, 0],
		sx: [0, 0, 0, 0, 0],
		sy: 64,
		sWidth: 64,
		sHeight: 64,
		status: [1, 1, 1, 1, 1],
		width: 64,
		height: 64,
		value: 0
		
	},
	'armors': {
		x: [196],
		y: [64],
		sx: [128],
		sy: 256,
		sWidth: 44,
		sHeight: 44,
		status: [1],
		type: ["armor_on_head"],
		width: 44,
		height: 44,
		points: [5]
	},
	'health-drinks': {
		x: [656],
		y: [640],
		sx: [64],
		sy: 228,
		sWidth: 32,
		sHeight: 32,
		status: [1, 1],
		width: 32,
		height: 32
	}
}

loots['dungeon-3'] = {
	'gold': { 
		x: [0, 64, 128, 0, 64, 128],
		y: [285, 285, 285, 336, 336, 336],
		sx: [0, 0, 0, 0, 0, 0],
		sy: 91,
		sWidth: 64,
		sHeight: 37,
		status: [1, 1, 1, 1, 1, 1],
		width: 64,
		height: 37,
		value: 0
		
	},
	'chests': {
		x: [552, 625, 625],
		y: [0, 0, 64],
		sx: [0, 0, 0],
		sy: 128,
		sWidth: 64,
		sHeight: 64,
		status: [1, 1, 1],
		width: 64,
		height: 64,
		value: 0
		
	},
	'artifacts': {
		x: [576],
		y: [64],
		sx: [64],
		sy: 0,
		sWidth: 44,
		sHeight: 44,
		status: [1],
		type: ["artifact"],
		width: 44,
		height: 44,
		skill: ["maxHealth"],
		points: [15]
		
	},
	'armors': {
		x: [0],
		y: [640],
		sx: [192],
		sy: 256,
		sWidth: 44,
		sHeight: 44,
		status: [1],
		type: ["armor_on_legs"],
		width: 44,
		height: 44,
		points: [4]
	},
	'health-drinks': {
		x: [144, 656],
		y: [528, 144],
		sx: [64, 64],
		sy: 228,
		sWidth: 32,
		sHeight: 32,
		status: [1, 1],
		width: 32,
		height: 32
	}
}

loots['dungeon-4'] = {
	'gold': { 
		x: [0, 0, 0, 64, 128, 192, 0, 64, 128, 192, 346, 400, 464, 528, 592, 656, 720],
		y: [325, 365, 600, 600, 600, 600, 650, 650, 650, 650, 258, 258, 258, 258, 258, 258, 258],
		sx: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		sy: 91,
		sWidth: 64,
		sHeight: 37,
		status: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		width: 64,
		height: 37,
		value: 0
		
	},
	'health-drinks': {
		x: [530, 192],
		y: [536, 16],
		sx: [64, 64],
		sy: 228,
		sWidth: 32,
		sHeight: 32,
		status: [1, 1],
		width: 32,
		height: 32
	}
}

loots['town'] = {
	'gold': { 
		x: [704, 704, 640, 192, 192, 0, 0, 640, 704, 640, 704],
		y: [669, 625, 625, 669, 735, 283, 347, 155, 155, 209, 209],
		sx: [0, 0, 0, 0, 0],
		sy: 91,
		sWidth: 64,
		sHeight: 37,
		status: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		width: 64,
		height: 37,
		value: 0
		
	},
	'artifacts': {
		x: [465],
		y: [449],
		sx: [128],
		sy: 0,
		sWidth: 44,
		sHeight: 44,
		status: [1],
		type: ["artifact"],
		width: 44,
		height: 44,
		skill: ["defense+atack"],
		points: [25]
		
	},
	'health-drinks': {
		x: [339],
		y: [88],
		sx: [64],
		sy: 228,
		sWidth: 32,
		sHeight: 32,
		status: [1],
		width: 32,
		height: 32
	}
}

function draw_loots() {
	for (let i in loots) {
		if (locInitialization == i) {
			for (let j in loots[i]) {
				const len = loots[i][j].x.length;
				for (let k = 0; k < len; k++) { 
					if (loots[i][j].status[k] === 1) {
						context_main.drawImage(lootsImg, 
						loots[i][j].sx[k], loots[i][j].sy, 
						loots[i][j].sWidth, loots[i][j].sHeight, 
						loots[i][j].x[k], loots[i][j].y[k],
						loots[i][j].width, loots[i][j].height);
					}
				}
			}
		}
	}
}
