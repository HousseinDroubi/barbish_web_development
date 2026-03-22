const nums = [100, 15, -30, -40, 3];
const result = nums.find((number) => {
  return number % 2 != 0;
});
console.log(`The first odd number is : ${result}`);
