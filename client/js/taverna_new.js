'use strict';

const map_tavern = new Image();
map_tavern.src="../design/map/таверна_3.png";

const h = new Image();
h.src="../design/elf/animated_elf_1.png";

const s = new Image();
s.src="../design/elf/animated_elf_2.png";

let elf = {
    artefact: true,
    x1:450,
    x2: 507.05,
    y1:400,
    y2:550,
    rightImage : h,
    leftImage : s,
    width : 137,
    height : 300,
    frames : 12,

};

function metElf(){
    if ((hero.x <= elf.x2 && hero.x >=elf.x1) && (hero.y <= elf.y2 && hero.y >=elf.y1)){ 
        return true;
    }
    return false;
}

function drawElf(image, variable){
    context_main.drawImage(map_tavern, 0, 0);
    context_main.drawImage(image, elf.width * variable, 0, 137, 300, 450, 400, 57.05, 150);
    context_main.drawImage(image, elf.width * variable, 0, 137, 300, 250, 200, 57.05, 150);
}

let tavern_interval ;
function animation() {
    let i=0;
    let k=5;
        tavern_interval = setInterval(function() {
            if (i < elf.frames-1) {
                i++;
                if (i < elf.frames/2) {
                    drawElf(elf.rightImage, i);
                }
                else {
                    drawElf(elf.leftImage, k);
                    k--;
                }
            }
             else  {
                i =0;
                drawElf(elf.rightImage, i);
                k=5;
            }

        },  70)
}
let taverna_barrier_1 ={
    x1: 475,
    y1: 550,
    x2: 600,
    y2: 650
};

let taverna_barrier_2 ={
    x1: 140,
    y1: 310,
    x2: 260,
    y2: 410
};

let taverna_barrier_3 ={
    x1: 0,
    y1: 0,
    x2: 384,
    y2: 180
};

let taverna_barrier_4 ={
    x1: 560,
    y1: 0,
    x2: 786,
    y2: 384
};

let taverna_barrier_5 ={
    x1: 460,
    y1: 0,
    x2: 560,
    y2: 284
};

let taverna_barrier_6 ={
    x1: 384,
    y1: 0,
    x2: 460,
    y2: 240
};

let elf_obstacle={
    x1: 230,
    y1: 180,
    x2: 310,
    y2: 300
};

function collision_tavern(obstacle) {
    if (hero.y == obstacle.y1 && (hero.x >= obstacle.x1 && hero.x<= obstacle.x2)){
        hero.y-=10;
    }
    if (hero.y == obstacle.y2 && (hero.x >= obstacle.x1 && hero.x<= obstacle.x2)){
        hero.y+=10;
    }
    if (hero.x==obstacle.x1 && (hero.y>=obstacle.y1 && hero.y <=obstacle.y2)){
        hero.x-=10;
    }
    if (hero.x==obstacle.x2 && (hero.y>=obstacle.y1 && hero.y <=obstacle.y2)){
        hero.x+=10;
    }
}
