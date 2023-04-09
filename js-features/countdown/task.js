'use strict'
let time = 59;
let element = document.getElementById('timer');
let interval = setInterval(countDown, 1000);

function countDown(){ 
    if (time === 0) {
		clearInterval(interval);
		alert('Вы победили в конкурсе!');
	}

	element.textContent = time;
	time --;
}