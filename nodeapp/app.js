const http = require("http");
http
  .createServer(function (request, response) {
    response.end("Hello NodeJS!");
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

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

const User = require("./user.js");

let eugene = new User("Eugene", 32);
eugene.sayHi();
