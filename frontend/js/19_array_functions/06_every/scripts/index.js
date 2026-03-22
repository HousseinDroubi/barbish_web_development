const nums = [100, 0, -30];
const result = nums.every((number) => {
  return number > 50;
});
console.log(`Does nums array have a number greater than 50 ? ${result}`);
