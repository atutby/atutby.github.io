let range = {
  from: 1,
  to: 3,

  // for await..of calls this method once in the very beginning
  [Symbol.asyncIterator]() {
    // ...it returns the iterator object:
    // onward, for await..of works only with that object,
    // asking it for next values using next()
    return {
      current: this.from,
      last: this.to,

      // next() is called on each iteration by the for await..of loop
      async next() {
        // it should return the value as an object {done:.., value:...}
        // (automatically wrapped into a promise by async)

        // can use await inside, do async suff:
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }

      }
    };
  }

};

function go() {
  alert('I am here');
}


const go2 = (async () => {

  for await (let value of range) {
    alert(value); // 1,2,3,4,5
  }
})