const array = [10, 20, 15, "John", 10, "Samy", [true, false]];

console.log(array.indexOf(10)); // Gets first index of 10 -> 0
console.log(array.lastIndexOf(10)); // Gets last index of 10 -> 4
console.log(array.includes("John")); // returns boolean -> true
console.log(array.includes("Jony")); // false
