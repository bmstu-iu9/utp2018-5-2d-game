'use strict';

let locInitialization = "";

//dungeon_1
const dungeon_image_1 = new Image();
dungeon_image_1.src = "../design/map/dungeon-1.png";

function drawDungeon_1() {

    if (dungeon_2_from_dungeon_1_transition()) {

        clearInterval(intervalID);

        hero.x = 650;
        hero.y = 690; 
	if (hero.health <= hero.maxHealth) {
		hero.health += 20;
	}

        intervalID = setInterval(drawDungeon_2, speed);
        return;
    }

    locInitialization = "dungeon-1";
    hero.health_x2 = 23 + hero.health * 3;
    context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
    context_main.drawImage(dungeon_image_1, 0, 0);
    drawEnemies();
    drawHero();
    draw_loots();
    drawStatistic();
    interaction(loots[locInitialization], enemies[locInitialization],npc[locInitialization]);
    drawConditionOfHero();
    drawQuest();
    drawNpc();
    collision(barriers_of_the_dungeon_1);
}


//dungeon_2
const dungeon_image_2 = new Image();
dungeon_image_2.src = "../design/map/dungeon-2.png";

function drawDungeon_2() {

    if (dungeon_3_from_dungeon_2_transition()) {

        clearInterval(intervalID);

        hero.x = 710;
        hero.y = 625; 
	if (hero.health <= hero.maxHealth) {
		hero.health += 20;
	}

        intervalID = setInterval(drawDungeon_3, speed);
        return;
    } else if (dungeon_1_from_dungeon_2_transition()) {

        clearInterval(intervalID);

        hero.x = 650;
        hero.y = 7;
	if (hero.health > 20) {
		hero.health -= 20;
	}

        intervalID = setInterval(drawDungeon_1, speed);
        return;
    }
    
    locInitialization = "dungeon-2";
    hero.health_x2 = 23 + hero.health * 3;
    context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
    context_main.drawImage(dungeon_image_2, 0, 0);
    drawEnemies();
    drawHero();
    draw_loots();
    drawStatistic();
    interaction(loots[locInitialization], enemies[locInitialization]);
    drawConditionOfHero();
    drawQuest();
    collision(barriers_of_the_dungeon_2);
}

//dungeon_3
const dungeon_image_3 = new Image();
dungeon_image_3.src = "../design/map/dungeon-3.png";

function drawDungeon_3() {

    if (dungeon_4_from_dungeon_3_transition()) {

        clearInterval(intervalID);

        hero.x = 710;
        hero.y = 490; 
	if (hero.health <= hero.maxHealth) {
		hero.health += 20;
	}

        intervalID = setInterval(drawDungeon_4, speed);
        return;
    } else if (dungeon_2_from_dungeon_3_transition()) {

        clearInterval(intervalID);

        hero.x = 7;
        hero.y = 625;
	if (hero.health > 20) {
		hero.health -= 20;
	}

        intervalID = setInterval(drawDungeon_2, speed);
        return;
    }

    locInitialization = "dungeon-3";
    hero.health_x2 = 23 + hero.health * 3;
    context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
    context_main.drawImage(dungeon_image_3, 0, 0);
    drawEnemies();
    drawHero();
    draw_loots();
    drawStatistic();
    interaction(loots[locInitialization], enemies[locInitialization]);
    drawConditionOfHero();
    drawQuest();
    collision(barriers_of_the_dungeon_3);
}

//dungeon_4
const dungeon_image_4 = new Image();
dungeon_image_4.src = "../design/map/dungeon-4.png";

