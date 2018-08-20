'use strict';

//dungeon_1
const barrier_walls_of_the_dungeon_1 = {

    x: 0,
    y: 0,
    width: 575,
    height: 575
};

const town_of_the_dungeon_1 = {

    x: 0,
    y: 575,
    width: 210,
    height: 193
};

const barriers_of_the_dungeon_1 = [

    barrier_walls_of_the_dungeon_1,
    town_of_the_dungeon_1
];










//dungeon_2
const barrier_walls_of_the_dungeon_2 = {

    x: 0,
    y: 0,
    width: 127,
    height: 485
};

const barriers_of_the_dungeon_2 = [

    barrier_walls_of_the_dungeon_2
];










//dungeon_3
const barrier_walls_of_the_dungeon_3_1 = {

    x: 0,
    y: 0,
    width: 135,
    height: 230
};

const barrier_walls_of_the_dungeon_3_2 = {

    x: 0,
    y: 700,
    width: 325,
    height: 68
};

const barrier_walls_of_the_dungeon_3_3 = {

    x: 700,
    y: 0,
    width: 68,
    height: 485
};

const barriers_of_the_dungeon_3 = [

    barrier_walls_of_the_dungeon_3_1,
    barrier_walls_of_the_dungeon_3_2,
    barrier_walls_of_the_dungeon_3_3
];









//dungeon_4
const barrier_walls_of_the_dungeon_4_1 = {

    x: 0,
    y: 130,
    width: 60,
    height: 158
};

const barrier_walls_of_the_dungeon_4_2 = {

    x: 135,
    y: 130,
    width: 170,
    height: 158
};

const barrier_walls_of_the_dungeon_4_3 = {

    x: 325,
    y: 0,
    width: 443,
    height: 220
};

const barrier_walls_of_the_dungeon_4_4 = {

    x: 0,
    y: 700,
    width: 768,
    height: 5
};

const barriers_of_the_dungeon_4 = [

    barrier_walls_of_the_dungeon_4_1,
    barrier_walls_of_the_dungeon_4_2,
    barrier_walls_of_the_dungeon_4_3,
    barrier_walls_of_the_dungeon_4_4
];




//town
const barrier_start = {

    x: 630,
    y: 690,
    width: 5,
    height: 70
};

const barrier_right_forest = {

    x: 510,
    y: 470,
    width: 258,
    height: 76
};

const barrier_down_forest_1 = {

    x: 375,
    y: 655,
    width: 180,
    height: 133
};

const barrier_down_forest_2 = {

    x: 400,
    y: 500,
    width: 25,
    height: 150
};

const barrier_farm = {

    x: 0,
    y: 510,
    width: 192,
    height: 258
};

const barrier_small_house = {

    x: 195,
    y: 510,
    width: 127,
    height: 42
};

const barrier_armories_1 = {

    x: 0,
    y: 425,
    width: 132,
    height: 15
};

const barrier_armories_2 = {

    x: 0,
    y: 440,
    width: 64,
    height: 125
};

const barrier_walls_1 = {

    x: 100,
    y: 100,
    width: 80,
    height: 50
};

const barrier_walls_2 = {

    x: 100,
    y: 0,
    width: 205,
    height: 105
};

const barrier_walls_3 = {

    x: 400,
    y: 0,
    width: 368,
    height: 105
};

const barrier_market_1 = {

    x: 0,
    y: 0,
    width: 132,
    height: 191
};

const barrier_market_2 = {

    x: 0,
    y: 191,
    width: 62,
    height: 67
};

const barrier_tavern_0 = {

    x: 600,
    y: 225,
    width: 188,
    height: 96
};

const barrier_tavern_1 = {

    x: 640,
    y: 320,
    width: 132,
    height: 70
};


const barrier_tavern_2 = {

    x: 445,
    y: 225,
    width: 188,
    height: 5
};

const barrier_tavern_3 = {

    x: 445,
    y: 305,
    width: 60,
    height: 5
};

