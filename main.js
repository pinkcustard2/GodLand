var earthlyNews = [
	"Sometimes I wonder why I am worshipping this god. Oh! I hope Almighty didn't hear that!",
	"I walked past a person and he cheered 'The idiot has returned'. I looked around, but I couldn't see him.",
	"Attempted to take the high road. Fell.",
	"Saw some youths repeating my prayers in a high-pitched, childish voice and laughing. See, Almighty - news of your magnificence is spreading, and it's bringing people joy!",
	"A stranger walked up to me and said 'My father told me not to talk to strangers'",
	"I asked a man what his favourite thing was and he replied heavy metal. I dropped some heavy metal next to him. I wonder why he was so cross?",
]
var exp = 0
if (localStorage.getItem("exp") === null || localStorage.getItem("exp") === "null") {
	exp = 0;
	console.log("hi");
}
else{
	exp = parseInt(localStorage.getItem("exp"));
	console.log("working2");
}
var updateExp = function(){
	localStorage.setItem("exp", exp);
}
var level = 1;
if (localStorage.getItem("level") === null || localStorage.getItem("exp") === "null") {
	level = 1;
	console.log("hi");
}
else{
	level = parseInt(localStorage.getItem("level"));
	console.log("working1");
}
var updateLevel = function(){
	localStorage.setItem("level", level);
}
var setUp = function() {
	document.open();
	document.write("<h1>God Land</h1>");
	document.write("Your current level is: " + level + "<br>");
	document.write("<h2>-Your Hero's Diary-</h2>");
	document.write("This game uses local storage to save your progress. <br>");
}
var randomNews = function(){
	let randomNumber = Math.floor(Math.random()*6);
	let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
	let secs = d.getSeconds();
	exp = exp + Math.floor(Math.random()*100);
	document.write("<b>"+hours+":"+mins+":"+secs+"  "+"</b>"+earthlyNews[randomNumber] + "<br>");
	if (exp >= level * 100 + level){
		exp = 0 
		level++
		setTimeout(setUp,100)
		updateExp();
		updateLevel();
	}	else{
		document.write("You earnt some exp. Your current exp is: " + exp + "<br>");
		updateExp();
	}
}
setTimeout(setUp, 100);
setInterval(randomNews, Math.floor(Math.random()*180000));
