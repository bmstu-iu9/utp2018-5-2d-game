'use strict';
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const map = new Image();
map.src="../background/таверна_1.png";

const h = new Image();
h.src="../elf/animated_elf_1.png";

const s = new Image();
s.src=".../elf/animated_elf_2.png";

let elf = {
    rightImage : h,
    leftImage : s,
    width : 137,
    height : 300,
    frames : 12,

}

function drawElf(image, variable){
    context.drawImage(map, 0, 0);
    context.drawImage(image, elf.width * variable, 0, 137, 300, 450, 200, 137, 300);
}

function animation(elf) {
    let i=0;
    let k=5;
    map.onload = function () { 
        let interval = setInterval(function() {
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
        },  1000/4) 
    }
}
animation(elf);