const barrier_tavern_4 = {

    x: 505,
    y: 305,
    width: 5,
    height: 55
};

const barriers_of_the_town = [

    barrier_start,
    barrier_right_forest,
    barrier_down_forest_1,
    barrier_down_forest_2,
    barrier_farm,
    barrier_small_house,
    barrier_armories_1,
    barrier_armories_2,
    barrier_walls_1,
    barrier_walls_2,
    barrier_walls_3,
    barrier_market_1,
    barrier_market_2,
    barrier_tavern_0,
    barrier_tavern_1,
    barrier_tavern_2,
    barrier_tavern_3,
    barrier_tavern_4
];


function collision(barriers) {

    let distX = 0;
    let distY = 0;
    const len = barriers.length;

    for (let i = 0; i < len; i++) {

        distX = Math.abs(hero.x + hero.radiusW -
            barriers[i].x - barriers[i].width / 2);
        distY = Math.abs(hero.y + hero.radiusH -
            barriers[i].y - barriers[i].height / 2);

        if ((distX <= (barriers[i].width / 2) + hero.radiusW) &&
            (distY <= (barriers[i].height / 2) + hero.radiusH)) {

            if (hero.y + 2 * hero.radiusH <
                (barriers[i].y + 5)) {

                hero.y -= hero.dy;
            } else if (hero.x >
                (barriers[i].x + barriers[i].width - 5)) {

                hero.x += hero.dx;
            } else if (hero.x + 2 * hero.radiusW < barriers[i].x + 5) {

                hero.x -= hero.dx;
            } else if (hero.y <
                barriers[i].y + barriers[i].height) {

                hero.y += hero.dy;
            }
        }
    }
}











const barrier_fence = {

    x1: 192,
    y1: 635,
    width1: 75,
    height1: 5,

    x2: 192,
    y2: 603,
    width2: 75,
    height2: 5
};

const fence = new Image();
fence.src = "../design/map/fence.png";

function collision_with_fence_in_the_town() {

    let distX = Math.abs(hero.x + hero.radiusW -
        barrier_fence.x1 - barrier_fence.width1 / 2);
    let distY = Math.abs(hero.y + hero.radiusH -
        barrier_fence.y1 - barrier_fence.height1 / 2);

    if ((distX <= (barrier_fence.width1 / 2) + hero.radiusW) &&
        (distY <= (barrier_fence.height1 / 2) + hero.radiusH)) {

        if (hero.y + 2 * hero.radiusH <
            (barrier_fence.y1 + 5)) {

            hero.y -= hero.dy;
        } else if (hero.y + hero.radiusH <
            barrier_fence.y1 + barrier_fence.height1) {

            hero.y += hero.dy;
        }
    }

    if (hero.y + hero.radiusH > barrier_fence.y1) {
        return "above";
    } else {
        return "under";
    }
}


















//transition
const dungeon_2_from_dungeon_1 = {

    x: 648,
    y: 0,
    width: 48,
    height: 5
};

const dungeon_1_from_dungeon_2 = {

    x: 648,
    y: 763,
    width: 48,
    height: 5
};

const dungeon_2_from_dungeon_3 = {

    x: 763,
    y: 648,
    width: 5,
    height: 48
};

const dungeon_3_from_dungeon_2 = {

    x: 0,
    y: 648,
    width: 5,
    height: 48
};

const dungeon_3_from_dungeon_4 = {

    x: 763,
    y: 520,
    width: 5,
    height: 48
};

const dungeon_4_from_dungeon_3 = {

    x: 0,
    y: 520,
    width: 5,
    height: 48
};

const dungeon_4_from_town = {

    x: 690,
    y: 740,
    width: 30,
    height: 5
};

const town = {

    x: 60,
    y: 0,
    width: 48,
    height: 5
};

