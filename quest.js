

let Quest = [
	{
		'target_location' : 'Dangeon_1',
		'count' : 0,
		'type' : "kill",
		'target_count' : 2,
		'text' : "Убей 2х тролей и получи приз",
		'status' : "active"
	},
	{
		'target_location' : 'Dangeon_2',
		'count' : 0,
		'type' : "kill",
		'target_count' : 3,
		'text' : "Убей 3х тролей и получи приз",
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