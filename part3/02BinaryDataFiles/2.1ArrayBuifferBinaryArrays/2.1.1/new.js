function concat(arr) {
  let allLength = arr.reduce((l, el) => l + el.byteLength, 0);
  let newBuffer = new Uint8Array(allLength);
  let length = 0;

  for (let el of arr) {
    newBuffer.set(el, length);
    length += el.length;
  }
  return newBuffer;
}

let chunks = [
  new Uint8Array([0, 1, 2]),
  new Uint8Array([3, 4, 5]),
  new Uint8Array([6, 7, 8]),
];

console.log(Array.from(concat(chunks))); // 0, 1, 2, 3, 4, 5, 6, 7, 8

console.log(concat(chunks).constructor.name); // Uint8Array
