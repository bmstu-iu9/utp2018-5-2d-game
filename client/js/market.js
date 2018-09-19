'use strict';

const map_market = new Image();
map_market.src="../design/map/локация_рынок.png";

function market(){
    context_main.clearRect(0, 0, canvas_main.width, canvas_main.height);
    context_main.drawImage(map_market, 0, 0);
}
let market_barrier_1 ={
    x1: 0,
    y1: 355,
    x2: 140,
    y2: 750
};

let market_barrier_2 ={
    x1: 0,
    y1: 0,
    x2: 135,
    y2: 300
};

let market_barrier_3 ={
    x1: 135,
    y1: 0,
    x2: 210,
    y2: 330
};
let market_barrier_4 ={
    x1: 210,
    y1: 0,
    x2: 330,
    y2: 350
};
let market_barrier_5 ={
    x1: 300,
    y1: 0,
    x2: 450,
    y2: 415
};
let market_barrier_6 ={
    x1: 450,
    y1: 0,
    x2: 580,
    y2: 390
};

let market_barrier_7 ={
    x1: 580,
    y1: 0,
    x2: 768,
    y2: 380
};