function drawDungeon_4() {

    if (town_transition()) {

        clearInterval(intervalID);

        hero.x = 665;
        hero.y = 635; 
	if (hero.health <= hero.maxHealth) {
		hero.health += 20;
	}

        intervalID = setInterval(drawTown, speed);
        return;
    } else if (dungeon_3_from_dungeon_4_transition()) {

        clearInterval(intervalID);

        hero.x = 7;
        hero.y = 490;
	if (hero.health > 20) {
		hero.health -= 20;
	}

        intervalID = setInterval(drawDungeon_3, speed);
        return;
    }

    locInitialization = "dungeon-4";
    hero.health_x2 = 23 + hero.health * 3;
    context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
    context_main.drawImage(dungeon_image_4, 0, 0);
    drawEnemies();
    drawHero();
    draw_loots();
    drawStatistic();
    interaction(loots[locInitialization], enemies[locInitialization]);
    drawConditionOfHero();
    drawQuest();
    collision(barriers_of_the_dungeon_4);
}


//town
const town_image = new Image();
town_image.src = "../design/map/map_back.png";

const decoration = new Image();
decoration.src = "../design/map/decoration.png";

const town_to_tavern = {
    x: 570,
    y: 350,
    width: 48,
    height: 48
};

const tavern_to_town = {
    x: 400,
    y: 256,
    width: 48,
    height: 5
};

//tavern
function drawTavern() {
	
    if (metElf()){
        if (hero.gold>=150000){
            drawBuyArtefact();
        }
        else {
            drawCantBuyArtefact();
        }
    }
	
    collision_tavern(taverna_barrier_1);
    collision_tavern(taverna_barrier_2);
    collision_tavern(taverna_barrier_3);
    collision_tavern(taverna_barrier_4);
    collision_tavern(taverna_barrier_5);
    collision_tavern(taverna_barrier_6);
    collision_tavern(elf_obstacle);

    if (transitions(tavern_to_town)){
        clearInterval(tavern_interval);
        clearInterval(intervalID);

        hero.x = 400;
        hero.y = 256;

        intervalID = setInterval(drawTown, speed);

        return;
}

    locInitialization = "tavern";

    hero.health_x2 = 33 + hero.health * 3;

    drawHero();
    drawConditionOfHero();
    drawQuest();
    drawStatistic();   
}
//market

function transitions(object){
    if ((hero.x >=object.x && hero.x<=(object.x+object.width)) &&
        (hero.y >= object.y && hero.y <= (object.y + object.width))) {
        return true;
    }
}

const town_to_market = {
    x: 128,
    y: 170,
    width: 48,
    height: 48
};

const market_to_town = {
    x: 350,
    y: 700,
    width: 100,
    height: 48
};


function drawMarket() {

    collision_tavern(market_barrier_1);
    collision_tavern(market_barrier_2);
    collision_tavern(market_barrier_3);
    collision_tavern(market_barrier_4);
    collision_tavern(market_barrier_5);
    collision_tavern(market_barrier_6);
    collision_tavern(market_barrier_7);

    if (transitions(market_to_town)){
        clearInterval(intervalID);

        hero.x = 200;
        hero.y = 200;

        intervalID = setInterval(drawTown, speed);

        return;
    }

    locInitialization = 'market';

    hero.health_x2 = 33 + hero.health * 3;
    market();

    drawHero();
    drawConditionOfHero();
    drawQuest();
    draw_loots();
    interaction(loots[locInitialization], enemies[locInitialization]);
    drawStatistic();
}


function drawTown() {
    if (transitions(town_to_tavern)){

        clearInterval(intervalID);
	    
        hero.x = 100;
        hero.y = 680;
	    
        context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
        animation();
        intervalID = setInterval(drawTavern, speed);
	    
        return;

    }
    
    if (transitions(town_to_market)){

        clearInterval(intervalID);

        hero.x = 468;
        hero.y = 650;
        
        intervalID = setInterval(drawMarket, speed);

        return;

    }

    if (dungeon_4_from_town_transition()) {

        clearInterval(intervalID);

        hero.x = 60;
        hero.y = 7;	
	if (hero.health > 20) {
		hero.health -= 20;
	}

        intervalID = setInterval(drawDungeon_4, speed);
        return;
    }

    locInitialization = "town";
    hero.health_x2 = 23 + hero.health * 3;
    context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
    context_main.drawImage(town_image, 0, 0);
    drawEnemies();

    const fence_bool = collision_with_fence_in_the_town();
    if (fence_bool === "under") {

        drawHero();
        context_main.drawImage(fence, 192, 595);
    } else {

        context_main.drawImage(fence, 192, 595);
        drawHero();
    }

    draw_loots();
    drawStatistic();
    interaction(loots[locInitialization], enemies[locInitialization]);
    drawConditionOfHero();
    drawQuest();
    context_main.drawImage(decoration, 0, 0);
    collision(barriers_of_the_town);
}

