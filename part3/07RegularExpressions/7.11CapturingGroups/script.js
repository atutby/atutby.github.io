"use strict";
let log = console.log.bind(console);

function rndNum(from, to) {
	return Math.floor(Math.random() * (to - from + 1) + from);
}

(function () {
	//your code here...
	let str = "Gogogo John!"

	// ?: исключает go из запоминания
	let regexp = /(?:go)+ (\w+)/i

	let result = str.match(regexp);

	log(result[0])
	log(result[1]);
	log(result.length)

})();