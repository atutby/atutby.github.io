var pict,cnv,ctx;
var files=["fox.jpg","raccoon.jpg","wolf.jpg"]
var text=["Это лиса","Это енот","Это волк"]
var path="images/";
var sld=0;

window.onload=function(){
	pict = new Image();
	cnv = document.getElementById("mycanvas");
	cnv.title = "Щёлкните мышью для просмотра\nследующего изображения"
	ctx=cnv.getContext("2d")
	ctx.font="30px Arial";
	set();

	pict.onload=function(){
		ctx.drawImage(pict,15,15)
	}

	cnv.onclick=function(){
		sld=(sld+1)%(files.length)
		set()
	}
}

function set(){
	ctx.fillStyle = "yellow";
	ctx.fillRect(0,0,cnv.width,cnv.height);
	ctx.fillStyle="blue"
	pict.src=path+files[sld];
	ctx.fillText(text[sld],40,230)
}
