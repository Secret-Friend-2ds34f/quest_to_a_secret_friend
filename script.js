window.onload = function(){
	document.querySelector('#quest_1').style.display = 'block'
}

function wrong_ans() {
	/*document.body.style.background = 'linear-gradient(to right, #fc4a1a, #f7b733);'
	console.log('red')
	for(let i = 0; i < 6; i++) {
		console.log(i)
		setTimeout(function() {
			if(i % 2 == 0){
				document.body.style.background = 'linear-gradient(to right, #fc4a1a, #f7b733);' //red
				console.log('red')
			} else {
				document.body.style.background = 'linear-gradient(to right, #00f260, #0575e6);'
				console.log('def')
			}
		}, 500)
	}*/
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
	if(document.querySelector('#ans_1').value === 'сальмонеллёз'){
		document.querySelector('#quest_1').style.display = 'none'
		document.querySelector('#quest_2').style.display = 'block'
	} else {
		wrong_ans();
	}
}

function ans_2_bt_click(){
	hide_wrong_ans()
	if(document.querySelector('#ans_2').value === 'отряд'){
		document.querySelector('#quest_2').style.display = 'none'
		document.querySelector('#quest_3').style.display = 'block'
	} else {
		wrong_ans();
	}
}
function ans_3_bt_click(){
	hide_wrong_ans()
	if(document.querySelector('#ans_3').value === 'золотая путина'){
		document.querySelector('#quest_3').style.display = 'none'
		document.querySelector('#quest_4').style.display = 'block'
	} else {
		wrong_ans();
	}
}

function ans_4_bt_click() {
	hide_wrong_ans()
	if(document.querySelector('#ans_4').value === 'комиссар'){
		document.querySelector('#quest_4').style.display = 'none'
		document.querySelector('#quest_5').style.display = 'block'
	} else {
		wrong_ans();
	}
}

function ans_5_bt_click() {
	hide_wrong_ans()
	if(document.querySelector('#ans_5').value === 'дорожная карта'){
		document.querySelector('#quest_5').style.display = 'none'
		document.querySelector('#finish').style.display = 'block'
	} else {
		wrong_ans();
	}
}