const nums = [10, 20, 30];
const total = nums.reduce(function (previous, current, index, arr) {
  previous += current;
  return previous;
}, 0);
console.log(`total is ${total}`);
