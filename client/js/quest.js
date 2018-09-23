
let questSortType = "time";
let time = 2;
let Quest = [
	{
		'time' : 0,
		'count' : 0,
		'type' : "kill",
		'target_count' : 2,
		'text' : "Убей 2х варваров",
		'status' : "No active"
	},
	{
		'time' : 0,
		'count' : 0,
		'type' : "kill",
		'target_count' : 3,
		'text' : "Убей 3х варваров",
		'status' : "No active"
	},
	{
		'time' : 0,
		'count' : 0,
		'type' : "kill",
		'target_count' : 4,
		'text' : "Убей 4х варваров",
		'status' : "No active"
	},
	{
		'time' : 0,
		'count' : 0,
		'type' : "kill",
		'target_count' : 5,
		'text' : "Убей 5х варваров",
		'status' : "No active"
	},
	{
		'time' : 1,
		'count' : 0,
		'type' : "find",
		'target_count' : 1,
		'text' : "Купите у эльфа схему замка для финальной битвы",
		'status' : "active"
	},
	{
		'time' : 0,
		'count' : 0,
		'type' : "kill_group",
		'target_count' : 3,
		'text' : "Убей варваров, что засели в нижнем лагере",
		'status' : "No active"
	}
];

function cheakKillerQuest() {
	for (let i = 0 ; i < Quest.length ; i++) {
		if (Quest[i].status == "active" && Quest[i].type == "kill")
			Quest[i].count++;
		if (Quest[i].status == "active" && Quest[i].type == "kill_group")
			if ((hero.x > 0 && hero.x < 580 && hero.y > 680 && hero.y < 780) || (hero.x > 200 && hero.x < 380 && hero.y > 370 && hero.y < 690))
				Quest[i].count++;	
		if (Quest[i].count == Quest[i].target_count)
			Quest[i].status = "Completed";
	}
}

function cheakArtefactQuest() {
	let i = 0;
	for (q = 0 ; q < Quest.length ; q++)
		if (Quest[q].type == "find") {
			Quest[q].status = "Completed";
			break;
		}
	
}

function questSort(a,b) {
	if (questSortType == "type")
		if (Quest[a.questNomber].type.localeCompare(Quest[b.questNomber].type))
			return 1;
		else
			return -1;
	if (questSortType == "text")
		if (!(Quest[a.questNomber].text.localeCompare(Quest[b.questNomber].text)))
			return 1;
		else
			return -1;
	if (questSortType == "time")
		if (!(Quest[a.questNomber].time < Quest[b.questNomber].time))
			return 1;
		else
			return -1;

}
