function welcomeFunc() {
	window.alert("Welcome to my Official Website\nby MisticG");
};

function discordinfo() {
	window.alert("You can text me on discord using the following name:\nMisticG#4211");
};

function startTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	h = checkTime(h)
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').innerHTML =  h + ":" + m;
	setTimeout(startTime, 1000);
}
  
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

const countDown = setInterval(function() {
	const now = new Date().getTime();
	const distance = countDownDate - now;
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	//document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s";
	dd = checkTime(days);
	hh = checkTime(hours);
	mm = checkTime(minutes);
	ss = checkTime(seconds);
	document.getElementById("D").innerHTML = dd;
	document.getElementById("H").innerHTML = hh;
	document.getElementById("M").innerHTML = mm;
	document.getElementById("S").innerHTML = ss;
	if (distance < 0) {
		clearInterval(countDown);
		document.getElementById("countdown").innerHTML = "BUON ANNO!";
	}
}, 500);

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
};

setInterval(function(){
	var element = document.getElementById("contextnum");
	if(element.innerHTML === "numero") {
		element.innerHTML = "+39 3281492299";
	}
	if(element.innerHTML === "number") {
		element.innerHTML = "+39 3281492299";
	}
	if(element.innerHTML === "email") {
		element.innerHTML = "angelocroitoru@gmail.com";
	}
	if(element.innerHTML === "discord") {
		element.innerHTML = "Check the link up there!";
	}
	if(element.innerHTML === "easteregg") {
		element.innerHTML = "Try writing another thing...";
	}
	if(element.innerHTML === "whatsapp") {
		element.innerHTML = "https://wa.me/393281492299";
	}
	if(element.innerHTML === "birthday") {
		element.innerHTML = "29/07/2005 | 06:00";
	}
}, 500);