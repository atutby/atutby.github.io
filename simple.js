let json = '{ "age": 30}';

try {
	user = JSON.parse(json);

} catch(err) {
	console.log("JSON Error: " + err);

}