var txt ="О сколько нам открытий чудных <br>"
txt += "Готовят просвященья дух <br>"
txt += "И опыт, сын ошибок трудных,<br>"
txt += "И гений, парадоксов друг,<br>"
txt += "И случай, Бог изобретатель...<br>"
txt += "А.С.Пушкин"

let n = 0;

let ref

function writeText(){
	var time;
	ref.innerHTML = txt.substring(0,n)
	if(n<txt.length){
		n++;
		time = 50
	}
	else{
		n=0
		time = 4000
	}

	setTimeout(writeText,time)
}

window.onload = function(){
	ref = document.getElementById("mytext")
	writeText()
}

