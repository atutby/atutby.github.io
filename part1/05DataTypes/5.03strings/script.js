"use strict";
let main = document.getElementsByTagName("main");

document.writeln("My\n".length); // 3

let str = `Hello`;
document.writeln(str[1000]); // undefined
document.writeln(str.charAt(1000));
document.writeln(str.charAt(str.length - 1));
document.writeln(str[str.length - 1]);
for (let char of str) {
  document.write(char + "_");
}
document.writeln();
document.writeln();
document.writeln("Interface".toUpperCase());
document.writeln("Interface".toLowerCase());

document.writeln("<h2>Поиск подстроки</h2>");
document.writeln("str.indexOf(substr, pos)");
str = "Widget with id";
document.writeln(str.indexOf("Widget")); // 0
document.writeln(str.indexOf("widget")); // -1
document.writeln(str.indexOf("id")); // 1
document.writeln(str.indexOf("id", 2)); // 12

document.writeln(
  "Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле."
);
str = "Ослик Иа-Иа посмотрел на виадук";
document.writeln(str);
let target = "Иа";
document.writeln("target " + target);
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  document.write(`Найдено тут: ${foundPos}, `);
  pos = foundPos + 1; // продолжаем со следующей позиции
}
document.writeln("Тот же алгоритм можно записать и короче:");
pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  document.write('Found at ' + pos + ', ');
}
document.writeln();

str = "Widget with id";
if (str.indexOf("Widget") != -1) {
	document.writeln("We found it"); // works now!
}
if (~str.indexOf("Widget")) {
	document.writeln("Совпадение есть "); // работает
}

document.writeln(str.includes('id')); // true
document.writeln('Midget'.includes('id', 3)); // false
document.writeln("Widget".startsWith("Wid", 0)); // true
document.writeln("Widget".endsWith("get")); // true

document.writeln('<a target=_blank href="https://learn.javascript.ru/string#poluchenie-podstroki">Получение подстроки</a>');
document.writeln('str.substing(start [, end]), str.substr(start [, length]), str.slice(start [, end])');
str = "stringify";
document.writeln(str.slice(0, 5)); // 'strin'
document.writeln(str.slice(0, 1)); // 's'
document.writeln(str.slice(2)); // 'ringify'
document.writeln(str.slice(-4, -1)); // gif
document.writeln(str.slice(2, 6)); // ring
document.writeln(str.slice(6, 2)); // "" (пустая строка)
document.writeln(str.substring(2, 6)); // 'ring'
document.writeln(str.substring(6, 2)); // 'ring'
document.writeln(str.substr(2, 4)); // 'ring'
document.writeln(str.substr(-3)); // 'ify'