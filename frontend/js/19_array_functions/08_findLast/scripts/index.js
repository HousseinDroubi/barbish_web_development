const nums = [100, 15, -30, -40, 3];
const result = nums.findLast((number) => {
  return number % 2 != 0;
});
console.log(`The last odd number is : ${result}`);
