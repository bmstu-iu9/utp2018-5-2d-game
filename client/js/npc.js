'use strict';
let npc = {};
npc['dungeon-1'] = {
	'Skeleton': { 
				
				'src': "../design/npc/npc1.png" ,
				'name': 'Skeleton',
				'x': 585,
				'y': 490,
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
