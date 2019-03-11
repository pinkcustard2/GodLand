var earthlyNews = [
	"Sometimes I wonder why I am worshipping this god.",
	"I walked through a town and they cheered 'The idiot has returned'. I looked around, but I couldn't see him.",
]

var randomNews = function(){
	var randomNumber = Math.floor(Math.random()*2);
	
	document.write(earthlyNews[randomNumber] + "<br>");

	
}


setInterval(randomNews, 10000);


