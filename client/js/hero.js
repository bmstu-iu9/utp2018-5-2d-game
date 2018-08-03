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
}

let intervalID = setInterval(drawDungeon_1, speed);
