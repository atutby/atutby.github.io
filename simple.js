let animal = {
	eats: true
};
let rabbit = {
	jumps: true
};

rabbit.__proto__ = animal;

// alert( rabbit.eats );
// alert( rabbit.jumps );
// alert(rabbit);
console.log(rabbit);