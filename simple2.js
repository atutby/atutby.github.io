let promise = new Promise(function(resolve, reject) {
	setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve запустит первую функцию, переданную в .then
  promise.then(
	result => alert(result), // выведет "done!" через одну секунду
	error => alert(error) // не будет запущена
  );
  

  let promise2 = new Promise(function(resolve, reject) {
	setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // reject запустит вторую функцию, переданную в .then
  promise2.then(
	result => alert(result), // не будет запущена
	error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
  );

