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

        intervalID = setInterval(drawDungeon_2, speed);
        return;
    }

    locInitialization = "dungeon-1";
    context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
    context_main.drawImage(dungeon_image_1, 0, 0);
    drawEnemies();
    drawHero();
    draw_loots_from_dungeon_1();
    interaction(loots[locInitialization], enemies[locInitialization]);
    drawConditionOfHero();
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

        intervalID = setInterval(drawDungeon_3, speed);
        return;
    } else if (dungeon_1_from_dungeon_2_transition()) {

        clearInterval(intervalID);

        hero.x = 650;
        hero.y = 7;

        intervalID = setInterval(drawDungeon_1, speed);
        return;
    }
    
	locInitialization = "dungeon-2";
    context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
    context_main.drawImage(dungeon_image_2, 0, 0);
    drawEnemies();
    drawHero();
    interaction(loots[locInitialization], enemies[locInitialization]);
    drawConditionOfHero();
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

        intervalID = setInterval(drawDungeon_4, speed);
        return;
    } else if (dungeon_2_from_dungeon_3_transition()) {

        clearInterval(intervalID);

        hero.x = 7;
        hero.y = 625;

        intervalID = setInterval(drawDungeon_2, speed);
        return;
    }

    locInitialization = "dungeon-3";
    context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
    context_main.drawImage(dungeon_image_3, 0, 0);
    drawEnemies();
    drawHero();
    interaction(loots[locInitialization], enemies[locInitialization]);
    drawConditionOfHero();
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

        intervalID = setInterval(drawTown, speed);
        return;
    } else if (dungeon_3_from_dungeon_4_transition()) {

        clearInterval(intervalID);

        hero.x = 7;
        hero.y = 490;

        intervalID = setInterval(drawDungeon_3, speed);
        return;
    }

    locInitialization = "dungeon-4";
    context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
    context_main.drawImage(dungeon_image_4, 0, 0);
    drawEnemies();
    drawHero();
    interaction(loots[locInitialization], enemies[locInitialization]);
    drawConditionOfHero();
    collision(barriers_of_the_dungeon_4);
}

//town
const town_image = new Image();
town_image.src = "../design/map/map_back.png";

const decoration = new Image();
decoration.src = "../design/map/decoration.png";

function drawTown() {

    if (dungeon_4_from_town_transition()) {

        clearInterval(intervalID);

        hero.x = 60;
        hero.y = 7;

        intervalID = setInterval(drawDungeon_4, speed);
        return;
    }

    locInitialization = "town";
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

    interaction(loots[locInitialization], enemies[locInitialization]);
    drawConditionOfHero();
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
        drawHealth();
    } else {

        context_condition.clearRect(0, 0, canvas_condition.width, canvas_condition.height);
    }
}

function drawInventory() {

    context_condition.clearRect(0, 0, canvas_condition.width, canvas_condition.height);
    context_condition.drawImage(inventory_image, inventory.x, inventory.y);

    const len = inventory.slots.length;
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
                context_condition.drawImage(selected.image, selected.x, selected.y);

            } else {

                inventory.slots[index].x = 130 + j * 64;
                inventory.slots[index].y = 325 + i * 64;

                context_condition.drawImage(inventory.slots[index].image, inventory.slots[index].x, inventory.slots[index].y);
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

//health
function drawHealth() {

    context_condition.beginPath();
    context_condition.lineWidth = 30;
    context_condition.moveTo(hero.health_x1, hero.health_y);
    context_condition.lineTo(hero.health_x2, hero.health_y);
    context_condition.strokeStyle = "red";
    context_condition.lineCap = "round";
    context_condition.stroke();
    context_condition.closePath();
}


//pop_up_windows
const canvas_pop_up_window = document.getElementById("pop_up_window");
const context_pop_up_window = canvas_pop_up_window.getContext("2d");


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
