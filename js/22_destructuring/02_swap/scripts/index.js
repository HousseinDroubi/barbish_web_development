let num1 = 20;
let num2 = 10;
// ! ----------------Way 1-----------------------
// let temp = num1; // 20
// num1 = num2; // 10
// num2 = temp; // 20
// ! ----------------Way 2-----------------------
[num1, num2] = [num2, num1];
console.log(num1, num2);
