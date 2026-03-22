const array = [10, 20, 15, "John", "Samy", [true, false]];

console.log(array); // [10, 20, 15, "John", "Samy", [true, false]]
array.push(120); // push adds to end
console.log(array); // [10, 20, 15, "John", "Samy", [true, false],120]
array.pop(); // push removes to end
array.pop(); // push removes to end
console.log(array); // [10, 20, 15, "John", "Samy"]
array.unshift(115); // unshift adds to the beginning
console.log(array); // [115,10, 20, 15, "John", "Samy"]
