function setfade(p1){
	console.log("bye");
	document.getElementById("Team").style.opacity = p1;
}
const Users = ["Havfdeco$https://img.rec.net/c4c3ef50705d4594930d3e38857d6182.jpg$https://img.rec.net/7242ft9d5czywszsjwxnx6s08.jpg?cropSquare=true&width=192&height=192",
"Toxic$https://img.rec.net/5abkmu75fgr6ikdxk9m58adzm.jpg$https://img.rec.net/2wtr2z7m2o47tf1czkyf5cwog.jpg?cropSquare=true&width=192&height=192",
"Turtle$https://img.rec.net/0n30xe9tyqwbshpa9avgvodic.jpg$https://img.rec.net/7zbhtfpql8ipjz8sb9iglm2w9.jpg?cropSquare=true&width=192&height=192"]; //Aufbau Name$Linkzumbanner$LinkzumProfilbild
let index = 0;
var interval = window.setInterval(loadprofile,2000);
loadprofile();
function loadprofile(){
	if(index>=Users.length){index = 0;}
	const size = Users.length;
    var cur = Users[index];
    var L = cur.split("$");
    var Banner = L[1];
    var Name = L[0];
    var profilepi = L[2];
    document.getElementById('Team').style.backgroundImage="url("+Banner+")";
    document.getElementById("user").innerHTML = Name;
    document.getElementById('profilepic').style.backgroundImage="url("+profilepi+")";
	if(index+1 >= size){index = 0;}else{index++;}
}