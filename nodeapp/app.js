const fs = require('fs')

fs.readFile("hello.txt", "utf8", 
function(error, data){
	console.log(`Асинхронное чтение файла`);
	if(error) throw error;
	console.log(data);	
})

console.log(`Синхронное чтение файла`);
let fileContent = fs.readFileSync("hello.txt", "utf8")
console.log(fileContent);

// fs.writeFile("hello2.txt", "Hello World!",
// function(error){

// 	if(error) throw error;

// 	console.log(`Запись файла завершина. Содержимое файла:`);
// 	let data = fs.readFileSync("hello2.txt", 'utf8')
// 	console.log(data);
	
// })

fs.unlink('hello2.txt', (err) => {
	if(err) console.log(err);
	else console.log(`Hello2.txt was deleted`);
});
