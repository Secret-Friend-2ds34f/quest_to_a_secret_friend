window.onload = function(){
	document.querySelector('#start').style.display = 'block'
}

function wrong_ans() {
	
	document.querySelector('#wrong_ans').style.display = 'block'
}

function hide_wrong_ans() {
	document.querySelector('#wrong_ans').style.display = 'none'
}

function start_bt_click() {
	hide_wrong_ans()
	document.querySelector('#start').style.display = 'none'
	document.querySelector('#quest_1').style.display = 'block'
}

function ans_1_bt_click() {
	hide_wrong_ans()
	if(document.querySelector('#ans_1').value.toLowerCase() === 'сальмонеллёз'){
		document.querySelector('#quest_1').style.display = 'none'
		document.querySelector('#quest_2').style.display = 'block'
	} else {
		wrong_ans();
	}
}

function ans_2_bt_click(){
	hide_wrong_ans()
	if(document.querySelector('#ans_2').value.toLowerCase() === 'отряд'){
		document.querySelector('#quest_2').style.display = 'none'
		document.querySelector('#quest_3').style.display = 'block'
	} else {
		wrong_ans();
	}
}
function ans_3_bt_click(){
	hide_wrong_ans()
	if(document.querySelector('#ans_3').value.toLowerCase() === 'золотая путина'){
		document.querySelector('#quest_3').style.display = 'none'
		document.querySelector('#quest_4').style.display = 'block'
	} else {
		wrong_ans();
	}
}

function ans_4_bt_click() {
	hide_wrong_ans()
	if(document.querySelector('#ans_4').value.toLowerCase() === 'комиссар'){
		document.querySelector('#quest_4').style.display = 'none'
		document.querySelector('#quest_5').style.display = 'block'
	} else {
		wrong_ans();
	}
}

function ans_5_bt_click() {
	hide_wrong_ans()
	if(document.querySelector('#ans_5').value.toLowerCase() === 'дорожная карта'){
		document.querySelector('#quest_5').style.display = 'none'
		document.querySelector('#finish').style.display = 'block'
	} else {
		wrong_ans();
	}
}