///////////////////////////////////////////

//condition_of_hero
const inventory_image = new Image();
inventory_image.src = "../design/inventory/inventory_test.png";

function drawConditionOfHero() {

    if (hero.condition) {

        drawInventory();
	    
    } else {

        context_condition.clearRect(0, 0, canvas_condition.width, canvas_condition.height);
    }
}

const quest_image = new Image();
quest_image.src = "../design/quest/quest_test.png";

function drawQuest() {

    if (hero.isQuest) {
        console.log(1);
        context_condition.clearRect(0, 0, canvas_condition.width, canvas_condition.height);
        context_condition.drawImage(quest_image, 0, 0);
        let questtable = [];
        
        let j = 0;

        for (let i = 0 ; i < Quest.length ; i++)
            if (Quest[i].status != "No active" && Quest[i].status != "Finished") {
                questtable[j] = {
                    questNomber : i,
                    x : 15,
                    y : 15 + j * 100
                };
                j++;
            }
      
        context_condition.beginPath();
        for (let i = 0 ; i < questtable.length ; i++){
            context_condition.strokeStyle = "black";
            context_condition.lineWidth = 5;
            context_condition.rect(questtable[i].x, questtable[i].y + 45, 800 , 80);
            context_condition.font = "20px Arial";
            context_condition.fillStyle = "black";
            let str;
            if (Quest[questtable[i].questNomber].status == "active")
                str = 'Осталось : ' + (Quest[questtable[i].questNomber].target_count - Quest[questtable[i].questNomber].count).toString();
            else 
                str = 'Выполнен';
            context_condition.fillText(Quest[questtable[i].questNomber].text,questtable[i].x + 10, questtable[i].y + 90); 
            context_condition.fillText(str , 600 , questtable[i].y + 90);
            context_condition.stroke(); 
        }
        context_condition.closePath();
    }
}

function drawInventory() {

    context_condition.clearRect(0, 0, canvas_condition.width, canvas_condition.height);
    context_condition.drawImage(inventory_image, inventory.x, inventory.y);

	let len = inventory.equipment.length;
    for (let i = 0; i < len; i++) {
        if (inventory.equipment[i].activity) {

            if ((inventory.equipment[i].activity === selected) &&
                bool_pop_up_window) {

                selected.x = mouse.x - selected.width / 2;
                selected.y = mouse.y - selected.height / 2;
                context_condition.drawImage(lootsImg,
                    selected.sx, selected.sy,
                    selected.sWidth, selected.sHeight,
                    selected.x, selected.y,
                    selected.width, selected.height);
            } else {

                inventory.equipment[i].activity.x = inventory.equipment[i].x;
                inventory.equipment[i].activity.y = inventory.equipment[i].y;
                context_condition.drawImage(lootsImg,
                    inventory.equipment[i].activity.sx, inventory.equipment[i].activity.sy,
                    inventory.equipment[i].activity.sWidth, inventory.equipment[i].activity.sHeight,
                    inventory.equipment[i].activity.x, inventory.equipment[i].activity.y,
                    inventory.equipment[i].activity.width, inventory.equipment[i].activity.height);
            }
        }
    }
	
    len = inventory.slots.length;
    let bool_size = false;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 8; j++) {

            const index = i * 8 + j;

            if (index === len) {

                bool_size = true;
                break;
            }

            if ((inventory.slots[index] === selected) &&
                bool_pop_up_window) {

                selected.x = mouse.x - selected.width / 2;
                selected.y = mouse.y - selected.height / 2;
                context_condition.drawImage(lootsImg,
                    selected.sx, selected.sy,
                    selected.sWidth, selected.sHeight,
                    selected.x, selected.y,
                    selected.width, selected.height);

            } else {

                inventory.slots[index].x = 137 + j * 64;
                inventory.slots[index].y = 460 + i * 64;
                context_condition.drawImage(lootsImg,
                    inventory.slots[index].sx, inventory.slots[index].sy,
                    inventory.slots[index].sWidth, inventory.slots[index].sHeight,
                    inventory.slots[index].x, inventory.slots[index].y,
                    inventory.slots[index].width, inventory.slots[index].height);
            }
        }

        if (bool_size) {
            break;
        }
    }
}

