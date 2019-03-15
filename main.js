var earthlyNews = [
	"Sometimes I wonder why I am worshipping this god. Oh! I hope Almighty didn't hear that!",
	"I walked past a person and he cheered 'The idiot has returned'. I looked around, but I couldn't see him.",
	"Attempted to take the high road. Fell.",
	"Saw some youths repeating my prayers in a high-pitched, childish voice and laughing. See, Almighty - news of your magnificence is spreading, and it's bringing people joy!",
	"A stranger walked up to me and said 'My father told me not to talk to strangers'",
	"I asked a man what his favourite thing was and he replied heavy metal. I dropped some heavy metal next to him. I wonder why he was so cross?",
]
var max = 10;
var min = 120;
var exp = 0;
var level = 1;
var setUp = function() {
	document.write("<h1>God Land</h1>");
	document.write("Your current level is: " + level + "<br>");
	document.write("<h2>-Earthly News-</h2>");
}
var randomNews = function(){
	let randomNumber = Math.floor(Math.random()*6);
	let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
	let secs = d.getSeconds();;
	exp = exp + Math.floor(Math.random()*100);
	document.write("<b>"+hours+":"+mins+":"+secs+"  "+"</b>"+earthlyNews[randomNumber] + "<br>");
	if (exp >= level * 100 + level){
		exp = 0 
		level++
		document.write("You leveled up. Your current level is: " + level + "<br>");
		setTimeout(levelUp,1000)
	}	else{
		document.write("You earnt some exp. Your current exp is: " + exp + "<br>");
	}
}
var levelUp = function(){
	document.write("<h1>God Land</h1>");
	document.write("Your current level is: " + "<div id=lvl>"+ level + "</div>"+"<br>");
	document.write("<h2>-Earthly News-</h2>");
}
setTimeout(setUp, 100);
setInterval(randomNews, Math.floor(Math.random()*180000));