function transition(trans) {

    const distX = Math.abs(hero.x + hero.radiusW -
        trans.x - trans.width / 2);
    const distY = Math.abs(hero.y + hero.radiusH -
        trans.y - trans.height / 2);

    return ((distX <= (trans.width / 2) + hero.radiusW) &&
        (distY <= (trans.height / 2) + hero.radiusH));
}

function dungeon_2_from_dungeon_1_transition() {
    return transition(dungeon_2_from_dungeon_1);
}

function dungeon_1_from_dungeon_2_transition() {
    return transition(dungeon_1_from_dungeon_2);
}

function dungeon_2_from_dungeon_3_transition() {
    return transition(dungeon_2_from_dungeon_3);
}

function dungeon_3_from_dungeon_2_transition() {
    return transition(dungeon_3_from_dungeon_2);
}

function dungeon_3_from_dungeon_4_transition() {
    return transition(dungeon_3_from_dungeon_4);
}

function dungeon_4_from_dungeon_3_transition() {
    return transition(dungeon_4_from_dungeon_3);
}

function dungeon_4_from_town_transition() {
    return transition(dungeon_4_from_town);
}

function town_transition() {
    return transition(town);
}


function interaction(things, enemies) {

    let distX = 0;
    let distY = 0;

    for (let i in things) {
		const len = things[i].x.length;
		for (let k = 0; k < len; k++) { 
			if (things[i].status[k] === 1) {

				distX = Math.abs(hero.x + hero.radiusW -
					things[i].x[k] - things[i].width / 2);
				distY = Math.abs(hero.y + hero.radiusH -
					things[i].y[k] - things[i].height / 2);

				if ((distX <= (things[i].width / 2) + hero.radiusW) &&
					(distY <= (things[i].height / 2) + hero.radiusH)) {

					if (hero.interaction) {	
						if ((i === 'artifacts') || (i === 'armors')) {				
							inventory.slots.splice(inventory.slots.length, 0, things[i]);
						}
						else if (i === 'gold') {
							things[i].value = Math.floor(Math.random() * (1200 - 500 + 1)) + 500;
							hero.gold += things[i].value; 
							console.log('Собрано: ' + things[i].value + ', всего монет: ' + hero.gold);
						}
						else if (i === 'health-drinks') {
							hero.health = 100;
							console.log('здоровье героя: ' + hero.health);
						}

						things[i].status[k] = 0;
					}
					if (hero.y + 2 * hero.radiusH <
						(things[i].y[k] + 5)) {
						hero.y -= hero.dy;
					} else if (hero.x >
						(things[i].x[k] + things[i].width - 5)) {
						hero.x += hero.dx;
					} else if (hero.x + 2 * hero.radiusW < things[i].x[k] + 5) {
						hero.x -= hero.dx;
					} else if (hero.y <
						things[i].y[k] + things[i].height) {
						hero.y += hero.dy;
					}
				}
			}
		}
	}
	
	for (let i in enemies) {
		if (enemies[i].status === 1) {
			distX = Math.abs(hero.x + hero.radiusW -
				enemies[i].x - enemies[i].width / 2);
			distY = Math.abs(hero.y + hero.radiusH -
				enemies[i].y - enemies[i].height / 2);

			if ((distX <= (enemies[i].width / 2) + hero.radiusW) &&
				(distY <= (enemies[i].height / 2) + hero.radiusH)) {

				curEnemy(enemies[i]);
				drawIsJoinTheFight();

				if (hero.y + 2 * hero.radiusH < (enemies[i].y + 5)) {
					hero.y -= hero.dy;
				} else if (hero.x >
					(enemies[i].x + enemies[i].width - 5)) {
					hero.x += hero.dx;
				} else if (hero.x + 2 * hero.radiusW < enemies[i].x + 5) {
					hero.x -= hero.dx;
				} else if (hero.y >
					enemies[i].y + enemies[i].height - 5) {
					hero.y += hero.dy;
				}
			}
		}
	}	
}