const is_throw_away_image = new Image();
is_throw_away_image.src = "../design/inventory/is_throw_away.png";

const is_join_the_fight_image = new Image();
is_join_the_fight_image.src = "../design/fight/isJoinTheFight.png";

const you_lose_image = new Image();
you_lose_image.src = "../design/fight/youLoseImg.png";

const is_capitulation_image = new Image();
is_capitulation_image.src = "../design/fight/capitulationImg.png";

const is_capitulation_image_2 = new Image();
is_capitulation_image_2.src = "../design/fight/capitulationImg2.png";

const buyArtefact_img = new Image();
buyArtefact_img.src = "../design/fight/buyArtefact_new.png"; ///!!!

const youBought_img = new Image();
youBought_img.src = "../design/fight/youBought_new.png";

const youDidntBuy_img = new Image();
youDidntBuy_img.src = "../design/fight/youDidnBuy_new.png";

const findArtefact_img = new Image();
findArtefact_img.src = "../design/fight/findArtefact_new.png";

const findArtefactChoose_img = new Image();
findArtefactChoose_img.src = "../design/fight/findArtefactChoose.png";

const cantBuyArtefact_img = new Image();
cantBuyArtefact_img.src = "../design/fight/cantBuyArtefact.png";

const findArtefactChoose= {
    x: 234,
    y: 309,
    width: 313,
    height: 150,
    bool: false,
    image: findArtefactChoose_img
}

const cantBuyArtefact= {
    x: 234,
    y: 309,
    width: 313,
    height: 150,
    bool: false,
    image: cantBuyArtefact_img
}

const findArtefact = {
    x: 234,
    y: 309,
    width: 313,
    height: 150,
    bool: false,
    image: findArtefact_img
}


const buyArtefact = {
    x: 234,
    y: 309,
    width: 313,
    height: 150,
    bool: false,
    image: buyArtefact_img
}

const youBought = {
    x: 234,
    y: 309,
    width: 313,
    height: 150,
    bool: false,
    image: youBought_img
}

const youDidntBuy = {
    x: 234,
    y: 309,
    width: 313,
    height: 150,
    bool: false,
    image: youDidntBuy_img
}

const is_throw_away = {

    x: 127.5,
    y: 309,
    width: 313,
    height: 150,
    bool: false,
    image: is_throw_away_image
}

const is_join_the_fight = {

    x: 234,
    y: 309,
    width: 313,
    height: 150,
    bool: false,
    image: is_join_the_fight_image
}

const is_capitulation = {
    x: 234,
    y: 309,
    width: 313,
    height: 150,
    bool: false,
    image: is_capitulation_image,
    image_2: is_capitulation_image_2
}

const you_lose = {
    x: 234,
    y: 309,
    width: 313,
    height: 150,
    bool: false,
    image: you_lose_image
}


//health
const canvas_statistic = document.getElementById("statistic");
const context_statistic = canvas_statistic.getContext("2d");

function drawStatistic() {
	context_statistic.clearRect(0, 0, canvas_statistic.width, canvas_statistic.height);
	
	if (!you_lose.bool) {
		context_statistic.fillStyle = "#ffffff";
		context_statistic.font = '15px Arial';
		context_statistic.fillText("Здоровье:", hero.health_x1, hero.health_y - 10);
		
		if (hero.health > 0) {

		context_statistic.beginPath();
		context_statistic.lineWidth = 10;
		context_statistic.moveTo(hero.health_x1, hero.health_y);
		context_statistic.lineTo(hero.health_x2, hero.health_y);
		context_statistic.strokeStyle = "red";
		context_statistic.lineCap = "round";
		context_statistic.stroke();
		context_statistic.closePath();
		}
		if (battle) {
		    drawEnXP();
		}
		
		context_statistic.fillText("Золото: " + hero.gold, hero.health_x1, hero.health_y + 20);
	}
}

