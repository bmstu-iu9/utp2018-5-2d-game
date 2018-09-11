'use strict'
let dialog_branch={}
dialog_branch['Solair']={
	'1st':{
		'src1':"../design/dialog//quest.png",
		'src2':"../design/dialog//quest2.png",
		'src3':"../design/dialog//quest3.png",
	}
}
const table_data= {
	first_answer_x:439,
	first_answer_y:612,
	first_answer_width:66,
	first_answer_height:17,
	second_answer_x:267,
	second_answer_y:612,
	second_answer_width:66,
	second_answer_height:17,
	third_answer_x:333,
	third_answer_y:612,
	third_answer_width:97,
	third_answer_height:17,
	fourth_answer_x:347,
	fourth_answer_y:612,
	fourth_answer_width:64,
	fourth_answer_height:17,
}
function drawDialog1(){
	context_pop_up_window.clearRect(0, 0, 768, 768);
	if(Quest[0].status=="No active"){
		for(let i in dialog_branch){
			for(let j in dialog_branch[i]){
				let dialog_1_image = new Image();
				dialog_1_image.src =dialog_branch[i][j].src1;
				context_main.drawImage(dialog_1_image, 185, 100);
				context_pop_up_window.fillStyle = "#4d4546"; 
				context_pop_up_window.font = "bold 18px Batang";
				context_pop_up_window.fillText("Приветствую, ваше величество!", 220, 270, 380);
				context_pop_up_window.fillText("Селение, наводнили варвары и мы не", 220, 290, 380);
				context_pop_up_window.fillText("можем им противостоять. Помогите!", 220, 310, 380);
				context_pop_up_window.fillText("Защитите своих подданных и наша", 220, 330, 380);
				context_pop_up_window.fillText("благодарность не будет знать границ.", 220, 350, 380);
			}
		}	
	}
	if(Quest[0].status=="active"){
		for(let i in dialog_branch){
			for(let j in dialog_branch[i]){
				let dialog_2_image = new Image();
				dialog_2_image.src =dialog_branch[i][j].src2;
				context_main.drawImage(dialog_2_image, 185, 100);
				context_pop_up_window.fillText("Ваше величество, уничтожили ли вы", 220, 270, 380);
				context_pop_up_window.fillText("варваров? Могут ли жители вернуться?", 220, 290, 380);	
			}
		}	
	}
	if(Quest[0].status=="Completed"){
		for(let i in dialog_branch){
			for(let j in dialog_branch[i]){
				let dialog_3_image = new Image();
				dialog_3_image.src =dialog_branch[i][j].src3;
				context_main.drawImage(dialog_3_image, 185, 100);
				context_pop_up_window.fillText("Благодарю ваше величество! Теперь", 220, 270, 380);
				context_pop_up_window.fillText("мы в безопасности. Когда варвары", 220, 290, 380);
				context_pop_up_window.fillText("были убиты, лагерь, в котором они", 220, 310, 380);
				context_pop_up_window.fillText("хранили награбленное опустел. Жители", 220, 330, 380);
				context_pop_up_window.fillText("решили отдать это вам, в благодарность", 220, 350, 380);
				context_pop_up_window.fillText("за освобождение", 220, 370, 380);
			}
		}
	}	
}	
