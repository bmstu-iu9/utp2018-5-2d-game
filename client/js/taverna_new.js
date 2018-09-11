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
    if ((hero.x <= elf.x2 && hero.x >=elf.x1) && (hero.y <= elf.y2 && hero.x >=elf.y1)){
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





