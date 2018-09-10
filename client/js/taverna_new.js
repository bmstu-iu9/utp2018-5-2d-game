'use strict';
/*const canvas_main = document.getElementById("main");
const context_main = canvas_main.getContext("2d");

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');*/

const map_tavern = new Image();
map_tavern.src="..../design/map/таверна_1.png";

const h = new Image();
h.src="../design/elf/animated_elf_1.png";

const s = new Image();
s.src=".../design/elf/animated_elf_2.png";

let elf = {
    rightImage : h,
    leftImage : s,
    width : 137,
    height : 300,
    frames : 12,

}

function drawElf(image, variable){
    context_main.drawImage(map_tavern, 0, 0);
    context_main.drawImage(image, elf.width * variable, 0, 137, 300, 450, 200, 137, 300);
}

function animation(elf) {
    let i=0;
    let k=5;
    map.onload = function () { //как только спрайт загружается
        let interval = setInterval(function() { //запускаем интервал
            if (i < elf.frames-1) { //для смены позиции изображения
                i++; // если дошли до конца спрайта
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



//меняем позиционирование спрайта
        },  1000/4) //24 кадра в секунду
    }
}
//animation(elf);



const town_to_tavern = {



    x: 384, //694

    y: 392, //358

    width: 48,

    height: 5

};

function transition_tavern(){
    if ((hero.x >=town_to_tavern.x && hero.x<=(town_to_tavern.x+town_to_tavern.width)) &&
    (hero.y >= town_to_tavern.y && hero.y <= (town_to_tavern.y + town_to_tavern.width))) return true;
}
