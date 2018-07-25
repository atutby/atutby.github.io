document.onmousemove=function(evt){

	var d=document.getElementsByTagName("div")[0]
	var txt = "<b>Координаты курсора мыши.</b><br>"
	txt+="Горизонтальная координата: <b>"+evt.clientX+"</b><br>"
	txt+="Вертикальная координата: &nbsp&nbsp&nbsp<b>"+evt.clientY+"</b>"
	d.innerHTML=txt;
	
	// show2(evt);

}