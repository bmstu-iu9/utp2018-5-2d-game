'use strict';
let npc = {};
npc['dungeon-1'] = {
	'Skeleton': { 
				"nomber": 1,
				'src': "../design/npc/npc1.png" ,
				'name': 'Skeleton',
				'x': 585,
				'y': 490,
				'width': 23,
				'height': 77	
	}
}
npc['dungeon-2'] = {
	'Skeleton': { 
				"nomber": 6,
				'src': "../design/npc/npc1.png" ,
				'name': 'Skeleton',
				'x': 585,
				'y': 300,
				'width': 23,
				'height': 77	
	}
}
npc['dungeon-3'] = {
	'Skeleton': { 
				"nomber": 3,
				'src': "../design/npc/npc1.png" ,
				'name': 'Skeleton',
				'x': 480,
				'y': 550,
				'width': 23,
				'height': 77	
	}
}
npc['dungeon-4'] = {
	'Skeleton': { 
				"nomber": 4,
				'src': "../design/npc/npc1.png" ,
				'name': 'Skeleton',
				'x': 580,
				'y': 450,
				'width': 23,
				'height': 77	
	}
}
 window.drawNpc = function() {
	for (let i in npc) {
		if (locInitialization == i) {
			for (let j in npc[i]) {
					let npcImage = new Image;
					npcImage.src = npc[i][j].src;
					context_main.drawImage(npcImage, npc[i][j].x, npc[i][j].y);
				
			}
		}
	}
}
