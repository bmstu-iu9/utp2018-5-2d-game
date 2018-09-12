

let Quest = [
	{
		'count' : 0,
		'type' : "kill",
		'target_count' : 2,
		'text' : "Убей 2х варваров",
		'status' : "No active"
	},
	{
		'count' : 0,
		'type' : "kill",
		'target_count' : 3,
		'text' : "Убей 3х варваров",
		'status' : "No active"
	},
	{
		'count' : 0,
		'type' : "kill",
		'target_count' : 4,
		'text' : "Убей 4х варваров",
		'status' : "No active"
	},
	{
		'count' : 0,
		'type' : "kill",
		'target_count' : 5,
		'text' : "Убей 5х варваров",
		'status' : "No active"
	},
	{
		'count' : 0,
		'type' : "find",
		'target_count' : 1,
		'text' : "Купите у эльфа схему замка для финальной битвы",
		'status' : "active"
	}
];

function cheakKillerQuest() {
	for (let i = 0 ; i < Quest.length ; i++) {
		if (Quest[i].status == "active" && Quest[i].type == "kill")
			Quest[i].count++;
		if (Quest[i].count == Quest[i].target_count)
			Quest[i].status = "Completed";
	}
}

function cheakArtefactQuest() {
	Quest[4].status = "Completed";
}
