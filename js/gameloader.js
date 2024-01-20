let indexo = 0;
window.setInterval(loadgame,2000);
loadgame();
function loadgame(){
	var o = 1;
	if(indexo >= o){indexo = 0;}
	let Profimg = document.getElementById("gamesd");
	let gameback = document.getElementById("gamelog");  // heute nacht letzte nacht fr fr :)
	Profimg.style.backgroundImage = "url(Gamebanner/"+indexo+".png)"
	gameback.style.backgroundImage = "url(Gamepic/"+indexo+".png)"
	if(indexo+1>= o){indexo = 0;}else{indexo++;}
}