const http = require("http");
http
  .createServer(function (request, response) {
    response.end("Hello NodeJS! (28)");
  })
  .listen(3000, "127.0.0.1", function () {
    console.log("Сервер начал прослушивание запросов на порту 3000");
  });

// в консоли текущей папки набери:
// node app.js
// Для запуска в браузере набери:
// http://127.0.0.1:3000

// https://metanit.com/web/nodejs/

//======== Урок --Модули--
const os = require("os");
// получим имя текущего пользователя
let userName = os.userInfo().username;

console.log(userName);

const greeting = require("./greeting");

global.name = "SashaGlobalName"

global.console.log(`Дата запроса: ${date}`);
console.log(greeting.getMessage());

const User = require("./user.js");

let eugene = new User("Eugene\n", 32);
eugene.sayHi();

/////////////////////////////////////////////////////
let greeting1 = require("./greeting.js");
console.log(`Hello ${greeting1.name}`);

let greeting2 = require("./greeting.js");
greeting2.name = "Bob";

console.log(`Hello ${greeting2.name}`);
console.log(`Hello ${greeting1.name}`);

//=======
const welcome = require("./welcome");

welcome.getMorningMessage();
welcome.getEveningMessage();
