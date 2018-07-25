// функция получает объект и выводит его пары {свойство:значение}
		function show2(obj){
			// document.write("{| ");
			var s,k = 1;
			for(s in obj){
				dw("<b>" + k + ": "+ s + "</b>: " + obj[s]);
				k++;
			}
			// document.write("}<br>");
		}

		function dw(t,text){
			document.write(t);
			if (text) { document.write(" " + text); }
			document.write("<br>");
		}

		var getRandom = function(min,max) {
			return Math.random() * (max - min) + min;
		};
