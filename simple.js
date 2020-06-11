let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
	if( n < 0 || Math.trunc(n) != n) {
		throw new Error("Must not be negative, and also an integer.")

	}
	return n <= 1 ? n : fib(n-1) + fib(n - 2);
}

let start = Date.now();

try {
	result = fib(num);

} catch (e) {
	result = 0;
} finally {
	diff = Date.now() - start;
}

alert(result || 'error occurred')

alert( `execution took ${diff}ms` );