//pop_up_windows
const canvas_pop_up_window = document.getElementById("pop_up_window");
const context_pop_up_window = canvas_pop_up_window.getContext("2d");

function drawFindArtefactChoose() {

    context_pop_up_window.clearRect(0, 0, context_pop_up_window.width, context_pop_up_window.height);
    context_pop_up_window.drawImage(findArtefactChoose.image, findArtefactChoose.x, findArtefactChoose.y);
    findArtefactChoose.bool = true;
}

function drawCantBuyArtefact() {

    context_pop_up_window.clearRect(0, 0, context_pop_up_window.width, context_pop_up_window.height);
    context_pop_up_window.drawImage(cantBuyArtefact.image, cantBuyArtefact.x, cantBuyArtefact.y);
    cantBuyArtefact.bool = true;
}

function drawFindArtefact() {

    context_pop_up_window.clearRect(0, 0, context_pop_up_window.width, context_pop_up_window.height);
    context_pop_up_window.drawImage(findArtefact.image, findArtefact.x, findArtefact.y);
    findArtefact.bool = true;
}

function drawYouBought() {

    context_pop_up_window.clearRect(0, 0, context_pop_up_window.width, context_pop_up_window.height);
    context_pop_up_window.drawImage(youBought.image, youBought.x, youBought.y);
    youBought.bool = true;
}

function drawYouDidntBuy() {

    context_pop_up_window.clearRect(0, 0, context_pop_up_window.width, context_pop_up_window.height);
    context_pop_up_window.drawImage(youDidntBuy.image, youDidntBuy.x, youDidntBuy.y);
    youDidntBuy.bool = true;
}

function drawBuyArtefact() {

    context_pop_up_window.clearRect(0, 0, context_pop_up_window.width, context_pop_up_window.height);
    context_pop_up_window.drawImage(buyArtefact.image, buyArtefact.x, buyArtefact.y);
    buyArtefact.bool = true;
}

function drawIsThrowAway() {
    
    context_pop_up_window.clearRect(0, 0, context_pop_up_window.width, context_pop_up_window.height);
    context_pop_up_window.drawImage(is_throw_away.image, is_throw_away.x + inventory.x, is_throw_away.y);
    is_throw_away.bool = true;
}

function drawIsJoinTheFight() {
    
    context_pop_up_window.clearRect(0, 0, context_pop_up_window.width, context_pop_up_window.height);
    context_pop_up_window.drawImage(is_join_the_fight.image, is_join_the_fight.x, is_join_the_fight.y);
    is_join_the_fight.bool = true;
}

function drawIsCapitulation() {
	context_pop_up_window.clearRect(0, 0, context_pop_up_window.width, context_pop_up_window.height);
	if (hero.gold - currentEnemy.bribe >= 0) {
		context_pop_up_window.drawImage(is_capitulation.image, is_capitulation.x, is_capitulation.y);
	}
	else {
		context_pop_up_window.drawImage(is_capitulation.image_2, is_capitulation.x, is_capitulation.y);
	}
	context_pop_up_window.fillStyle = "#4d4546";
	context_pop_up_window.font = "bold 18px Batang";
	context_pop_up_window.fillText(currentEnemy.name, is_capitulation.x + 19, is_capitulation.y + 35, 65);
	context_pop_up_window.fillText(currentEnemy.bribe, is_capitulation.x + 85, is_capitulation.y + 57, 60);
       is_capitulation.bool = true;
}

function drawYouLose() {
	context_pop_up_window.clearRect(0, 0, context_pop_up_window.width, context_pop_up_window.height);
        context_pop_up_window.drawImage(you_lose.image, you_lose.x, you_lose.y);
        you_lose.bool = true;
}
