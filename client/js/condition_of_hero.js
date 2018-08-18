'use strict';

const canvas_condition = document.getElementById("condition");
const context_condition = canvas_condition.getContext("2d");

let intervalID_pop_up_window = {};
let bool_pop_up_window = true;

let mouse = {

    x: 0,
    y: 0,
};

let selected = false;

let inventory = {

    x: 124,
    y: 0,
    width: 519,
    height: 519,
    slots: []
}

function isCursorInItem(item) {

    return (mouse.x > item.x) &&
        (mouse.x < item.x + item.width) &&
        (mouse.y > item.y) &&
        (mouse.y < item.y + item.height)
}

function isCursorInButtonYes() {

    return (mouse.x > button_yes.x) &&
        (mouse.x < button_yes.x + button_yes.width) &&
        (mouse.y > button_yes.y) &&
        (mouse.y < button_yes.y + button_yes.height)
}

function isCursorInButtonNo() {

    return (mouse.x > button_no.x) &&
        (mouse.x < button_no.x + button_no.width) &&
        (mouse.y > button_no.y) &&
        (mouse.y < button_no.y + button_no.height)
}

function isCursorInButtonAttack() {
	return ((mouse.x > button_attack.x) && 
	(mouse.x < button_attack.x + button_attack.width) && 
	(mouse.y > button_attack.y) && 
	(mouse.y < button_attack.y + button_attack.height))
}

function isCursorInButtonDefend() {
	return ((mouse.x > button_defend.x) && 
	(mouse.x < button_defend.x + button_defend.width) && 
	(mouse.y > button_defend.y) && 
	(mouse.y < button_defend.y + button_defend.height))
}

function outside_the_inventory() {

    return selected &&
        ((mouse.x < inventory.x) ||
            (mouse.x > inventory.x + inventory.width) ||
            (mouse.y < inventory.y) ||
            (mouse.y > inventory.y + inventory.height))
}

document.onmousemove = function (e) {

    const rect = canvas_pop_up_window.getBoundingClientRect()
    mouse.y = event.clientY - rect.top;
    mouse.x = event.clientX - rect.left;
}


document.onmousedown = function () {

    if (!selected) {

        const len = inventory.slots.length;
        for (let i = 0; i < len; i++) {
            if (isCursorInItem(inventory.slots[i])) {
                selected = inventory.slots[i];
            }
        }
    }
}

const button_yes = {

    x: 460,
    y: 412,
    width: 67,
    height: 20
}

const button_no = {

    x: 287,
    y: 412,
    width: 67,
    height: 20
}

const button_attack = {

    x: 45.5,
    y: 642,
    width: 70,
    height: 57
}

const button_defend = {

    x: 168.5,
    y: 642,
    width: 70,
    height: 57
}

document.addEventListener("click", clickYesNo, false);

function clickYesNo() {

    if (is_throw_away.bool) {

        if (isCursorInButtonNo()) {

            selected = false;
            is_throw_away.bool = false;
            bool_pop_up_window = true;
            clearInterval(intervalID_pop_up_window);
            context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
        } else if (isCursorInButtonYes()) {
         
            const index = findInArray(inventory.slots, selected);
            inventory.slots.splice(index, index + 1);
            selected = false;
            is_throw_away.bool = false;
            bool_pop_up_window = true;
            clearInterval(intervalID_pop_up_window);
            context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
        }
    }
    
    else if (is_join_the_fight.bool) {
		
		if(isCursorInButtonYes()) {
			
			is_join_the_fight.bool = false;
			drawFighting();
			bool_pop_up_window = true;
			clearInterval(intervalID_pop_up_window);
            context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
		}
		else if (isCursorInButtonNo()) {
			
			is_join_the_fight.bool = false;
			bool_pop_up_window = true;
            clearInterval(intervalID_pop_up_window);
            context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
		}
	}
}

document.addEventListener('click', function() {
	if (battle) {
		
		if (isCursorInButtonAttack()) {
			
			attack();
		}
		
		else if (isCursorInButtonDefend()) {
						
			defend();
		}
	}
}, false);

document.onmouseup = function () {

    if (outside_the_inventory()) {

        intervalID_pop_up_window = setInterval(drawIsThrowAway(), 10);
        bool_pop_up_window = false;
    } else if (bool_pop_up_window) {
        
        selected = false;
    }
}

function findInArray(array, value) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }

    return undefined;
}
