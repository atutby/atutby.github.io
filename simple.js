let animal = {
	walk() {
		if(!this.isSleeping) {
			alert(`I walk ${isSleeping}`)
		}
	},
	sleep() {
		this.isSleeping = true;
	}
};

let rabbit = {
	name: 'White Rabbit',
	__proto__: animal
};

rabbit.sleep();

// alert(rabbit.isSleeping);
// alert(animal.isSleeping);
rabbit.walk();