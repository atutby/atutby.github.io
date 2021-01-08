"use strict";

/*
		let arr = new Array('asdf', 2, 3);
	document.writeln(arr);

	arr = [1, 2, 3];
	document.writeln(arr);

	arr[4] = 'abc';
	document.writeln(arr[3]?.name);
	document.writeln('arr.length ' + arr.length);

	let fruits = ["Яблоко", "Апельсин", "Груша"];
	let a1 = fruits.push("Ананас");
	document.writeln(a1)
	document.writeln(fruits);
	let a2 = fruits.pop();
	document.writeln(a2)
	document.writeln(fruits);

	a1 = fruits.shift();
	document.writeln(a1)
	document.writeln(fruits);
	a2 = fruits.unshift('Яблоко','Apple','Carrot','Pear');
	document.writeln(a2)
	document.writeln(fruits);

	for (let i = 0; i < fruits.length; i++) {
		document.write(fruits[i] + ' ');
	}
	document.writeln();

	for (let fruit of fruits) {
		document.write(fruit + ' _ ');
	}
	document.writeln();

	arr = [1, 2, 3, 4, 5];
	document.writeln(arr);
	arr.length = 2;
	document.writeln(arr);
	arr.length = 5;
	document.writeln(arr);

	let matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];
	document.writeln(matrix[1][1]);

	document.writeln(matrix + '2');
*/

// document.writeln();
// document.writeln('<h3>Операции с массивами</h3>');
// let styles = ['Джаз', 'Блюз'];
// styles.push('«Рок-н-ролл»');
// document.writeln(styles);
// styles[Math.floor(styles.length / 2)] = '«Классика»';
// document.writeln(styles);
// document.writeln(styles.shift());
// styles.unshift('«Рэп»','«Регги»');
// document.writeln(styles);
// document.writeln(styles.length);

/*
document.writeln('<h3>Вызов в контексте массива</h3>');
let arr = ['a', 'b'];
arr.push(function() {
	document.writeln(this);
})
arr[2]();
*/

// /*
document.writeln('asdf');
document.writeln('<h3>Сумма введённых чисел</h3>');
let num, sum = 0, arr = [];
function sumInput(){
	while (true) {
		num = prompt('Your love number?', 0);
		if (+num || +num == 0) {
			arr.push(num);
			sum += +num;
		} else {
			break;
		}		
	}
}
// */
// document.writeln(sumInput())

// let cat;
document.writeln('catasdf');


