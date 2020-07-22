var access = parseInt("11000", 2);

console.log( access );

var access2 = access.toString(2);

console.log( access2 );

console.log( ~3 );
console.log(`~n == -(n+1) Example ~3 is ${~3}`);

// let a = +prompt('Enter your number ~', 3);
// console.log(~a);
// console.log(`~n == -(n+1) Example ~${a} is ${~a}`);

console.log( 3 << 1 );
console.log( 100 >> 2 );

function isInteger(num) {
  return (num ^ 0) === num;
}
console.log( isInteger(1) );

let bigint = 1n;
let number = 2;
let number2 = bigint + BigInt(number);
console.log(number2);
console.log(typeof number2);
console.log(Number(bigint) + number);