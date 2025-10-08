const nums = [100, 15, -30, -40, 3];
const result = nums.findIndex((number) => {
  return number % 2 != 0;
});
console.log(`The first odd number index is : ${result}`);
