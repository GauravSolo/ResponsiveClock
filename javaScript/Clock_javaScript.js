console.log('This clock is developed by Gaurav Sharma');
const hour = document.getElementsByClassName('needle')[0];
const minute = document.getElementsByClassName('needle')[1];
const second = document.getElementsByClassName('needle')[2];

setInterval(clock,1000);

function clock(){
	var hr = new Date().getHours();
	var min = new Date().getMinutes();
	var sec  = new Date().getSeconds();
	hour.style.setProperty('--deg',(hr%12)*30+min/2);
	minute.style.setProperty('--deg',min*6+sec/10);
	second.style.setProperty('--deg',sec*6);
}