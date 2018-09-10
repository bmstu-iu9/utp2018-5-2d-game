'use strict';

const map_tavern = new Image();
map_tavern.src="../design/map/таверна_3.png";

const h = new Image();
h.src="../design/elf/animated_elf_1.png";

const s = new Image();
s.src="../design/elf/animated_elf_2.png";

let elf = {
    rightImage : h,
    leftImage : s,
    width : 137,
    height : 300,
    frames : 12,

};

function drawElf(image, variable){
    context_main.drawImage(map_tavern, 0, 0);
    context_main.drawImage(image, elf.width * variable, 0, 137, 300, 450, 400, 68.5 , 200);
    context_main.drawImage(image, elf.width * variable, 0, 137, 300, 250, 200, 68.5 , 200);
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

        },  125)
}




const town_to_tavern = {
    x: 570,
    y: 350,
    width: 48,
    height: 5
};

function transition_tavern(){
    if ((hero.x >=town_to_tavern.x && hero.x<=(town_to_tavern.x+town_to_tavern.width)) &&
    (hero.y >= town_to_tavern.y && hero.y <= (town_to_tavern.y + town_to_tavern.width))) {
        return true;
    }
}

const tavern_to_town = {
    x: 10,
    y: 650,
    width: 48,
    height: 5
};

function transition_town(){
    if ((hero.x >=tavern_to_town.x && hero.x<=(tavern_to_town.x+tavern_to_town.width)) &&
        (hero.y >= tavern_to_town.y && hero.y <= (tavern_to_town.y + tavern_to_town.width))) {
        return true;
    }
}
