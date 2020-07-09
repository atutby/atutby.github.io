let numbers = [];

numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // для перехвата записи свойства
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // добавилось успешно
numbers.push(2); // добавилось успешно
console.log(numbers);
console.log("Длина: " + numbers.length); // 2

numbers.push('text'); // TypeError (ловушка set на прокси вернула false)
console.log(numbers);
console.log("Интерпретатор никогда не доходит до этой строки (из-за ошибки в строке выше)");